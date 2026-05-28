import { motion } from 'framer-motion';

// 多层 SVG 树形——参考真实树冠的圆形堆叠
export function OakTree({ scale = 1, sway = 1.2, dur = 7, trunk = '#2d2219' }) {
  return (
    <motion.svg
      viewBox="0 0 200 280"
      style={{ width: 200 * scale, height: 280 * scale, transformOrigin: '50% 100%', overflow: 'visible' }}
      animate={{ rotate: [-sway, sway, -sway] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M88 280 L92 180 Q88 140 95 100 Q100 90 90 70 L92 68 Q105 80 100 105 Q110 80 122 65 L125 67 Q112 88 105 115 Q112 145 108 180 L112 280 Z" fill={trunk} />
      <circle cx="60" cy="100" r="48" fill="#1b3a22" opacity="0.85" />
      <circle cx="135" cy="80" r="55" fill="#2d5a3a" opacity="0.9" />
      <circle cx="100" cy="60" r="46" fill="#3a6d44" opacity="0.95" />
      <circle cx="90" cy="115" r="42" fill="#1f4528" opacity="0.95" />
      <circle cx="148" cy="120" r="38" fill="#2d5a3a" opacity="0.9" />
      <ellipse cx="100" cy="55" rx="18" ry="10" fill="#5a8a5e" opacity="0.4" />
      <ellipse cx="65" cy="92" rx="14" ry="8" fill="#5a8a5e" opacity="0.3" />
    </motion.svg>
  );
}

export function PineTree({ scale = 1, sway = 1, dur = 6.5, trunk = '#3a2618' }) {
  return (
    <motion.svg
      viewBox="0 0 160 300"
      style={{ width: 160 * scale, height: 300 * scale, transformOrigin: '50% 100%', overflow: 'visible' }}
      animate={{ rotate: [sway, -sway, sway] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
    >
      <rect x="72" y="220" width="16" height="80" fill={trunk} />
      <path d="M10 230 L80 130 L150 230 Z" fill="#13301a" />
      <path d="M18 195 L80 105 L142 195 Z" fill="#1f4528" />
      <path d="M26 155 L80 75 L134 155 Z" fill="#2d5a3a" />
      <path d="M38 115 L80 45 L122 115 Z" fill="#3a6d44" />
      <path d="M52 75 L80 15 L108 75 Z" fill="#4a824f" />
      <path d="M76 18 L80 8 L84 18 Z" fill="#6ba070" />
      <path d="M55 80 L70 70" stroke="#1a3a20" strokeWidth="1.5" opacity="0.6" />
      <path d="M105 80 L92 72" stroke="#1a3a20" strokeWidth="1.5" opacity="0.6" />
    </motion.svg>
  );
}

export function BirchTree({ scale = 1, sway = 1.5, dur = 5.5 }) {
  return (
    <motion.svg
      viewBox="0 0 120 280"
      style={{ width: 120 * scale, height: 280 * scale, transformOrigin: '50% 100%', overflow: 'visible' }}
      animate={{ rotate: [-sway, sway, -sway] }}
      transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut' }}
    >
      <rect x="55" y="100" width="10" height="180" fill="#e8dcc4" />
      <rect x="55" y="100" width="10" height="180" fill="url(#birchMarks)" opacity="0.5" />
      <defs>
        <pattern id="birchMarks" x="0" y="0" width="10" height="24" patternUnits="userSpaceOnUse">
          <rect x="0" y="4" width="10" height="2" fill="#3a2e26" />
          <rect x="2" y="14" width="6" height="1.5" fill="#3a2e26" />
        </pattern>
      </defs>
      <ellipse cx="60" cy="80" rx="48" ry="60" fill="#2d5a3a" opacity="0.9" />
      <ellipse cx="40" cy="95" rx="30" ry="38" fill="#1f4528" opacity="0.85" />
      <ellipse cx="82" cy="90" rx="32" ry="40" fill="#3a6d44" opacity="0.9" />
      <ellipse cx="60" cy="55" rx="30" ry="35" fill="#4a824f" opacity="0.85" />
    </motion.svg>
  );
}

export function Bush({ scale = 1 }) {
  return (
    <svg
      viewBox="0 0 140 80"
      style={{ width: 140 * scale, height: 80 * scale, overflow: 'visible' }}
    >
      <ellipse cx="35" cy="55" rx="32" ry="22" fill="#1a3520" />
      <ellipse cx="70" cy="48" rx="38" ry="28" fill="#244a2c" />
      <ellipse cx="105" cy="58" rx="30" ry="20" fill="#1a3520" />
      <ellipse cx="55" cy="42" rx="18" ry="12" fill="#3a6d44" opacity="0.6" />
      <ellipse cx="90" cy="45" rx="16" ry="10" fill="#3a6d44" opacity="0.5" />
    </svg>
  );
}
