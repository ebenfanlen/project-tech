---
date: 2026-04-22
type: brand-visual-concepts
status: draft-v1
stage: B (Brand Guardian)
next_stage: C (UI Designer 合并色板/字体)
project: Shipwright / 船匠
author: Brand Guardian
---

# Shipwright / 船匠 —— 品牌视觉概念 v1

> 本文档交付给阶段 C 的 UI Designer 作为视觉基底。Logo 方向由创始人从 4 选 1（或 2 个方向做 A/B 打样），色板与字体在阶段 C 合并细化。

---

## Part 1：品牌视觉定位陈述（Brand Visual Statement）

### 三句话视觉态度

1. **Shipwright 的视觉是一份"工程图纸"，不是一张海报。** 它用 grid、坐标、公差、线宽来说话；克制，不煽情；精度优先于装饰。
2. **Shipwright 长得像一台精密仪器的说明书，不是一个 AI 产品的营销落地页。** 每一个像素都有理由，每一处留白都是刻意的呼吸，不存在"看起来很酷但没用"的装饰元素。
3. **它 90% 是 Craftsman（Linear / 37signals / Vercel 的端正），10% 是 Geek 证据**（一个恰到好处的 CLI 游标、一段 diff 代码、一张架构图作为"我真的会造"的签名）。永远不要让 Geek 部分超过 10%，那会把客户从 CEO 变成工程师。

### 一句话形象隐喻

> **如果 Shipwright 是一个物体，它是一把日本船匠的铜制手钉（釘/kasugai）**——只有一个用途（把木板钉实），但每一根的尺寸、弯度、锻打的纹理都是匠人亲手控制的。它不会假装自己是瑞士军刀，也不会装饰自己是艺术品。它就是"被需要时能用、用完能留下痕迹"的那一件。

备选隐喻（供参考，不并列使用）：
- 一把蓝图圆规（Bauhaus 工业感）
- 一把 45 度的木工角尺（L 形、可量可画可验）
- 一段无人机拍摄的船坞俯视图（有比例、有秩序、有水）

### 是什么 / 不是什么（三组对照）

| 是 | 不是 |
|---|---|
| 精密仪器（像 Leica 相机、Muji 文具、Linear app） | 玩具（不是 Notion 的彩色 emoji、不是 Canva 的渐变） |
| 手工工具（有人味、有使用痕迹、可靠） | 流水线产品（不是那种"通用 AI 解决方案"的千篇一律） |
| 一份已盖章的施工图（克制、确定、可交付） | 一张融资路演 PPT（不是"颠覆行业"的宣言） |

---

## Part 2：Logo 概念方向（4 个独立方向）

### Concept A：Hull Lines 船型线（字体导向 / Wordmark-first）

#### 核心视觉想法

用"造船厂的船体型线图（Lines Plan）"作为 wordmark 的基础肌理。Wordmark 本体是定制字型的 `Shipwright`，但字母 `i` 的两点被置换为两条极细的水平线（对应船体型线中的 waterline 水线），`h` 和 `t` 的立柱则暗合肋骨（frame）的间距。整体无独立图标，纯 wordmark。

```
   ─────────────────────────────   ← waterline 01
  ╱                             ╲
 Sh i p w r i g h t              ╲
  ╲      .  .           .  .    ╱  ← 被置换的 i 点 = 水线短横
   ─────────────────────────────   ← waterline 02

    船 匠
    ↑↑
    两字之间距 = Shipwright 的 "h-t" 字距
    （在视觉上暗示中英文"同一条船"）
```

#### 符号学解读

- **双关兑现**：Hull Lines 是造船厂每天在用的技术图纸（maritime），同时也是一种极度克制的排版语言（craft）——两层含义在同一个图形上重合。
- **"Don't hire, Ship" 的视觉化**：水线是船"正在载货、正在航行"的证据，不是静态的锚。
- **14 天硬承诺的视觉对应**：wordmark 最右侧可以叠一个极小的 `/14d` 刻度戳记（像仪器校准的日期戳），作为辅助签名。

#### 中文"船匠"字样处理

