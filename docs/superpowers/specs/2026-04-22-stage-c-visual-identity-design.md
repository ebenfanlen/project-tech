---
date: 2026-04-22
stage: C
type: spec
status: final
logo_decision: Concept B (The Keel)
logo_decided_at: 2026-04-22
depends_on:
  - docs/superpowers/specs/2026-04-22-stage-a-brand-positioning-design.md
  - docs/superpowers/specs/2026-04-22-stage-b-product-services-design.md
  - docs/research/2026-04-22-brand-visual-concepts.md
  - docs/research/2026-04-22-ui-design-system.md
next_stage: D (网站设计 + 开发 + SEO + 三语)
---

# 阶段 C：视觉识别系统（Shipwright / 船匠）

> 本 spec 锁定：**色彩系统、字体系统、间距与组件 tokens、Dark Mode 策略、SKU 图标衍生逻辑、首屏视觉语言**。
> **唯一悬而未决的**：Logo 方向（4 选 1 或 2 选 1 打样）—— 通过浏览器 Visual Companion 让创始人做视觉决策。
> 不锁定：具体页面 layout / 网站信息架构 / 动效细节（留给阶段 D）。

---

## 0. 视觉定位（6 条设计原则）

1. **Craft over Flash**：工艺感优先。Linear / Vercel / 37signals 美学，不是赛博朋克 / 紫粉渐变 / AI 脑子图标。
2. **Proof over Promise**：视觉为"证据"服务（14 天 live timer、代码块、实测数据），不为"氛围"服务。
3. **Less Hue, More Depth**：色相极少（3 个品牌色），靠中性层次 + 一抹信号色区分优先级。
4. **Readable First (CN)**：中文阅读优先（字号偏大、行高偏宽、中英空格规则），不是英文站的机械复刻。
5. **Accessible by Default**：WCAG 2.2 AA 红线，核心 CTA AAA。
6. **Dark Mode Is Not Inversion**：深色模式是二次设计，不是反色。

**一句话隐喻**（Brand Guardian 给）：Shipwright 是一把日本船匠的**铜制手钉**（釘/kasugai）——单一用途、手锻纹理、不装饰。

---

## 1. 色彩系统（锁定）

### 1.1 三个品牌色

| 角色 | 名字 | HEX 基准 | 心理锚点 | 使用场景 |
|---|---|---|---|---|
| **Primary** | Deep Harbor 深海蓝 | `#2B5468` (primary-600) | 挪威航运 / Maersk 克制、不是 SaaS 电子蓝 | Logo、主 CTA、链接、深色模式底色 |
| **Secondary** | Canvas Linen 工艺米白 | `#FDFCF9` (canvas-50) | 船帆粗布、印刷纸温度，不是纯白 | 页面主背景 |
| **Signal** | Signal Orange 信号橙 | `#E86A2A` (signal-500) | 工业安全橙 / 起重机桅杆 / Pantone 166C | 14 天 timer、主 CTA 强调、限时标签（面积 ≤5%） |

### 1.2 完整 Tonal Scale

全部 11 档（50–950）详见 `docs/research/2026-04-22-ui-design-system.md` §1.1–1.4。直接采纳，**不可微调**。Tailwind config 见同文档附录 A。

### 1.3 中性色（双套 Gray）

- **Warm Gray**（主力，配 Canvas Linen 生态）— 正文默认 `warm-700 #484438`
- **Cool Gray**（代码块 / Geek UI）— code block bg `cool-800 #1D2230`

### 1.4 语义色

| 语义 | Light (50) | Base (500) | Deep (700) |
|---|---|---|---|
| Success | `#E8F5EE` | `#2F9E5E` | `#1E6B40` |
| Warning | `#FFF6E0` | `#D99B14` | `#8A6008` |
| Error | `#FCE8E8` | `#D13A3A` | `#8C2020` |
| Info | `#E8F1FA` | `#3378C1` | `#1E4C80` |

**红线**：所有语义色饱和度 ≤60%，避免 Tailwind default 那种刺眼的绿/红。

### 1.5 Dark Mode 映射（不是反相）

- 底色：`primary-900 #0E2230`（延续品牌，**不用纯黑**）
- 正文：`#E6E1D4`（暖米白 canvas-100 tint）
- 品牌色提亮一级，信号色降饱和，阴影改纯黑 60%
- 完整映射表见 UI Designer 文档 §1.6
- 切换：`prefers-color-scheme` 默认 + 顶部 toggle + localStorage

