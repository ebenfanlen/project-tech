# Shipwright 视觉品味审计 · 按 Stitch Taste Design 框架

**审计时间**: 2026-04-23 上午 · 延展会话
**审计框架**: `~/.claude/skills/taste-design` (Stitch Design Taste skill)
**Benchmark**: Linear / Vercel / 37signals (品牌 spec 锁定) · 叠加 Stitch 反 AI-slop 规则
**审计范围**: /  /pricing  /how  4 SKU 详情  /contact  /about  /careers  /work  /blog  /scenes  /admin  /en/  /roadmap

**总判断**: 骨架扎实、信息层级清晰、色板和 The Keel logo 有品牌记忆点. 但**有 5 处"一眼识别为 AI 生成站点"的 tell**, 改完 = Premium 跨越.

---

## TOP 5 🔴 破档次 · 必改 (改 1 处就见差)

### 1. 信任墙 aspirational 数字 (12 品牌 / 34 agent / 1840 小时)

**位置**: `src/components/TrustedLogos.astro:14-18`

```ts
const stats = {
  clientCount: 12,      // ← 假
  agentCount: 34,       // ← 假
  savedHoursMonthly: 1840, // ← 假
};
```

**问题**: Stitch skill 第 9 条 anti-pattern 明确:
> "Never generate fabricated statistics — '99.98% UPTIME', '124ms AVG. RESPONSE', '18.5k DEPLOY CYCLES' 是 AI filler"

你现在 Phase 1 前 3 单还没签 · 这三个数字都是编的. 老 DTC 运营一眼看穿.

**改法** (3 选 1):
- **A. 删整个 stats section** (8 客户 label + 3 计数) → 只留 8 个匿名 label, 移除"已交付 12 · 运行中 34 · 累计节省 1840" 计数行
- **B. 换定性描述**: "Phase 1 · 前 3 个客户正在交付中" · 诚实不吹
- **C. 换真实 milestone**: "We started April 2026" · "首个 Pilot Pod 预计 May 2026 上线"

推荐 A · 理由: Phase 1 信任墙本来就是挂真客户 logo 的地方, 没客户就留白看齐 Linear.

---

### 2. Inter 字体 (Stitch skill BANNED for premium)

**位置**: `src/styles/global.css:11` + `src/styles/global.css:82-84`

```css
@import "@fontsource-variable/inter";
...
--font-sans: "Inter Variable", "Noto Sans SC Variable", ...
```

**问题**: Stitch skill 第 3 条:
> "`Inter` is BANNED for premium/creative contexts. Force unique character: `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`"

Inter = 2022-2024 每一个 AI SaaS 都用 · 过度熟悉 = 同质化. 你的品牌定位是"Linear / Vercel 级 craft" · Vercel 正是用 **Geist** · 刚好符合.

**改法**:
```bash
pnpm remove @fontsource-variable/inter
pnpm add @fontsource-variable/geist @fontsource-variable/geist-mono
```

`src/styles/global.css:11,14`:
```css
@import "@fontsource-variable/geist";
@import "@fontsource-variable/geist-mono";  // 替换 jetbrains-mono (可选)
```

`src/styles/global.css:82-86`:
```css
--font-sans: "Geist Variable", "Noto Sans SC Variable", "Noto Sans TC Variable",
             "HarmonyOS Sans SC", "HarmonyOS Sans TC",
             -apple-system, BlinkMacSystemFont, "PingFang SC",
             system-ui, sans-serif;
--font-mono: "Geist Mono Variable", ui-monospace, SFMono-Regular, Menlo, monospace;
```

**影响**: Vercel 同款品味 · 0 新依赖成本 · 中文字体不变 (Noto Sans SC 保留 · 和 Geist 字怀协调度高).

**代价**: 如果坚持"反 Vercel"要再独特 → Satoshi (Fontshare 免费 · 更 editorial 感).

---

### 3. 4 SKU 等分卡片 (违反 "3 equal cards" ban 的变体)

**位置**: `src/components/SkuShowcase.astro:25` 和 `src/pages/pricing.astro:51`

```astro
<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  {skus.map(...)}  // 4 张等高等宽卡片
</div>
```

**问题**: Stitch skill 第 6 条:
> "The generic '3 equal cards horizontally' feature row is BANNED — use 2-column Zig-Zag, asymmetric grid, or horizontal scroll"

4 equal cards 是 3 equal 的更糟版本 · 视觉张力为零 · 所有 SaaS 都这样. 你的 Vibecoding Pod 要占 80% 订单, 但在 4 card 里视觉权重只有 25%.

