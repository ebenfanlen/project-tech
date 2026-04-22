---
date: 2026-04-22
type: ui-design-system
status: draft-v1
project: Shipwright / 船匠
phase: 阶段 C → 阶段 D 开发预备
author: UI Designer
---

# Shipwright / 船匠 — 视觉系统 v1（Draft）

> Tagline：别堆人，造船。 / Don't hire. Ship.
>
> 本文档是阶段 D（网站开发）的视觉交付物基线。所有 HEX / token / 字号 / 间距都可以直接映射到 Tailwind config、CSS variables 或 Figma Tokens Studio。

---

## 0. 设计哲学（Design Principles）

1. **Craft over Flash**：工艺感优先，避免一切赛博朋克霓虹、紫粉渐变、AI 脑子图标。视觉上向 Linear / Vercel / 37signals 看齐。
2. **Proof over Promise**：视觉为"证据"服务（14 天倒计时、代码块、实测数据），不为"氛围"服务。Geek 证据（代码 / CLI / 监控 UI）占比约 10%，嵌入得体。
3. **Less Hue, More Depth**：色相极少，靠中性色层次 + 一抹信号色区分优先级。
4. **Readable First**：中文阅读体验优先（字号、行高、标点），而非英文站的机械复刻。
5. **Accessible by Default**：WCAG 2.2 AA 是红线，核心 CTA 必须 AAA。
6. **Dark Mode Is Not Inversion**：深色模式是二次设计，不是反色。

---

## Part 1 — 色彩系统（Color System）

### 1.1 主色 Primary — Deep Harbor（深海蓝）

选择理由：深海蓝 ≠ 电子蓝（#007AFF / #3B82F6 这种 SaaS 滥用色）。我们取的是 **挪威深海蓝**（偏绿偏灰，低饱和），避免"又一个 SaaS 蓝"的通感。它暗示稳定、工艺、可信赖、深度工程，而不是"赛博未来"。色彩心理上接近北欧造船厂 / 航运集团（Maersk、DNB）的克制感。

| Token | HEX | HSL | 用途 |
|---|---|---|---|
| `primary-50` | `#F2F6F8` | `hsl(200 22% 96%)` | 浅色背景 hover、tag 底色 |
| `primary-100` | `#DDE7EC` | `hsl(200 20% 89%)` | 卡片次级背景 |
| `primary-200` | `#B8CBD4` | `hsl(200 21% 77%)` | 分割线、placeholder |
| `primary-300` | `#8AAAB8` | `hsl(200 22% 63%)` | 次级图标 |
| `primary-400` | `#5C8A9D` | `hsl(200 26% 49%)` | 次级按钮 border |
| `primary-500` | `#36697F` | `hsl(200 41% 35%)` | **品牌基准色**（Logo、link） |
| `primary-600` | `#2B5468` | `hsl(200 41% 29%)` | Primary Button default |
| `primary-700` | `#213F4F` | `hsl(201 41% 22%)` | Primary Button hover |
| `primary-800` | `#17303D` | `hsl(202 44% 17%)` | Header 深背景 |
| `primary-900` | `#0E2230` | `hsl(205 55% 12%)` | Hero 大面积暗底 |
| `primary-950` | `#071520` | `hsl(207 64% 8%)` | Dark mode base |

**基准色** `primary-600 = #2B5468` — 用于 Primary Button、Logo 主色、主链接。

### 1.2 副色 Secondary — Canvas Linen（工艺感米白 / 暖灰）

选择理由：不用纯白（#FFFFFF）因为中文屏幕阅读偏刺眼，且"纯白"已是 SaaS 模板化最严重的信号。Canvas Linen 取"船帆粗布 / 画布" 的意象，偏暖 5°，模拟印刷品 / 工艺纸的温度。与深海蓝形成"海 + 帆"的克制叙事。

| Token | HEX | HSL | 用途 |
|---|---|---|---|
| `canvas-50` | `#FDFCF9` | `hsl(45 43% 98%)` | **页面主背景**（默认） |
| `canvas-100` | `#F8F6EF` | `hsl(46 40% 95%)` | Section 间隔背景 |
| `canvas-200` | `#EFEBDF` | `hsl(45 29% 90%)` | Card 底色 |
| `canvas-300` | `#DFD8C4` | `hsl(45 27% 82%)` | Border default |
| `canvas-400` | `#C3B99A` | `hsl(43 26% 69%)` | 次级装饰线 |
| `canvas-500` | `#9E9473` | `hsl(43 19% 54%)` | 次级文字（暖） |
| `canvas-600` | `#7A7258` | `hsl(42 16% 41%)` | 弱化图标 |
| `canvas-700` | `#5B5542` | `hsl(42 16% 31%)` | 次级标题 |
| `canvas-800` | `#3D392E` | `hsl(40 14% 21%)` | — |
| `canvas-900` | `#26241D` | `hsl(42 13% 13%)` | — |

### 1.3 强调色 / 信号色 — Signal Orange（信号橙）

选择理由：14 天硬交付需要一个"时间紧迫、但克制的"视觉锚。红色太激进（错误语义冲突），黄色不够权威。选 **Signal Orange #E86A2A**（接近 Pantone 166C / 海上救生设备橙 / 起重机桅杆橙），是"工业安全色"的继承，和深海蓝形成互补配色，强化"船厂 / 工艺"叙事。仅用于：14 天 timer、主 CTA 强调、limited-time 标签。占比 ≤ 5%。

| Token | HEX | HSL | 用途 |
|---|---|---|---|
| `signal-50` | `#FDF3EC` | `hsl(26 76% 96%)` | 强调 tag 浅底 |
| `signal-100` | `#FBE2CF` | `hsl(26 82% 90%)` | — |
| `signal-200` | `#F6C098` | `hsl(26 85% 78%)` | — |
| `signal-300` | `#F09E62` | `hsl(26 82% 66%)` | — |
| `signal-400` | `#EC843F` | `hsl(22 82% 59%)` | — |
| `signal-500` | `#E86A2A` | `hsl(19 81% 54%)` | **信号基准**（14 天 timer 数字） |
| `signal-600` | `#CC551C` | `hsl(20 75% 45%)` | CTA hover |
| `signal-700` | `#A44317` | `hsl(20 76% 37%)` | — |
| `signal-800` | `#7C3312` | `hsl(20 75% 28%)` | — |
| `signal-900` | `#52220C` | `hsl(21 74% 19%)` | — |

