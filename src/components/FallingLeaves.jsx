import { useMemo } from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#3a6d44', '#4a824f', '#6ba070', '#8aa86b', '#c4a747', '#a08454'];
const TYPES = ['oak', 'maple', 'fern', 'ginkgo'];

function LeafSVG({ type, color }) {
  const filter = 'drop-shadow(1px 2px 2px rgba(0,0,0,0.3))';
  switch (type) {
    case 'maple':
      return (
        <svg viewBox="0 0 24 24" fill={color} style={{ filter, width: '100%', height: '100%' }}>
          <path d="M12 2 s-1.5 3-2.5 4-2 0-3 1 2 2 1 3c0 0-3 1-3 2s4 1 5 3l-1 5 4-3 4 3-1-5c1-2 5-2 5-3s-3-1-3-2c-1-1 1-2 1-3s-1-1-3-1-1-3-2.5-4z" />
        </svg>
      );
    case 'oak':
      return (
        <svg viewBox="0 0 24 24" fill={color} style={{ filter, width: '100%', height: '100%' }}>
          <path d="M12 2c-1.5 1-2.5 1-2.5 3 0 1-1.5 1.5-1 3.5-.8.8-1.2 2 .4 2.5-.4.4-.8 1.2-.8 2 0 1.5 2 2.5 3.5 3v3h1.5v-3c1.5-.5 3.5-1.5 3.5-3 0-.8-.4-1.6-.8-2 1.6-.5 1.2-1.7.4-2.5 1.5-2 0-2.5 0-3.5 0-2-1-2-2.5-3z" />
        </svg>
      );
    case 'fern':
      return (
        <svg viewBox="0 0 24 24" fill={color} style={{ filter, width: '100%', height: '100%' }}>
          <path d="M12 2c-.3 1.5-1 2.5-2 3.5 1 .3 1.8 1 2.2 1.8-.3 1-1 1.5-2 2.5 1 .3 1.8 1 2.2 1.8-.3 1-1 1.5-2 2.5 1 .3 1.8 1 2.2 1.8V22h1.2v-6c.3-.8 1-1.5 2-2-1-.3-1.8-1-2.2-1.8.3-.8 1-1.5 2-2-1-.3-1.8-1-2.2-1.8.3-.8 1-1.5 2-2-1-.3-1.8-1-2.2-1.8z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill={color} style={{ filter, width: '100%', height: '100%' }}>
          <path d="M12 22v-6c-2.3-1.5-5.5-2.5-6.5-5s2.5-5.5 6.5-5.5c4 0 7.5 3 6.5 5.5s-4.2 3.5-6.5 5z" />
        </svg>
      );
  }
}

export default function FallingLeaves({ count = 22 }) {
  const leaves = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: 12 + Math.random() * 16,
        type: TYPES[Math.floor(Math.random() * TYPES.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        dur: 14 + Math.random() * 14,
        delay: -Math.random() * 20,
        drift: (i % 2 === 0 ? 1 : -1) * (30 + Math.random() * 40),
        rotateStart: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className="falling-leaves" style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 6,
    }}>
      {leaves.map((l) => (
        <motion.div
          key={l.id}
          style={{
            position: 'absolute',
            top: '-5%',
            left: `${l.x}%`,
            width: l.size,
            height: l.size,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, l.drift, 0],
            rotate: [l.rotateStart, l.rotateStart + 360],
          }}
          transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: 'linear' }}
        >
          <LeafSVG type={l.type} color={l.color} />
        </motion.div>
      ))}
    </div>
  );
}