- 定制**明朝体改造**：保留明朝的横细竖粗骨架（对应古代船木的纹理），但把横笔末端的"三角衬线"（喇叭嘴）削平为直角——这是"保留传统但拒绝过度装饰"的明确表态。
- 字号约为英文 Shipwright x-height 的 1.2 倍，底线对齐。
- 可接受替代：思源宋体 Heavy / 方正博雅宋 的删改版本。

#### 英文 Shipwright 字样处理

- 首选定制 wordmark，以 **GT America Mono** 或 **Söhne Mono** 为骨架，但所有圆弧（p、g 的碗）收紧为平底。
- 备选现成字体：**Inter Display Medium**（-2% 字距）或 **GT Walsheim Medium**。
- 避免：Helvetica（太 IBM）、Montserrat（太 startup 2015）、任何衬线字体（太律师事务所）。

#### 变体

| 场景 | 呈现 |
|---|---|
| Favicon 16×16 | 只保留两条 waterline + 一个 S（缩成极简标识） |
| 反白（深色底） | 水线变为 #E8E4DC 暖白，wordmark 同色 |
| 单色印刷 | 纯黑或 Pantone Cool Gray 11，水线降为 40% 灰 |
| 名片 300dpi | wordmark 宽度 18mm，水线延伸到卡片边缘外（裁切时切掉，制造"这张图是被裁出来的"错觉） |

#### 优 / 缺 / 风险

- **优点**：极度自信、不需要解释、印刷适应性最好、中英文融合自然。
- **缺点**：小尺寸下水线容易丢失（需要 SVG 线宽 hint）；对定制字型预算有要求。
- **风险**：如果找不到合适的字型设计师，回退到 Inter Display 会让整体"精密度"下降一档。

---

### Concept B：The Keel 龙骨（符号导向 / Mark + Wordmark）

#### 核心视觉想法

一个独立的几何 mark：**一个窄长的等腰梯形，底部有一条从底边延伸出的短直线**——抽象自"船的龙骨（keel）加上伸出水面的桅杆截面"。梯形本身又可读作大写 `A`（去掉横梁）或字母 `W`（wright 的首字母）的极简变体。整体尺寸比 1:2.4（黄金比稍拉长）。

```
        │           ← 桅杆 / 代码光标
        │
       ╱ ╲
      ╱   ╲          ← 龙骨（梯形船体截面）
     ╱     ╲
    ─────────

    [KEEL-MARK]   Shipwright
                  船匠
```

#### 符号学解读

- **龙骨 = 船的第一根木头**，造船的起点；对应 Shipwright 的定位"从 0 到 1 造船，不是改装别人的船"。
- **桅杆兼作 CLI 光标**（blinking caret）：在动画版本里，顶部那根短线可以做极慢的 2 秒呼吸闪烁——这就是那 10% 的 Geek 签名。
- **14 天承诺**：mark 可以在特定场景（例如首屏、合同抬头）下方加一圈极细的刻度环（14 个 tick），作为"时间契约"的视觉印章。

#### 中文"船匠"字样处理

- **方正兰亭黑 Pro DemiBold** 或**思源黑体 CN Medium**。
- 黑体（而非明朝）的原因：mark 本身已经提供了"古典"的梯形几何，中文字需要保持工业感来平衡，否则整体偏向"博物馆"风格。
- 字间距收紧到 -30 units，贴近合为一个视觉块。

#### 英文 Shipwright 字样处理

- **Söhne Buch** 或 **Neue Haas Grotesk Display 55 Roman**。
- 小尺寸场景切换到 **Inter Medium**（Web 原生渲染稳定）。

#### 变体

| 场景 | 呈现 |
|---|---|
| Favicon 16×16 | 只留 KEEL-MARK（梯形 + 桅杆），不带文字 |
| 单色反白 | mark 与文字同色，建议 #FAFAF7 在 #101014 底上 |
| 动画版（官网 hero） | 顶部桅杆/光标做 2 秒呼吸闪烁（#A3A3A3 ↔ #FAFAF7） |
| 名片压凹 | KEEL-MARK 做盲文压印（blind deboss），文字正常印刷 |

