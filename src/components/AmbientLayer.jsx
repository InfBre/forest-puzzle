import { useMemo } from 'react';
import { motion } from 'framer-motion';
import './AmbientLayer.css';

// 大气云雾团：受 mistIntensity (0-100) 控制
export default function AmbientLayer({ dim, mistIntensity = 40 }) {
  const intensity = Math.max(0, Math.min(100, mistIntensity)) / 100;

  const puffs = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: 10 + Math.random() * 70,
        scale: 1 + Math.random() * 1.2,
        dur: 38 + Math.random() * 24,
        delay: -Math.random() * 30,
      })),
    []
  );

  return (
    <div className={`ambient-layer ${dim ? 'dim' : ''}`}>
      <div className="bg-gradient" />

      {/* 飘过的云雾团 */}
      {puffs.map((p) => (
        <motion.div
          key={p.id}
          className="mist-puff"
          style={{
            top: `${p.top}%`,
            width: `${320 * p.scale}px`,
            height: `${160 * p.scale}px`,
            opacity: 0,
          }}
          animate={{
            x: ['-30vw', '130vw'],
            opacity: [0, 0.6 * intensity, 0.6 * intensity, 0],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
            opacity: { duration: p.dur, times: [0, 0.2, 0.8, 1] },
          }}
        />
      ))}

      {/* 底部缓慢涌起的浓雾 */}
      <motion.div
        className="mist-bloom"
        animate={{
          opacity: [0, 0.55 * intensity, 0],
          scale: [0.6, 1.3, 1.7],
          y: [40, -120, -260],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeOut', delay: 5 }}
      />
      <motion.div
        className="mist-bloom mist-bloom-right"
        animate={{
          opacity: [0, 0.45 * intensity, 0],
          scale: [0.5, 1.2, 1.6],
          y: [60, -160, -300],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeOut', delay: 14 }}
      />

      {/* 萤火光斑 */}
      <div className="sparks">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="spark"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 2 + Math.random() * 3,
              height: 2 + Math.random() * 3,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
