

export const PUZZLES = [
  {
    id: 'mushroom',
    name: '林间红小菇 (Red Forest Mushroom)',
    description: '一朵生长在潮湿松软苔藓上的经典森林红菇。饱满的红色伞顶带着治愈的气息。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Cap Row 1
      { x: 2, y: 1, color: '#ef5350' }, { x: 3, y: 1, color: '#ffffff' }, { x: 4, y: 1, color: '#ef5350' }, { x: 5, y: 1, color: '#ef5350' },
      // Cap Row 2
      { x: 1, y: 2, color: '#ef5350' }, { x: 2, y: 2, color: '#ef5350' }, { x: 3, y: 2, color: '#ef5350' }, { x: 4, y: 2, color: '#ef5350' }, { x: 5, y: 2, color: '#ffffff' }, { x: 6, y: 2, color: '#ef5350' },
      // Cap Row 3
      { x: 1, y: 3, color: '#ef5350' }, { x: 2, y: 3, color: '#ffffff' }, { x: 3, y: 3, color: '#ef5350' }, { x: 4, y: 3, color: '#ef5350' }, { x: 5, y: 3, color: '#ef5350' }, { x: 6, y: 3, color: '#ef5350' },
      // Cap Row 4
      { x: 2, y: 4, color: '#ef5350' }, { x: 3, y: 4, color: '#ef5350' }, { x: 4, y: 4, color: '#ef5350' }, { x: 5, y: 4, color: '#ef5350' },
      // Stem
      { x: 3, y: 5, color: '#f5f5f5' }, { x: 4, y: 5, color: '#f5f5f5' },
      { x: 3, y: 6, color: '#f5f5f5' }, { x: 4, y: 6, color: '#f5f5f5' },
      { x: 3, y: 7, color: '#f5f5f5' }, { x: 4, y: 7, color: '#f5f5f5' },
    ],
    initialBricks: [
      { type: '2x2', color: '#f5f5f5', count: 1 }, // White stem middle
      { type: '1x2', color: '#f5f5f5', count: 1 }, // White stem base
      { type: '1x4', color: '#ef5350', count: 2 }, // Red cap bottom and mid
      { type: '2x2', color: '#ef5350', count: 2 }, // Red cap segments
      { type: '1x2', color: '#ef5350', count: 2 }, // Red cap outer edges
      { type: '1x1', color: '#ffffff', count: 3 }, // Shimmering spots
      { type: '1x1', color: '#ef5350', count: 4 }, // Individual fillings
    ],
  },
  {
    id: 'pine-tree',
    name: '常青小松树 (Evergreen Pine Tree)',
    description: '森林深处呼吸感的主源泉。茂密的松针塔承载着满满的氧气，生机勃勃。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Top foliage
      { x: 3, y: 1, color: '#2e7d32' }, { x: 4, y: 1, color: '#2e7d32' },
      // Mid foliage row 1
      { x: 2, y: 2, color: '#4caf50' }, { x: 3, y: 2, color: '#2e7d32' }, { x: 4, y: 2, color: '#2e7d32' }, { x: 5, y: 2, color: '#4caf50' },
      // Mid foliage row 2
      { x: 2, y: 3, color: '#4caf50' }, { x: 3, y: 3, color: '#4caf50' }, { x: 4, y: 3, color: '#4caf50' }, { x: 5, y: 3, color: '#4caf50' },
      // Low foliage row 1
      { x: 1, y: 4, color: '#2e7d32' }, { x: 2, y: 4, color: '#2e7d32' }, { x: 3, y: 4, color: '#2e7d32' }, { x: 4, y: 4, color: '#2e7d32' }, { x: 5, y: 4, color: '#2e7d32' }, { x: 6, y: 4, color: '#2e7d32' },
      // Low foliage row 2
      { x: 0, y: 5, color: '#2e7d32' }, { x: 1, y: 5, color: '#2e7d32' }, { x: 2, y: 5, color: '#2e7d32' }, { x: 3, y: 5, color: '#2e7d32' }, { x: 4, y: 5, color: '#2e7d32' }, { x: 5, y: 5, color: '#2e7d32' }, { x: 6, y: 5, color: '#2e7d32' }, { x: 7, y: 5, color: '#2e7d32' },
      // Trunk
      { x: 3, y: 6, color: '#5d4037' }, { x: 4, y: 6, color: '#5d4037' },
      { x: 3, y: 7, color: '#5d4037' }, { x: 4, y: 7, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '2x2', color: '#5d4037', count: 1 }, // Tree trunk base
      { type: '1x4', color: '#2e7d32', count: 3 }, // Long deep forest foliage
      { type: '1x2', color: '#2e7d32', count: 4 }, // Medium deep foliage
      { type: '2x2', color: '#4caf50', count: 1 }, // Bright lime foliage core
      { type: '1x2', color: '#4caf50', count: 2 }, // Lime highlights
      { type: '1x1', color: '#2e7d32', count: 4 }, // Fine adjustments
    ],
  },
  {
    id: 'four-leaf-clover',
    name: '幸运四叶草 (Lucky Clover)',
    description: '生于林间湿地的翠绿叶片。每一瓣叶子都带来一缕清凉的晚风与好运。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Top leaf left
      { x: 2, y: 1, color: '#4caf50' }, { x: 3, y: 1, color: '#4caf50' },
      // Top leaf right
      { x: 4, y: 1, color: '#4caf50' }, { x: 5, y: 1, color: '#4caf50' },
      // Middle leaves row 2
      { x: 1, y: 2, color: '#4caf50' }, { x: 2, y: 2, color: '#4caf50' }, { x: 3, y: 2, color: '#fff176' }, { x: 4, y: 2, color: '#fff176' }, { x: 5, y: 2, color: '#4caf50' }, { x: 6, y: 2, color: '#4caf50' },
      // Middle leaves row 3
      { x: 1, y: 3, color: '#4caf50' }, { x: 2, y: 3, color: '#fff176' }, { x: 3, y: 3, color: '#4caf50' }, { x: 4, y: 3, color: '#4caf50' }, { x: 5, y: 3, color: '#fff176' }, { x: 6, y: 3, color: '#4caf50' },
      // Stem starts & side leaves row 4
      { x: 2, y: 4, color: '#4caf50' }, { x: 3, y: 4, color: '#4caf50' }, { x: 4, y: 4, color: '#1b5e20' }, { x: 5, y: 4, color: '#4caf50' },
      // Lower row 5 and stem
      { x: 3, y: 5, color: '#4caf50' }, { x: 4, y: 5, color: '#1b5e20' },
      // Stem bottom curve
      { x: 4, y: 6, color: '#1b5e20' },
      { x: 4, y: 7, color: '#1b5e20' }, { x: 3, y: 7, color: '#1b5e20' },
    ],
    initialBricks: [
      { type: '1x4', color: '#1b5e20', count: 1 }, // Dark green curved stem
      { type: '1x2', color: '#1b5e20', count: 1 }, // Dark green stem join
      { type: '2x2', color: '#4caf50', count: 3 }, // Large green leaf parts
      { type: '1x2', color: '#4caf50', count: 5 }, // Medium green leaf flaps
      { type: '1x1', color: '#fff176', count: 4 }, // Yellow clover leaf veins
      { type: '1x1', color: '#4caf50', count: 3 }, // Single leaf fillers
    ],
  },
  {
    id: 'acorn',
    name: '奇遇橡果 (Autumn Acorn)',
    description: '坠落在落叶堆中的光润橡果。小动物们在过冬前最爱的森林宝藏。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Top sprout
      { x: 3, y: 0, color: '#5d4037' },
      { x: 3, y: 1, color: '#5d4037' },
      // Cap Row 1
      { x: 2, y: 2, color: '#5d4037' }, { x: 3, y: 2, color: '#5d4037' }, { x: 4, y: 2, color: '#5d4037' }, { x: 5, y: 2, color: '#5d4037' },
      // Cap Row 2
      { x: 1, y: 3, color: '#5d4037' }, { x: 2, y: 3, color: '#5d4037' }, { x: 3, y: 3, color: '#5d4037' }, { x: 4, y: 3, color: '#5d4037' }, { x: 5, y: 3, color: '#5d4037' }, { x: 6, y: 3, color: '#5d4037' },
      // Body Row 1
      { x: 1, y: 4, color: '#8d6e63' }, { x: 2, y: 4, color: '#8d6e63' }, { x: 3, y: 4, color: '#fff176' }, { x: 4, y: 4, color: '#8d6e63' }, { x: 5, y: 4, color: '#8d6e63' }, { x: 6, y: 4, color: '#8d6e63' },
      // Body Row 2
      { x: 2, y: 5, color: '#8d6e63' }, { x: 3, y: 5, color: '#8d6e63' }, { x: 4, y: 5, color: '#8d6e63' }, { x: 5, y: 5, color: '#8d6e63' },
      // Body Row 3
      { x: 2, y: 6, color: '#8d6e63' }, { x: 3, y: 6, color: '#8d6e63' }, { x: 4, y: 6, color: '#8d6e63' }, { x: 5, y: 6, color: '#8d6e63' },
      // Tips
      { x: 3, y: 7, color: '#8d6e63' }, { x: 4, y: 7, color: '#8d6e63' },
    ],
    initialBricks: [
      { type: '1x2', color: '#5d4037', count: 1 }, // Sprout stem
      { type: '1x4', color: '#5d4037', count: 1 }, // Cap middle
      { type: '2x2', color: '#5d4037', count: 1 }, // Cap core
      { type: '1x2', color: '#5d4037', count: 2 }, // Cap rims
      { type: '2x2', color: '#8d6e63', count: 2 }, // Acorn nut center
      { type: '1x4', color: '#8d6e63', count: 1 }, // Nut bottom ring
      { type: '1x2', color: '#8d6e63', count: 3 }, // Nut outer rounds
      { type: '1x1', color: '#fff176', count: 1 }, // Glossy yellow highlight
      { type: '1x1', color: '#8d6e63', count: 2 }, // Tip filler
    ],
  },
  {
    id: 'forest-cabin',
    name: '林间木屋 (Timber Cabin)',
    description: '隐藏在葱郁林木中的神秘童话小屋。屋顶烟囱正在升起袅袅白烟，静谧而温暖。',
    difficulty: 'Hard',
    gridSize: 8,
    targetGrid: [
      // Chimney
      { x: 1, y: 1, color: '#cfd8dc' },
      // Roof Row 1 (Top)
      { x: 4, y: 1, color: '#c62828' },
      // Roof Row 2
      { x: 3, y: 2, color: '#c62828' }, { x: 4, y: 2, color: '#c62828' }, { x: 5, y: 2, color: '#c62828' },
      // Roof Row 3 & Chimney
      { x: 1, y: 3, color: '#cfd8dc' }, { x: 2, y: 3, color: '#c62828' }, { x: 3, y: 3, color: '#c62828' }, { x: 4, y: 3, color: '#c62828' }, { x: 5, y: 3, color: '#c62828' }, { x: 6, y: 3, color: '#c62828' },
      // Walls Row 1
      { x: 2, y: 4, color: '#8d6e63' }, { x: 3, y: 4, color: '#8d6e63' }, { x: 4, y: 4, color: '#8d6e63' }, { x: 5, y: 4, color: '#8d6e63' },
      // Walls Row 2 with yellow window
      { x: 2, y: 5, color: '#8d6e63' }, { x: 3, y: 5, color: '#fff176' }, { x: 4, y: 5, color: '#fff176' }, { x: 5, y: 5, color: '#8d6e63' },
      // Walls Row 3 with brown door
      { x: 2, y: 6, color: '#8d6e63' }, { x: 3, y: 6, color: '#5d4037' }, { x: 4, y: 6, color: '#5d4037' }, { x: 5, y: 6, color: '#8d6e63' },
      // Ground base
      { x: 1, y: 7, color: '#2e7d32' }, { x: 2, y: 7, color: '#2e7d32' }, { x: 3, y: 7, color: '#2e7d32' }, { x: 4, y: 7, color: '#2e7d32' }, { x: 5, y: 7, color: '#2e7d32' }, { x: 6, y: 7, color: '#2e7d32' },
    ],
    initialBricks: [
      { type: '1x2', color: '#cfd8dc', count: 1 }, // White Chimney
      { type: '1x4', color: '#c62828', count: 1 }, // Red roof broad section
      { type: '1x2', color: '#c62828', count: 2 }, // Red roof slope pieces
      { type: '1x1', color: '#c62828', count: 2 }, // Red roof small bits
      { type: '2x2', color: '#8d6e63', count: 2 }, // Cabin outer brown walls
      { type: '1x2', color: '#8d6e63', count: 2 }, // Small side walls
      { type: '1x2', color: '#fff176', count: 1 }, // Yellow glowing window
      { type: '1x2', color: '#5d4037', count: 1 }, // Dark wooden door
      { type: '1x4', color: '#2e7d32', count: 1 }, // Green grassy base plate
      { type: '1x2', color: '#2e7d32', count: 1 }, // Base filler
    ],
  },
  {
    id: 'snail',
    name: '慢活小蜗牛 (Slow Snail)',
    description: '在落叶堆中缓缓前行的小生命。背负着嫩绿色的螺旋外壳，静静倾听大地的呼吸。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // House
      { x: 3, y: 2, color: '#4caf50' }, { x: 4, y: 2, color: '#4caf50' },
      { x: 2, y: 3, color: '#4caf50' }, { x: 3, y: 3, color: '#fff176' }, { x: 4, y: 3, color: '#fff176' }, { x: 5, y: 3, color: '#4caf50' },
      { x: 2, y: 4, color: '#4caf50' }, { x: 3, y: 4, color: '#fff176' }, { x: 4, y: 4, color: '#4caf50' }, { x: 5, y: 4, color: '#4caf50' },
      { x: 2, y: 5, color: '#4caf50' }, { x: 3, y: 5, color: '#4caf50' }, { x: 4, y: 5, color: '#4caf50' }, { x: 5, y: 5, color: '#4caf50' },
      // Body Base & Foot
      { x: 1, y: 6, color: '#fb8c00' }, { x: 2, y: 6, color: '#fb8c00' }, { x: 3, y: 6, color: '#fb8c00' }, { x: 4, y: 6, color: '#fb8c00' }, { x: 5, y: 6, color: '#fb8c00' }, { x: 6, y: 6, color: '#fb8c00' },
      // Head
      { x: 6, y: 5, color: '#fb8c00' }, { x: 6, y: 4, color: '#fb8c00' },
    ],
    initialBricks: [
      { type: '1x4', color: '#fb8c00', count: 1 }, // Long foot segment
      { type: '1x2', color: '#fb8c00', count: 2 }, // Short foot and vertical neck
      { type: '2x2', color: '#4caf50', count: 1 }, // Outer shell bottom left
      { type: '1x4', color: '#4caf50', count: 1 }, // Middle shell broad row
      { type: '1x2', color: '#4caf50', count: 2 }, // Shell border curves
      { type: '2x2', color: '#fff176', count: 1 }, // Inner yellow shell center
      { type: '1x1', color: '#fff176', count: 1 }, // Swirl details
    ],
  },
  {
    id: 'bluebird',
    name: '森之蓝飞鸟 (Forest Bluebird)',
    description: '林深处的歌唱家。披着一身如海洋般的深蓝色羽毛，衔来一片纯净的天空。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Head and bill
      { x: 5, y: 2, color: '#1e88e5' }, { x: 6, y: 2, color: '#1e88e5' }, { x: 7, y: 2, color: '#fff176' },
      // Throat
      { x: 4, y: 3, color: '#1e88e5' }, { x: 5, y: 3, color: '#1e88e5' }, { x: 6, y: 3, color: '#1e88e5' },
      // Breast & tail
      { x: 3, y: 4, color: '#1e88e5' }, { x: 4, y: 4, color: '#ffffff' }, { x: 5, y: 4, color: '#ffffff' }, { x: 6, y: 4, color: '#1e88e5' },
      { x: 1, y: 5, color: '#1e88e5' }, { x: 2, y: 5, color: '#1e88e5' }, { x: 3, y: 5, color: '#1e88e5' }, { x: 4, y: 5, color: '#1e88e5' }, { x: 5, y: 5, color: '#1e88e5' },
      // Legs
      { x: 4, y: 6, color: '#5d4037' }, { x: 5, y: 6, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '1x4', color: '#1e88e5', count: 1 }, // Tail integration
      { type: '2x2', color: '#1e88e5', count: 2 }, // Skull & torso
      { type: '1x2', color: '#1e88e5', count: 3 }, // Feathers outline
      { type: '1x2', color: '#ffffff', count: 1 }, // Soft breast piece
      { type: '1x1', color: '#fff176', count: 1 }, // Canary yellow bill
      { type: '1x1', color: '#1e88e5', count: 1 }, // Eye highlight
      { type: '1x1', color: '#5d4037', count: 2 }, // Twig legs
    ],
  },
  {
    id: 'cherry',
    name: '野生树莓 (Wild Cherry Berries)',
    description: '挂在绿叶下晶莹剔透的水红子。在晨曦露水中闪烁着酸甜诱人的光泽。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Leaf top
      { x: 4, y: 1, color: '#2e7d32' },
      { x: 3, y: 2, color: '#2e7d32' }, { x: 4, y: 2, color: '#2e7d32' }, { x: 5, y: 2, color: '#2e7d32' },
      // Twigs
      { x: 4, y: 3, color: '#5d4037' },
      { x: 3, y: 4, color: '#5d4037' }, { x: 5, y: 4, color: '#5d4037' },
      // Left Berry
      { x: 1, y: 5, color: '#ef5350' }, { x: 2, y: 5, color: '#ef5350' }, { x: 3, y: 5, color: '#ef5350' },
      { x: 1, y: 6, color: '#ef5350' }, { x: 2, y: 6, color: '#ffffff' }, { x: 3, y: 6, color: '#ef5350' },
      { x: 2, y: 7, color: '#ef5350' },
      // Right Berry
      { x: 5, y: 5, color: '#ef5350' }, { x: 6, y: 5, color: '#ef5350' }, { x: 7, y: 5, color: '#ef5350' },
      { x: 5, y: 6, color: '#ef5350' }, { x: 6, y: 6, color: '#ffffff' }, { x: 7, y: 6, color: '#ef5350' },
      { x: 6, y: 7, color: '#ef5350' },
    ],
    initialBricks: [
      { type: '2x2', color: '#2e7d32', count: 1 }, // Broad green canopy leaf
      { type: '1x2', color: '#5d4037', count: 2 }, // Brown stem forks
      { type: '1x2', color: '#ef5350', count: 4 }, // Broad water-red berry lobes
      { type: '1x1', color: '#ffffff', count: 2 }, // Sparkling light spot whites
      { type: '1x1', color: '#ef5350', count: 6 }, // Tiny berry cores
    ],
  },
  {
    id: 'ladybug',
    name: '草木瓢虫 (Mossy Ladybug)',
    description: '在苔藓和小灌木中忙碌的一只红色小甲虫。甲壳饱满圆润，承载着森林的祝福。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Antennae & Head
      { x: 3, y: 1, color: '#1b5e20' }, { x: 4, y: 1, color: '#1b5e20' },
      // Upper Shell
      { x: 2, y: 2, color: '#c62828' }, { x: 3, y: 2, color: '#1b5e20' }, { x: 4, y: 2, color: '#1b5e20' }, { x: 5, y: 2, color: '#c62828' },
      // Spots Row 1
      { x: 1, y: 3, color: '#c62828' }, { x: 2, y: 3, color: '#c62828' }, { x: 3, y: 3, color: '#fff176' }, { x: 4, y: 3, color: '#1b5e20' }, { x: 5, y: 3, color: '#c62828' }, { x: 6, y: 3, color: '#c62828' },
      // Spots Row 2
      { x: 1, y: 4, color: '#c62828' }, { x: 2, y: 4, color: '#fff176' }, { x: 3, y: 4, color: '#c62828' }, { x: 4, y: 4, color: '#1b5e20' }, { x: 5, y: 4, color: '#fff176' }, { x: 6, y: 4, color: '#c62828' },
      // Bottom shell
      { x: 2, y: 5, color: '#c62828' }, { x: 3, y: 5, color: '#c62828' }, { x: 4, y: 5, color: '#1b5e20' }, { x: 5, y: 5, color: '#c62828' },
      // Tail end
      { x: 3, y: 6, color: '#1b5e20' }, { x: 4, y: 6, color: '#1b5e20' },
    ],
    initialBricks: [
      { type: '2x2', color: '#c62828', count: 2 }, // Crimson wing plates
      { type: '1x4', color: '#1b5e20', count: 1 }, // Deep central armor line
      { type: '1x2', color: '#1b5e20', count: 3 }, // Head & bottom segments
      { type: '1x2', color: '#c62828', count: 4 }, // Outer wing flanks
      { type: '1x1', color: '#fff176', count: 3 }, // Shimmer bug yellow spots
    ],
  },
  {
    id: 'rabbit',
    name: '苔地小白兔 (Forest White Rabbit)',
    description: '林间最容易害羞的白色耳朵小精灵。正在草地上聚精会神地寻找甜美的野草。',
    difficulty: 'Hard',
    gridSize: 8,
    targetGrid: [
      // Ear contours
      { x: 2, y: 1, color: '#f5f5f5' }, { x: 4, y: 1, color: '#f5f5f5' },
      { x: 2, y: 2, color: '#ef5350' }, { x: 4, y: 2, color: '#ef5350' }, // Pink inner ears (represented with warm light red)
      // Head
      { x: 2, y: 3, color: '#f5f5f5' }, { x: 3, y: 3, color: '#f5f5f5' }, { x: 4, y: 3, color: '#f5f5f5' },
      // Cheek with eye
      { x: 2, y: 4, color: '#f5f5f5' }, { x: 3, y: 4, color: '#fff176' }, { x: 4, y: 4, color: '#f5f5f5' }, // Yellow shiny eye
      // Body torse
      { x: 1, y: 5, color: '#f5f5f5' }, { x: 2, y: 5, color: '#f5f5f5' }, { x: 3, y: 5, color: '#f5f5f5' }, { x: 4, y: 5, color: '#f5f5f5' }, { x: 5, y: 5, color: '#f5f5f5' },
      // Legs & base
      { x: 2, y: 6, color: '#f5f5f5' }, { x: 5, y: 6, color: '#f5f5f5' },
    ],
    initialBricks: [
      { type: '1x4', color: '#f5f5f5', count: 1 }, // Broad lower core torso
      { type: '2x2', color: '#f5f5f5', count: 1 }, // Fluffy round body
      { type: '1x2', color: '#f5f5f5', count: 4 }, // Head, ears & paws
      { type: '1x2', color: '#ef5350', count: 1 }, // Warm inner pink-red ear folds
      { type: '1x1', color: '#fff176', count: 1 }, // Pure amber glowing eye
      { type: '1x1', color: '#f5f5f5', count: 2 }, // Tip details
    ],
  },
  {
    id: 'campfire',
    name: '林间融情营火 (Cozy Campfire)',
    description: '寂静落日后的森林庇护所。松木劈啪作响，金黄色的火焰驱走周围冰凉的空气。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Flame apex
      { x: 3, y: 1, color: '#fff176' }, { x: 4, y: 1, color: '#fff176' },
      // Outer flames
      { x: 2, y: 2, color: '#fb8c00' }, { x: 3, y: 2, color: '#fff176' }, { x: 4, y: 2, color: '#fff176' }, { x: 5, y: 2, color: '#fb8c00' },
      // Inner fire core
      { x: 2, y: 3, color: '#fb8c00' }, { x: 3, y: 3, color: '#ef5350' }, { x: 4, y: 3, color: '#ef5350' }, { x: 5, y: 3, color: '#fb8c00' },
      { x: 1, y: 4, color: '#fb8c00' }, { x: 2, y: 4, color: '#fb8c00' }, { x: 3, y: 4, color: '#fb8c00' }, { x: 4, y: 4, color: '#fb8c00' }, { x: 5, y: 4, color: '#fb8c00' }, { x: 6, y: 4, color: '#fb8c00' },
      // Timber logs
      { x: 2, y: 5, color: '#5d4037' }, { x: 3, y: 5, color: '#5d4037' }, { x: 4, y: 5, color: '#5d4037' }, { x: 5, y: 5, color: '#5d4037' },
      { x: 1, y: 6, color: '#5d4037' }, { x: 6, y: 6, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '1x4', color: '#fb8c00', count: 1 }, // Central orange flame ring
      { type: '1x4', color: '#5d4037', count: 1 }, // Sturdy logs backing
      { type: '2x2', color: '#fff176', count: 1 }, // Radiant bright flame heart
      { type: '2x2', color: '#fb8c00', count: 1 }, // Flickering outer flank arcs
      { type: '1x2', color: '#fb8c00', count: 3 }, // Side orange glowing logs
      { type: '1x2', color: '#ef5350', count: 1 }, // Ember deep cores
      { type: '1x1', color: '#5d4037', count: 2 }, // Burning log ends
    ],
  },
  {
    id: 'maple',
    name: '秋意红枫叶 (Warm Maple Leaf)',
    description: '晚秋森林里的一枚珍藏。红黄相间的锯齿边缘，仿佛封存了整场秋阳的温度。',
    difficulty: 'Hard',
    gridSize: 8,
    targetGrid: [
      // Leaf apex
      { x: 3, y: 1, color: '#ef5350' }, { x: 4, y: 1, color: '#ef5350' },
      // Mid leaf layer
      { x: 2, y: 2, color: '#fb8c00' }, { x: 3, y: 2, color: '#ef5350' }, { x: 4, y: 2, color: '#ef5350' }, { x: 5, y: 2, color: '#fb8c00' },
      // Heart with veins (Yellow line inside)
      { x: 1, y: 3, color: '#ef5350' }, { x: 2, y: 3, color: '#ef5350' }, { x: 3, y: 3, color: '#fff176' }, { x: 4, y: 3, color: '#ef5350' }, { x: 5, y: 3, color: '#ef5350' }, { x: 6, y: 3, color: '#ef5350' },
      { x: 1, y: 4, color: '#fb8c00' }, { x: 2, y: 4, color: '#ef5350' }, { x: 3, y: 4, color: '#fff176' }, { x: 4, y: 4, color: '#fff176' }, { x: 5, y: 4, color: '#ef5350' }, { x: 6, y: 4, color: '#fb8c00' },
      // Bottom layer
      { x: 2, y: 5, color: '#ef5350' }, { x: 3, y: 5, color: '#ef5350' }, { x: 4, y: 5, color: '#ef5350' }, { x: 5, y: 5, color: '#ef5350' },
      // Stem base
      { x: 3, y: 6, color: '#5d4037' }, { x: 4, y: 7, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '1x4', color: '#ef5350', count: 1 }, // Broad red mid plane
      { type: '2x2', color: '#ef5350', count: 2 }, // Deep red inner foliage
      { type: '1x2', color: '#ef5350', count: 3 }, // Apex crown lobes
      { type: '1x2', color: '#fb8c00', count: 2 }, // Orange leaf corner highlights
      { type: '1x2', color: '#fff176', count: 1 }, // Bright yellow central veins
      { type: '1x1', color: '#fff176', count: 1 }, // Highlight end
      { type: '1x1', color: '#5d4037', count: 2 }, // Curved woody stem pieces
    ],
  },
  {
    id: 'fox',
    name: '林野红狐狸 (Forest Red Fox)',
    description: '活跃于黄昏余晖下的机灵小妖精。蓬松的红毛衣与雪白的脸颊，十分聪颖。',
    difficulty: 'Hard',
    gridSize: 8,
    targetGrid: [
      // Ear contours
      { x: 2, y: 1, color: '#fb8c00' }, { x: 5, y: 1, color: '#fb8c00' },
      // Head crown
      { x: 2, y: 2, color: '#fb8c00' }, { x: 3, y: 2, color: '#fb8c00' }, { x: 4, y: 2, color: '#fb8c00' }, { x: 5, y: 2, color: '#fb8c00' },
      // Eyes (black) and face
      { x: 1, y: 3, color: '#fb8c00' }, { x: 2, y: 3, color: '#1b5e20' }, { x: 3, y: 3, color: '#fb8c00' }, { x: 4, y: 3, color: '#fb8c00' }, { x: 5, y: 3, color: '#1b5e20' }, { x: 6, y: 3, color: '#fb8c00' },
      // Cheeks and snout
      { x: 1, y: 4, color: '#ffffff' }, { x: 2, y: 4, color: '#ffffff' }, { x: 3, y: 4, color: '#5d4037' }, { x: 4, y: 4, color: '#5d4037' }, { x: 5, y: 4, color: '#ffffff' }, { x: 6, y: 4, color: '#ffffff' },
      // Body chest
      { x: 2, y: 5, color: '#fb8c00' }, { x: 3, y: 5, color: '#ffffff' }, { x: 4, y: 5, color: '#ffffff' }, { x: 5, y: 5, color: '#fb8c00' },
      // Tail & feet
      { x: 1, y: 6, color: '#fb8c00' }, { x: 2, y: 6, color: '#fb8c00' }, { x: 5, y: 6, color: '#fb8c00' }, { x: 6, y: 6, color: '#ffffff' },
    ],
    initialBricks: [
      { type: '2x2', color: '#fb8c00', count: 1 }, // Torso crown
      { type: '1x4', color: '#fb8c00', count: 1 }, // Broad head plate
      { type: '1x2', color: '#fb8c00', count: 3 }, // Tail, forehead and cheek surrounds
      { type: '1x2', color: '#ffffff', count: 3 }, // Fluffy white chin fur
      { type: '1x1', color: '#1b5e20', count: 2 }, // Mysterious deep dark eyes (with mossy tones)
      { type: '1x1', color: '#5d4037', count: 2 }, // Dark cute nose tip
    ],
  },
  {
    id: 'owl',
    name: '守夜猫头鹰 (Night Watch Owl)',
    description: '静伫在杉盘高处的智慧隐者。圆大的双瞳在静谧幽谷中散发着温和的晨光。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Ear tufts
      { x: 2, y: 1, color: '#1b5e20' }, { x: 5, y: 1, color: '#1b5e20' },
      // Skull
      { x: 2, y: 2, color: '#1b5e20' }, { x: 3, y: 2, color: '#1b5e20' }, { x: 4, y: 2, color: '#1b5e20' }, { x: 5, y: 2, color: '#1b5e20' },
      // Big yellow eyes with orange beak
      { x: 2, y: 3, color: '#fff176' }, { x: 3, y: 3, color: '#1b5e20' }, { x: 4, y: 3, color: '#fb8c00' }, { x: 5, y: 3, color: '#fff176' },
      // Chest feathers (speckles)
      { x: 2, y: 4, color: '#1b5e20' }, { x: 3, y: 4, color: '#ffffff' }, { x: 4, y: 4, color: '#ffffff' }, { x: 5, y: 4, color: '#1b5e20' },
      { x: 2, y: 5, color: '#1b5e20' }, { x: 3, y: 5, color: '#1b5e20' }, { x: 4, y: 5, color: '#1b5e20' }, { x: 5, y: 5, color: '#1b5e20' },
      // Base perch branch
      { x: 1, y: 6, color: '#5d4037' }, { x: 2, y: 6, color: '#5d4037' }, { x: 3, y: 6, color: '#fb8c00' }, { x: 4, y: 6, color: '#fb8c00' }, { x: 5, y: 6, color: '#5d4037' }, { x: 6, y: 6, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '1x4', color: '#1b5e20', count: 2 }, // Deep forest frame layers
      { type: '1x4', color: '#5d4037', count: 1 }, // Perching oak branch
      { type: '2x2', color: '#1b5e20', count: 1 }, // Main head base
      { type: '1x2', color: '#ffffff', count: 1 }, // White front speckle chest
      { type: '1x1', color: '#fff176', count: 2 }, // Huge night vision eyes
      { type: '1x1', color: '#fb8c00', count: 3 }, // Beak and cute talons
    ],
  },
  {
    id: 'orchid',
    name: '深谷幽兰花 (Dewy Valley Orchid)',
    description: '绽放在林泉岸边的野生兰草。带有两点晶亮的露珠，高雅洁净、馨香清远。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Top blossom peak with morning dew
      { x: 3, y: 1, color: '#f5f5f5' }, { x: 4, y: 1, color: '#ffffff' }, // dew White
      // Sideways petals
      { x: 2, y: 2, color: '#f5f5f5' }, { x: 3, y: 2, color: '#f5f5f5' }, { x: 4, y: 2, color: '#f5f5f5' }, { x: 5, y: 2, color: '#f5f5f5' },
      // Flower core
      { x: 3, y: 3, color: '#fff176' }, { x: 4, y: 3, color: '#fff176' },
      // Leaf supports
      { x: 1, y: 4, color: '#4caf50' }, { x: 2, y: 4, color: '#4caf50' }, { x: 5, y: 4, color: '#4caf50' }, { x: 6, y: 4, color: '#4caf50' },
      // Flowerpot containing rich clay
      { x: 2, y: 5, color: '#8d6e63' }, { x: 3, y: 5, color: '#8d6e63' }, { x: 4, y: 5, color: '#8d6e63' }, { x: 5, y: 5, color: '#8d6e63' },
      { x: 3, y: 6, color: '#8d6e63' }, { x: 4, y: 6, color: '#8d6e63' },
    ],
    initialBricks: [
      { type: '1x4', color: '#8d6e63', count: 1 }, // Flower pot rim
      { type: '2x2', color: '#f5f5f5', count: 1 }, // Upper floral center
      { type: '1x2', color: '#f5f5f5', count: 2 }, // Elegant pink-white side wings
      { type: '1x2', color: '#4caf50', count: 2 }, // Lush green fan leaves
      { type: '1x2', color: '#8d6e63', count: 1 }, // Plant pot base bottom
      { type: '1x1', color: '#ffffff', count: 1 }, // Luminous dew droplet
      { type: '1x1', color: '#fff176', count: 2 }, // Honey yellow flower heart
    ],
  },
  {
    id: 'butterfly',
    name: '幽谷仙羽蝶 (Spotted Butterfly)',
    description: '飞舞在一池青莲上的荧光蝴蝶。羽翼边缘点点闪烁，正划过午后温润的光。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Antennae
      { x: 3, y: 1, color: '#5d4037' }, { x: 4, y: 1, color: '#5d4037' },
      // Wing bounds top & body
      { x: 1, y: 2, color: '#4caf50' }, { x: 2, y: 2, color: '#4caf50' }, { x: 3, y: 2, color: '#5d4037' }, { x: 4, y: 2, color: '#5d4037' }, { x: 5, y: 2, color: '#4caf50' }, { x: 6, y: 2, color: '#4caf50' },
      // Yellow wing eyes
      { x: 1, y: 3, color: '#4caf50' }, { x: 2, y: 3, color: '#fff176' }, { x: 3, y: 3, color: '#5d4037' }, { x: 4, y: 3, color: '#5d4037' }, { x: 5, y: 3, color: '#fff176' }, { x: 6, y: 3, color: '#4caf50' },
      // Wing bottom winglet
      { x: 2, y: 4, color: '#4caf50' }, { x: 3, y: 4, color: '#5d4037' }, { x: 4, y: 4, color: '#5d4037' }, { x: 5, y: 4, color: '#4caf50' },
      { x: 3, y: 5, color: '#5d4037' }, { x: 4, y: 5, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '1x4', color: '#5d4037', count: 1 }, // Slender elegant brown abdomen
      { type: '2x2', color: '#4caf50', count: 2 }, // Upper wing green sails
      { type: '1x2', color: '#4caf50', count: 4 }, // Outer fluttering wing tips
      { type: '1x2', color: '#5d4037', count: 2 }, // Upper neck and wing linkages
      { type: '1x1', color: '#fff176', count: 2 }, // Gold wing mirror specs
    ],
  },
  {
    id: 'apple',
    name: '林地甜苹果 (Forest Gala Apple)',
    description: '熟透在林中野苹果树底的一只佳果。深红的果皮带着清爽多汁的天然果香。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Sprout twig & leaf
      { x: 3, y: 1, color: '#5d4037' }, { x: 4, y: 1, color: '#2e7d32' },
      // Upper contour
      { x: 2, y: 2, color: '#ef5350' }, { x: 3, y: 2, color: '#ef5350' }, { x: 4, y: 2, color: '#ef5350' }, { x: 5, y: 2, color: '#ef5350' },
      // Mid fruit bulge with gloss reflex
      { x: 1, y: 3, color: '#ef5350' }, { x: 2, y: 3, color: '#ffffff' }, { x: 3, y: 3, color: '#ef5350' }, { x: 4, y: 3, color: '#ef5350' }, { x: 5, y: 3, color: '#ef5350' }, { x: 6, y: 3, color: '#ef5350' },
      { x: 1, y: 4, color: '#ef5350' }, { x: 2, y: 4, color: '#ef5350' }, { x: 3, y: 4, color: '#ef5350' }, { x: 4, y: 4, color: '#ef5350' }, { x: 5, y: 4, color: '#ef5350' }, { x: 6, y: 4, color: '#ef5350' },
      // Lower body
      { x: 2, y: 5, color: '#ef5350' }, { x: 3, y: 5, color: '#ef5350' }, { x: 4, y: 5, color: '#ef5350' }, { x: 5, y: 5, color: '#ef5350' },
      // Cleft
      { x: 3, y: 6, color: '#5d4037' }, { x: 4, y: 6, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '1x4', color: '#ef5350', count: 2 }, // Large fleshy core slices
      { type: '2x2', color: '#ef5350', count: 2 }, // High bulge segments
      { type: '1x2', color: '#ef5350', count: 3 }, // Border curved flesh lobes
      { type: '1x2', color: '#5d4037', count: 1 }, // Brown branch stem
      { type: '1x1', color: '#ffffff', count: 1 }, // Sun gloss highlight spot
      { type: '1x1', color: '#2e7d32', count: 1 }, // Sweet green spring leaf
      { type: '1x1', color: '#ef5350', count: 2 }, // Bottom cleft details
    ],
  },
  {
    id: 'duck',
    name: '林溪小黄鸭 (Friendly Forest Duck)',
    description: '畅游在清澈林泉里的亮黄色野鸭。嘴里含着水草，悠然自得地随波逐流。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Head and bills
      { x: 4, y: 2, color: '#fff176' }, { x: 5, y: 2, color: '#fff176' }, { x: 6, y: 2, color: '#fb8c00' },
      // Throat
      { x: 4, y: 3, color: '#fff176' },
      // Torso with dark wing flap
      { x: 3, y: 4, color: '#fff176' }, { x: 4, y: 4, color: '#fff176' },
      { x: 1, y: 5, color: '#fff176' }, { x: 2, y: 5, color: '#fb8c00' }, { x: 3, y: 5, color: '#fff176' }, { x: 4, y: 5, color: '#fff176' },
      // Water level (Lake wave rows representing blue)
      { x: 1, y: 6, color: '#1e88e5' }, { x: 2, y: 6, color: '#1e88e5' }, { x: 3, y: 6, color: '#1e88e5' }, { x: 4, y: 6, color: '#1e88e5' }, { x: 5, y: 6, color: '#1e88e5' },
    ],
    initialBricks: [
      { type: '1x4', color: '#1e88e5', count: 1 }, // Flowing creek blue waterline
      { type: '2x2', color: '#fff176', count: 2 }, // Plump yellow duck tail and body
      { type: '1x2', color: '#fff176', count: 1 }, // Duck neck curve
      { type: '1x1', color: '#fb8c00', count: 2 }, // Bright bill and amber brown feathers
      { type: '1x1', color: '#fff176', count: 1 }, // Crown feathers
    ],
  },
  {
    id: 'starry',
    name: '杉梢繁星 (Silent Night Star)',
    description: '高悬在夜幕松梢上的五角星。洒下如萤火虫般的光芒，指引归林的路。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Star top spire
      { x: 3, y: 1, color: '#fff176' }, { x: 4, y: 1, color: '#fff176' },
      // Star mid crown
      { x: 3, y: 2, color: '#fff176' }, { x: 4, y: 2, color: '#fff176' },
      // Deep wings
      { x: 1, y: 3, color: '#fff176' }, { x: 2, y: 3, color: '#fff176' }, { x: 3, y: 3, color: '#fff176' }, { x: 4, y: 3, color: '#fff176' }, { x: 5, y: 3, color: '#fff176' }, { x: 6, y: 3, color: '#fff176' },
      // Bottom star spires
      { x: 2, y: 4, color: '#fff176' }, { x: 5, y: 4, color: '#fff176' },
      // Pine foliage overlay backgrounds indicating evening sky
      { x: 1, y: 5, color: '#2e7d32' }, { x: 6, y: 5, color: '#2e7d32' },
    ],
    initialBricks: [
      { type: '1x4', color: '#fff176', count: 2 }, // Star transverse crossbars
      { type: '2x2', color: '#fff176', count: 1 }, // Solid stellar center
      { type: '1x2', color: '#fff176', count: 1 }, // Top head spire tips
      { type: '1x1', color: '#fff176', count: 2 }, // Twin foot flares
      { type: '1x1', color: '#2e7d32', count: 2 }, // Underpin ambient branches
    ],
  },
  {
    id: 'bamboo',
    name: '青青雨后笋 (Spring Bamboo)',
    description: '刚经历雷雨洗礼、破土而出的小稚竹。节节向上拔高，充满顽强蓬勃的生命力。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Bamboo growth tip apex
      { x: 3, y: 1, color: '#4caf50' },
      // Segment 1 and Side leaf shoots
      { x: 3, y: 2, color: '#2e7d32' }, { x: 4, y: 2, color: '#4caf50' },
      { x: 3, y: 3, color: '#2e7d32' },
      // Segment 2 and left leaf shoot
      { x: 2, y: 4, color: '#4caf50' }, { x: 3, y: 4, color: '#1b5e20' },
      // Heavy stem stalk base
      { x: 3, y: 5, color: '#1b5e20' }, { x: 4, y: 5, color: '#1b5e20' },
      { x: 3, y: 6, color: '#1b5e20' }, { x: 4, y: 6, color: '#1b5e20' },
      { x: 3, y: 7, color: '#1b5e20' }, { x: 4, y: 7, color: '#1b5e20' },
    ],
    initialBricks: [
      { type: '2x2', color: '#1b5e20', count: 2 }, // Stout forest green lower stalks
      { type: '1x2', color: '#1b5e20', count: 1 }, // Middle joint
      { type: '1x2', color: '#2e7d32', count: 1 }, // Slender trunk top segment
      { type: '1x1', color: '#4caf50', count: 3 }, // Sharp leafy sprout shoots
      { type: '1x1', color: '#1b5e20', count: 1 }, // Base soil seal
    ],
  },
  {
    id: 'rose',
    name: '山谷野玫瑰 (Mountain Rose)',
    description: '绽放在无人山谷中的一朵红玫瑰。饱满而优雅的花瓣层叠，凝结着清幽兰香。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Top petal tip
      { x: 3, y: 1, color: '#c62828' }, { x: 4, y: 1, color: '#c62828' },
      // Layer 2 petals
      { x: 2, y: 2, color: '#ef5350' }, { x: 3, y: 2, color: '#c62828' }, { x: 4, y: 2, color: '#c62828' }, { x: 5, y: 2, color: '#ef5350' },
      // Blossom heart
      { x: 2, y: 3, color: '#ef5350' }, { x: 3, y: 3, color: '#fff176' }, { x: 4, y: 3, color: '#fff176' }, { x: 5, y: 3, color: '#ef5350' },
      // Lower base petals
      { x: 3, y: 4, color: '#c62828' }, { x: 4, y: 4, color: '#c62828' },
      // Rose thorny green stem and leaf
      { x: 3, y: 5, color: '#2e7d32' }, { x: 2, y: 5, color: '#1b5e20' },
      { x: 3, y: 6, color: '#2e7d32' }, { x: 4, y: 6, color: '#1b5e20' },
    ],
    initialBricks: [
      { type: '2x2', color: '#c62828', count: 2 }, // Crimson base rose petals
      { type: '1x2', color: '#ef5350', count: 2 }, // Soft scarlet side rosebuds
      { type: '1x2', color: '#2e7d32', count: 1 }, // Thick green stem stalk
      { type: '1x1', color: '#fff176', count: 2 }, // Golden yellow pistil pollen
      { type: '1x1', color: '#1b5e20', count: 2 }, // Leaf thorns flanking sides
    ],
  },
  {
    id: 'tadpole',
    name: '林泉游蝌蚪 (Creek Tadpole)',
    description: '林地清泉里摇一尾波浪的小蝌蚪。墨蓝色的圆大身子，正在泉水中追逐星光。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Big head
      { x: 2, y: 2, color: '#1b5e20' }, { x: 3, y: 2, color: '#1b5e20' }, { x: 4, y: 2, color: '#1b5e20' },
      { x: 2, y: 3, color: '#1b5e20' }, { x: 3, y: 3, color: '#1b5e20' }, { x: 4, y: 3, color: '#1b5e20' },
      // Tail starts
      { x: 4, y: 4, color: '#1b5e20' }, { x: 5, y: 4, color: '#4caf50' },
      // Tail curves and splashes
      { x: 5, y: 5, color: '#4caf50' }, { x: 6, y: 5, color: '#1b5e20' },
    ],
    initialBricks: [
      { type: '2x2', color: '#1b5e20', count: 1 }, // Solid chubby body center
      { type: '1x2', color: '#1b5e20', count: 2 }, // Top forehead and snout corners
      { type: '1x2', color: '#4caf50', count: 1 }, // Wiggling translucent spring tail
      { type: '1x1', color: '#1b5e20', count: 1 }, // Swirl splash end
    ],
  },
  {
    id: 'dewdrop',
    name: '晨间圆露珠 (Morning Dewdrop)',
    description: '在草梢摇摇欲坠的绝美水滴。完美透亮的折射出整片森林的绿意。',
    difficulty: 'Easy',
    gridSize: 8,
    targetGrid: [
      // Dew peak top
      { x: 3, y: 1, color: '#ffffff' },
      // Dew main body
      { x: 2, y: 2, color: '#cfd8dc' }, { x: 3, y: 2, color: '#ffffff' }, { x: 4, y: 2, color: '#cfd8dc' },
      { x: 1, y: 3, color: '#cfd8dc' }, { x: 2, y: 3, color: '#f5f5f5' }, { x: 3, y: 3, color: '#f5f5f5' }, { x: 4, y: 3, color: '#f5f5f5' }, { x: 5, y: 3, color: '#cfd8dc' },
      { x: 2, y: 4, color: '#cfd8dc' }, { x: 3, y: 4, color: '#cfd8dc' }, { x: 4, y: 4, color: '#cfd8dc' },
      // Grass support row
      { x: 1, y: 5, color: '#4caf50' }, { x: 2, y: 5, color: '#2e7d32' }, { x: 3, y: 5, color: '#2e7d32' }, { x: 4, y: 5, color: '#2e7d32' }, { x: 5, y: 5, color: '#4caf50' },
    ],
    initialBricks: [
      { type: '2x2', color: '#cfd8dc', count: 1 }, // Core droplet refraction
      { type: '1x4', color: '#2e7d32', count: 1 }, // Supporting grass base blades
      { type: '1x2', color: '#f5f5f5', count: 1 }, // Bright dewy core highlight
      { type: '1x2', color: '#cfd8dc', count: 2 }, // Border water contour frames
      { type: '1x1', color: '#ffffff', count: 2 }, // Sun glares reflection whites
      { type: '1x1', color: '#4caf50', count: 2 }, // Dew grass edge caps
    ],
  },
  {
    id: 'log',
    name: '静水漂浮木 (Floating Log)',
    description: '一截沉躺在森林湿地中的饱满老木。上面正在悄悄长出新的苔藓。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Moss top layer
      { x: 2, y: 2, color: '#4caf50' }, { x: 3, y: 2, color: '#4caf50' },
      // Timber layer
      { x: 1, y: 3, color: '#5d4037' }, { x: 2, y: 3, color: '#5d4037' }, { x: 3, y: 3, color: '#5d4037' }, { x: 4, y: 3, color: '#5d4037' }, { x: 5, y: 3, color: '#5d4037' }, { x: 6, y: 3, color: '#5d4037' },
      // Rings and cracks
      { x: 1, y: 4, color: '#8d6e63' }, { x: 2, y: 4, color: '#5d4037' }, { x: 3, y: 4, color: '#5d4037' }, { x: 4, y: 4, color: '#5d4037' }, { x: 5, y: 4, color: '#5d4037' }, { x: 6, y: 4, color: '#8d6e63' },
      // Deep ground base
      { x: 2, y: 5, color: '#5d4037' }, { x: 3, y: 5, color: '#5d4037' }, { x: 4, y: 5, color: '#5d4037' }, { x: 5, y: 5, color: '#5d4037' },
    ],
    initialBricks: [
      { type: '1x4', color: '#5d4037', count: 2 }, // Dense core wood logs
      { type: '1x2', color: '#5d4037', count: 2 }, // Outer log segments
      { type: '1x2', color: '#4caf50', count: 1 }, // Sprouting damp green mosses
      { type: '1x1', color: '#8d6e63', count: 2 }, // Lighter circular wood grain ends
    ],
  },
  {
    id: 'beehive',
    name: '林木金蜂巢 (Honey Beehive)',
    description: '筑在老树枝丫下的金色蜂房。满满充溢着百花精粹而成的晶黄蜜糖。',
    difficulty: 'Hard',
    gridSize: 8,
    targetGrid: [
      // Upper branch
      { x: 2, y: 1, color: '#5d4037' }, { x: 3, y: 1, color: '#5d4037' }, { x: 4, y: 1, color: '#5d4037' }, { x: 5, y: 1, color: '#5d4037' },
      // Golden Hive Upper
      { x: 2, y: 2, color: '#fff176' }, { x: 3, y: 2, color: '#fb8c00' }, { x: 4, y: 2, color: '#fb8c00' }, { x: 5, y: 2, color: '#fff176' },
      // Hive Mid honey row
      { x: 1, y: 3, color: '#fb8c00' }, { x: 2, y: 3, color: '#fff176' }, { x: 3, y: 3, color: '#fff176' }, { x: 4, y: 3, color: '#fff176' }, { x: 5, y: 3, color: '#fff176' }, { x: 6, y: 3, color: '#fb8c00' },
      // Hive Core entrance (represented by black/dark brown)
      { x: 2, y: 4, color: '#fb8c00' }, { x: 3, y: 4, color: '#5d4037' }, { x: 4, y: 4, color: '#5d4037' }, { x: 5, y: 4, color: '#fb8c00' },
      // Hive Lower base
      { x: 3, y: 5, color: '#fff176' }, { x: 4, y: 5, color: '#fff176' },
    ],
    initialBricks: [
      { type: '1x4', color: '#5d4037', count: 1 }, // Dark wooden tree branch holding hive
      { type: '1x4', color: '#fff176', count: 1 }, // Glowing sweet flower honey row
      { type: '2x2', color: '#fb8c00', count: 1 }, // Rich orange honey casing flanks
      { type: '1x2', color: '#fb8c00', count: 3 }, // Side protection panels
      { type: '1x2', color: '#fff176', count: 1 }, // Golden hive foot cap
      { type: '1x2', color: '#5d4037', count: 1 }, // Hive hollow entry hole
    ],
  },
  {
    id: 'fern-stem',
    name: '山谷绿蕨草 (Mori Fern Frond)',
    description: '森系最经典的叶脉装饰。在溪流石缝中卷曲展开，带来古生代森林的悠远。',
    difficulty: 'Medium',
    gridSize: 8,
    targetGrid: [
      // Top curl
      { x: 4, y: 1, color: '#2e7d32' }, { x: 5, y: 1, color: '#2e7d32' },
      // Leaf tiers 1
      { x: 3, y: 2, color: '#4caf50' }, { x: 4, y: 2, color: '#2e7d32' },
      // Leaf tiers 2 with mid spine
      { x: 2, y: 3, color: '#4caf50' }, { x: 3, y: 3, color: '#2e7d32' }, { x: 4, y: 3, color: '#2e7d32' }, { x: 5, y: 3, color: '#4caf50' },
      // Leaf tiers 3 with mid spine
      { x: 1, y: 4, color: '#4caf50' }, { x: 2, y: 4, color: '#2e7d32' }, { x: 3, y: 4, color: '#1b5e20' }, { x: 4, y: 4, color: '#2e7d32' }, { x: 5, y: 4, color: '#4caf50' },
      // Base stem
      { x: 3, y: 5, color: '#1b5e20' },
      { x: 3, y: 6, color: '#1b5e20' },
    ],
    initialBricks: [
      { type: '1x4', color: '#2e7d32', count: 1 }, // Solid central sturdy frond spine
      { type: '1x2', color: '#4caf50', count: 3 }, // Delicate light-green fern wing tips
      { type: '1x1', color: '#1b5e20', count: 3 }, // Dark trunk rooting stems
      { type: '1x1', color: '#2e7d32', count: 2 }, // Spine details
    ],
  },
];