#### 优 / 缺 / 风险

- **优点**：mark 独立性强，可单独做 app icon / 贴纸 / 徽章；Geek 签名内建。
- **缺点**：梯形几何很容易"撞脸"其他 B2B SaaS（如 Stripe 的 S、Figma 的 F 的某些变体）—— 必须通过桅杆细节和比例拉开距离。
- **风险**：如果桅杆做得太短，会失去 CLI 暗示；太长会变成"Monument Valley"式的纪念碑，偏向娱乐。黄金长度是梯形高度的 0.6x。

---

### Concept C：双语 Lockup "船 | Shipwright"（中英并置方案）

#### 核心视觉想法

这不是一个 logo，是一个**排版锁定系统**。核心是一根竖直的 1px 细线（hairline rule），**左侧是中文"船"字**（单字，不是"船匠"两字），**右侧是英文 `Shipwright`** 的 wordmark。这根竖线就是品牌的"脊柱"——它既是中英文的分界线，又是船的桅杆立起来的暗示。

```
          │
    船   │   Shipwright
          │
          │
         ─┴─  ← 刻度底座（14 天承诺的锚点）
```

- 中文只用"船"一个字（而不是"船匠"），因为：**中文一个字 = 英文一个 word**，视觉上对称；"匠"的含义由英文 `-wright` 的词根承担。
- 底部那根横短线不是装饰，是"14 天交付刻度"的起点——在不同场景里可以延伸出 14 个 tick 作为进度条。

#### 符号学解读

- **竖线（Pipe `|`）本身就是 CLI 里的"管道符"**——这是给懂技术的客户的第二层暗号：我们用工程师的语言说话。
- **单字"船" = 东方汉字的"以少驭多"**（一个字承载一整个概念），呼应 Craft 品牌哲学：最少的元素，最多的含义。
- **左右结构**天然适合跨境电商语境：左边"船"（中国发货地） | 右边"Shipwright"（全球收货端）——视觉上就是跨境。

#### 中文字样处理

- "船"字用**康熙字典体**或**方正清刻本悦宋**的字形（保留古代船木刻印的骨感），但字面调整为现代比例（x-height 匹配英文 cap-height）。
- 字重比英文稍重半档，因为汉字视觉重量天生偏重。

#### 英文 Shipwright 字样处理

- **GT Walsheim Pro Medium** 或 **Söhne Kräftig**。
- 字间距 normal（不收紧），让字母呼吸，与左侧汉字的实心感形成对比。

#### 变体

| 场景 | 呈现 |
|---|---|
| Favicon 16×16 | 只保留 "船" 字 + 1px 竖线（砍掉英文） |
| 横向长条（网站 nav） | 整体 lockup 高度 32px |
| 反白 | 竖线保持 hairline（0.5px @ 2x），不要加粗 |
| 印章版（合同） | "船" 字做朱红圆章（Pantone 186 C），英文保持黑 |

#### 优 / 缺 / 风险

- **优点**：独特性最强（目前跨境电商 / AI Agency 里没人这样做中英并置）；文化资本最高；中文市场穿透力最强。
- **缺点**：海外市场（阶段 2）上 "船" 字对非华语客户是陌生符号 —— 需要在海外版单独做一个"去中文"的变体，但这会削弱整体识别。
- **风险**：容易被误读为"只是一个排版"而非"一个 logo"——需要通过极其严格的比例规范来确立其作为"mark"的合法性。

---

### Concept D：Cross-Section 船体横截面（大胆 / 跨界方案）

#### 核心视觉想法

这是 4 个方向里最大胆的一个：logo 是**一个船体横截面的技术制图**—— 不是写实的船，而是**海军建筑学（Naval Architecture）里的 Body Plan 切面图**：一组从中心对称展开的弧线，每条弧线代表船体在不同站位（station）的横截面。叠加上一个极细的水平线表示"水线"。