### 1.6 Logo 方向对 Accent 色的微调（Contingent）

**重要**：Signal Orange `#E86A2A` 是**默认基准**。Logo 方向确定后，需按 Brand Guardian 的配色兼容矩阵微调：

| Logo 方向 | Accent 最终色 | 相比默认的调整 |
|---|---|---|
| Concept A（Hull Lines） | 赭橙 `#C5502E` | 从 `#E86A2A` 偏铁锈方向（更"做旧"） |
| Concept B（The Keel） | Signal Orange `#E86A2A`（默认） | **不变** |
| Concept C（双语 Lockup） | 朱红 Pantone 186 C `#C8102E` | 切换到"印章红"（限印章时刻用） |
| Concept D（Cross-Section） | 赭橙 `#C5502E` | 同 A |

Accent 微调只替换 `signal-500/600/700` 三档，其他档位按色相平移。

### 1.7 WCAG 对比度（已校验的 13 组组合）

全部在 UI Designer 文档 §1.7。**Body/Heading 通过 AAA，主 CTA 通过 AAA**，仅 Dark mode 的 primary button 在 3.98（仅用于 ≥18px bold 或 ≥24px regular）。

---

## 2. 字体系统（锁定）

### 2.1 三个字体家族

| 角色 | 选定 | 授权 | 理由 |
|---|---|---|---|
| **英文** | **Inter Variable** | OFL 1.1 免费商用 | Variable + tabular nums + x-height 与 HarmonyOS 贴合 |
| **中文（简+繁）** | **HarmonyOS Sans SC / TC** | 华为官方免费商用无需申请 | 简繁共体 / 规避思源 italic 渲染问题 / 字重完整 100–900 |
| **等宽（代码 / CLI / 数字）** | **JetBrains Mono** | OFL 免费商用 | Ligatures 对 `=>`, `!==` 友好 / 工程师审美 |

### 2.2 font-family 声明

```css
font-family: "Inter", "HarmonyOS Sans SC", "HarmonyOS Sans TC",
             -apple-system, BlinkMacSystemFont, "PingFang SC",
             "Microsoft YaHei", sans-serif;
```

### 2.3 Type Scale（Desktop + Mobile 双套）

基准 `1rem = 16px`，Modular Scale `1.250`（Major Third）。完整 14 档（display-xl → caption → code → timer）见 UI Designer 文档 §2.4–2.5。

关键数字：
- Hero `display-xl` = 72px desktop / 48px mobile
- Body 默认 16px / 1.7 line-height
- 14 天 Timer = 48px / tabular-nums

### 2.4 中英混排规则

- `text-autospace: ideograph-alpha ideograph-numeric`（Safari 17+ / Chrome 119+）
- Fallback：Markdown/MDX 处理阶段用 `pangu.js` 自动插入薄空格
- Heading 中文 `letter-spacing: 0.02em`（中文需要更宽松的字间距）
- **禁止中文斜体**（HarmonyOS italic 会算法倾斜，难看）

### 2.5 字重红线

| 禁用 | 允许 |
|---|---|
| 100 Thin / 300 Light（中文不可读） | 400 / 500 / 600 / 700 |
| 900 Black 在正文 | 900 Black 仅用于 Display / Wordmark |

### 2.6 字体加载策略（Phase 1 国内）

- **自托管**（不用 Google Fonts CDN，国内访问慢）
- 按页面子集化（home / pricing / blog 各一套 subset）
- `font-display: swap`
- 中文字体 woff2 压缩 + subset 到 GB2312 核心字集 + 扩展字根据 pillar 内容添加

---

## 3. 间距 / 圆角 / 阴影 / 断点（锁定）

### 3.1 间距 Scale

基于 4px 基准，15 档（`space-0` 到 `space-32`）。详见 UI Designer 文档 §3.1。Section 间距：mobile 48px / tablet 64px / desktop 96px。

### 3.2 圆角

**主力 `radius-md = 6px`**（偏方，工艺感）。完整 7 档从 `radius-none 0` 到 `radius-full 9999px`。**禁止 20px+ 大圆角**（那是消费 App 审美）。

### 3.3 阴影

5 档 elevation + inner，**阴影蓝色通道 `rgba(23, 48, 61, ...)` 来自 primary-800**（让阴影也有品牌色温）。详见 UI Designer 文档 §3.3。

