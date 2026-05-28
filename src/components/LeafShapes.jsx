// 写实风格的大树叶 SVG。每片有叶脉、渐变高光与边缘细节。
// 所有形状基于 viewBox 200x240，便于统一缩放定位。

let __uid = 0;
const uid = () => `lg${++__uid}`;

function LeafGradient({ id, light, mid, dark }) {
  return (
    <defs>
      <linearGradient id={id} x1="0%" y1="0%" x2="60%" y2="100%">
        <stop offset="0%" stopColor={light} />
        <stop offset="55%" stopColor={mid} />
        <stop offset="100%" stopColor={dark} />
      </linearGradient>
      <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
        <stop offset="60%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
    </defs>
  );
}

// 蕉叶 / 龟背竹一类的长卵形大叶，有羽状脉
export function TropicalLeaf({ palette, rotate = 0 }) {
  const id = uid();
  const { light, mid, dark } = palette;
  return (
    <svg viewBox="0 0 200 260" style={{ overflow: 'visible', transform: `rotate(${rotate}deg)` }}>
      <LeafGradient id={id} light={light} mid={mid} dark={dark} />
      {/* 叶身：长椭圆，尖端 */}
      <path
        d="M100 8 C150 30, 175 90, 178 160 C175 210, 145 245, 100 252 C55 245, 25 210, 22 160 C25 90, 50 30, 100 8 Z"
        fill={`url(#${id})`}
        stroke={dark}
        strokeWidth="1.2"
        strokeOpacity="0.5"
      />
      {/* 主脉 */}
      <path d="M100 12 L100 250" stroke={dark} strokeWidth="2" strokeOpacity="0.55" fill="none" />
      {/* 侧脉 */}
      {[30, 60, 95, 135, 175, 215].map((y, i) => {
        const curve = 15 + i * 4;
        return (
          <g key={i} opacity="0.45" stroke={dark} strokeWidth="1.1" fill="none">
            <path d={`M100 ${y} Q ${100 - curve} ${y + 12}, ${50 - i * 2} ${y + 25 + i * 3}`} />
            <path d={`M100 ${y} Q ${100 + curve} ${y + 12}, ${150 + i * 2} ${y + 25 + i * 3}`} />
          </g>
        );
      })}
      {/* 高光 */}
      <path
        d="M100 8 C145 30, 168 88, 168 140 C150 100, 125 60, 100 30 Z"
        fill={`url(#${id}-shine)`}
        opacity="0.6"
      />
    </svg>
  );
}

// 枫叶：五裂掌状
export function MapleLeaf({ palette, rotate = 0 }) {
  const id = uid();
  const { light, mid, dark } = palette;
  return (
    <svg viewBox="0 0 220 240" style={{ overflow: 'visible', transform: `rotate(${rotate}deg)` }}>
      <LeafGradient id={id} light={light} mid={mid} dark={dark} />
      <path
        d="M110 235
           C108 210, 100 195, 95 185
           C75 195, 50 200, 25 195
           C45 175, 65 160, 70 145
           C55 145, 35 140, 18 125
           C40 122, 60 115, 72 105
           C60 90, 45 70, 38 50
           C58 55, 78 65, 88 78
           C85 55, 90 30, 110 12
           C130 30, 135 55, 132 78
           C142 65, 162 55, 182 50
           C175 70, 160 90, 148 105
           C160 115, 180 122, 202 125
           C185 140, 165 145, 150 145
           C155 160, 175 175, 195 195
           C170 200, 145 195, 125 185
           C120 195, 112 210, 110 235 Z"
        fill={`url(#${id})`}
        stroke={dark}
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      {/* 叶脉 */}
      <g stroke={dark} strokeWidth="1.2" strokeOpacity="0.55" fill="none">
        <path d="M110 235 L110 70" />
        <path d="M110 110 L40 60" />
        <path d="M110 110 L180 60" />
        <path d="M110 145 L30 130" />
        <path d="M110 145 L190 130" />
      </g>
      <path
        d="M105 12 C90 35, 80 75, 88 105 C70 100, 50 92, 38 50 C58 55, 78 65, 88 78 C85 55, 90 30, 105 12 Z"
        fill={`url(#${id}-shine)`}
        opacity="0.5"
      />
    </svg>
  );
}