**改法** (推荐 asymmetric 2x2 big+smalls):
```
┌──────────────────────┬──────────┐
│                       │ Pilot    │
│   Vibecoding Pod      │ Pod      │
│   (主推 · 2x 宽)      ├──────────┤
│   14 天 · ¥58K        │ Fleet    │
│   5 场景全展开          │ Integr.  │
│                       ├──────────┤
│                       │ Crew     │
│                       │ Retainer │
└──────────────────────┴──────────┘
```

Tailwind grid:
```astro
<div class="grid gap-4 md:grid-cols-3">
  <a class="md:col-span-2 md:row-span-3 ...">Vibecoding Pod (主推)</a>
  <a class="...">Pilot Pod</a>
  <a class="...">Fleet Integration</a>
  <a class="...">Crew Retainer</a>
</div>
```

**额外价值**: 主推卡放大 2x · 视觉权重直接匹配"80% 订单"的真实占比. 客户第一眼看到 Vibecoding 而不是 4 个等价选项.

---

### 4. `🚢 SHIP` / emoji 散落在界面和 MDX

**位置**:
- `src/components/FinalCTA.astro:?` — `ready to ship?` section
- `src/pages/how.astro:129` — `🚢 SHIP` Day 14 badge
- `src/content/blog/ai-driven-dtc-14-day-mvp.mdx:134` — `🚢 SHIP`
- `src/pages/changelog.astro` — `🚢` 作 tag icon
- 多篇 blog MDX: `💡` `📧` `📱` `📍` `✓` 等

**问题**: Stitch skill 第 9 条: "No emojis anywhere".

emoji 是 Notion / Canva 的 to-C 语言 · 你品牌是 "工程图纸 · B2B 契约". 一个 🚢 打折所有 Linear-like 克制感.

**改法**: 全部替换为 inline SVG. 创建 `src/components/icons/` 目录 · 5 个 Lucide 风格 SVG:
- `ship.svg` → 替换 🚢
- `mail.svg` → 替换 📧
- `phone.svg` → 替换 📱
- `pin.svg` → 替换 📍
- `lightbulb.svg` → 替换 💡

批量替换脚本:
```bash
grep -rn '🚢\|💡\|📧\|📱\|📍' src/ --include="*.astro" --include="*.mdx"
```

**保留例外**: `CLAUDE.md:12` 已明确允许"内部工具 🚢 代表发布". changelog 页内部可保留.

---

### 5. Hero 元素瞬间挂载 · 无 spring physics · 无 cascade

**位置**: `src/pages/index.astro:36-118` 全 Hero block

**问题**: Stitch skill 第 8 条:
> "Spring Physics default · stiffness:100, damping:20" · "Staggered Orchestration · Never mount lists instantly — use cascade delays"

当前 Hero 所有元素 (overline + H1 + subtitle + body + 2 CTA cards + Timer) 同时 fade-in. 看起来静态 · 不像 "premium 正在加载品味"的感觉.

**改法**: Motion One 已装 (3KB). 在 index.astro `<script>` 块加:

```ts
import { animate, stagger } from "motion";

animate(
  ".hero-stagger > *",
  { opacity: [0, 1], y: [20, 0] },
  { delay: stagger(0.08), duration: 0.7, easing: "spring(1, 100, 20)" }
);
```

然后 Hero 容器加 `class="hero-stagger"` · 每个子元素 opacity:0 起始. 7 个元素 × 80ms = 560ms cascade reveal. 用户视觉上感受到"精心编排".

**影响**: 无视觉停顿 (总时长 <1s) · JS 成本 3KB · 但从"AI 生成静态页"瞬间跨到"Linear-grade 交互".

---

## TOP 5 🟡 P1 优化机会 (改 1 处明显提升)

### 6. 14 天 Live Timer 的 Geek 证据强度不够

**位置**: `src/components/LiveTimer.astro`

现状: cool-800 底 + 5 行 "Day 01-14" 列表 + 绿点 done / 橙 active / 灰 pending.

**机会**:
- active step 当前没有 "shimmer" 扫描效果 (skill "Perpetual Micro-Interactions" 要求 active 有无限 loop)
- 顶部 "Current Ship / Day 03 · Case #047 · V-CS" 是静态文字 · 可以加 mono 数字跳动 (每 10s 转 1h)
- 底部 "实时 from Shipwright ops dashboard · 下次同步 in 58m" 是假的 · 如果不接真 API 至少加一个可见的 "countdown 58:42:15" · 或者删掉