### 3.4 Breakpoints

`xs<480 / sm≥640 / md≥768 / lg≥1024 / xl≥1280 (desktop 基准) / 2xl≥1536 / 3xl≥1920`。

### 3.5 容器 max-width

- `container-prose 680px`（博客正文）
- `container-lg 1200px`（主站内容）
- `container-xl 1440px`（Hero 特殊）

---

## 4. 组件 Tokens（10 个核心组件，锁定）

所有组件的完整规范见 UI Designer 文档 §4.1–4.10。阶段 D 开发必须严格遵守。

| # | 组件 | 关键参数 |
|---|---|---|
| 4.1 | Button | primary/secondary/ghost/danger + **signal（14 天 CTA 专用）**；4 档 size 32/40/48/56px；radius-md 6px |
| 4.2 | Input | height 40px；radius-sm 4px；focus ring `rgba(54,105,127,0.12)` |
| 4.3 | Card | bg canvas-50；border warm-200；radius-lg 10px；shadow-sm；hover translateY(-2px) |
| 4.4 | Nav | 64px / 56px height；backdrop-blur；CTA 是 Signal Orange "开始 14 天" |
| 4.5 | **CTA 双画像分叉** | 左画像：电商老板 → btn-signal；右画像：技术 Lead → btn-secondary |
| 4.6 | **Price Card（4 SKU）** | Vibecoding Pod 推荐态 + BYOK chip (`bg signal-100, color signal-700`) |
| 4.7 | Code Block | bg cool-800；JetBrains Mono 14/1.7；复制按钮 + 行号；Shiki syntax theme |
| 4.8 | **14 天 Timeline** | 水平 desktop / 垂直 mobile；当前节点 signal-500 ring-4 pulse |
| 4.9 | **Chat Widget** | 右下 56×56 FAB（primary-600）；展开 400×560；"船匠助手"；留资表单触发 |
| 4.10 | Data Viz | Sparkline / Bar / Ratio / Gauge；所有数字 tabular-nums |

### 4.1 双画像 CTA 的文案定型（延续阶段 A 的 CC Strategic 打法）

```
┌─────────────────────────┬─────────────────────────┐
│  电商老板                │  技术 Lead              │
│  14 天交付一个可量产       │  vibecoding + 代码 100% │
│  的增长系统               │  交付 / BYOK             │
│  [btn-signal] Pilot Pod  │  [btn-secondary]         │
│  14 天                    │  Vibecoding Pod          │
└─────────────────────────┴─────────────────────────┘
```

### 4.2 Price Card 的 BYOK 视觉化

- BYOK chip：小 badge `bg signal-100, color signal-700, radius-full, text "BYOK −20%"`
- 位于每个卡片价格下方
- 反 CC Strategic / 反 credit 计费的正面视觉宣言

---

## 5. 图标系统（锁定）

### 5.1 图标库

- **主力**：Lucide Icons（ISC 免费，stroke 1.5px，尺寸 12/14/16/20/24/32）
- **备用**：Phosphor（MIT，多权重）
- 颜色：`currentColor`（跟随文字色）

### 5.2 SKU 图标衍生逻辑

4 个 SKU 图标**同源视觉 DNA**（Brand Guardian 给）：

| SKU | 图标几何 | 符号学 |
|---|---|---|
| Pilot Pod / 试航舱 | 方框 + 圆点 + 辐射短弧（雷达扫描） | 一次性探测 |
| Vibecoding Pod / 匠造舱 | 方框 + 实心龙骨梯形 | 核心产品 |
| Fleet Integration / 舰队集成 | 方框 + 3 个小梯形（2+1 排列） | 多船协同 |
| Crew Retainer / 船员月租 | 方框 + 水平线上 2 圆（船员在船上） | 持续驻扎 |

**一致性约束**：
- 方框 24×24（1x）/ 48×48（2x）
- 内嵌图形与方框留白 4px
- 线宽：方框 1.5px，内嵌线条 1px
- **不用颜色区分 SKU，用形状区分**

### 5.3 禁止

- 卡通插画、精修商业图库人像、AI 生成的 "成功人士"、霓虹光效、紫粉渐变、苹方字体
- 沙漏 / 闹钟 / 秒针动画（这是 to-C 语言，to-B 契约用克制几何）

### 5.4 图像风格