// 龟背竹：椭圆带裂口
export function MonsteraLeaf({ palette, rotate = 0 }) {
  const id = uid();
  const { light, mid, dark } = palette;
  return (
    <svg viewBox="0 0 220 240" style={{ overflow: 'visible', transform: `rotate(${rotate}deg)` }}>
      <LeafGradient id={id} light={light} mid={mid} dark={dark} />
      <path
        d="M110 10
           C160 25, 200 80, 200 140
           C200 200, 160 232, 110 232
           C60 232, 20 200, 20 140
           C20 80, 60 25, 110 10 Z"
        fill={`url(#${id})`}
        stroke={dark}
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      {/* 裂口（外形咬合）—— 用底色裁切的方式：使用 path 覆盖较暗背景圆角矩形 */}
      <g fill="#0d2820">
        <path d="M195 100 Q160 110 135 120 L110 120 L110 105 Q150 95 195 95 Z" />
        <path d="M195 165 Q165 170 145 175 L110 175 L110 158 Q150 153 195 152 Z" />
        <path d="M25 100 Q60 110 85 120 L110 120 L110 105 Q70 95 25 95 Z" />
        <path d="M25 165 Q55 170 75 175 L110 175 L110 158 Q70 153 25 152 Z" />
      </g>
      <path d="M110 12 L110 230" stroke={dark} strokeWidth="2" strokeOpacity="0.5" fill="none" />
      <path
        d="M110 10 C155 25, 195 70, 195 130 C175 85, 145 50, 110 30 Z"
        fill={`url(#${id}-shine)`}
        opacity="0.5"
      />
    </svg>
  );
}

// 橡叶：波浪边大叶
export function OakBigLeaf({ palette, rotate = 0 }) {
  const id = uid();
  const { light, mid, dark } = palette;
  return (
    <svg viewBox="0 0 200 260" style={{ overflow: 'visible', transform: `rotate(${rotate}deg)` }}>
      <LeafGradient id={id} light={light} mid={mid} dark={dark} />
      <path
        d="M100 12
           C115 20, 125 35, 130 50
           C145 45, 165 55, 160 75
           C175 80, 180 100, 165 110
           C180 120, 175 140, 158 142
           C170 158, 158 175, 142 170
           C148 188, 130 200, 118 188
           C115 208, 100 220, 95 240
           C90 220, 75 208, 72 188
           C60 200, 42 188, 48 170
           C32 175, 20 158, 32 142
           C15 140, 10 120, 25 110
           C10 100, 15 80, 30 75
           C25 55, 45 45, 60 50
           C65 35, 75 20, 90 12
           Z"
        fill={`url(#${id})`}
        stroke={dark}
        strokeWidth="1.2"
        strokeOpacity="0.55"
      />
      <path d="M95 235 L100 18" stroke={dark} strokeWidth="1.6" strokeOpacity="0.55" fill="none" />
      <g stroke={dark} strokeWidth="1" strokeOpacity="0.4" fill="none">
        <path d="M100 60 L60 55" />
        <path d="M100 60 L140 55" />
        <path d="M98 110 L30 110" />
        <path d="M98 110 L170 110" />
        <path d="M97 160 L42 170" />
        <path d="M97 160 L158 170" />
      </g>
      <path
        d="M90 12 C75 20, 60 50, 50 80 C40 75, 28 88, 25 110 C18 90, 25 60, 50 50 C60 35, 75 18, 90 12 Z"
        fill={`url(#${id}-shine)`}
        opacity="0.5"
      />
    </svg>
  );
}

// 蕨叶/羽状复叶
export function FernFrond({ palette, rotate = 0 }) {
  const id = uid();
  const { light, mid, dark } = palette;
  const segments = 11;
  return (
    <svg viewBox="0 0 140 280" style={{ overflow: 'visible', transform: `rotate(${rotate}deg)` }}>
      <LeafGradient id={id} light={light} mid={mid} dark={dark} />
      <path d="M70 275 Q72 150 70 8" stroke={dark} strokeWidth="2.5" strokeOpacity="0.7" fill="none" />
      {Array.from({ length: segments }).map((_, i) => {
        const y = 30 + i * 22;
        const len = 55 - i * 3.5;
        return (
          <g key={i} fill={`url(#${id})`} stroke={dark} strokeWidth="0.8" strokeOpacity="0.5">
            <path d={`M70 ${y} Q${70 - len * 0.5} ${y - 6}, ${70 - len} ${y + 4} Q${70 - len * 0.6} ${y + 12}, 70 ${y + 6} Z`} />
            <path d={`M70 ${y} Q${70 + len * 0.5} ${y - 6}, ${70 + len} ${y + 4} Q${70 + len * 0.6} ${y + 12}, 70 ${y + 6} Z`} />
          </g>
        );
      })}
    </svg>
  );
}

// 颜色调色板（不同光照、不同深度）
export const PALETTES = {
  brightCanopy: { light: '#7fb872', mid: '#4a8c4a', dark: '#1f4528' }, // 亮处叶子，阳光透过
  midCanopy:    { light: '#5a9560', mid: '#326b3a', dark: '#15301d' }, // 中层
  deepShade:    { light: '#3a6d44', mid: '#1f4528', dark: '#0a1f12' }, // 深处
  goldenLit:    { light: '#c4d878', mid: '#7a9b3e', dark: '#3f5a1e' }, // 逆光黄绿
  oliveDark:    { light: '#4a6840', mid: '#2a4225', dark: '#0d1a0c' },
};
