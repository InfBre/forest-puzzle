import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './BreathingChamber.css';

const PHASES = {
  inhale:  { cn: '吸入森氧', en: 'Inhale Oxygen', color: '#82c89a', scale: 1.28 },
  holdIn:  { cn: '屏息吐纳', en: 'Keep Pure Breeze', color: '#fbcd6a', scale: 1.34 },
  exhale:  { cn: '呼出尘杂', en: 'Release Tension', color: '#5fc7c0', scale: 0.88 },
  holdOut: { cn: '静笃宁神', en: 'Rest in Nature', color: '#82c89a', scale: 0.82 },
};

const PACES = [
  { label: '安神 14s', val: 14 },
  { label: '常态 12s', val: 12 },
  { label: '舒缓 10s', val: 10 },
];

export default function BreathingChamber({
  speed,
  setSpeed,
  mistIntensity,
  setMistIntensity,
  volume,
  setVolume,
  soundEnabled,
}) {
  const [phase, setPhase] = useState('inhale');
  const [progress, setProgress] = useState(0);

  // 12s 周期：吸 35% / 屏 15% / 呼 35% / 静 15%
  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t += 0.1;
      const ratio = (t % speed) / speed;
      setProgress(ratio);
      if (ratio < 0.35) setPhase('inhale');
      else if (ratio < 0.5) setPhase('holdIn');
      else if (ratio < 0.85) setPhase('exhale');
      else setPhase('holdOut');
    }, 100);
    return () => clearInterval(id);
  }, [speed]);

  const current = PHASES[phase];

  return (
    <div className="chamber">
      <div className="chamber-card">
        <span className="chamber-watermark">O₂</span>
        <h3 className="chamber-h">
          <span className="chamber-dot" />
          古树森呼吸
        </h3>
        <p className="chamber-subtitle">
          跟随中央气韵的扩张与收缩，进行慢深呼吸。
          充足的氧合作用有助于提升你的拼砌专注力。
        </p>

        {/* 呼吸圆环 */}
        <div className="orb-stage">
          <motion.div
            className="orb-aura"
            animate={{
              scale: phase === 'inhale' || phase === 'holdIn' ? 1.4 : 0.8,
              opacity: phase === 'holdIn' ? 0.9 : 0.4,
            }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />
          <motion.div
            className="orb"
            animate={{
              scale: current.scale,
              borderColor: current.color,
              boxShadow: `0 0 38px ${current.color}55`,
            }}
            transition={{
              duration:
                phase === 'inhale' ? speed * 0.35
                : phase === 'holdIn' ? speed * 0.15
                : phase === 'exhale' ? speed * 0.35
                : speed * 0.15,
              ease: 'easeInOut',
            }}
          >
            <div className="orb-inner-ring" />
            <span className="orb-cn" style={{ color: current.color }}>{current.cn}</span>
            <span className="orb-en">{current.en}</span>
          </motion.div>
        </div>

        {/* 进度条 */}
        <div className="phase-bar">
          <div className="phase-fill" style={{ width: `${progress * 100}%` }} />
        </div>

        {/* 控制器 */}
        <div className="ctrl-block">
          <div className="ctrl-row">
            <label>
              <span className="ctrl-bar" /> 森风涛声强度
            </label>
            <span className="ctrl-val mono">{Math.round(volume * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={Math.round(volume * 100)}
            onChange={(e) => setVolume(parseInt(e.target.value, 10) / 100)}
            disabled={!soundEnabled}
            className="ctrl-range"
          />

          <div className="ctrl-row" style={{ marginTop: 14 }}>
            <label>
              <span className="ctrl-bar" /> 林中烟岚厚度
            </label>
            <span className="ctrl-val mono">{mistIntensity}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={mistIntensity}
            onChange={(e) => setMistIntensity(parseInt(e.target.value, 10))}
            className="ctrl-range mist"
          />

          <div className="ctrl-row" style={{ marginTop: 14 }}>
            <label className="pace-label">呼吸调息频率</label>
          </div>
          <div className="pace-tabs">
            {PACES.map((p) => (
              <button
                key={p.val}
                className={`pace-tab ${speed === p.val ? 'active' : ''}`}
                onClick={() => setSpeed(p.val)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