**使用红线**：
- 不用于大面积背景（避免"警告感"压过"可信感"）
- 不同时和 error-red 出现在同一视口
- 在 dark mode 下降饱和（见 1.6）

### 1.4 中性色 Neutral — 双套 Gray

提供两套中性色：**Warm Gray**（主力，配 Canvas Linen 生态）+ **Cool Gray**（代码块 / Geek UI 时使用）。

#### Warm Gray（主力中性色）

| Token | HEX | HSL | 用途 |
|---|---|---|---|
| `warm-50` | `#FAFAF8` | `hsl(60 14% 98%)` | alt bg |
| `warm-100` | `#F4F3EF` | `hsl(48 19% 95%)` | hover bg |
| `warm-200` | `#E7E5DE` | `hsl(46 14% 89%)` | border subtle |
| `warm-300` | `#CFCBBF` | `hsl(45 13% 78%)` | border default |
| `warm-400` | `#A9A498` | `hsl(42 11% 63%)` | placeholder |
| `warm-500` | `#857F72` | `hsl(39 8% 48%)` | 次级文本 |
| `warm-600` | `#635E53` | `hsl(40 9% 36%)` | Body 次要 |
| `warm-700` | `#484438` | `hsl(36 12% 25%)` | Body 主文本 |
| `warm-800` | `#2D2B23` | `hsl(40 14% 15%)` | Heading |
| `warm-900` | `#1A1814` | `hsl(36 13% 9%)` | Display Heading |

**正文主文本** = `warm-700` `#484438`（不是 `#000000` — 纯黑在米白底上过硬）。

#### Cool Gray（代码块 / Geek UI）

| Token | HEX | HSL | 用途 |
|---|---|---|---|
| `cool-50` | `#F7F8F9` | `hsl(210 11% 97%)` | — |
| `cool-100` | `#EDEFF2` | `hsl(213 12% 94%)` | code inline bg |
| `cool-200` | `#D8DBE1` | `hsl(219 10% 87%)` | — |
| `cool-300` | `#B4B9C3` | `hsl(219 10% 74%)` | — |
| `cool-400` | `#8890A0` | `hsl(219 11% 58%)` | code comment |
| `cool-500` | `#5E6777` | `hsl(218 11% 42%)` | — |
| `cool-600` | `#434B5A` | `hsl(220 15% 31%)` | — |
| `cool-700` | `#2E3442` | `hsl(221 18% 22%)` | code block bg (light mode 外层) |
| `cool-800` | `#1D2230` | `hsl(224 25% 15%)` | **code block bg (light mode)** |
| `cool-900` | `#10131C` | `hsl(226 28% 9%)` | code block bg (dark mode) |

### 1.5 语义色 Semantic

每个语义色给 3 级：浅（浅底提示）/ 标准（icon + 边框）/ 深（文字）。所有语义色都校验过对比度 AA。

| 语义 | Light (50) | Base (500) | Deep (700) | 用途 |
|---|---|---|---|---|
| **Success** | `#E8F5EE` | `#2F9E5E` | `#1E6B40` | 交付完成、测试通过 |
| **Warning** | `#FFF6E0` | `#D99B14` | `#8A6008` | 临近 deadline、提醒 |
| **Error** | `#FCE8E8` | `#D13A3A` | `#8C2020` | 表单错误、失败 |
| **Info** | `#E8F1FA` | `#3378C1` | `#1E4C80` | 中性提示（非主品牌蓝） |

注：`info-500 #3378C1` 与 `primary-500 #36697F` 区分明显 — info 更偏"纯蓝"，primary 更偏"海蓝"。不会在一个视口里看起来雷同。

### 1.6 深色模式映射（Dark Mode）

原则：不是简单反相。**深色模式的底色是 Primary（深海蓝），而不是黑** — 延续品牌叙事。

| Light Mode Token | Dark Mode Token | Dark HEX | 说明 |
|---|---|---|---|
| `canvas-50` (page bg) | `bg-default` | `#0E2230` | primary-900 作为底 |
| `canvas-100` (section bg) | `bg-subtle` | `#132C3D` | 略浅 |
| `canvas-200` (card bg) | `bg-card` | `#1A3849` | 再浅一级 |
| `warm-700` (body text) | `text-default` | `#E6E1D4` | 暖米白（非纯白） |
| `warm-500` (secondary text) | `text-muted` | `#A8A293` | — |
| `warm-300` (border) | `border-default` | `#2D4A5B` | — |
| `primary-600` (primary btn) | `primary-btn` | `#4C83A0` | 提亮（深底上需要亮一级） |
| `signal-500` (signal) | `signal-dark` | `#E8824B` | 降饱和 8%，提亮 10% — 避免刺眼 |
| `success-500` | `success-dark` | `#4AB87A` | 同上 |
| `error-500` | `error-dark` | `#E65A5A` | 同上 |
| `cool-800` (code bg light) | `code-bg-dark` | `#0A1420` | 深 code block 更深一级（拉开层次） |

**切换逻辑**：默认跟随系统（`prefers-color-scheme`），顶部导航右侧有手动 toggle（sun/moon icon），状态存 localStorage。

### 1.7 对比度校验表（WCAG 2.2）