但——**每条弧线其实是由代码字符组成的**（e.g., `<`, `>`, `/`, `\`, `|`），从远处看是船体曲线，放大看是 ASCII 艺术。

```
远看（缩略图 / 32px）：             近看（64px+）：

         ╮╮╮                              >>>
       ╮╮  ╮╮                           >>   >>
     ╮╮      ╮╮                       >>       >>
   ╮╮          ╮╮                   >>           >>
 ─────────────────                 / ─ ─ ─ ─ ─ ─ ─ \    ← 水线是 dash
   ╰╰          ╰╰                   \\           //
     ╰╰      ╰╰                       \\       //
       ╰╰  ╰╰                           \\   //
         ╰╰╰                              \\\
```

#### 符号学解读

- **最纯粹的 craft × code 双关兑现**：远看是船，近看是代码；两种阅读距离，两种身份。
- **14 天硬承诺**：水线可以在特殊场景（e.g., 交付日、合同签订）变成 14 个短横（`─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─`），每一道 = 一天。
- 这是 4 个方向里**唯一在视觉上把"我们用 AI+ 工程交付"说清楚的**方向。

#### 中文"船匠"字样处理

- 与 mark 保持**极大对比**：mark 是曲线构成的，文字必须是**最硬的几何黑体**—— **思源黑体 Heavy** 或**阿里巴巴普惠体 Heavy**。
- 字号较大（比 Concept A 的中文大 15%），承担主识别职责（因为 mark 本身偏装饰）。

#### 英文 Shipwright 字样处理

- **JetBrains Mono Medium** —— 这是这个方向唯一合理的选择，因为 mark 是代码构成的，wordmark 必须是等宽字体才能"血统一致"。
- 字距 normal，不加花哨变化。

#### 变体

| 场景 | 呈现 |
|---|---|
| Favicon 16×16 | 极大难度——只保留水平中线 + 两个小弧（从"船"退化为"≥≥"） |
| 反白 | mark 颜色降为 60% 灰，水线保持亮色 —— 这是唯一有层级的方向 |
| 动画版 | 弧线可以做"水面波动"动画（极慢 4 秒周期）—— 但这是 Geek 10% 的最大上限 |
| 印刷名片 | 建议用白色哑光纸 + 深灰色单色，避免金属油墨（会变成赛博朋克） |

#### 优 / 缺 / 风险

- **优点**：独特性、记忆度、符号学深度均为 4 方向最高；10% Geek 签名内建且完美。
- **缺点**：小尺寸场景难以 scale；设计执行难度是 4 方向里最高的（需要真正理解 ASCII + 船舶工程双重语言的设计师）。
- **风险**：走错一步就会变成"极客玩具"，把非技术背景的跨境电商客户吓跑。这个方向适合做 **2027+ 海外市场的高识别版**，国内市场优先考虑 A / B / C。

---

### 4 方向对比表

| 维度 | A. Hull Lines | B. The Keel | C. 双语 Lockup | D. Cross-Section |
|---|---|---|---|---|
| 风险等级 | 低 | 中 | 中 | 高 |
| 独特性 | 中 | 中 | 高 | 极高 |
| 国内市场穿透力 | 高 | 高 | 极高 | 中 |
| 海外市场穿透力 | 高 | 高 | 中（需变体） | 高 |
| Favicon 表现 | 中 | 极好 | 中 | 差 |
| 印刷表现 | 极好 | 好 | 极好 | 中 |
| 设计执行难度 | 中 | 低 | 中 | 极高 |
| 10% Geek 签名内建 | 弱（靠 /14d 戳记） | 强（CLI 光标） | 强（Pipe 符） | 极强（ASCII 船体） |
| **推荐场景** | **保守主打** | **平衡主打** | **差异化主打** | **实验品支线** |

**Brand Guardian 建议**：阶段 C 打样 Concept B + Concept C 两个方向（B 降低风险、C 建立差异）；Concept D 作为 2027 海外扩张时的储备方案；Concept A 若预算与字型资源齐备是最高级选项但易被低估。

---

## Part 3：SKU 图标系统（4 个产品图标的同源衍生）

所有 4 个 SKU 图标共享一套视觉 DNA：**正方形 border + 内嵌的船舶部件抽象几何**。border 是 1.5px 的硬线（对应"契约边界、交付边界"），内嵌图形共用 Concept B 的龙骨/桅杆语汇（如果最终选 A/C/D，同步替换为对应语汇，但 DNA 不变）。

| SKU | 中文 | 图标核心几何 | 符号学 |
|---|---|---|---|
| **Pilot Pod** | 试航舱 | 方框内：一个小圆点 + 从圆点辐射出的一段短弧线（像雷达一次扫描） | 试航 = 一次扫描、一次探测，不是完整航行 |
| **Vibecoding Pod** | 匠造舱 | 方框内：Concept B 的龙骨梯形（完整呈现，实心填充） | 匠造 = 核心产品，承担主 mark 的变体 |
| **Fleet Integration** | 舰队集成 | 方框内：3 个小梯形（龙骨的缩小版）按 2+1 排列 | 舰队 = 多船协同，呼应"集成多个系统" |
| **Crew Retainer** | 船员月租 | 方框内：一条水平线 + 水平线上方的 2 个小圆（船员头顶在船上） | 月租 = 持续驻扎，"船员就在船上" |

```
[Pilot Pod]   [Vibecoding]   [Fleet Int.]   [Crew Ret.]
┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
│         │   │   ╱╲    │   │  ╱╲     │   │         │
│   •╲    │   │  ╱  ╲   │   │ ╱  ╲╱╲  │   │  ○   ○  │
│         │   │ ╱    ╲  │   │  ╱╲     │   │ ────── │
│         │   │────────│   │         │   │         │
└─────────┘   └─────────┘   └─────────┘   └─────────┘
  (扫描)        (龙骨)        (舰队)        (驻舰)
