import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AppHeader.css';

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function getLunarHint(d) {
  const h = d.getHours();
  if (h < 5) return '子夜 · 林深露重';
  if (h < 8) return '清晨 · 微光初醒';
  if (h < 11) return '上午 · 林叶含露';
  if (h < 14) return '正午 · 阳光斑驳';
  if (h < 17) return '午后 · 树影摇曳';
  if (h < 19) return '黄昏 · 暮色苍翠';
  if (h < 22) return '夜间 · 萤火点点';
  return '深夜 · 万籁俱寂';
}

export default function AppHeader({ audio }) {
  const now = useClock();
  const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const hint = getLunarHint(now);

  return (
    <header className="app-header">
      <div className="hd-brand">
        <motion.span
          className="hd-icon"
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          🌿
        </motion.span>
        <div className="hd-text">
          <p className="hd-eyebrow">Healing Mori Space</p>
          <div className="hd-title-row">
            <h1 className="hd-title">森呼吸与手工坊</h1>
            <span className="hd-sep">·</span>
            <span className="hd-en">Lego Forest</span>
          </div>
        </div>
      </div>

      <div className="hd-actions">
        <div className="hd-time">
          <span className="hd-time-dot" />
          <span>{time}</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>{hint}</span>
        </div>
        <button
          className={`hd-pill ${audio.enabled ? 'on' : ''}`}
          onClick={() => audio.setEnabled((v) => !v)}
          title="开启 / 关闭森林环境音"
        >
          <span className="hd-pill-ico">{audio.enabled ? '♪' : '✕'}</span>
          <span>{audio.enabled ? '森音 · 启' : '森音 · 关'}</span>
        </button>
      </div>
    </header>
  );
}