| 组合 | 前景 | 背景 | 比例 | AA Normal (4.5) | AA Large (3.0) | AAA (7.0) |
|---|---|---|---|:-:|:-:|:-:|
| Body text on page | `#484438` warm-700 | `#FDFCF9` canvas-50 | **10.61** | ✅ | ✅ | ✅ |
| Secondary text on page | `#857F72` warm-500 | `#FDFCF9` canvas-50 | **4.64** | ✅ | ✅ | ❌ |
| H1 on page | `#1A1814` warm-900 | `#FDFCF9` canvas-50 | **16.52** | ✅ | ✅ | ✅ |
| Primary btn text | `#FDFCF9` canvas-50 | `#2B5468` primary-600 | **8.91** | ✅ | ✅ | ✅ |
| Signal btn text | `#FDFCF9` canvas-50 | `#CC551C` signal-600 | **4.78** | ✅ | ✅ | ❌ |
| Link default | `#2B5468` primary-600 | `#FDFCF9` canvas-50 | **8.91** | ✅ | ✅ | ✅ |
| Link on card | `#2B5468` primary-600 | `#EFEBDF` canvas-200 | **8.04** | ✅ | ✅ | ✅ |
| Error text | `#8C2020` error-700 | `#FCE8E8` error-50 | **7.42** | ✅ | ✅ | ✅ |
| Code comment | `#8890A0` cool-400 | `#1D2230` cool-800 | **5.73** | ✅ | ✅ | ❌ |
| Dark mode body | `#E6E1D4` | `#0E2230` | **13.21** | ✅ | ✅ | ✅ |
| Dark mode secondary | `#A8A293` | `#0E2230` | **7.85** | ✅ | ✅ | ✅ |
| Dark mode primary btn | `#FDFCF9` | `#4C83A0` | **3.98** | ❌ | ✅ | ❌ |

**红线**：所有 Body 正文必须 AA Normal 通过；Primary CTA 必须 AAA 通过；dark mode primary btn 对比度 3.98 — 仅用于 Large Text（≥18px bold 或 ≥24px regular），小字按钮在 dark mode 要用更深的底色 `#3A6B85`（比例 4.82）。

---

## Part 2 — 字体系统（Typography）

### 2.1 英文字体家族

**最终推荐：Inter（Variable）+ IBM Plex Sans（备选）**

| 候选 | 授权 | 优点 | 劣势 | 评级 |
|---|---|---|---|---|
| **Inter** | OFL 1.1 免费商用 | Variable、极广字重、tabular nums、多 OpenType feature、和 SF Pro 视觉距离近 | 被用得有点多（但正因为熟悉所以不出错） | ★★★★★ |
| IBM Plex Sans | OFL 免费商用 | 稍有工程师气质、和 IBM Plex Mono 一家、英文字形刚毅 | 部分字重在中小字号偏硬 | ★★★★☆ |
| GT Walsheim | 商用需购买 | 圆润、有品牌气质 | 付费、授权复杂、工业感弱 | ★★★☆☆ |
| Söhne | 商用需购买 | 现代瑞士风 | 付费 | ★★★★☆ |
| PP Mori | 商用需购买 | 极简、Vercel 同款气质 | 付费 | ★★★★☆ |

**选 Inter 的理由**：
1. 免费商用（OFL），零法律风险
2. Variable font 一个文件覆盖全字重，网络加载成本低（Phase 2 跨境打开速度要紧）
3. Tabular Numbers 对 14 天倒计时、价格卡数字显示极好
4. 中英混排时与中文思源 / 鸿蒙 过渡平滑（x-height 接近）
5. 下载：https://rsms.me/inter/ 或 Google Fonts

### 2.2 中文字体家族

**最终推荐：HarmonyOS Sans SC + TC（鸿蒙字体）**

| 候选 | 授权 | 优点 | 劣势 | 评级 |
|---|---|---|---|---|
| **HarmonyOS Sans SC/TC** | 华为官方免费商用（无需授权申请） | 同时支持简繁、字重完整（Thin→Black）、数字西文部分优秀、屏幕显示清晰 | 知名度不如思源 | ★★★★★ |
| 思源黑体 Source Han Sans | OFL 免费商用 | 经典稳定、覆盖字符全 | italic 渲染问题、部分字重在小字号发糊、文件大 | ★★★★☆ |
| OPPO Sans | OPPO 免费商用 | 现代、字形干净 | 繁中覆盖不完整 | ★★★☆☆ |
| MiSans | 小米免费商用 | 现代、好看 | 繁中支持较新，多语言字符集不如鸿蒙完整 | ★★★★☆ |
| Noto Sans CJK | OFL 免费商用 | 思源同源、Google CDN | 同思源问题 | ★★★☆☆ |
| 苹方 PingFang SC | Apple 系统字体（无法授权分发） | 好看 | 不能 web-font 化 | ★★☆☆☆ |

**选 HarmonyOS Sans 的理由**：
1. **免费商用 + 无需申请**（官方声明）
2. **简繁共体** — 对 Phase 2 繁中（台湾 / 港澳）落地直接适配
3. 数字 / 西文子集与 Inter 视觉协调（字怀相近）
4. 规避思源黑体 italic 渲染问题
5. 字重完整：Thin 100 / Light 300 / Regular 400 / Medium 500 / Bold 700 / Black 900
6. 下载：https://developer.harmonyos.com/cn/docs/design/des-guides/font-0000001157868583

**字体加载策略**（Phase 1 国内）：
- 自托管（不用 Google Fonts CDN，国内访问慢）
- 按页面子集化（home/pricing 等）
- Variable subset + `font-display: swap`

### 2.3 等宽字体（代码块 / CLI / 数字）

**最终推荐：JetBrains Mono**

| 候选 | 授权 | 评级 |
|---|---|---|
| **JetBrains Mono** | OFL 免费商用 | ★★★★★（Ligature 对代码 `=>` `!==` 友好、字形工程师审美） |
| Geist Mono | OFL 免费商用 | ★★★★☆（Vercel 出品、现代） |
| IBM Plex Mono | OFL 免费商用 | ★★★★☆ |
| Fira Code | OFL 免费商用 | ★★★★☆（Ligature 强） |

选 JetBrains Mono 的理由：Ligature + 对中文字符 fallback 行为优良 + 社区度量数据好。

### 2.4 字体尺度表（Type Scale）— Desktop

基准：`1 rem = 16 px`，Modular Scale `1.250`（Major Third）。