```

**一致性约束**：
- 方框尺寸统一（24×24 @ 1x，48×48 @ 2x）
- 内嵌图形与方框留白 = 4px（@1x）
- 所有线宽 1.5px（方框）+ 1px（内嵌线条）
- 禁止在 SKU 图标上加颜色；颜色由 UI Designer 在阶段 C 统一配色（但 SKU 间不应通过颜色区分，应该通过形状区分）

---

## Part 4：品牌应用场景示例

### 4.1 官网首屏（Landing Page Hero）

- **左上角 navbar**：Logo lockup（Concept B/C 完整版），左对齐，高度 32px。
- **Hero 区域**：不放 logo；放一句巨大的 Tagline `「别堆人，造船。」/ "Don't hire. Ship."`—— 字号占屏宽 80%，左对齐。下方一行小字：`Shipwright Cargo Engineering · 跨境电商 AI Agency · 深圳 / 上海`。
- **背景**：纯色（#FAFAF7 暖白 / 或 #101014 深炭），禁止渐变、禁止背景图、禁止动态 particles。
- **仅有的动效**：Hero Tagline 出现时，句末的句号（。）用 800ms 淡入；除此之外静止。
- **14 天承诺**：不在首屏喊出来——在第二屏用一个极小的 `/14天硬承诺 · 延期免单` 戳记出现在 CTA 按钮下方。

### 4.2 GitHub 仓库 README

- **README 顶部**：ASCII art 版本的 Concept D（即使最终选了 B，GitHub 上也出现 D 的 ASCII 版作为彩蛋）+ 一行 `# Shipwright / 船匠 — Cargo Engineering for DTC`。
- 徽章区：`[14d Guarantee]` `[v2026.05]` `[Made in Shenzhen]`——全部用 shields.io 的 flat-square 风格，颜色 #101014 / #A3A3A3（不要用任何鲜色）。
- 代码 block 语言标注：统一用 `bash` / `python` / `typescript`，不展示花哨的 syntax highlighting 主题。

### 4.3 名片 / 邮件签名

**名片**（90×55mm，哑光米白卡纸 350gsm）：
- 正面：Logo lockup 居左上；姓名 + 职位居中；联系方式居右下。三个区域之间留大面积空白（至少 40% 白）。
- 背面：只印一句 Tagline `别堆人，造船。`，位置居中偏下，字号约 8pt。
- 工艺：Logo 用盲文压印（blind deboss），文字用单色黑印刷。拒绝烫金烫银。

