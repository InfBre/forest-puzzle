import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PuzzleWorkspace.css';

const COLOR_NAMES = {
  '#ef5350': '红菇 (Red)',
  '#2e7d32': '深叶 (Forest)',
  '#4caf50': '嫩叶 (Lime)',
  '#5d4037': '老桩 (Dark Brown)',
  '#8d6e63': '年轮 (Light Brown)',
  '#ffffff': '白露 (Spot)',
  '#f5f5f5': '玉蕈 (White)',
  '#fff176': '金阳 (Yellow)',
  '#cfd8dc': '晨雾 (Grey)',
  '#c62828': '暖炉 (Crimson)',
  '#1b5e20': '苔痕 (Deep Moss)',
};

const BASE_DIMS = {
  '1x1': [1, 1],
  '1x2': [2, 1],
  '1x3': [3, 1],
  '1x4': [4, 1],
  '2x2': [2, 2],
};

function getDims(type, rotation) {
  const [w, h] = BASE_DIMS[type];
  return rotation === 90 || rotation === 270 ? [h, w] : [w, h];
}

// Synthesized snap / remove / victory sounds
function playSound(kind) {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const now = ctx.currentTime;
    if (kind === 'snap') {
      const o = ctx.createOscillator();
      const c = ctx.createOscillator();
      const g = ctx.createGain();
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.setValueAtTime(1000, now);
      f.frequency.exponentialRampToValueAtTime(120, now + 0.08); f.Q.value = 4;
      o.type = 'triangle'; o.frequency.setValueAtTime(180, now);
      o.frequency.exponentialRampToValueAtTime(80, now + 0.08);
      c.type = 'sine'; c.frequency.setValueAtTime(1800, now);
      c.frequency.exponentialRampToValueAtTime(600, now + 0.015);
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(0.35, now + 0.002);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      o.connect(f); c.connect(f); f.connect(g); g.connect(ctx.destination);
      o.start(now); c.start(now); o.stop(now + 0.1); c.stop(now + 0.1);
    } else if (kind === 'remove') {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(120, now);
      o.frequency.linearRampToValueAtTime(50, now + 0.12);
      g.gain.setValueAtTime(0.1, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      o.connect(g); g.connect(ctx.destination);
      o.start(now); o.stop(now + 0.15);
    } else if (kind === 'victory') {
      [261.63, 329.63, 392, 523.25, 659.25, 783.99].forEach((freq, i) => {
        const o = ctx.createOscillator(); const g = ctx.createGain();
        const f = ctx.createBiquadFilter();
        o.type = 'sine'; o.frequency.setValueAtTime(freq, now + i * 0.12);
        f.type = 'lowpass'; f.frequency.value = 1500;
        g.gain.setValueAtTime(0, now + i * 0.12);
        g.gain.linearRampToValueAtTime(0.1, now + i * 0.12 + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 0.7);
        o.connect(f); f.connect(g); g.connect(ctx.destination);
        o.start(now + i * 0.12); o.stop(now + i * 0.12 + 0.8);
      });
    }
  } catch {}
}

function MiniPreview({ type, color, rotation = 0 }) {
  const [w, h] = getDims(type, rotation);
  const studs = w * h;
  return (
    <div
      className="mini-preview"
      style={{
        '--w': w, '--h': h,
        background: color,
        gridTemplateColumns: `repeat(${w}, 1fr)`,
        gridTemplateRows: `repeat(${h}, 1fr)`,
      }}
    >
      {Array.from({ length: studs }).map((_, i) => (
        <span key={i} className="stud" />
      ))}
    </div>
  );
}