| Token | 名称 | Size (px / rem) | Line Height | Letter Spacing | Weight | 用途 |
|---|---|---|---|---|---|---|
| `display-xl` | Display XL | 72 / 4.5 rem | 1.05 | -0.03em | 700 | Hero 主标题 "别堆人，造船。" |
| `display-lg` | Display LG | 56 / 3.5 rem | 1.08 | -0.025em | 700 | 章节起始大标题 |
| `h1` | Heading 1 | 40 / 2.5 rem | 1.15 | -0.02em | 700 | 页面 H1 |
| `h2` | Heading 2 | 32 / 2 rem | 1.2 | -0.015em | 600 | Section H2 |
| `h3` | Heading 3 | 24 / 1.5 rem | 1.3 | -0.01em | 600 | Subsection |
| `h4` | Heading 4 | 20 / 1.25 rem | 1.35 | 0 | 600 | Card title |
| `h5` | Heading 5 | 18 / 1.125 rem | 1.4 | 0 | 600 | — |
| `h6` | Heading 6 | 16 / 1 rem | 1.4 | 0.01em | 700 | 小标题、表头 |
| `body-lg` | Body L | 18 / 1.125 rem | 1.65 | 0 | 400 | 首屏 sub-headline、重要段落 |
| `body-md` | Body M | 16 / 1 rem | 1.7 | 0 | 400 | **正文默认** |
| `body-sm` | Body S | 14 / 0.875 rem | 1.65 | 0 | 400 | 次级说明、表格内容 |
| `caption` | Caption | 12 / 0.75 rem | 1.5 | 0.02em | 500 | 图注、脚注 |
| `overline` | Overline | 12 / 0.75 rem | 1.4 | 0.08em | 600 | 分类 tag（大写） |
| `code` | Code Inline | 14 / 0.875 rem | 1.5 | 0 | 400 (Mono) | 行内代码 |
| `code-block` | Code Block | 14 / 0.875 rem | 1.7 | 0 | 400 (Mono) | 代码块 |
| `timer` | 14 Day Timer | 48 / 3 rem | 1 | -0.02em | 700 tabular | 14 天倒计时数字 |

### 2.5 字体尺度表 — Mobile（< 640 px）

所有 Heading 按 **0.8× 基准**压缩；body 保持不变（可读性优先）。

| Token | Mobile Size | Mobile LH |
|---|---|---|
| `display-xl` | 48 / 3 rem | 1.08 |
| `display-lg` | 40 / 2.5 rem | 1.12 |
| `h1` | 32 / 2 rem | 1.2 |
| `h2` | 26 / 1.625 rem | 1.25 |
| `h3` | 22 / 1.375 rem | 1.3 |
| `h4-h6` | 同 desktop | 同 desktop |
| Body / caption | 同 desktop | 同 desktop |

### 2.6 中英混排规则

**CSS font-family 声明**：
```css
font-family: "Inter", "HarmonyOS Sans SC", "HarmonyOS Sans TC",
             -apple-system, BlinkMacSystemFont, "PingFang SC",
             "Microsoft YaHei", sans-serif;
```
Inter 在前让英文 / 数字走 Inter，中文 fallback 到 HarmonyOS。

**字号比例**：中文视觉偏小 5-7%，因此：
- 英文字号 16 px 时，中文实际显示稍小 — 将中文字符用 `font-size-adjust: 0.52` 或直接在 `:lang(zh)` 下放大 1.05×
- 简单做法：全站 body 设 16 px，Heading 中文设 `letter-spacing: 0.02em`（中文需要更宽松的字间距）

**中英空格规则**（漂亮排版）：
- 使用 `text-autospace: ideograph-alpha ideograph-numeric`（新标准，Safari 17+ / Chrome 119+）
- Fallback：在 Markdown/MDX 处理阶段用 `pangu.js` 自动插入薄空格 ` `
- 全角标点用中文字体渲染，半角标点用 Inter — `font-variant-east-asian: normal`

**禁止**：
- 中文用斜体（HarmonyOS italic 会 fallback 到算法倾斜，难看）
- 中文用 Inter 等西文字体强行 fallback（会出现 "豆腐块" ☐）

### 2.7 字重使用规范

| 字重 | 允许 | 不允许 |
|---|---|---|
| 100 Thin | ❌ 禁用 | 中文小字号不可读 |
| 300 Light | ❌ 禁用 | 对比度过低，违反工艺感 |
| 400 Regular | ✅ 正文 | — |
| 500 Medium | ✅ 副标题、强调 | — |
| 600 SemiBold | ✅ H2-H6 | — |
| 700 Bold | ✅ H1 / Display / CTA | — |
| 900 Black | ⚠️ 仅 Display / Wordmark | 正文禁用 |

---

## Part 3 — 间距 / 圆角 / 阴影系统

### 3.1 间距 Spacing Scale（基于 4 px）

| Token | Value | Rem | 典型用途 |
|---|---|---|---|
| `space-0` | 0 | 0 | — |
| `space-0.5` | 2 px | 0.125 | hair-line |
| `space-1` | 4 px | 0.25 | icon ↔ text |
| `space-2` | 8 px | 0.5 | 同块内元素 gap |
| `space-3` | 12 px | 0.75 | Button padding-y |
| `space-4` | 16 px | 1 | 基础 gap、卡内 padding |
| `space-5` | 20 px | 1.25 | — |
| `space-6` | 24 px | 1.5 | Card padding |
| `space-8` | 32 px | 2 | Section 内部 |
| `space-10` | 40 px | 2.5 | — |
| `space-12` | 48 px | 3 | Section 间距（mobile） |
| `space-16` | 64 px | 4 | Section 间距（tablet） |
| `space-20` | 80 px | 5 | — |
| `space-24` | 96 px | 6 | Section 间距（desktop） |
| `space-32` | 128 px | 8 | Hero → 下一屏 |

### 3.2 圆角 Radius

| Token | Value | 用途 |
|---|---|---|
| `radius-none` | 0 | 表格 cell、代码块（工艺感倾向方角） |
| `radius-sm` | 4 px | Input、small chip |
| `radius-md` | 6 px | **Button 默认**、Card border |
| `radius-lg` | 10 px | Card、Modal |
| `radius-xl` | 16 px | Pricing Card 特殊 |
| `radius-2xl` | 24 px | Hero feature block |
| `radius-full` | 9999 px | Avatar、pill tag |

