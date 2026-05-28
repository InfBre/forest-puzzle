import { motion } from 'framer-motion';
import {
  TropicalLeaf,
  MapleLeaf,
  MonsteraLeaf,
  OakBigLeaf,
  FernFrond,
  PALETTES,
} from './LeafShapes';
import FallingLeaves from './FallingLeaves';
import './ForestScene.css';

// 抬头看到的树冠：大叶子在画面边缘叠加，中间留出一片光斑空地
// 每层有 depth：near 大且锐利、mid 中等、far 小且模糊

const LEAVES = [
  // 顶部：阳光透过的亮叶
  { Comp: TropicalLeaf, pal: 'brightCanopy', x: -8, y: -10, w: 380, rot: -20, depth: 'near', anim: { rot: 4, dur: 9 } },
  { Comp: MonsteraLeaf, pal: 'goldenLit', x: 18, y: -18, w: 320, rot: 15, depth: 'mid', anim: { rot: 3, dur: 10 } },
  { Comp: MapleLeaf, pal: 'brightCanopy', x: 55, y: -14, w: 280, rot: -10, depth: 'mid', anim: { rot: 5, dur: 8 } },
  { Comp: TropicalLeaf, pal: 'midCanopy', x: 75, y: -8, w: 360, rot: 25, depth: 'near', anim: { rot: 3, dur: 11 } },

  // 左侧
  { Comp: MonsteraLeaf, pal: 'deepShade', x: -12, y: 18, w: 320, rot: -55, depth: 'mid', anim: { rot: 3, dur: 10 } },
  { Comp: OakBigLeaf, pal: 'midCanopy', x: -10, y: 45, w: 280, rot: -30, depth: 'mid', anim: { rot: 4, dur: 9 } },
  { Comp: FernFrond, pal: 'goldenLit', x: -5, y: 60, w: 180, rot: -45, depth: 'near', anim: { rot: 5, dur: 7 } },

  // 右侧
  { Comp: TropicalLeaf, pal: 'deepShade', x: 85, y: 22, w: 340, rot: 50, depth: 'mid', anim: { rot: 3, dur: 11 } },
  { Comp: MapleLeaf, pal: 'midCanopy', x: 78, y: 50, w: 260, rot: 35, depth: 'mid', anim: { rot: 4, dur: 8 } },
  { Comp: FernFrond, pal: 'goldenLit', x: 92, y: 55, w: 160, rot: 60, depth: 'near', anim: { rot: 5, dur: 9 } },

  // 底部
  { Comp: FernFrond, pal: 'deepShade', x: 15, y: 78, w: 220, rot: 175, depth: 'mid', anim: { rot: 4, dur: 10 } },
  { Comp: MonsteraLeaf, pal: 'midCanopy', x: 50, y: 88, w: 300, rot: 195, depth: 'near', anim: { rot: 3, dur: 12 } },
  { Comp: OakBigLeaf, pal: 'deepShade', x: 70, y: 82, w: 240, rot: 150, depth: 'mid', anim: { rot: 4, dur: 9 } },

  // 远层小叶（更虚化、更暗）
  { Comp: MonsteraLeaf, pal: 'oliveDark', x: 35, y: 5, w: 220, rot: 5, depth: 'far', anim: { rot: 2, dur: 14 } },
  { Comp: OakBigLeaf, pal: 'oliveDark', x: 60, y: 8, w: 180, rot: -8, depth: 'far', anim: { rot: 2, dur: 13 } },
  { Comp: TropicalLeaf, pal: 'oliveDark', x: 10, y: 35, w: 200, rot: -70, depth: 'far', anim: { rot: 2, dur: 15 } },
  { Comp: MapleLeaf, pal: 'oliveDark', x: 88, y: 38, w: 200, rot: 65, depth: 'far', anim: { rot: 2, dur: 14 } },
];

const DEPTH_STYLE = {
  near: { z: 8, filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.55))', blur: 0 },
  mid:  { z: 5, filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.4))', blur: 0.5 },
  far:  { z: 2, filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))', blur: 4, opacity: 0.55 },
};

function Leaf({ Comp, pal, x, y, w, rot, depth, anim }) {
  const d = DEPTH_STYLE[depth];
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: w,
        height: w * 1.2,
        transform: `translate(-50%, -50%)`,
        zIndex: d.z,
        filter: `${d.filter} blur(${d.blur}px)`,
        opacity: d.opacity ?? 1,
      }}
      animate={{ rotate: [-anim.rot, anim.rot, -anim.rot] }}
      transition={{ duration: anim.dur, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Comp palette={PALETTES[pal]} rotate={rot} />
    </motion.div>
  );
}

// 阳光透过树冠的光斑
function SunSpot({ x, y, size, intensity, dur, delay }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(255, 240, 180, ${intensity}) 0%, rgba(255, 240, 180, ${intensity * 0.5}) 25%, transparent 65%)`,
        filter: 'blur(18px)',
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        zIndex: 7,
        transform: 'translate(-50%, -50%)',
      }}
      animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function ForestScene({ onEnter }) {
  return (
    <div className="forest-scene canopy">
      <div className="deep-bg" />

      {/* 远景模糊的森林深处 */}
      <div className="forest-depth" />

      {/* 阳光光斑（透过树叶的丁达尔效应） */}
      <SunSpot x={48} y={32} size={280} intensity={0.55} dur={6} delay={0} />
      <SunSpot x={62} y={42} size={180} intensity={0.4} dur={7} delay={1} />
      <SunSpot x={42} y={48} size={120} intensity={0.5} dur={5} delay={2} />
      <SunSpot x={30} y={28} size={150} intensity={0.3} dur={8} delay={3} />
      <SunSpot x={70} y={25} size={130} intensity={0.35} dur={6.5} delay={1.5} />

      {/* 大树叶层叠 */}
      {LEAVES.map((l, i) => <Leaf key={i} {...l} />)}

      <FallingLeaves count={14} />

      <div className="hero-wrap">
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.4 }}
        >
          <motion.h1
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            深呼吸
          </motion.h1>
          <p className="subtitle">林叶之间 · 氧气充足</p>
          <motion.button
            className="enter-btn"
            onClick={onEnter}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: [
              '0 0 24px rgba(220, 240, 180, 0.25)',
              '0 0 56px rgba(220, 240, 180, 0.55)',
              '0 0 24px rgba(220, 240, 180, 0.25)',
            ] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            走进林间空地 →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