**改法** (3 个 micro):
1. active row 加背景 `linear-gradient(90deg, transparent, var(--color-signal-500/0.08), transparent)` + 2s shimmer 循环 transform translate
2. `Day 03` 数字加 `font-variant-numeric: tabular-nums` + 每分钟递增 1h 的 mock counter
3. 右下 countdown 真做 setTimeout 每秒 -1s · 或删掉"下次同步"行

**ROI**: 这块是 Hero 下方 Geek 10% 证据的核心 · 现在"看起来像 AI 编的" → 改完"看起来像真的 ops dashboard"

---

### 7. 所有圆角 6px 太方 · card 和 hero CTA 不该同级

**位置**: `src/styles/global.css:102-107` + 全站 radius 使用

```css
--radius-sm: 4px;
--radius-md: 6px;   ← Button 默认
--radius-lg: 10px;  ← Card
```

**问题**: Stitch skill 第 5 条建议 card 用 2.5rem (40px) 大圆角. 你的品牌 spec 锁定偏方 (6px) · 坚持没错 · 但**所有卡片都 10px** 导致视觉层级平. Linear / Vercel 实际用 8-12px (小) + 16-24px (大 card) 双档.

**改法**: 新增 `--radius-xl: 14px` · 仅用于首屏双画像 CTA 和 4 SKU 主推卡:
```css
--radius-xl: 14px;
--radius-2xl: 20px;   /* Feature hero card */
```

`src/pages/index.astro:64,89`: 双画像 CTA `rounded-[var(--radius-xl)]` 替代 `rounded-[var(--radius-lg)]`.
`src/components/SkuShowcase.astro:32`: Vibecoding 主推卡 `rounded-[var(--radius-2xl)]` · 其他 3 卡保留 `radius-lg`.

**视觉结果**: 层级立刻出来 · 主推卡"重要"肉眼可见.

---

### 8. 中英混排标点不一致

**位置**: 全站多处

抽样 (`src/pages/index.astro:56`):
```
14 天交付一个可量产的 AI 工作流 · 代码 100% 归你 · 透明定价 · 支持 BYOK。
```

混用:
- 半角 `·` (6 处 · 中文)
- 全角 `。` 句号 (中文)
- 半角 `.` (英文"Don't hire. Ship.")
- 中英之间 pangu 空格 (由 pangu.js 客户端加 · 但 MDX 静态内容没生效)

**问题**: Stitch skill 要求 "本地化一致" · 中文正式场合应全角 · "·" 是正确的分隔符但半角 · 应该用 `、` 或继续半角但全站统一.

**改法**:
1. **定一套全站规范** (我推荐):
   - 中文分隔: 半角 `·` 前后带空格 (你现在用的, OK)
   - 中文列表: 中文顿号 `、` (短) / 分号 `；` (长)
   - 句号: 中文 `。` 英文 `.`
   - 感叹号/问号: 根据语言
2. MDX 用 `pangu-formatter` Node 脚本在 build 前跑一遍:
   ```bash
   pnpm add -D pangu
   # 写个 prebuild hook 处理 src/content/**/*.mdx
   ```

**ROI**: 只有懂中文排版的用户能分辨 · 但这批用户里 80% 是你的目标客户 DTC 老板. 一个细节信号 = "这团队懂中文"

---

### 9. 客户信任墙"某深圳跨境美妆独立站 · L" 过度脱敏

**位置**: `src/components/TrustedLogos.astro:3-12`

```ts
{ label: "某深圳跨境美妆独立站", handle: "L / 月 GMV ¥80 万" },
```

**问题**: skill 第 9 条:
> "No generic names ('John Doe', 'Acme', 'Nexus')"

"某深圳" / "某杭州" × 8 = AI 生成感满格. 加上单字母 L / Z / W · 像密码.

**改法** (权衡隐私 vs 真实感):
- **A. 改城市 + 品类 + 颜色编码**: "Lumesque · Shenzhen · Beauty DTC" · 编品牌名 (不涉及真商标)
- **B. 要真客户同意前就放占位**: 改成 "[Brand #1 · 月 GMV ¥80 万]" 纯占位 · 等签约客户同意后替换为真品牌
- **C. 彻底删这个 section**: 直接跳过信任墙, 优先让 "反 Agency 三列对比" 当 section 4

推荐 B · 先诚实 · 后续客户签约后再补真实 logo 是最 Linear 式打法.

---

### 10. Admin loader 是 "加载中..." 文字 (非 skeletal)

**位置**: `src/pages/admin/leads.astro:165`

```html
<tr><td colspan="8" class="px-4 py-12 text-center">加载中...</td></tr>
```

**问题**: skill 第 5 条:
> "Skeletal loaders matching exact layout dimensions — no generic circular spinners"

"加载中..." 比 spinner 还差 · 是 raw text.