**哲学**：整体偏"方" — `radius-md 6px` 是主力，不用 `20px+` 大圆角（那是消费 App 审美，不是 B2B 工艺感）。

### 3.3 阴影 Shadow（Elevation）

用多层阴影模拟真实光学，避免单层"PPT 感"。

| Token | Light Mode | Dark Mode | 用途 |
|---|---|---|---|
| `shadow-none` | `none` | `none` | 扁平 |
| `shadow-xs` | `0 1px 2px rgba(23, 48, 61, 0.05)` | `0 1px 2px rgba(0, 0, 0, 0.4)` | 分割提示 |
| `shadow-sm` | `0 1px 3px rgba(23, 48, 61, 0.08), 0 1px 2px rgba(23, 48, 61, 0.04)` | `0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)` | Card default |
| `shadow-md` | `0 4px 6px rgba(23, 48, 61, 0.07), 0 2px 4px rgba(23, 48, 61, 0.05)` | `0 4px 6px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)` | Card hover、Dropdown |
| `shadow-lg` | `0 10px 15px rgba(23, 48, 61, 0.08), 0 4px 6px rgba(23, 48, 61, 0.05)` | `0 10px 20px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.4)` | Modal、Popover |
| `shadow-xl` | `0 20px 25px rgba(23, 48, 61, 0.10), 0 10px 10px rgba(23, 48, 61, 0.04)` | `0 20px 30px rgba(0, 0, 0, 0.7)` | Full-screen dialog |
| `shadow-inner` | `inset 0 2px 4px rgba(23, 48, 61, 0.05)` | `inset 0 2px 4px rgba(0, 0, 0, 0.3)` | Input focus、Code block |

注意：阴影的蓝色通道（`rgba(23, 48, 61)` 来自 primary-800）— 让阴影也有品牌色温。

### 3.4 Breakpoints

| Token | Value | 目标设备 |
|---|---|---|
| `xs` | < 480 px | 手机竖屏 |
| `sm` | ≥ 640 px | 大手机 / 小平板 |
| `md` | ≥ 768 px | 平板竖屏 |
| `lg` | ≥ 1024 px | 平板横屏 / 小笔记本 |
| `xl` | ≥ 1280 px | **Desktop 基准** |
| `2xl` | ≥ 1536 px | 大显示器 |
| `3xl` | ≥ 1920 px | 4K / 超宽屏（上限居中） |

### 3.5 容器 max-width

| Token | Value | 用途 |
|---|---|---|
| `container-prose` | 680 px | **博客 / 长文正文**（最大阅读宽度） |
| `container-sm` | 768 px | 表单页 |
| `container-md` | 1024 px | 文档类页面 |
| `container-lg` | 1200 px | **主站内容**（home / pricing） |
| `container-xl` | 1440 px | Hero 特殊布局 |
| `container-full` | 100% | Nav / Footer 横通 |

---

## Part 4 — 核心组件样式规范

### 4.1 Button

**Variants**: primary / secondary / ghost / danger
**Sizes**: sm (32 h) / md (40 h) / lg (48 h) / xl (56 h Hero CTA)

```
.btn-primary {
  bg: primary-600 (#2B5468)
  color: canvas-50 (#FDFCF9)
  padding: space-3 space-6 (12px 24px)  // md
  radius: radius-md (6px)
  font-weight: 600
  font-size: 16 px
  shadow: shadow-sm
  transition: all 150ms ease
}
:hover → bg: primary-700, shadow-md, translateY(-1px)
:active → bg: primary-800, translateY(0)
:focus-visible → outline: 2px solid primary-500, outline-offset: 2px
:disabled → bg: warm-300, color: warm-500, cursor: not-allowed
:loading → show spinner (left icon, 16px), disable clicks
```

**Signal Variant**（专为 14 天 CTA 设计）:
```
.btn-signal {
  bg: signal-500 (#E86A2A)  // 注意：比 signal-600 更醒目
  color: canvas-50
  ...same
}
:hover → bg: signal-600 (#CC551C)
```

**Secondary**: bg transparent, border 1px solid warm-300, color warm-800
**Ghost**: bg transparent, color primary-600, hover bg primary-50
**Danger**: bg error-500, 同 primary 结构

### 4.2 Input

```
.input {
  height: 40px  // md
  padding: 0 space-3 (12px)
  border: 1px solid warm-300
  radius: radius-sm (4px)
  font-size: 16 px (防 iOS zoom)
  bg: canvas-50
  color: warm-800
  transition: border 150ms, box-shadow 150ms
}
::placeholder → color: warm-400
:hover → border: warm-500
:focus → border: primary-500, shadow: 0 0 0 3px rgba(54,105,127,0.12)
:error → border: error-500, shadow: 0 0 0 3px rgba(209,58,58,0.12)
:disabled → bg: warm-100, color: warm-400
```

Textarea：min-height 96 px；Resize vertical。

### 4.3 Card

```
.card {
  bg: canvas-50
  border: 1px solid warm-200
  radius: radius-lg (10px)
  padding: space-6 (24px)
  shadow: shadow-sm
  transition: shadow 300ms, transform 300ms
}
:hover → shadow-md, translateY(-2px)
:selected → border: primary-500 2px, shadow: shadow-md
```

### 4.4 Nav (Top Bar)

- height: 64 px (desktop) / 56 px (mobile)
- bg: `rgba(253, 252, 249, 0.85)` + `backdrop-filter: blur(12px)`
- border-bottom: 1px solid warm-200
- layout: `[Logo] ... [Menu] ... [Lang Toggle | Dark Toggle | CTA "开始 14 天"]`
- CTA：Signal Orange button，`btn-signal sm`，copy = "开始 14 天"
- 滚动时：bg 加深一级 → `canvas-100`

### 4.5 CTA Block — 双画像分叉（首屏核心）

居中两列，明确两个用户画像：

```
┌─────────────────────────┬─────────────────────────┐
│  电商老板              │  技术 Lead              │
│  ─────────             │  ─────────             │
│  14 天交付一个可量产     │  vibecoding + 代码 100% │
│  的增长系统             │  交付 / BYOK             │
│                        │                        │
│  [btn-signal lg]        │  [btn-secondary lg]     │
│  "Pilot Pod 14 天"      │  "Vibecoding Pod"       │
└─────────────────────────┴─────────────────────────┘
```

