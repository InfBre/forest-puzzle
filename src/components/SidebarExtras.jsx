import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PUZZLES } from '../data/puzzles';
import './SidebarExtras.css';

const HAIKU = [
  { cn: '林深时见鹿，海蓝时见鲸', en: 'Deep in the forest, deer appear' },
  { cn: '雾从松间起，月自林梢落', en: 'Mist rises among pines' },
  { cn: '一念清净，烈焰成池', en: 'A pure thought turns fire to pond' },
  { cn: '风穿林叶语，鸟向云间啼', en: 'Wind speaks through leaves' },
  { cn: '苔痕上阶绿，草色入帘青', en: 'Moss greens the stone steps' },
  { cn: '心静则万物静，心闲则万物闲', en: 'Quiet mind, quiet world' },
  { cn: '空山新雨后，天气晚来秋', en: 'Empty mountain, fresh after rain' },
  { cn: '万物皆有裂痕，那是光照进来的地方', en: 'There is a crack in everything' },
];

export default function SidebarExtras({ solved }) {
  const [idx, setIdx] = useState(0);
  const [oxygen, setOxygen] = useState(96.2);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % HAIKU.length), 9000);
    return () => clearInterval(id);
  }, []);

  // 氧合率：缓慢漂移，给人活物感
  useEffect(() => {
    const id = setInterval(() => {
      setOxygen((o) => {
        const next = o + (Math.random() - 0.5) * 0.6;
        return Math.max(94.5, Math.min(99.4, next));
      });
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const solvedSet = new Set(solved || []);
  const recent = PUZZLES.filter((p) => solvedSet.has(p.id)).slice(-6);

  const verse = HAIKU[idx];

  return (
    <>
      {/* 森林日志 / 诗句 */}
      <div className="side-card haiku-card">
        <div className="side-h">
          <span className="side-h-ico">❋</span>
          <span>森林日志</span>
          <span className="side-h-en">FOREST LOG</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7 }}
            className="haiku-body"
          >
            <p className="haiku-cn">「{verse.cn}」</p>
            <p className="haiku-en">{verse.en}</p>
          </motion.div>
        </AnimatePresence>
        <div className="haiku-dots">
          {HAIKU.map((_, i) => (
            <span key={i} className={`haiku-dot ${i === idx ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      {/* 森林氧合 / 生命体征 */}
      <div className="side-card vitals-card">
        <div className="side-h">
          <span className="side-h-ico">◉</span>
          <span>森林氧合</span>
          <span className="side-h-en">VITALS</span>
        </div>
        <div className="vitals-row">
          <div className="vital">
            <p className="vital-label">氧合率</p>
            <p className="vital-value">
              <span className="vital-big mono">{oxygen.toFixed(1)}</span>
              <span className="vital-unit">%</span>
            </p>
            <div className="vital-bar">
              <motion.div
                className="vital-bar-fill"
                animate={{ width: `${(oxygen - 90) * 10}%` }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </div>
          </div>
          <div className="vital">
            <p className="vital-label">心率节奏</p>
            <p className="vital-value">
              <span className="vital-big mono">62</span>
              <span className="vital-unit">BPM</span>
            </p>
            <div className="vital-pulse">
              <motion.div
                className="pulse-dot"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.0, repeat: Infinity }}
              />
              <motion.div
                className="pulse-line"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 1.0, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 收藏栏：已完成的拼图缩略 */}
      <div className="side-card collect-card">
        <div className="side-h">
          <span className="side-h-ico">✦</span>
          <span>收藏陈列</span>
          <span className="side-h-en">COLLECTION</span>
          <span className="side-h-count mono">{solvedSet.size}/{PUZZLES.length}</span>
        </div>
        {recent.length === 0 ? (
          <p className="collect-empty">完成一件拼砌作品，便会陈列在此。</p>
        ) : (
          <div className="collect-grid">
            {recent.map((p) => (
              <div className="collect-cell" key={p.id} title={p.name}>
                <div className="collect-mini">
                  {Array.from({ length: p.gridSize * p.gridSize }).map((_, i) => {
                    const x = i % p.gridSize, y = Math.floor(i / p.gridSize);
                    const c = p.targetGrid.find((t) => t.x === x && t.y === y);
                    return (
                      <span
                        key={i}
                        style={{
                          background: c ? c.color : 'transparent',
                          gridColumn: x + 1,
                          gridRow: y + 1,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