**邮件签名**：
```
—
王 XX · Shipwright · 船匠
Cargo Engineer | 14d Delivery Guarantee
hello@shipwright.co · shipwright.co
```
（纯文本，禁止 HTML 图片签名）

### 4.4 小红书笔记封面

- 比例 3:4，背景 #FAFAF7 暖白。
- **左上**：小号 logo lockup（高度为封面高度的 5%）。
- **中心**：一个巨大的数字 + 一句话（例如：`14 / 天 / 把 5 个系统接完` 或 `¥0 / 续费 / 我们不卖 SaaS`）。
- 数字用 **Söhne Breit Kräftig** 或 Concept D 选中时的 JetBrains Mono Bold。
- **右下**：一个小印章 `Shipwright Case 023` （系列化编号）——这是给小红书算法的"系列感"信号。
- **禁止**：emoji、贴纸、渐变背景、手写体标题。

### 4.5 飞书 / 微信公众号头像

- 正方形 512×512。
- 只用 Concept B 的 KEEL-MARK（或对应方向的缩略 mark），居中，留白 20%。
- 背景 #101014 深炭。
- 公众号名称中文："船匠 Shipwright"（顺序是中文在前，符合中文用户阅读习惯）。

### 4.6 LinkedIn Company Page

- 头像：与飞书一致的 KEEL-MARK，但背景切换为 #FAFAF7（LinkedIn 英文环境默认亮色）。
- Banner：横向比例，左 1/3 放 logo lockup，右 2/3 放 Tagline 英文 `Don't hire. Ship.` + 一行 subtitle `Cross-border DTC Cargo Engineering, Delivered in 14 Days`.
- 背景：纯 #FAFAF7。不放团队合照、不放办公室照片、不放客户 logo 墙——保持"不像 Agency"的距离感。

### 4.7 发票 / 合同抬头

- 合同抬头最上端横向打印 logo lockup（Concept B/C 完整版），高度 14mm。
- 抬头下方**必须出现**一行小字编号：`Shipwright Contract Template v2026.05 · /14d Guarantee Clause enclosed`——这是把"品牌承诺"落到法律文本级别的签名。
- 发票（增值税专用发票限制多，不自由发挥）：只在发票左上角加盖一个 10mm×10mm 的 KEEL-MARK 印章（深灰色印油，非红色，避免与税务章混淆）。

---

## Part 5：三个视觉氛围 Moodboard

### Moodboard #1：Drydock Blueprint（干船坞蓝图）

**用途**：主视觉基调，对应 Concept A / B / D。

**搜索关键词组合**：
- Behance: `ship blueprint technical drawing` + `editorial minimalism` + `neutral warm off-white background`
- Dribbble: `industrial product catalog` + `Swiss design grid` + `Söhne typography`
- Pinterest: `Dieter Rams product manual` + `Muji technical product photography`

**配色参考**：
- 主背景 #FAFAF7（暖米白，非纯白——纯白太刺眼太数字化）
- 主文字 #101014（深炭黑，非纯黑——给印刷留墨）
- 技术线 #6B6B6B 中灰（用于图表、辅助线）
- 强调色 单点使用 #C5502E（赭橙，像做旧的铁锈/铜）或 Pantone 186 C（朱红章色）——但只在"合同已签 / 订单已交付"这种"盖章时刻"用一次

**字体参考**：
- 英文：Söhne、GT Walsheim、Inter Display
- 中文：思源宋体 + 思源黑体（宋用于标题、黑用于正文）
- 等宽：JetBrains Mono（用于所有数字、代码、合同编号）

**视觉关键词**：`grid`、`coordinate`、`hairline rule`、`cross-section`、`elevation view`、`caliper measurement`、`debossed paper`

---

### Moodboard #2：Workshop Floor（工坊地板）

**用途**：团队介绍、服务流程图、"About Us"叙事。

**搜索关键词组合**：
- Behance: `Japanese woodworking craft` + `warm studio photography` + `editorial layout 37signals style`
- Dribbble: `37signals basecamp illustrations` + `Linear blog editorial`
- Pinterest: `George Nakashima woodwork portfolio` + `Shinola Detroit brand book`