| 类型 | 处理 |
|---|---|
| 案例截图 | 浏览器 chrome mockup + 8px warm-200 border + shadow-md |
| 团队照片 | 黑白去饱和，或 canvas-200 单色化 |
| 客户 Logo | 全站 grayscale 100%，hover 恢复彩色，高度 32px 统一 |

---

## 6. 首屏视觉语言（Hero Section）

### 6.1 视觉层级

```
[Nav 64px — Logo / Menu / Lang Toggle / Dark Toggle / CTA "开始 14 天"]
[Overline: FOR DTC OPERATORS — signal-600]
[Display XL 72px:「别堆人，造船。」]   ← HarmonyOS Sans Black 900, letter-spacing 0.04em
[Display LG 56px: Don't hire. Ship.]   ← Inter Regular, warm-500
[Body L 18px: 14 天交付一个可量产的增长系统。代码 100% 归你。透明定价。]
[双画像 CTA 分叉: 电商老板 / 技术 Lead]
[14 天 Live Timer — Geek 证据 70% 浓度]
[客户 Logo 6-8 个 grayscale 32px]
```

### 6.2 动画原则

动画**只服务证据，不服务氛围**：

| 元素 | 动画 | Geek 浓度 |
|---|---|---|
| Headline | fade in + letter-spacing 收紧 400ms | 0% |
| 双画像 CTA | stagger fade-in 150ms | 0% |
| **14 天 Live Timer** | **实时倒计时，tabular-nums 跳动，当前项目 Day X/14** | **70%**（核心） |
| 代码演示（可选） | `shipwright ship --day=7` CLI 回显 | 30% |
| 3D / 视频 | ❌ 不做 | — |
| 打字机、霓虹、渐变文字 | ❌ 禁止 | — |

### 6.3 14 天 Live Timer 组件（首屏核心 Geek 证据）

```
┌──────────────────────────────────────────────────┐
│  ▸ CURRENT SHIP  ─────  Day 03 / 14  ──────  [●] │
│  ✓ Day 1  Kickoff                   done        │
│  ✓ Day 2  Architecture draft        done        │
│  ● Day 3  MVP wiring                 in progress │  ← signal-500 pulse
│  ○ Day 4  Data pipeline              pending    │
│  ○ Day 14 SHIP                       pending    │
│  实时 from our ops dashboard                     │
└──────────────────────────────────────────────────┘
```

- 容器：`cool-800 bg` + 1px cool-700 border + radius-lg
- **决策**：首次上线时可用**模拟数据**（内部 dogfooding 项目时间线），待真实客户项目上线后接 ops dashboard（阶段 D 最后一步）
- 见 UI Designer 文档 §6.2

### 6.4 「别堆人，造船。」视觉化

- 字体 HarmonyOS Sans Black 900 @ 72px
- 颜色 `warm-900` on `canvas-50`
- `letter-spacing: 0.04em`（呼吸感）
- 句号「。」`font-weight: 400`（与汉字区分，避免过重）
- 英文副标 "Don't hire. Ship." Inter Regular 56px, warm-500
- **禁止**：渐变文字、霓虹辉光、打字机效果

---

## 7. Logo 方向（✅ 已锁定：Concept B · The Keel 龙骨）

**决策时间**：2026-04-22
**决策人**：创始人（Visual Companion 浏览器交互）
**打样策略**：不做 A/B 并行，直接以 B 为唯一方向细化执行

### 7.0 锁定内容（Concept B 执行要点）

| 元素 | 规范 |
|---|---|
| **Mark 几何** | 等腰梯形（底宽 : 高 ≈ 1 : 2.4），抽象龙骨 + 船体截面 |
| **桅杆** | 梯形顶部伸出的 1 条短直线，长度 = 梯形高度的 0.6× |
| **桅杆动画** | 2s 呼吸闪烁（opacity 1 ↔ 0.35），仅在首屏 hero / 加载中呈现，其他场景静态 |
| **中文字样** | 方正兰亭黑 Pro DemiBold 或思源黑体 CN Medium；字间距 -30 units |
| **英文字样** | Söhne Buch 或 Neue Haas Grotesk Display 55；Web 渲染 fallback Inter Medium |
| **Favicon** | 只保留梯形 + 桅杆，无文字 |
| **Dark Mode** | mark 与文字同色 `#FAFAF7` on `#101014` |
| **动画版** | 官网 hero 桅杆呼吸 2s，其他场景禁用 |
| **名片工艺** | Mark 盲文压印（blind deboss），文字单色黑印刷 |