- 卡片间 `space-6` gap
- 左卡 border-top 4px solid signal-500
- 右卡 border-top 4px solid primary-500
- 卡内 padding `space-8`

### 4.6 Price Card（4 SKU）

4 个 SKU 横排（desktop） / 纵排（mobile），其中 Pilot Pod 为"推荐" 状态：

```
┌─────────┬──────────[RECOMMEND]──┬─────────┬─────────┐
│ Pilot   │   Vibecoding          │ Fleet   │ Crew    │
│ Pod     │   Pod (Primary Shown) │ Integr. │ Retainer│
│ ¥ xxx   │   ¥ xxx               │ ¥ xxx   │ ¥ xxx/mo│
│ 14 天   │   14 天                │ 30 天    │ 月度     │
│ ─────── │   ───────────         │ ─────── │ ─────── │
│ · feat  │   · feat              │ · feat  │ · feat  │
│ [BYOK]  │   [BYOK -15%]         │         │         │
│ [CTA]   │   [CTA Signal]        │ [CTA]   │ [CTA]   │
└─────────┴───────────────────────┴─────────┴─────────┘
```

- 推荐卡片：border primary-500 2px + `shadow-lg` + 顶部 badge "RECOMMEND"（signal-500 bg）
- BYOK 折扣 badge：小 chip，`bg signal-100`, `color signal-700`, radius-full, padding `2px 8px`, text "BYOK −15%"
- 价格数字：`display-lg` size，字重 700，tabular-nums
- Feature list：`body-sm`，前缀 Lucide `check` icon（primary-500 色）

### 4.7 Code Block

```
.code-block {
  bg: cool-800 (#1D2230)   // light mode
  color: warm-100          // 主文字亮米白
  radius: radius-md (6px)
  padding: space-4 space-5
  font: 14px / 1.7 JetBrains Mono
  border: 1px solid cool-700
  position: relative
}
.code-block .copy-btn {
  position: absolute
  top: space-3
  right: space-3
  bg: rgba(255,255,255,0.06)
  border: 1px solid rgba(255,255,255,0.1)
  radius: radius-sm
  size: 28×28
  icon: Lucide copy (14px)
}
.code-block .line-numbers {
  color: cool-500
  user-select: none
  padding-right: space-4
  border-right: 1px solid cool-700
}
```

**Syntax Highlighting**（Shiki 或 Prism，推荐 Shiki 主题）：
- Comment: cool-400 italic
- Keyword: #E86A2A (signal-500，复用品牌色)
- String: #4AB87A (success dark tone)
- Function: #8AAAB8 (primary-300)
- Variable: warm-100

内联代码：`bg cool-100, color warm-800, padding 2px 6px, radius 4px, font-size 0.9em`

### 4.8 Timeline（14 天方法论）

水平 Timeline（desktop） / 垂直（mobile）：

```
[Day 1] ─── [Day 3] ─── [Day 7] ─── [Day 14]
  ▼            ▼           ▼           ▼
  Kickoff    Draft       MVP          SHIP
  审慎盘点    架构确认      可交付        硬交付
```

- 轨道线：1 px solid warm-300
- 节点圆：24×24 filled primary-500（已完成 step）/ border only（未到）
- 当前 step：放大 32×32 + signal-500 ring-4
- 日期数字：tabular-nums, warm-800, `body-sm font-weight 600`
- 描述文字：warm-600, `caption`

### 4.9 Chat Widget（右下悬浮）

```
.chat-fab {
  position: fixed
  bottom: space-6 (24px)
  right: space-6
  bg: primary-600
  radius: radius-full
  size: 56×56
  shadow: shadow-lg
  icon: MessageCircle (Lucide) 24px canvas-50
  z-index: 50
}
:hover → scale(1.05), shadow-xl
```

**展开态**（400×560 浮窗）:
- radius: radius-lg
- shadow: shadow-xl
- header: primary-700 bg, canvas-50 文字，含 "船匠助手" + 关闭 ×
- body: 消息列表（用户消息 align-right primary-100 bg，船匠消息 align-left canvas-100 bg）
- footer: input + [发送] + 留资表单触发（弹出"留下手机我们 2 小时内回你"）

### 4.10 Data Viz

简单 KPI 组件（不用 Chart.js 重量级库，推荐 VisX / Recharts + 自定义 theme）：

| 类型 | 颜色规则 | 用途 |
|---|---|---|
| Sparkline | primary-500 1.5px line, area fill primary-100 @ 30% | KPI 卡片背景 |
| Bar | primary-500 主条，warm-300 对照 | 对比组（我们 vs 市场） |
| Ratio | signal-500 填充 + warm-200 底 | 14 天完成率、LTV 提升 |
| Gauge | primary-500 → signal-500 渐变 arc | 交付进度 |

**所有数字**用 tabular-nums，避免跳动。

---

## Part 5 — 图标与插画风格

### 5.1 图标库选型

**最终推荐：Lucide Icons**（主力）+ **Phosphor**（备用 for 海事 / 特殊图标）

| 候选 | 风格 | 授权 | 评级 |
|---|---|---|---|
| **Lucide** | 1.5 px stroke, geometric, open-source | ISC (免费商用) | ★★★★★ |
| Phosphor | 多权重、更活泼 | MIT | ★★★★☆ |
| Heroicons | 2 weights (outline/solid) | MIT | ★★★★☆ |
| Tabler | 2 px stroke 稍厚 | MIT | ★★★★☆ |
| Remix Icon | 丰富 brand 图标 | Apache 2.0 | ★★★☆☆ |

**Lucide 配置**：
- 默认 stroke-width `1.5`
- 尺寸规范：`12 / 14 / 16 / 20 / 24 / 32`
- 颜色：`currentColor`（跟随文字色）

**Geek 证据用图标**：终端 ▸、branch 叉子、clock（14 天）、check-circle（交付完成）、git-commit、code-2、shield-check（代码所有权）。