**配色参考**：
- 主背景保持 #FAFAF7
- 新增：一个深湖绿 #1F3B3B（像旧船油漆），用于第二级 CTA / section separator
- 新增：一个浅米黄 #E8DCC0（像老图纸的纸张），用于 quote / testimonial 背景块
- **绝对禁止**：任何饱和度 > 60% 的色、任何渐变、任何紫色

**字体参考**：
- 英文标题可以偶尔切换到 **Tiempos Text Semibold**（衬线）营造"文人气"——但只限博客 / 文章标题，不进产品 UI。
- 中文维持思源黑体 + 宋体组合。

**视觉关键词**：`hand-plane shaving`、`workbench top-down`、`wood grain texture`、`pencil sketch on tracing paper`、`reference library bookshelf`

---

### Moodboard #3：Cargo Terminal at Dawn（黎明货运港）

**用途**：营销素材、小红书 / 公众号头图、海外广告投放。

**搜索关键词组合**：
- Behance: `container port photography dawn` + `minimalist industrial color grading` + `Stripe press page aesthetic`
- Dribbble: `Vercel landing page hero` + `Rauno Freiberg portfolio`
- Pinterest: `Andreas Gursky cargo port` + `Edward Burtynsky industrial landscape`

**配色参考**：
- 主色切换：#0F1419 深海蓝黑（比 Moodboard #1 更冷）
- 强调色：#E8E4DC 暖白（唯一的亮色，像港口探照灯）
- 可选点缀：#F5A623 琥珀黄（港口警示灯），但每张图只用一次，面积 < 3%

**字体参考**：
- 英文标题可切换到 **GT America Extended Black**，用于"大标题 + 大空白"的单屏海报。
- 中文用思源黑体 Heavy，字号放大到 120pt+。

**视觉关键词**：`container stack`、`crane silhouette`、`horizon line`、`long exposure dawn light`、`cool gradient from dark blue to warm amber`——注意：**这里允许的唯一"渐变"是自然光线的冷暖过渡，不是 UI 渐变**。

---

## Part 6：给阶段 C（UI Designer）的移交约束

### 6.1 Logo 方向一旦选定，UI Designer 必须遵守

**如果选 Concept A（Hull Lines）：**
- UI 上不要再加水平分隔线（会和 logo 的水线打架）
- 所有横向 hairline（按钮底边、section 分隔）统一用 0.5px @ 2x，颜色 #C5C5C5
- 表格设计采用"无垂直线、仅横向 hairline"模式（呼应水线语汇）

**如果选 Concept B（The Keel）：**
- UI 中可以大胆使用梯形几何作为 section 容器（e.g., 价格卡片顶部、引用块）
- CLI 光标动画可以延伸到 UI 输入框的 caret（呼吸节奏 2s）
- 避免使用其他三角形图标（会和 mark 撞风格）

**如果选 Concept C（双语 Lockup）：**
- UI 中所有中英文并置场景（nav、footer、产品名称）必须沿用"1px 竖线分隔"的模式
- 避免使用水平的 "中文 / English" 切换器（要用 "中文 | English" 的 pipe 分隔）
- 强调色可用朱红 Pantone 186 C，但只用于"印章时刻"（成交、交付、签约）

**如果选 Concept D（Cross-Section）：**
- UI 整体字体家族必须向等宽倾斜（body 可以用 Inter，但所有数字、代码、价格必须 JetBrains Mono）
- 避免所有圆角 > 4px 的 UI 元素（与 mark 的硬切面冲突）
- 允许在特定 section（首屏、交付仪表盘）使用 ASCII 装饰，但每页不超过 1 次

### 6.2 色彩方向约束（给 UI Designer 的护栏）

**必须遵守的底层规则**：