export default function PuzzleWorkspace({ puzzle, onExit, onSolve }) {
  const { gridSize, targetGrid, initialBricks } = puzzle;

  const [placed, setPlaced] = useState([]);
  const [tray, setTray] = useState([]);
  const [activeType, setActiveType] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [guide, setGuide] = useState(true);
  const [success, setSuccess] = useState(false);
  const [hover, setHover] = useState(null);

  // Reset on puzzle change
  useEffect(() => {
    const fresh = initialBricks.map((b) => ({ ...b }));
    setTray(fresh);
    setPlaced([]);
    setRotation(0);
    setSuccess(false);
    if (fresh.length) {
      setActiveType(fresh[0].type);
      setActiveColor(fresh[0].color);
    } else {
      setActiveType(null);
      setActiveColor(null);
    }
  }, [puzzle, initialBricks]);

  // Hotkey: R to rotate
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'r' || e.key === 'R') {
        setRotation((r) => (r + 90) % 360);
        playSound('snap');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const canPlace = (x, y, w, h, ignoreId) => {
    if (x < 0 || y < 0 || x + w > gridSize || y + h > gridSize) return false;
    for (const b of placed) {
      if (b.id === ignoreId) continue;
      for (let i = 0; i < b.width; i++) {
        for (let j = 0; j < b.height; j++) {
          const bx = b.x + i, by = b.y + j;
          if (bx >= x && bx < x + w && by >= y && by < y + h) return false;
        }
      }
    }
    return true;
  };

  const checkComplete = (bricks) => {
    const board = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));
    for (const b of bricks) {
      for (let i = 0; i < b.width; i++) {
        for (let j = 0; j < b.height; j++) {
          const x = b.x + i, y = b.y + j;
          if (x < gridSize && y < gridSize) board[y][x] = b.color;
        }
      }
    }
    for (const t of targetGrid) {
      if ((board[t.y]?.[t.x] || '').toLowerCase() !== t.color.toLowerCase()) return false;
    }
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (board[y][x]) {
          const ok = targetGrid.some((t) => t.x === x && t.y === y && t.color.toLowerCase() === board[y][x].toLowerCase());
          if (!ok) return false;
        }
      }
    }
    return true;
  };

  const handleCellClick = (x, y) => {
    if (success || !activeType) return;
    const [w, h] = getDims(activeType, rotation);
    if (!canPlace(x, y, w, h)) return;
    const ti = tray.findIndex((b) => b.type === activeType && b.color === activeColor);
    if (ti === -1 || tray[ti].count <= 0) return;

    const brick = {
      id: `b-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      type: activeType,
      color: activeColor,
      rotation,
      width: w,
      height: h,
      x,
      y,
    };
    const next = [...placed, brick];
    setPlaced(next);
    playSound('snap');

    const nt = [...tray];
    nt[ti] = { ...nt[ti], count: nt[ti].count - 1 };
    setTray(nt);

    if (nt[ti].count === 0) {
      const rem = nt.find((b) => b.count > 0);
      if (rem) { setActiveType(rem.type); setActiveColor(rem.color); }
      else setActiveType(null);
    }

    if (checkComplete(next)) {
      setSuccess(true);
      playSound('victory');
      onSolve?.(puzzle.id);
    }
  };

  const handleRemove = (id, e) => {
    e.stopPropagation();
    if (success) return;
    const b = placed.find((x) => x.id === id);
    if (!b) return;

    setTray((prev) => {
      const nt = [...prev];
      const idx = nt.findIndex((x) => x.type === b.type && x.color === b.color);
      if (idx >= 0) nt[idx] = { ...nt[idx], count: nt[idx].count + 1 };
      else nt.push({ type: b.type, color: b.color, count: 1 });
      return nt;
    });
    setPlaced((prev) => prev.filter((x) => x.id !== id));
    playSound('remove');
    if (!activeType) { setActiveType(b.type); setActiveColor(b.color); }
  };

  const handleReset = () => {
    setPlaced([]);
    setSuccess(false);
    setTray(initialBricks.map((b) => ({ ...b })));
    if (initialBricks.length) {
      setActiveType(initialBricks[0].type);
      setActiveColor(initialBricks[0].color);
    }
    playSound('remove');
  };

  const ghostCells = useMemo(() => {
    if (!hover || !activeType || success) return [];
    const [w, h] = getDims(activeType, rotation);
    const cells = [];
    for (let i = 0; i < w; i++) for (let j = 0; j < h; j++) cells.push({ x: hover.x + i, y: hover.y + j });
    return cells;
  }, [hover, activeType, rotation, success]);

  const ghostValid = useMemo(() => {
    if (!hover || !activeType) return false;
    const [w, h] = getDims(activeType, rotation);
    return canPlace(hover.x, hover.y, w, h);
  }, [hover, activeType, rotation, placed]);

  return (
    <div className="ws">
      <div className="ws-bg" />

      {/* Header */}
      <header className="ws-head">
        <div className="ws-head-left">
          <button className="hd-back" onClick={onExit} title="返回选择">
            <span>←</span> 返回蓝图
          </button>
          <div>
            <div className="hd-title">
              <h3>{puzzle.name}</h3>
              <span className={`diff-chip diff-${puzzle.difficulty.toLowerCase()}`}>{puzzle.difficulty}</span>
            </div>
            <p className="hd-desc">{puzzle.description}</p>
          </div>
        </div>
        <div className="ws-head-right">
          <button
            className={`hd-btn ${guide ? 'on' : ''}`}
            onClick={() => setGuide((v) => !v)}
            title="底板透视引导"
          >
            <span className="hd-btn-ico">◉</span>透视引导 · {guide ? '开启' : '关闭'}
          </button>
          <button className="hd-btn" onClick={handleReset}>
            <span className="hd-btn-ico">↺</span>拆卸全部
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="ws-body">
        {/* Baseplate */}
        <section className="board-panel">
          <div className="board-wrap">
            <div
              className="baseplate"
              style={{ '--n': gridSize }}
            >
              {Array.from({ length: gridSize * gridSize }).map((_, i) => {
                const x = i % gridSize, y = Math.floor(i / gridSize);
                const guideCell = guide && targetGrid.find((t) => t.x === x && t.y === y);
                const isGhost = ghostCells.some((c) => c.x === x && c.y === y);
                return (
                  <div
                    key={i}
                    className="bp-cell"
                    onMouseEnter={() => setHover({ x, y })}
                    onMouseLeave={() => setHover((h) => (h?.x === x && h?.y === y ? null : h))}
                    onClick={() => handleCellClick(x, y)}
                  >
                    <span className="bp-peg" />
                    {guideCell && <span className="bp-guide" style={{ background: guideCell.color }} />}
                    {isGhost && <span className={`bp-ghost ${ghostValid ? '' : 'bad'}`} />}
                  </div>
                );
              })}

              {placed.map((b) => (
                <motion.button
                  key={b.id}
                  className="brick"
                  initial={{ scale: 0.88, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={(e) => handleRemove(b.id, e)}
                  style={{
                    background: b.color,
                    left: `calc(${(b.x / gridSize) * 100}% + 4px)`,
                    top: `calc(${(b.y / gridSize) * 100}% + 4px)`,
                    width: `calc(${(b.width / gridSize) * 100}% - 4px)`,
                    height: `calc(${(b.height / gridSize) * 100}% - 4px)`,
                    '--bw': b.width,
                    '--bh': b.height,
                  }}
                  title="点击拆除"
                >
                  <span className="brick-shine" />
                  <span className="brick-studs">
                    {Array.from({ length: b.width * b.height }).map((_, k) => (
                      <span key={k} className="brick-stud" />
                    ))}
                  </span>
                  <span className="brick-remove">✕</span>
                </motion.button>
              ))}
            </div>
          </div>
          <p className="bp-tip">* 点击已放置的积木即可拆除并退回抽屉 · 按 R 旋转</p>
        </section>

        {/* Tray */}
        <aside className="tray-panel">
          {/* Active brick */}
          <section className="tray-card">
            <h4 className="tray-h">积木调配中心 <span className="mono">· ASSEMBLY PALETTE</span></h4>
            <div className="active-row">
              <div className="active-preview">
                {activeType ? (
                  <div style={{ transform: `rotate(${rotation}deg)` }}>
                    <MiniPreview type={activeType} color={activeColor} rotation={0} />
                  </div>
                ) : <span className="active-empty">空</span>}
              </div>
              <div className="active-info">
                <p className="active-label">当前手持</p>
                <p className="active-name">
                  {activeType ? `${activeType} · ${COLOR_NAMES[activeColor] || '森色'}` : '积木已竭'}
                </p>
                <p className="active-rot mono">{rotation}° 倾斜</p>
              </div>
            </div>
            <button
              className="rotate-btn"
              onClick={() => { setRotation((r) => (r + 90) % 360); playSound('snap'); }}
              disabled={!activeType}
            >
              ↻ 旋转积木 (R)
            </button>
          </section>

          {/* Inventory */}
          <section className="tray-card tray-list-wrap">
            <h4 className="tray-h">
              <span>专属积木抽屉 <span className="mono">· DRAWER</span></span>
              <span className="tray-h-sub">数量有限</span>
            </h4>
            <div className="tray-list">
              {tray.map((b, i) => {
                const active = activeType === b.type && activeColor === b.color;
                const out = b.count <= 0;
                return (
                  <div
                    key={i}
                    className={`tray-item ${active ? 'active' : ''} ${out ? 'out' : ''}`}
                    onClick={() => {
                      if (out) return;
                      setActiveType(b.type);
                      setActiveColor(b.color);
                    }}
                  >
                    <div className="ti-left">
                      <div className="ti-thumb">
                        <MiniPreview type={b.type} color={b.color} />
                      </div>
                      <div>
                        <div className="ti-name">Lego <span className="mono">{b.type}</span></div>
                        <div className="ti-color">色斑：{COLOR_NAMES[b.color] || '林间色'}</div>
                      </div>
                    </div>
                    <span className={`ti-count ${out ? 'out' : ''} mono`}>× {b.count}</span>
                  </div>
                );
              })}
            </div>

            {/* Mini target reference */}
            <div className="target-ref">
              <div>
                <p className="tr-label mono">目标蓝图 · TARGET</p>
                <p className="tr-tip">拼出完美图案即可通关</p>
              </div>
              <div className="tr-grid" style={{ '--n': gridSize }}>
                {Array.from({ length: gridSize * gridSize }).map((_, i) => {
                  const x = i % gridSize, y = Math.floor(i / gridSize);
                  const c = targetGrid.find((t) => t.x === x && t.y === y);
                  return <div key={i} className="tr-cell" style={{ background: c ? c.color : 'transparent' }} />;
                })}
              </div>
            </div>
          </section>
        </aside>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div
            className="victory"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="victory-card"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
            >
              <div className="victory-badge">🌿</div>
              <h2>大功告成 · 林木常青</h2>
              <p>你成功拼出了「{puzzle.name}」！指尖敲击的塑料拼扣声中，森林里的氧合率又上升了。</p>
              <div className="victory-actions">
                <button className="va-primary" onClick={onExit}>挑选其他拼图</button>
                <button className="va-ghost" onClick={handleReset}>再次组装</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