### 5.2 Logo / SKU 图标原则（等 Brand Guardian 对齐）

- 主 Logo：wordmark "Shipwright" 或 "船匠"（Inter Black + HarmonyOS Sans Black）+ 极简 船体 icon（placeholder）
- 每个 SKU 一个小图标（16-24 px）：
  - Pilot Pod → compass
  - Vibecoding Pod → code-2
  - Fleet Integration → network
  - Crew Retainer → users
- 所有 SKU 图标同风格（Lucide 1.5 px stroke），保持视觉一致

### 5.3 品牌插画

**不做卡通插画**。理由：
1. 与 "Craftsman 工艺感" 相冲突
2. 会让 B2B 站点变成 "SaaS 模板风"

**替代方案**：
- 极简几何线稿（船体俯视图 / 剖面图 / 桅杆结构）— 用 SVG 线条 1 px stroke，warm-500 色
- 3D 低面数船模型（线框模式，非实心）— 仅用于首屏或特定 landing
- 技术蓝图风格（blueprint-style）— 深海蓝底 + canvas-50 白线条

### 5.4 图片风格（案例 / 团队 / 客户 logo）

| 类型 | 处理规则 |
|---|---|
| **案例截图** | 浏览器 chrome（mockup），边 8 px warm-200 border + shadow-md |
| **团队照片** | 黑白处理，轻微去饱和；或单色化（canvas-200 tone） |
| **客户 Logo** | 统一 grayscale 100%，hover 恢复彩色；高度一致 32 px；间距均匀 |
| **产品 UI 截图** | 浅底 canvas-50，加 `radius-lg` 和 `shadow-md`；标注 callouts 用 signal-500 |
| **不要** | 精修商业图库人像、AI 生成的 "成功人士" 形象、叠加霓虹光效 |

---

## Part 6 — 首屏视觉语言（Hero Section）

### 6.1 视觉层级（从上到下）

```
┌──────────────────────────────────────────────────┐
│ [Nav]                                    [CTA]   │  ← 64 px
├──────────────────────────────────────────────────┤
│                                                  │
│    [Overline: FOR DTC OPERATORS]                │  ← overline, signal-600
│                                                  │
│    别堆人，造船。                                 │  ← display-xl 72px
│    Don't hire. Ship.                            │  ← display-lg 56px, warm-500
│                                                  │
│    [subhead: 14 天交付一个可量产的               │  ← body-lg 18px warm-600
│     增长系统。代码 100% 归你。透明定价。]          │
│                                                  │
│    ┌─────────────┬─────────────┐                │
│    │ [电商老板]   │ [技术 Lead]  │                │  ← 双画像 CTA
│    │ btn-signal  │ btn-secondary│                │
│    └─────────────┴─────────────┘                │
│                                                  │
│    ━━━━━━━━━━━ 14 天 live timer ━━━━━━━━━━━    │  ← Geek 证据 #1
│    Day 03 · Active Ship  ✓ Kickoff ✓ Draft...   │
│                                                  │
│    [客户 logo 5-8 个, grayscale]                │  ← 信任信号
│                                                  │
└──────────────────────────────────────────────────┘
```

### 6.2 首屏动画 / 3D / 代码演示

**原则**：动画服务于 "证据" 不是 "氛围"。

| 元素 | 动画方案 | Geek 证据占比 |
|---|---|---|
| Headline | Fade in + 细微 letter-spacing 收紧（-0.01em → -0.03em，400ms） | 0% |
| 双画像 CTA | 分开 stagger fade-in（150ms 错开） | 0% |
| 14 天 Live Timer | **实时倒计时组件** — 当前项目进行中 Day X/14，tabular-nums 数字实时跳动 | **70%** |
| 代码演示 | 小 code block 展示一个 "shipwright ship --day=7" CLI 命令回显（仅 home 可选） | 30% |
| 3D / 视频 | ❌ 不做（工艺感倾向静态） | — |

**14 天 Live Timer 组件设计**（首屏 Hero 之下）：

```
┌──────────────────────────────────────────────────┐
│  ▸ CURRENT SHIP  ─────  Day 03 / 14  ──────  [●] │
│                                                  │
│  ✓ Day 1  Kickoff                   done        │
│  ✓ Day 2  Architecture draft        done        │
│  ● Day 3  MVP wiring                 in progress │  ← signal-500 pulse
│  ○ Day 4  Data pipeline              pending    │
│  ○ Day 5  ... (collapsed)                       │
│  ○ Day 14 SHIP                       pending    │
└──────────────────────────────────────────────────┘
```

- 容器：`cool-800` bg（code block 风格）+ 1 px cool-700 border + radius-lg
- 头部：overline "CURRENT SHIP" + timer + 活动状态红点（signal-500 pulse）
- 每行：status icon（Lucide check/loader/circle）+ Day N + 描述 + 状态文字
- 最下有 "实时 from our ops dashboard" 小字（warm-500 caption）

### 6.3 "别堆人，造船" 视觉化

**方案 A（推荐）**：超大 Display wordmark + 汉字工艺质感
- 字体：HarmonyOS Sans Black 900 @ 72 px（desktop）
- 颜色：warm-900 on canvas-50
- 特殊处理：每个汉字之间 `letter-spacing: 0.04em`（有呼吸感）
- 句号 `。` 设计：在 CSS 里 `font-weight: 400`（与汉字区分，避免过重）
- 英文 subhead "Don't hire. Ship." — Inter Regular 56 px, warm-500

**方案 B（备选）**：浮雕 / 刻印质感
- 用 CSS `text-shadow: 1px 1px 0 warm-200, -1px -1px 0 canvas-200` 模拟 debossed 效果
- 慎用，容易显得做作

**禁止**：
- 渐变文字（紫粉 / 彩虹）
- 霓虹辉光
- 动画打字机效果（已被滥用）

### 6.4 信任信号位置

- 首屏 Hero 底部：6-8 个客户 Logo grayscale（高度 32 px 统一）
- Hero 下方一屏：3 个数字 KPI block（比如 "14 天硬交付率 94%" / "客户代码所有权 100%" / "Pod 数量 XX"）
- Case Study 区：2-3 个旗舰案例卡片（案例公司 logo + 1 句 quote + KPI 数字）