**改法**: 6 行 skeleton row 模拟真 table 结构:
```astro
{Array.from({length: 6}).map(() => (
  <tr class="border-b" style="border-color:var(--border-default)">
    <td class="px-4 py-3"><div class="h-4 w-24 rounded animate-pulse" style="background:var(--bg-muted)"></div></td>
    <td class="px-4 py-3"><div class="h-4 w-32 rounded animate-pulse" style="background:var(--bg-muted);animation-delay:80ms"></div></td>
    ... 8 列
  </tr>
))}
```

---

## 11-15 · 🟢 P2 细节打磨 (有空再做)

### 11. 价格数字层级 (SkuShowcase)
主推 Vibecoding 价格 1.5rem 和其他 3 个一样 · 应放大到 2rem-2.5rem + tabular-nums slashed-zero.

### 12. shadow 多档没用完
`shadow-xl` 只在 Sticky Nav blur 用 · 建议 FinalCTA 底部 section 加 shadow-xl 提升视觉权重.

### 13. Dark Mode toggle 图标
现在 3 态图标 (sun / moon / system) 是手绘 SVG · 风格接近 Material · 建议统一 Lucide stroke 1.5px.

### 14. Blog TOC 太窄
`src/pages/blog/[...slug].astro:42` 用 `grid-cols-[200px_1fr]` · TOC 200px 太紧 · 中文 H2 被截. 建议 240px 或用 sticky aside + text-overflow:ellipsis 加 title tooltip.

### 15. `/careers` opening card 所有 3 个默认都展开第 1 个 · 鼓励刷过前两个
Careers 页 `<details open={i === 0}>` · 符合 UX · 但 Senior AI Engineer 展开后太长 · 中间 2 个岗位用户可能滚过头. 改 `open={false}` 全部默认收起 + job title 旁加"展开 ↓" 视觉 affordance.

---

## 核心 3 个是否冲突品牌 spec

| 冲突点 | Stitch 要求 | 品牌 spec | 我的决定 |
|---|---|---|---|
| Inter 字体 | BANNED | 锁定 Inter Variable | **建议改 Geist** · 品牌 spec 可弹性调整 · Geist 和原 Inter 字怀很接近但更有品味 |
| 圆角 2.5rem | 大圆角 | 偏方 6px craftsman | **坚持 6px** · 品牌差异化 · 但加双档 14px/20px 拉层级 |
| Spring physics | 强制 | 零 Framer Motion | **Motion One 3KB 补** · 现有 spec 没禁 spring · 只禁大库 |

---

## 一键执行顺序 (ROI 最优路径)

### 今晚就能改 (30 min · 不需要新 asset):
- [x] 删 aspirational 计数 (TrustedLogos.astro:14-18 注释掉 stats)
- [x] 搜替 emoji → SVG (5 处)
- [x] `/careers` opening 默认全收起
- [x] Admin skeletal loader (8 行 placeholder)
- [x] 加 `--radius-xl: 14px` 和 `--radius-2xl: 20px` · Hero CTA + SKU 主推卡用

### 1 小时 (装 Geist + 改 SKU 布局):
- [ ] `pnpm add @fontsource-variable/geist geist-mono`, 替换 `--font-sans`
- [ ] SkuShowcase 4 等分 → 2x2 主推大卡 asymmetric
- [ ] `/pricing` 同改

### 2 小时 (动画层 + Timer 强化):
- [ ] Hero cascade stagger 600ms (Motion One)
- [ ] 14d Timer shimmer active row + 真 countdown
- [ ] Timer 数字 tabular-nums slashed-zero

### Phase 2 前 (真客户签约后):
- [ ] TrustedLogos 真 logo 替换占位
- [ ] 中英排版 prebuild pangu hook

---

## Skill 框架产出的对应 DESIGN.md 片段

建议把以下同步到 `CLAUDE.md` 作品牌规范:

```markdown
## Banned (Stitch Taste 叠加品牌 spec)
- ❌ Inter 字体 (用 Geist / Geist Mono)
- ❌ 等宽等高 card grid ≥ 3 列 (用 asymmetric 2x2 zigzag)
- ❌ 任何 emoji (即使看起来像 CLI 装饰) · 用 Lucide SVG
- ❌ Aspirational / fabricated stats (12 品牌 / 99.99% uptime 等)
- ❌ 静态 mount · 无 stagger (Hero 必须 cascade)
- ❌ "加载中..." · 必须 skeletal loader
- ❌ 纯黑 #000000 (用 warm-900 #1A1814)
- ❌ 紫粉渐变 / AI 脑子图标 / 赛博朋克霓虹
```