### 7.1 4 个候选方向（历史记录）

历史候选（A / C / D 未选中，保留供未来海外扩张 / 特定场景复用）：

| # | 概念 | 核心 | 风险 | 独特性 | 国内穿透 | Favicon | 执行难度 |
|---|---|---|---|---|---|---|---|
| **A** | **Hull Lines 船型线** | 字体导向 wordmark，`i` 的点置换为水线 | 低 | 中 | 高 | 中 | 中（需字型预算） |
| **B** | **The Keel 龙骨** | 梯形船体 + CLI 光标桅杆 | 中 | 中 | 高 | 极好 | **低** |
| **C** | **双语 Lockup** | `船 │ Shipwright` pipe 分隔 | 中 | **高** | **极高** | 中 | 中 |
| **D** | **Cross-Section 横截面** | ASCII 代码构成的船体曲线 | 高 | **极高** | 中 | 差 | 极高 |

### 7.2 Concept B 对 UI 系统的下游影响（已应用）

- ✅ **Accent 色保持 Signal Orange `#E86A2A`**（本 spec §1.1 原值不变）
- ✅ **UI 可用梯形几何做容器**（首屏价格卡片顶部、引用块、section separator）
- ✅ **CLI 光标动画延伸到 input caret 和首屏 "CURRENT SHIP" timer**（2s 呼吸节奏）
- ⚠️ **避免使用其他三角形图标**（会和 mark 撞风格）——Lucide 图标库中 `triangle` / `play` 等慎用

### 7.3 Concept B 的品牌印章落点

1. **Favicon** (16×16)：只有梯形 + 桅杆，无文字，SVG 源文件
2. **飞书 / 微信公众号头像**（512×512）：mark 居中 + 20% 留白，背景 `primary-900`
3. **GitHub README 顶部**：保留 Concept D 的 ASCII 版作**彩蛋**（阶段 C spec §8.2 原定策略保留）
4. **LinkedIn 头像**：mark + canvas-50 背景（LinkedIn 英文环境）
5. **名片**：mark 盲文压印 + 背面 Tagline 单色印刷
6. **合同抬头**：横向 lockup + `Shipwright Contract Template v2026.05 · /14d Guarantee Clause enclosed` 小字

---

## 8. 品牌应用场景（部分决策，其余移交阶段 D）

### 8.1 官网首屏

- 背景：纯色 `canvas-50` 或 `primary-900`（depending on dark mode）
- **禁止**：渐变、背景图、动态 particles
- Hero 之外的动效：按 §6.2

### 8.2 GitHub Repo README

- README 顶部：**ASCII 版 Concept D**（即使最终选 B/C，GitHub 上也出现 D 的 ASCII 版作为**彩蛋**）
- 徽章：`[14d Guarantee]` `[v2026.05]` `[Made in Shenzhen]`，shields.io flat-square，`#101014 / #A3A3A3`

### 8.3 名片

- 90×55mm 哑光米白 350gsm
- Logo 居左上 + Tagline「别堆人，造船。」在背面居中偏下
- 工艺：**盲文压印**（blind deboss），单色黑印刷
- **禁止烫金烫银**

### 8.4 飞书 / 微信公众号头像

- 512×512，Logo mark（取决于方向）居中 + 20% 留白
- 背景 `#101014` 深炭
- 公众号名称 "船匠 Shipwright"（中文在前）

### 8.5 其余（阶段 D 执行）

小红书封面、LinkedIn banner、发票抬头、合同模板等 — 见 Brand Guardian 文档 §4.1–4.7

---

## 9. 三个视觉 Moodboard（供设计 reference）

### Moodboard #1：Drydock Blueprint（干船坞蓝图）

- Behance: `ship blueprint technical drawing` + `editorial minimalism`
- Dribbble: `industrial product catalog` + `Swiss design grid`
- Pinterest: `Dieter Rams product manual` + `Muji technical photography`
- 关键词：grid / coordinate / hairline rule / cross-section / elevation view

### Moodboard #2：Workshop Floor（工坊地板）

- Behance: `Japanese woodworking craft` + `editorial layout 37signals style`
- Pinterest: `George Nakashima woodwork portfolio` + `Shinola Detroit brand book`
- 关键词：hand-plane shaving / workbench top-down / wood grain / pencil sketch

