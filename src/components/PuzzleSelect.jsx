import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { PUZZLES } from '../data/puzzles';
import './PuzzleSelect.css';

const DIFFS = [
  { key: 'All', cn: '全部', en: 'All' },
  { key: 'Easy', cn: '初级', en: 'Easy' },
  { key: 'Medium', cn: '中级', en: 'Medium' },
  { key: 'Hard', cn: '高级', en: 'Hard' },
];

function Thumb({ puzzle }) {
  const size = puzzle.gridSize;
  return (
    <div className="thumb" style={{ '--cols': size, '--rows': size }}>
      {Array.from({ length: size * size }).map((_, i) => {
        const x = i % size;
        const y = Math.floor(i / size);
        const cell = puzzle.targetGrid.find((t) => t.x === x && t.y === y);
        return (
          <div
            key={i}
            className="thumb-cell"
            style={{ background: cell ? cell.color : 'transparent' }}
          />
        );
      })}
    </div>
  );
}

export default function PuzzleSelect({ onPick, solved }) {
  const [diff, setDiff] = useState('All');

  const counts = useMemo(() => ({
    All: PUZZLES.length,
    Easy: PUZZLES.filter((p) => p.difficulty === 'Easy').length,
    Medium: PUZZLES.filter((p) => p.difficulty === 'Medium').length,
    Hard: PUZZLES.filter((p) => p.difficulty === 'Hard').length,
  }), []);

  const filtered = diff === 'All' ? PUZZLES : PUZZLES.filter((p) => p.difficulty === diff);

  const solvedSet = new Set(solved || []);
  const level = solvedSet.size === PUZZLES.length ? '森之守护者'
    : solvedSet.size > 0 ? '见习林木人' : '初访松影';

  return (
    <div className="puzzle-select">
      <div className="select-bg" />

      <div className="select-inner">
        {/* Banner */}
        <section className="banner">
          <span className="tag">
            <span className="tag-dot" /> AMBIENT MORI LEGO WORKSHOP
          </span>
          <h2>静谧林息，妙趣拼砌</h2>
          <p className="banner-desc">
            欢迎来到森系拼拼乐。在这里，我们没有时间的焦灼，只有空气中若隐若现的云烟与清凉的微风。
            挑选一个你倾心的微缩森林模型，在指板敲击和拼扣的声音里，治愈疲惫的思绪。
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-icon">🌿</span>
              <div>
                <p className="stat-label">林息等级</p>
                <p className="stat-value">{level}</p>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">✦</span>
              <div>
                <p className="stat-label">已解锁拼砌</p>
                <p className="stat-value">
                  {solvedSet.size} <span className="stat-sub">/ {PUZZLES.length}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="filter-bar">
          <h3>
            <span className="compass-icon">◎</span>
            选择森系蓝图 <span className="mono">(SELECT A BUILD BLUEPRINT)</span>
          </h3>
          <div className="tabs">
            {DIFFS.map((d) => (
              <button
                key={d.key}
                className={`tab tab-${d.key.toLowerCase()} ${diff === d.key ? 'active' : ''}`}
                onClick={() => setDiff(d.key)}
              >
                {d.cn} <span className="mono">({d.en})</span>
                <span className="count">{counts[d.key]}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Cards */}
        <div className="card-grid">
          {filtered.map((p, i) => {
            const isSolved = solvedSet.has(p.id);
            const totalBricks = p.initialBricks.reduce((a, b) => a + b.count, 0);
            return (
              <motion.button
                key={p.id}
                className={`pcard ${isSolved ? 'solved' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.04, 0.3), duration: 0.5 }}
                whileHover={{ y: -3 }}
                onClick={() => onPick(p)}
              >
                {isSolved && <span className="solved-stamp" title="已封顶">🌿</span>}
                <div className="card-body">
                  <div className="card-thumb"><Thumb puzzle={p} /></div>
                  <div className="card-info">
                    <div className="card-head">
                      <h4>{p.name}</h4>
                      <span className={`diff-chip diff-${p.difficulty.toLowerCase()}`}>{p.difficulty}</span>
                    </div>
                    <p className="card-desc">{p.description}</p>
                  </div>
                </div>
                <div className="card-foot">
                  <span className="mono">包含 ({totalBricks}) 枚积木</span>
                  {isSolved ? (
                    <span className="foot-solved">✓ 已封顶 · Completed</span>
                  ) : (
                    <span className="foot-cta">解封印起砌 →</span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