| 规则 | 说明 |
|---|---|
| 主背景只用两个色 | 亮模式 #FAFAF7；暗模式 #101014 —— 不允许第三种主背景 |
| 主文字反差 | 亮底 #101014 / 暗底 #FAFAF7 —— WCAG AAA 级 |
| 强调色（Accent） | 只能选一个：赭橙 #C5502E、朱红 Pantone 186 C、琥珀 #F5A623 —— 三选一，全站统一 |
| 辅助色（Semantic） | success / warning / error 必须用低饱和度版本（饱和度 < 50%）—— 不要用 Tailwind default 那种刺眼的绿 / 红 |
| **禁止色** | 紫色、粉色、霓虹绿、任何双色渐变、任何发光效果（glow / shadow blur > 20px） |

**Logo 配色兼容矩阵**：

| Logo 方向 | 最适合的 Accent | 慎用的 Accent | 禁止的 Accent |
|---|---|---|---|
| Concept A | 赭橙 #C5502E | 琥珀（偏软） | 朱红（会抢水线的视觉） |
| Concept B | 琥珀 #F5A623 | 赭橙 | 朱红（梯形已偏古典） |
| Concept C | 朱红 Pantone 186 C | 赭橙 | 琥珀（偏现代、破坏印章感） |
| Concept D | 赭橙 #C5502E | 朱红 | 琥珀（ASCII + 黄 = 赛博朋克警报） |

### 6.3 字体家族建议范围

UI Designer 在阶段 C 会细化字重、字号、行高系统。Brand Guardian 只提供"可选范围"：

**英文（三选一组合）**：
1. **保守组**：Inter Display（标题）+ Inter（正文）+ JetBrains Mono（等宽）—— 最稳、免费、开源
2. **进阶组**：GT Walsheim Pro（标题）+ Söhne Buch（正文）+ Söhne Mono（等宽）—— 付费、识别度高
3. **实验组**（仅 Concept D）：JetBrains Mono Medium（标题 + 正文双用）+ 不加第三字体 —— 极端但内洽

**中文（二选一组合）**：
1. **Craft 倾向**：思源宋体 Heavy（标题）+ 思源黑体 Regular（正文）
2. **Industrial 倾向**：方正兰亭黑 Pro DemiBold（标题）+ 思源黑体 Regular（正文）

**禁止使用**：
- 楷体、隶书、行楷（太传统，偏文创）
- 苹方（太 Apple 官方、失去品牌个性）
- 任何手写体、艺术字体

### 6.4 "14 天硬承诺"的视觉语汇建议

UI Designer 在设计产品页、合同、交付仪表盘时，请使用以下其中一种视觉化：

- **进度条版本**：14 个等宽的 tick `▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪ ▪`——每天点亮一个
- **戳记版本**：`/ 14d` 单色小戳记，放在 CTA 下方或合同左下角
- **日历版本**：一个极简的 2 行 × 7 列日历网格，不填日期，只点亮走过的天数
- **倒计时版本**：`T-14 → T-0` 顶部进度尺（仅限客户仪表盘）

**禁止**：任何"沙漏图标"、"闹钟图标"、"秒针动画"——这些是 to-C 产品的语言，to-B 契约用克制的几何。

---

## 附录：本次交付的四个关键决策点

1. **推荐打样方向**：Concept B（The Keel）+ Concept C（双语 Lockup）并行打样，阶段 C 末期 A/B 测试选定。
2. **推荐 Accent 色**：待 Logo 方向选定后从 `赭橙 / 朱红 / 琥珀` 三选一 —— UI Designer 阶段决定。
3. **推荐英文字体组合**：阶段 1（国内）用保守组（Inter + JetBrains Mono）降低成本；阶段 2（海外扩张）升级到进阶组（GT Walsheim + Söhne）。
4. **Logo 首次上线时间**：建议 2026-05-15 前完成 B/C 打样 + 创始人决策；2026-05-30 前上线官网；2026-06-01 开始出现在小红书 / LinkedIn 等对外渠道，与"阶段 1 对外获客"时间轴对齐。

---

**下一步行动清单**：

- [ ] 创始人在 4 个 Concept 中选 1-2 个做打样 or 给出修改意见
- [ ] 若选 Concept A / D，需预留字型定制预算（¥15K-30K 区间）
- [ ] 交付给阶段 C UI Designer，合并色板 + 字号 + 组件细化
- [ ] 完成后更新 Obsidian 项目 `上下文.md` 的"品牌视觉"章节
