# 森呼吸与手工坊 · Mori Breath & Lego Forest

> 一个把森林呼吸节律与乐高拼砌结合的疗愈型交互网页。  
> A meditative interactive workshop that pairs forest-breathing rhythms with Lego-style pixel building.


## 简介 / About

走进这间林间手工坊，跟随中央气韵做几次慢深呼吸，再挑一块森系蓝图开始拼砌。云雾浓度、风声、呼吸频率都可调。每完成一件作品，会陈列在你的"收藏"里。

26 个手作蓝图，从林间红小菇到林边小屋，每个都附带数量有限的积木库存——拼对图案，才算"封顶"。

---

## 功能特色 / Features

- **古树森呼吸**：呼吸圆环按 12s 周期同步缩放、变色与发光，4 段提示「吸入森氧 / 屏息吐纳 / 呼出尘杂 / 静笃宁神」
- **林中烟岚厚度滑块**：实时调节背景云雾浓度（0–100%）
- **Web Audio 合成森林音**：白噪声 + 双重 biquad 滤波模拟山风，带通频率持续摆动；随机间隔的鸟鸣 / 水滴磬音
- **乐高拼砌玩法**：8×8 底板 + 5 种积木形状（1×1 / 1×2 / 1×3 / 1×4 / 2×2）+ 旋转 + 库存限制 + Ghost 预览 + 通关判定
- **拼装音效**：合成的 snap 卡扣声 / 拆除摩擦声 / 通关大调琶音
- **森林日志**：8 首森系短句随时间轮播
- **生命体征面板**：氧合率柔和漂移、心率脉冲，给静态界面注入活气
- **实时时段意境**：根据系统时间显示「正午 · 阳光斑驳 / 黄昏 · 暮色苍翠」等 8 段提示
- **进度持久化**：通关记录写入 localStorage，下次访问自动还原

## 技术栈 / Tech Stack

- React 19 + Vite 8
- Framer Motion（场景过渡 / 呼吸动画 / Ghost 提示）
- Web Audio API（环境音合成 + 拼装音效）
- 纯 CSS（无 UI 框架，全部手写 emerald / slate / teal 配色）
- 字体：PingFang SC（中文）+ SF Mono / JetBrains Mono（英文与数字）

## 本地开发 / Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 产出到 dist/
npm run preview  # 本地预览构建产物
```

## 部署 / Deployment

### GitHub Pages

需要先在 `vite.config.js` 加 `base: '/forest-puzzle/'`，然后：

```bash
npm run build
npx gh-pages -d dist
```

## 项目结构 / Structure

```
src/
├── App.jsx              主布局：header + 侧栏 + 内容区
├── components/
│   ├── AppHeader.jsx        顶部品牌 + 时段提示 + 音控
│   ├── AmbientLayer.jsx     背景：云雾团 + 萤火光斑
│   ├── BreathingChamber.jsx 呼吸圆环 + 三组滑块
│   ├── SidebarExtras.jsx    森林日志 + 生命体征 + 收藏陈列
│   ├── PuzzleSelect.jsx     蓝图选择页
│   ├── PuzzleWorkspace.jsx  乐高底板 + 抽屉
│   └── ...
├── data/puzzles.js          26 个拼图蓝图与积木库存
└── hooks/useForestAudio.js  Web Audio 森林环境音
```

## License

MIT