### Moodboard #3：Cargo Terminal at Dawn（黎明货运港）

- Behance: `container port photography dawn` + `Stripe press page aesthetic`
- Dribbble: `Vercel landing page hero` + `Rauno Freiberg portfolio`
- Pinterest: `Andreas Gursky cargo port` + `Edward Burtynsky industrial landscape`
- 关键词：container stack / crane silhouette / long exposure dawn light

---

## 10. 交付物清单（移交阶段 D）

### 10.1 视觉 Token 资产

- [ ] `tailwind.config.ts` 最小可用版本（见 UI Designer 文档附录 A）
- [ ] CSS Variables 全 token 文件（阶段 D 首步）
- [ ] Figma Library（阶段 D 启动前补齐）

### 10.2 字体文件包

- [ ] Inter Variable woff2（英文 + 拉丁扩展子集）
- [ ] HarmonyOS Sans SC / TC 子集化 woff2（GB2312 核心 + 扩展）
- [ ] JetBrains Mono Variable woff2

### 10.3 Logo 套件

- [ ] Logo 方向最终选定（**阻塞项，本阶段必须完成**）
- [ ] 主 Logo 全尺寸套件（SVG + PNG @1x/2x/3x + favicon.ico）
- [ ] Dark Mode 反白版本
- [ ] 4 个 SKU 图标（SVG + PNG）
- [ ] 单色印刷版本（黑 + 朱红章 Pantone 186 C，如选 Concept C）

### 10.4 其他

- [ ] Shiki 代码高亮 theme JSON（基于本色板）
- [ ] Dark Mode toggle 组件 spec
- [ ] Accessibility baseline（Axe / Lighthouse 跑 Hero 页）

---

## 11. 待对齐 / 待决策事项（阶段 D 启动前）

| # | 事项 | 决策人 | 截止 |
|---|---|---|---|
| ~~C-1~~ | ~~Logo 方向最终选定~~ | ✅ **已定：Concept B (The Keel)** | 2026-04-22 |
| C-2 | 繁中字体 Phase 2 是否切换 HarmonyOS Sans TC | 阶段 D 末期 | — |
| C-3 | Chat Widget：自研 vs 第三方（Crisp / Tawk.to） | 阶段 D Frontend 评审 | — |
| C-4 | 14 天 Live Timer 数据源：真实 ops vs 内部 dogfooding | 阶段 D 末期 | — |
| C-5 | 英文站 Display XL 字号（72 vs 80-88px） | Phase 2 启动时 | — |

---

## 12. 本 spec 不定清单

明确**不在本 spec 决定**：

- ❌ 页面数 / 信息架构（阶段 D）
- ❌ 具体 layout / 组件位置 / URL 结构（阶段 D）
- ❌ 技术栈（Next.js / Astro / Nuxt）（阶段 D）
- ❌ Chat Widget 具体实现（阶段 D）
- ❌ 动效细节（阶段 D）
- ❌ SEOMachine 集成具体代码（阶段 D）

---

## 13. 通过条件

本 spec 除 §7（Logo 方向）外的所有内容通过后，阶段 C 进入"Logo 视觉决策阶段"。创始人通过 Visual Companion 交互选定 Logo 方向后，本 spec 状态 `awaiting-logo-decision` → `final`，阶段 D 正式启动。

**检查清单**：
- [x] 色彩系统完整（11 档 tonal × 3 主色 + 中性 + 语义 + Dark Mode 映射 + WCAG）
- [x] 字体系统完整（Inter + HarmonyOS + JetBrains Mono + Type Scale 14 档）
- [x] 组件 tokens 完整（10 个核心 + 所有 state）
- [x] Dark Mode 策略完整（不反相 + 完整映射）
- [x] SKU 图标衍生逻辑（同源 DNA）
- [x] 首屏视觉语言（层级 + 动画 + Tagline 视觉化 + 14 天 Timer）
- [x] **Logo 方向选定**：Concept B · The Keel（2026-04-22）

---

## 相关文件

- 阶段 A spec：`docs/superpowers/specs/2026-04-22-stage-a-brand-positioning-design.md`
- 阶段 B spec：`docs/superpowers/specs/2026-04-22-stage-b-product-services-design.md`
- Brand Guardian 视觉概念（完整版）：`docs/research/2026-04-22-brand-visual-concepts.md`
- UI Designer 视觉系统（完整版）：`docs/research/2026-04-22-ui-design-system.md`