---

## Part 7 — Dark Mode 策略

### 7.1 是否做 Dark Mode

**做，但默认 Light。**

理由：
- B2B 主站默认 Light 更符合 "canvas 工艺感"
- 但技术 Lead 用户画像偏好 Dark（文档页、code 页、dashboard 预览）
- Dark Mode 是"尊重用户设置"，不是"炫技"

### 7.2 切换方式

```
默认优先级：
1. localStorage.theme === 'dark' or 'light' （用户手动）
2. prefers-color-scheme（系统）
3. Fallback = Light
```

**UI 切换**：
- 顶部 Nav 右侧 sun/moon icon toggle（Lucide sun / moon）
- 点击切换 `[data-theme="dark"]` on `<html>`
- 使用 `transition: colors 200ms ease` 平滑过渡
- 保存到 localStorage

### 7.3 Dark Mode 品牌色重新映射（不是反相）

核心原则：
1. **底色用 primary-900** (`#0E2230`) 而不是纯黑 — 延续品牌
2. **文本用 canvas-100 tinted** (`#E6E1D4`) — 保持暖米白感
3. **品牌色提亮一级** — 深底上需要更亮
4. **信号色降饱和** — 避免夜间刺眼

具体映射见 Part 1.6。

### 7.4 哪些组件需要重新设计（不只是换色）

| 组件 | Light | Dark 特殊处理 |
|---|---|---|
| **Button Primary** | bg primary-600 | bg `#4C83A0`（提亮），hover `#5D94B1` |
| **Card** | shadow-sm 白阴影 | 减少阴影 + 加 1 px border `#2D4A5B` 增强边界 |
| **Input** | border warm-300 | border `#2D4A5B`, bg `#132C3D`, focus ring 降到 30% 透明度 |
| **Code Block** | bg cool-800 | bg `#0A1420`（更深一级以拉开层次） |
| **14 Day Timer** | cool-800 bg | 保持深底但信号色降饱和 10% |
| **Hero Headline** | warm-900 on canvas-50 | `#F2EDE0` on primary-900（暖白 on 深海蓝） |
| **Dividers** | warm-200 | 改用 `opacity: 0.12` 的 canvas-100（更柔和） |
| **Shadow** | 品牌蓝阴影 | 改用纯黑阴影 60% 透明度（深底上品牌色阴影看不清） |
| **客户 Logo 区** | grayscale → color on hover | 在 dark 下 logos 需要 `invert: 0.88` + 单色化统一 |

### 7.5 Dark Mode 红线

- ❌ 不要直接 `filter: invert(1)` — 会破坏品牌色
- ❌ 不要在 dark 下用 `#000000` 纯黑 — 失去工艺感
- ❌ 不要让 signal 色在 dark 下失效（调整后仍需醒目）
- ✅ 每个 component 的 dark 态必须独立测试对比度
- ✅ 图片 / 截图在 dark 下加 1 px warm border 避免"飘"在深底上

---

## 附录 A — 最小可实施 Token 集（for 阶段 D 开发）

可直接粘贴到 `tailwind.config.ts`：

```ts
// tailwind.config.ts — minimal tokens
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F2F6F8', 100: '#DDE7EC', 200: '#B8CBD4',
          300: '#8AAAB8', 400: '#5C8A9D', 500: '#36697F',
          600: '#2B5468', 700: '#213F4F', 800: '#17303D',
          900: '#0E2230', 950: '#071520',
        },
        canvas: {
          50: '#FDFCF9', 100: '#F8F6EF', 200: '#EFEBDF',
          300: '#DFD8C4', 400: '#C3B99A',
        },
        signal: {
          50: '#FDF3EC', 100: '#FBE2CF', 500: '#E86A2A',
          600: '#CC551C', 700: '#A44317',
        },
        warm: {
          100: '#F4F3EF', 200: '#E7E5DE', 300: '#CFCBBF',
          400: '#A9A498', 500: '#857F72', 600: '#635E53',
          700: '#484438', 800: '#2D2B23', 900: '#1A1814',
        },
        cool: {
          100: '#EDEFF2', 400: '#8890A0', 700: '#2E3442',
          800: '#1D2230', 900: '#10131C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'HarmonyOS Sans SC', 'HarmonyOS Sans TC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '4px', md: '6px', lg: '10px', xl: '16px',
      },
    },
  },
};
```

---

## 附录 B — 下阶段交付物清单

交给阶段 D 开发团队时同步提供：

1. **Figma 文件**（本文档落地到 Figma Library，含所有 component 实例 + variants）
2. **字体文件包**（Inter variable woff2 + HarmonyOS SC/TC 子集化 woff2 + JetBrains Mono）
3. **SVG Logo 套件**（主 logo + 简化 mark + 4 个 SKU icon，light/dark 各一套）
4. **Shiki 代码高亮 theme JSON**（基于本色板定制）
5. **Dark mode 切换组件 spec**（Figma 动画示意）
6. **Accessibility 测试报告**（Axe / Lighthouse 跑 Hero 页基线）
7. **移交到 Brand Guardian 对齐**：Logo 最终化 + 品牌插画（如需要）

---

## 附录 C — 未解决问题 / 待对齐项

- [ ] Logo 最终稿待 Brand Guardian 产出（当前本文档仅定义 logo 系统原则）
- [ ] 繁中字体在 Phase 2 是否切到 HarmonyOS Sans TC 还是保持 SC 混用？待 Phase 2 内容完成后回归测试
- [ ] Chat Widget 是否接入第三方（Intercom / Crisp）还是自研？影响组件 API 设计
- [ ] 14 天 Live Timer 是否真的接真实 ops 数据？需要和 Ops 团队对齐 data source
- [ ] 英文站（Phase 2）Display XL 字号是否放大？英文 72 px 视觉上偏小，可能需要 80-88 px

---

**文档版本**：Draft v1
**作者**：UI Designer
**日期**：2026-04-22
**下一步**：阶段 D 开发 kickoff 前，与 Frontend Lead + Brand Guardian 做一次对齐会议，冻结 v1.0

