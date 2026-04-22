---
date: 2026-04-22
type: tech-architecture
status: draft-v1
project: shipwright
phase: 1 (CN-first) + 2 (global)
owner: backend-architect
related:
  - 2026-04-22-ui-design-system.md
  - 2026-04-22-product-services-matrix.md
  - 2026-04-22-seo-keyword-matrix.md
  - 2026-04-22-brand-visual-concepts.md
---

# Shipwright / 船匠 技术架构方案 v1

> 一句话定位：**国内合规优先、海外扩展无缝、SEOMachine 本地化、Chat→CRM 最小闭环、14 天自己能上线自己**。

所有选型都必须回答三个问题：**① 国内访问 P95 是否 < 1.5s？ ② ICP 备案是否不阻塞？ ③ 海外复用是否 0 搬迁？**

---

## Part 1：前端框架选型

### 1.1 三方案横评

| 维度 | **Astro 4+**（推荐 ★） | Next.js 15 App Router | Nuxt 3 / SvelteKit |
|---|---|---|---|
| 渲染模式 | 默认静态 + 动态岛（Islands） | SSR / SSG / ISR 全能 | SSR / SSG，SvelteKit 更轻 |
| SEO 适配（百度） | 纯静态 HTML，百度蜘蛛最友好；meta / OG / JSON-LD 原生友好 | SSR 输出对百度 OK，但 RSC 注入对百度蜘蛛偶有解析异常 | 均 SSR 友好，Nuxt 更重 |
| 三语（zh-CN / zh-TW / en）| 官方 `@astrojs/i18n` + 子目录路由，默认生成 hreflang | `next-intl` / `next-i18next` 成熟但配置略重 | Nuxt i18n 模块成熟 |
| 国内访问速度（托管阿里云 OSS + CDN） | HTML 静态可直接扔 CDN，P95 < 800ms | Node SSR 需要国内服务器常驻（FC / SCF），冷启动 200-600ms | 同 Next.js |
| 动画性能（2s 桅杆呼吸 + 14d timer） | 纯 CSS @keyframes + 少量 JS Island；Hydration 最小 | React 全量 Hydrate，首屏 JS 150-250KB | Vue/Svelte Hydrate 更轻但生态弱 |
| 内容型网站（80% 静态）契合度 | **最优**，专为内容+营销站设计 | 过度 | 过度 |
| 动态交互（Chat Widget / CRM Admin / 14d timer） | 通过 React / Svelte Island 嵌入，边界清晰 | 原生自然 | 原生自然 |
| 学习曲线 | 低（类 HTML/MD 直出） | 中高（RSC / Server Actions 心智负担） | 中 |
| 中国社区活跃度 | 中（增长快） | 高 | 中 |
| CMS 集成成熟度 | Content Collections 原生 + Headless 任意 | 原生 Headless | 原生 Headless |
| dogfooding 说服力 | "**我们用 Claude Code + Astro 两周上线**"叙事干净 | "用 Next" 太常见 | 偏门 |

### 1.2 最终推荐：Astro 4+（锁死）

**锁死理由（3 条）**：

1. **Shipwright 80% 页面是内容**（home / pricing / SKU×5 / case×N / blog / playbook / about / contact），动态只占 20%（Chat Widget + 14d Timer + CRM Admin）。Astro Islands 让这 20% 精确水合，HTML 主体直接 CDN，**国内阿里云 OSS + CDN 能把 P95 压到 800ms 以内**，Next SSR 方案做不到。
2. **SEO 友好度 > 一切**。百度蜘蛛对 React RSC 注入的解析偶发异常（已有多例踩坑），Astro 输出的是 99% 纯 HTML + `<link rel="alternate" hreflang>` + JSON-LD，Baidu / Google / 360 / Sogou 四家抓取 0 风险。SEOMachine 产出的内容直接 MDX 落地 `src/content/blog/**`，无需二次渲染。
3. **dogfooding 叙事**：我们卖的是"14 天 MVP + Claude Code"，Astro 让 Week 1 就能出 5 个可上线页面，而 Next.js 的 App Router 心智负担会把我们自己拖到 Week 3。**我们自己都做不到 14 天，凭什么收客户 14 天承诺的钱**。

**动态岛边界清单**（这几个 Islands 走 React）：
- `<ChatWidgetIsland client:idle>` — 右下 FAB + 对话 UI
- `<LiveTimerIsland client:visible>` — Hero 下方 14 天倒计时
- `<MastBreathingIsland client:load>` — Logo 光标 2s 呼吸（纯 CSS 更好，预计不做 Island）
- `<PricingCalcIsland client:visible>` — 定价页滑块计算
- `<ContactFormIsland client:idle>` — 留资表单 + 防 CSRF

---

## Part 2：UI 层 / 样式

### 2.1 样式系统

| 层 | 选型 | 理由 |
|---|---|---|
| CSS 框架 | **Tailwind CSS v4** | 与 UI Designer 附录 A 的 tokens 直接对齐；v4 的 `@theme` 原生 CSS 变量 = Dark Mode 零成本 |
| 组件库 | **shadcn/ui（Radix 基底）+ 少量自建** | shadcn 仅复制源码不产生依赖，Chat Widget / CRM Admin / 后台表格用；Hero / Pricing / Feature grid 等**品牌密度高**的组件**自建**，避免"又一个 shadcn 站" |
| 图标 | **Lucide React + Tabler Icons**（按需混用） | 与 Radix 生态一致，bundle 可 tree-shake |
| Dark Mode | CSS Variables + `[data-theme=dark]` 切换 | v4 的 `@theme dark:` 直接落 token；跟随系统 + 手动三态（light/dark/system） |

### 2.2 动画库对比（关键决策：首屏 2s 桅杆 + 14 天 Timer 跳动）

| 动画 | 候选 | 推荐 | 理由 |
|---|---|---|---|
| 2s 桅杆呼吸光标 | 纯 CSS `@keyframes` / Motion One / Framer Motion | **纯 CSS** | 只是 opacity 0.3↔1 的 2s 循环；Framer Motion (~40KB gzip) 为此引入不值；CSS 0 字节 |
| 14 天 Live Timer 跳动 | `requestAnimationFrame` + CSS transition / Framer | **原生 RAF + CSS** | 每秒更新一次数字，CSS `transition: 150ms` 做微弹跳；Framer Motion 是杀鸡用牛刀 |
| 页面过渡 / 滚动入场 | Astro View Transitions API（原生） + `motion-one` (3KB) | **Astro View Transitions + Motion One** | Astro 原生 VT 做跨页；Motion One 3KB 够 scroll-reveal |
| 复杂手势 / 拖拽 | Framer Motion | **暂不需要** | MVP 没有拖拽；后期 Case Study 时间轴如需再引入 |

**结论**：**零 Framer Motion 依赖**，JS 首屏预算 < 50KB gzip。

### 2.3 设计 token 落地代码片段

```ts
// tailwind.config.ts（Tailwind v4 用 @theme 替代，此处示意 v3 fallback）
export default {
  theme: {
    extend: {
      colors: {
        harbor:   { DEFAULT: '#2B5468', 900: '#1A3846', 50: '#E8EEF1' },
        canvas:   { DEFAULT: '#FDFCF9', 100: '#F5F1E8' },
        signal:   { DEFAULT: '#E86A2A', 600: '#C95719' },
        ink:      { DEFAULT: '#1C1C1E', 600: '#49494B' },
      },
      fontFamily: {
        sans:  ['Inter Variable', 'HarmonyOS Sans SC', 'system-ui'],
        mono:  ['JetBrains Mono', 'Sarasa Mono SC', 'monospace'],
      },
      animation: {
        'mast-breath': 'mastBreath 2s ease-in-out infinite',
      },
      keyframes: {
        mastBreath: { '0%,100%': { opacity: '0.35' }, '50%': { opacity: '1' } },
      },
    },
  },
}
```

---

## Part 3：部署架构（Phase 1 国内 + Phase 2 海外）

### 3.1 核心决策：双栈同代码，edge 分流

**一个仓库 / 一次构建 / 两处分发**。国内走阿里云，海外走 Cloudflare Pages，DNS 按访问者地理智能解析。

### 3.2 域名策略

| 域名 | 用途 | 阶段 |
|---|---|---|
| **shipwright.cn** | 国内主域，ICP 备案主体，百度 SEO 主战场 | Phase 1 上线即用 |
| **shipwright.co** | 海外主域，Google SEO，备案前做灰度 | Phase 1 可立即用（无需备案） |
| **shipwright.ai** | 品牌保护 + 301 到 .co | 购入即 301 |
| **shipwright.studio** | 备用 / 内部 staging | 内部 |

**DNS 分流（阿里云 DNS 智能解析 / Cloudflare Geo Steering）**：
- 中国大陆 IP → `shipwright.cn` → 阿里云 CDN → OSS 静态桶
- 海外 IP → `shipwright.co` → Cloudflare Pages → CF edge

**hreflang 示例（每页 head 注入）**：
```html
<link rel="alternate" hreflang="zh-CN" href="https://shipwright.cn/zh-CN/pricing" />
<link rel="alternate" hreflang="zh-TW" href="https://shipwright.co/zh-TW/pricing" />
<link rel="alternate" hreflang="en"    href="https://shipwright.co/en/pricing" />
<link rel="alternate" hreflang="x-default" href="https://shipwright.co/en/pricing" />
```

### 3.3 Phase 1 国内托管选型对比

| 方案 | 静态（HTML/CSS/JS） | 动态（API） | ICP 备案 | 月成本（预计 100k PV） | 冷启动 | 推荐度 |
|---|---|---|---|---|---|---|
| **阿里云 OSS + CDN + FC** ★ | OSS 0.12 元/GB 存储 + CDN 0.24 元/GB 流量 | 函数计算 FC | **原生支持** | ¥120-250 | FC ~200ms | ★★★★★ |
| 腾讯云 COS + CDN + SCF | 同价位 | 云函数 SCF | 原生支持 | ¥120-250 | SCF ~300ms | ★★★★ |
| 华为云 OBS + CDN + FunctionGraph | 同 | FG | 原生支持 | ¥150-300 | 较慢 | ★★★ |
| 七牛云 + 七牛 CDN | 便宜 | 无官方函数 | 支持 | ¥80-180 | N/A | ★★★（纯静态可用，动态需外接） |
| Cloudflare Pages + Workers | 免费 | 免费 | **不支持备案，国内访问抖** | $0 | <50ms | ★★（仅 Phase 2） |
| Vercel | — | — | **国内访问不稳定，部分地区被封** | $20+ | — | ★（仅 Phase 2） |

**推荐：阿里云 OSS + CDN + 函数计算 FC**

理由：
1. 阿里云 ICP 备案走通率最高（腾讯云部分地区审核更慢）
2. OSS + CDN 做静态 HTML 分发，**国内 P95 < 500ms**（全国 2800+ 边缘节点）
3. FC 跑 API（留资 / Chat / webhook），按调用计费，MVP 阶段月成本 ¥50 以内
4. 阿里云日志服务 SLS + 监控 ARMS 一条龙

### 3.4 Phase 2 海外托管

**推荐：Cloudflare Pages + Cloudflare Workers（+ R2 存资产）**

| 对比项 | Cloudflare Pages ★ | Vercel | Netlify |
|---|---|---|---|
| 免费额度 | 500 次构建/月 + 无限带宽 | 100GB/月 + Serverless 10s | 100GB/月 |
| Edge Runtime | Workers（V8 隔离，<5ms 冷启动） | Edge Functions（同底层） | Edge Functions |
| 中国访问 | 比 Vercel 稳，但非最优 | 差，常被封 | 差 |
| 港台访问 | 优（CF 在台北/香港有节点） | 中 | 中 |
| 价格可预测性 | 高 | 有超额爆单风险 | 中 |

### 3.5 架构图（ASCII）

```
                          ┌─────────────────────────────────────────────┐
                          │              用户访问 shipwright             │
                          └──────────────────┬──────────────────────────┘
                                             │
                        ┌────────────────────┴────────────────────┐
                        │     DNS 智能解析（阿里云 / Cloudflare）  │
                        └───────┬────────────────────────┬────────┘
                          CN IP │                        │ 海外 IP
                                ▼                        ▼
                ┌───────────────────────────┐ ┌──────────────────────────┐
                │     shipwright.cn         │ │    shipwright.co         │
                │   阿里云 CDN（静态 HTML）  │ │  Cloudflare CDN          │
                │         │                 │ │        │                 │
                │         ▼                 │ │        ▼                 │
                │   OSS Bucket（打包产物）   │ │  CF Pages（同一 build）  │
                └────────┬──────────────────┘ └────────┬─────────────────┘
                         │ 需要 API 时                 │
                         ▼                             ▼
                ┌──────────────────┐           ┌──────────────────┐
                │ 阿里云 FC（国内） │           │ CF Workers（海外）│
                │ - /api/lead      │           │ - 同一套代码     │
                │ - /api/chat      │           │ - 地理路由回国内 │
                │ - /api/seowebhk  │           └─────┬────────────┘
                └────────┬─────────┘                 │
                         │                           │
                         └───────┬───────────────────┘
                                 ▼
                  ┌──────────────────────────────┐
                  │   阿里云 RDS Postgres        │
                  │   （CRM / 内容 meta / 日志） │
                  │   主库在杭州，海外读写经 CF  │
                  │   Worker → Tunnel → RDS      │
                  │   （Phase 2 再决策是否做     │
                  │   多活或海外独立 Neon）      │
                  └──────────────────────────────┘

              ┌───────────────────────────────────────────────┐
              │  CI/CD: GitHub Actions                         │
              │    push → build (Astro) →                      │
              │      ├─ 阿里云 OSS 上传 + CDN 刷新（国内）     │
              │      └─ Cloudflare Pages deploy（海外）        │
              │    博客 MDX commit → 同时触发百度主动推送 API  │
              └───────────────────────────────────────────────┘
```

### 3.6 数据同步策略

| 数据类型 | Phase 1 | Phase 2 |
|---|---|---|
| 博客 / case / playbook（MDX） | Git 仓库唯一源，双 CDN 同步分发 | 同 |
| CRM 线索 | 阿里云 RDS（唯一源） | 海外新增 Neon 只读副本（延迟 < 2s，通过 Postgres 逻辑复制） |
| 交付仪表盘 | 静态 mock 数据 | 接 ops dashboard API（WebSocket） |
| 用户偏好（语言 / 深色模式） | localStorage | 同 + cookie |

---

## Part 4：后端 / API 架构

### 4.1 CMS 选型对比

| 候选 | 类型 | 非技术友好 | 国内访问 | 多投联动 | 推荐度 |
|---|---|---|---|---|---|
| **Astro Content Collections + Keystatic UI** ★ | Git-based | Keystatic 可视化编辑 MDX | 0 依赖，编辑即 commit | 极强，MDX → push → 流水线自动分发 | ★★★★★ |
| Sanity | Headless SaaS | 优 | 海外服务，国内需代理 | 中 | ★★★ |
| Strapi（自部署 ECS） | Headless 自托管 | 优 | 国内部署 OK | 中 | ★★★ |
| TinaCMS | Git-based + 可视化 | 优 | 0 依赖 | 强 | ★★★★ |
| Contentful | Headless SaaS | 优 | 国内卡 | 弱 | ★★ |
| MDX 裸奔（vim 写） | Git | 差 | 0 依赖 | 强 | ★★（仅自己人写时） |

**推荐：Astro Content Collections（schema）+ Keystatic（可视化后台）**

- 内容存 `src/content/blog/zh-CN/*.mdx`，schema 在 `src/content/config.ts` 用 Zod 强约束
- Keystatic 提供 `/keystatic` 可视化路由（仅 admin 登录可见），小白合作者也能写
- commit 即发布，GitHub Actions 触发百度主动推送 + 多语 hreflang 校验
- **零 SaaS 成本、零 vendor lock**，与 SEOMachine 的 `/write` 命令产物无缝对接

**Content Schema 示例**：

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(60), // 百度 title 截断
    description: z.string().max(155), // meta description
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    locale: z.enum(['zh-CN', 'zh-TW', 'en']),
    cluster: z.enum(['pillar-ai-claude', 'pillar-14day', 'pillar-crossborder', 'supporting']),
    keywords: z.array(z.string()).max(8),
    author: z.string().default('Shipwright Team'),
    canonical: z.string().url().optional(),
    crossPost: z.object({
      baijiahao: z.string().optional(),
      zhihu: z.string().optional(),
      xiaohongshu: z.string().optional(),
    }).optional(),
    status: z.enum(['draft', 'review', 'published']),
  }),
});
export const collections = { blog };
```

### 4.2 API 服务层

| 端点 | 运行时 | 说明 |
|---|---|---|
| `POST /api/lead` | 阿里云 FC（Node 20） | 留资入 CRM，触发飞书机器人 |
| `POST /api/chat/session` | FC + WebSocket 网关 | Chat Widget 会话创建 |
| `POST /api/seo/baidu-push` | FC（定时 + webhook） | 新文章主动推送百度 |
| `POST /api/seo/seomachine-hook` | FC | SEOMachine CLI 结束回调 |
| `GET /api/live-timer` | FC（ISR 缓存 60s） | 14 天倒计时数据源 |

**选型理由**：
- 阿里云 FC 冷启动 ~200ms，SLA 99.95%，成本按调用计费，MVP 月度调用量 < 10 万时成本约 ¥15
- 不选 Next API Routes 因为前端是 Astro 不跑 Node Server
- 不选 Vercel Edge 因为国内访问不稳

### 4.3 数据库选型

| 候选 | 国内 | 价格（MVP） | 适合 |
|---|---|---|---|
| **阿里云 RDS PostgreSQL（基础版）** ★ | 原生 | ¥60/月（2C4G + 20G） | Phase 1 最佳 |
| Supabase | 海外，访问慢 | 免费档够用 | Phase 2 可评估 |
| Neon | 海外 | 免费档 | Phase 2 副本 |
| Turso（SQLite） | 海外 | 免费 | 不合适（需关系查询 + 备份合规） |
| 阿里云 Serverless Postgres | 原生 | 按量，便宜 | 备选 |

**推荐：阿里云 RDS PostgreSQL 基础版**

理由：① 数据出境合规（CRM 含中国境内用户手机号，依《个人信息保护法》需境内存储）② 2C4G MVP 足够，后续可弹升 ③ 有自动备份 + PITR。

### 4.4 鉴权（仅 admin 后台）

| 候选 | 推荐 | 理由 |
|---|---|---|
| **Auth.js（NextAuth）v5** ★ | ★★★★★ | 开源、0 vendor lock；邮箱 + magic link + 企业微信 OAuth（内部登录） |
| Clerk | ★★★ | 贵、海外服务 |
| Supabase Auth | ★★ | 国内访问抖 |
| 自建 JWT | ★★★ | MVP 太重 |

**admin 后台规模极小（2-3 人）**，Auth.js + magic link（邮件 / 企业微信扫码）足够；不给公网用户注册入口（C 端没必要，只有 B 端留资）。

---

## Part 5：Chat Widget + CRM 技术方案

### 5.1 自建 vs 第三方决策

| 方案 | 优 | 劣 | 结论 |
|---|---|---|---|
| Crisp | 开箱即用，国内可用 | $25/agent/月，定制受限，数据在他家 | ✗ |
| Tawk.to | 免费 | 品牌受损（强制 logo），国内偶尔卡 | ✗ |
| Intercom | 功能强 | $74+ 起，海外 | ✗ |
| **自建** ★ | 品牌统一 / 可接 Claude agent 智能回复 / 数据自主 / dogfooding 证据 | 需自己写 WS / 运维 | **✓** |

**Shipwright 的核心差异化就是"我们用 Claude Code 自己做的"**，Chat Widget 必须自建 —— 这是产品证据。

### 5.2 技术栈

```
Astro React Island (ChatWidget)
        │ (WebSocket over wss://)
        ▼
Cloudflare Durable Objects（海外）/ 阿里云 API 网关 + FC（国内）
        │
        ▼
消息编排 Worker（Node）
  ├─ 落库（RDS PostgreSQL messages 表）
  ├─ Claude Haiku 即时智能回复（规则：工作时间外自动 + 人工接管时降级）
  └─ 飞书 / 企微机器人 webhook（新会话推送群）
```

- 消息协议：JSON over WSS，心跳 25s
- 断线重连：指数退避（1s / 2s / 4s / 8s，上限 30s）
- 离线消息：redis（阿里云 Tair 免费档）+ DB 双写
- SSE 降级：WSS 握手失败后降级为 Server-Sent Events（国内某些企业网挡 WS）

### 5.3 CRM 最小化 Schema

```sql
-- 线索表
CREATE TABLE leads (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          VARCHAR(80),
  contact_type  VARCHAR(16) NOT NULL CHECK (contact_type IN ('mobile','wechat','email')),
  contact_value VARCHAR(128) NOT NULL,
  company       VARCHAR(200),
  gmv_band      VARCHAR(32), -- 'lt_1m' / '1m_10m' / '10m_100m' / 'gt_100m'
  scenario      VARCHAR(64), -- 'listing' / 'crm' / 'content' / 'delivery' / 'starter'
  source_page   VARCHAR(256),
  utm_source    VARCHAR(64),
  utm_campaign  VARCHAR(64),
  status        VARCHAR(24) NOT NULL DEFAULT 'new'
                CHECK (status IN ('new','contacted','qualified','converted','lost')),
  notes         TEXT,
  assignee      VARCHAR(64),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW(),
  deleted_at    TIMESTAMPTZ
);
CREATE INDEX idx_leads_status_created ON leads(status, created_at DESC) WHERE deleted_at IS NULL;
CREATE INDEX idx_leads_contact ON leads(contact_type, contact_value) WHERE deleted_at IS NULL;
CREATE INDEX idx_leads_source  ON leads(source_page);

-- 聊天会话
CREATE TABLE chat_sessions (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id     UUID REFERENCES leads(id),
  visitor_id  VARCHAR(64) NOT NULL, -- 匿名 cookie id
  page_url    VARCHAR(512),
  started_at  TIMESTAMPTZ DEFAULT NOW(),
  closed_at   TIMESTAMPTZ
);

-- 聊天消息
CREATE TABLE chat_messages (
  id         BIGSERIAL PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES chat_sessions(id),
  role       VARCHAR(16) NOT NULL CHECK (role IN ('visitor','ai','agent')),
  content    TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_chat_msg_session ON chat_messages(session_id, created_at);
```

### 5.4 飞书 / 企微推送

```ts
// 新线索到达
await fetch(FEISHU_WEBHOOK, {
  method: 'POST',
  body: JSON.stringify({
    msg_type: 'interactive',
    card: {
      header: { title: { tag: 'plain_text', content: '【Shipwright】新线索' } },
      elements: [
        { tag: 'div', text: { tag: 'lark_md',
          content: `**来源**：${source_page}\n**场景**：${scenario}\n**GMV**：${gmv_band}\n**联系方式**：${contact_value}`
        }},
        { tag: 'action', actions: [
          { tag: 'button', text: { tag: 'plain_text', content: '去接管' },
            url: `https://admin.shipwright.cn/leads/${id}` }
        ]}
      ]
    }
  })
});
```

### 5.5 Admin 后台

**方案：Astro + React Island + shadcn/ui table + TanStack Table + Auth.js magic link**

不用 Directus / AppSmith / Retool，因为：① 我们的 CRUD 极简（~300 行）② dogfooding 要求自己写 ③ 已有 shadcn 模板。

页面清单（MVP 够用）：
- `/admin/login`（magic link）
- `/admin/leads`（筛选 / 搜索 / 排序 / 导出 CSV）
- `/admin/leads/:id`（编辑状态、加备注、合并重复联系方式）
- `/admin/chat`（活跃会话列表 + 接管按钮）
- `/admin/content`（Keystatic 代管）

---

## Part 6：SEOMachine 本地化 fork 方案

### 6.1 总体路线

```
┌──────────────────────────────────────────────────────────────┐
│  TheCraigHewitt/seomachine (MIT, Python + Claude Code cmds)  │
└────────────────────────────┬─────────────────────────────────┘
                             │ git fork
                             ▼
      ┌─────────────────────────────────────────┐
      │  shipwright-org/seomachine-cn (private)  │
      │                                          │
      │  .claude/commands/                       │
      │    ├─ /research.md   （中文 + 5118）     │
      │    ├─ /write.md       （中文 pillar +    │
      │    │                    MDX 直出）       │
      │    └─ /optimize-baidu.md （新增）         │
      │                                          │
      │  src/                                    │
      │    ├─ adapters/                          │
      │    │   ├─ baidu_search_console.py        │
      │    │   ├─ 5118_api.py                    │
      │    │   ├─ dataforseo_api.py  (保留海外)  │
      │    │   └─ baidu_push_api.py              │
      │    └─ pipelines/                         │
      │        ├─ research_pipeline.py           │
      │        ├─ write_pipeline.py              │
      │        └─ crosspost_pipeline.py (新增)   │
      └─────────────────────────────────────────┘
                             │ git submodule or npm link
                             ▼
      ┌─────────────────────────────────────────┐
      │  shipwright / main（Astro 主站）         │
      │   .claude/commands/ 装载（软链）          │
      │   内容产出 → src/content/blog/*.mdx      │
      │   git commit → GitHub Actions →          │
      │     ├─ Astro build                        │
      │     ├─ 阿里云 OSS 上传                    │
      │     ├─ 百度主动推送 API                   │
      │     └─ 百家号 API 同步（见 6.4）          │
      └─────────────────────────────────────────┘
```

### 6.2 改造清单（按优先级）

| # | 改造项 | 工作量 | Phase |
|---|---|---|---|
| 1 | fork → 私有仓 + CI | 0.5d | W1 |
| 2 | 数据源：GSC → **百度站长平台 API**（`https://ziyuan.baidu.com/linksubmit/`）| 2d | W3 |
| 3 | 关键词库：DataForSEO → **5118 API**（热词 / 长尾 / 需求图谱） | 2d | W3 |
| 4 | `/research` 命令 prompt 中文化 + 加入百度下拉 / 相关搜索抓取 | 1d | W3 |
| 5 | `/write` 命令：输出规则对齐 Astro Content Schema（Zod），MDX 直出 | 1d | W3 |
| 6 | `/optimize-baidu` 新增命令：校验百度专属 meta / 死链 / 加载速度 / MIP / 主动推送 | 2d | W4 |
| 7 | DataForSEO 保留作为 Phase 2 海外对标数据源 | 0.5d | P2 |
| 8 | 一稿多投 pipeline（6.4） | 3d | W4-W5 |

### 6.3 `/optimize-baidu` 命令骨架

```markdown
# .claude/commands/optimize-baidu.md
你是 Shipwright 的百度 SEO 优化代理。输入一个 MDX 文件路径，执行：

1. 抓取文章 frontmatter，校验：
   - title 长度 ≤ 30 汉字（百度 SERP 截断）
   - description 长度 ≤ 78 汉字
   - keywords ≤ 8 个且每个 ≤ 10 汉字
2. 正文校验：
   - H1 仅 1 个且包含主 keyword
   - H2/H3 层级不跳级
   - 首段 100 字内出现主 keyword
   - 内链 ≥ 3 个指向 pillar / cluster 文章
   - 图片 alt 全部填写
3. 技术项：
   - 输出 JSON-LD（Article schema）
   - 生成 sitemap.xml 片段
   - 调用百度主动推送 API（POST https://data.zz.baidu.com/urls?site=...&token=...）
4. 产出 report.md（check list）+ 自动 commit
```

### 6.4 一稿多投矩阵

| 平台 | 有公开 API | 自动化策略 | 工作量 |
|---|---|---|---|
| **百家号** | ✓（需机构号认证） | **全自动**：MDX → HTML → 百家号 API 发布 | 2d |
| 搜狐号 | ✓ | 全自动 | 1d |
| 头条号 | ✗（仅有草稿 API） | 半自动：脚本生成 HTML + 剪贴板 + 桌面提醒 | 0.5d |
| 知乎（专栏） | ✗ | **半自动**：生成格式化 markdown + 一键复制 | 0.5d |
| 小红书 | ✗ | **半自动**：生成长图（9:16）+ 文案 + 手工发 | 1d |
| 微信公众号 | ✓（认证订阅号/服务号的 draft API） | 全自动发草稿，人工定时发布 | 1.5d |

**结论**：百家号 / 搜狐号 / 公众号草稿 **全自动**；知乎 / 小红书 **半自动**（一键复制 + 桌面通知）。

---

## Part 7：Claude Code Workspace 配置（自用 + dogfooding）

### 7.1 目录结构

```
shipwright/ (公开仓)
├── .claude/
│   ├── commands/
│   │   ├── research.md      ← 软链 seomachine-cn
│   │   ├── write.md         ← 软链
│   │   ├── optimize-baidu.md ← 软链
│   │   ├── publish.md       ← Shipwright 自建：MDX → 分发
│   │   ├── lead-triage.md   ← 自建：CRM 线索分级脚本
│   │   └── live-log.md      ← 自建：更新 14d timer 数据
│   ├── agents/
│   │   ├── sku-01-claude-code-starter/   ← 产品资产（部分开源）
│   │   ├── sku-02-ecom-ops-starter/      ← 核心资产（私有 repo）
│   │   ├── sku-03-crm-starter/           ← 私有
│   │   ├── sku-04-content-starter/       ← 部分开源
│   │   └── sku-05-delivery-starter/      ← 私有
│   └── settings.json
├── CLAUDE.md        ← 团队规范（见 7.2）
├── src/...
└── README.md        ← dogfooding 叙事

shipwright-org/seomachine-cn (私有)
├── .claude/commands/ ...
└── src/...

shipwright-org/sku-starters-private (私有)
└── agents/ 源文件
```

### 7.2 `CLAUDE.md` 核心约束（团队 + agent）

```markdown
# Shipwright Coding & Content Standards

## Brand Voice（Claude 写任何文案时强制）
- 不准说"赋能 / 云原生 / 一站式 / 专业现代"
- 每个承诺必须可验证：14 天 = 14 × 24h 倒计时
- 每篇 blog 必须有一个"我们做错过的事"章节（可信度）

## Code
- TypeScript strict mode，no any
- 函数默认导出 named export
- DB 查询禁止 N+1，ORM 选 Drizzle
- API 错误返回统一 { error: { code, message } }

## 内容生产 SOP
1. /research {topic} → docs/seo/research-{slug}.md
2. 人工 review 关键词选择
3. /write {slug} → src/content/blog/zh-CN/{slug}.mdx
4. /optimize-baidu {slug}
5. PR → review → merge → CI 触发百度推送 + 百家号同步

## 禁止
- 不用 emoji（内部工具除外）
- 不在用户可见处暴露 "GPT / OpenAI" 字样（我们卖 Claude 方案）
```

### 7.3 开源 vs 私有边界

| 仓库 | 可见性 | 理由 |
|---|---|---|
| `shipwright`（主站代码） | **公开** | dogfooding 最强证据 |
| `seomachine-cn` | **私有** | 含 5118 / 百度 token |
| `sku-starters-private`（核心 agent） | **私有** | 卖钱的资产 |
| `sku-01 / sku-04 公开精简版`（2 个 demo agent） | 公开 | 作为"试用装"引流 |
| `CLAUDE.md` 精简版（不含 API key） | 公开 | 传播品牌声音 |

---

## Part 8：监控 / 日志 / 分析

| 维度 | 国内 | 海外 | 备注 |
|---|---|---|---|
| 站点分析 | **百度统计**（主）+ 火山引擎 DataFinder（备） | **Plausible**（主，隐私友好）+ GA4（备） | Plausible 可自托管到阿里云做国内兜底 |
| 错误监控 | **Sentry**（自托管 or SaaS） | Sentry（同一 DSN） | 自托管更好，国内不出境 |
| 性能 RUM | **阿里云 ARMS** | Cloudflare Web Analytics | 含 Core Web Vitals |
| 日志 | 阿里云 SLS（FC 日志） | Cloudflare Logs | 90 天 retention |
| A/B 测试 | **PostHog 自托管（阿里云 ECS）** | 同 | 替代 GrowthBook，因含功能开关 + session replay |
| Uptime | UptimeRobot + 阿里云云监控 | UptimeRobot | 双通道 |

**推荐最小 stack（MVP）**：
- 百度统计 + Plausible 双埋点
- Sentry SaaS 免费档
- 阿里云 ARMS（含在 RDS / FC 账单）
- 暂不接 PostHog（Phase 2 再做 A/B）

---

## Part 9：Phase 1 最小开发里程碑（可验收）

**目标：2026-05-05 前，shipwright.co 海外灰度上线；2026-05-19 前，shipwright.cn 国内正式上线（取决于 ICP）**。

### Week 1（2026-04-23 ~ 04-29）：骨架 + 5 页

| Day | 可验收产物 |
|---|---|
| D1（04-23 三） | `pnpm create astro` + Tailwind v4 + Astro Content Collections + Keystatic 装配；首屏 Hero 静态 HTML 可访问；Vercel Preview URL 出（临时） |
| D2（04-24 四） | UI tokens 全部落 `@theme`；Inter Variable + HarmonyOS Sans 字体子集化；Dark Mode 三态切换器完成 |
| D3（04-25 五） | Home 页 v0：Hero + 呼吸桅杆 + 14d Timer Island（mock 数据）+ 3 段主线故事，移动端 OK |
| D4（04-26 六） | Pricing 页 v0：5 SKU 卡片 + 滑块计算 Island；How-it-works 页 v0 |
| D5（04-27 日） | SKU-01 详情页 v0 + Contact 页 + Lead 表单 Island，提交到 FC mock endpoint |
| D6（04-28 一） | 阿里云账号 / shipwright.cn 域名注册 + ICP 备案启动（提交主体资料）；同时购入 shipwright.co 并接 Cloudflare |
| D7（04-29 二） | GitHub Actions 双分发（阿里云 OSS + CF Pages）打通；shipwright.co 临时灰度可访问 |

**Week 1 产物里程碑**：5 个核心页面可访问、双 CDN 分发打通、备案启动。

### Week 2（2026-04-30 ~ 05-06）：三语 + CMS + Chat + CRM

| Day | 可验收产物 |
|---|---|
| D8（04-30 三） | i18n 路由：`/zh-CN/*` `/zh-TW/*` `/en/*` + hreflang 注入；home + pricing 完成三语翻译（简体为源） |
| D9（05-01 四） | Keystatic 后台跑通；首篇 pillar 博客《AI 驱动跨境电商的 14 天 MVP 方法论》MDX 入库；Content schema 校验 |
| D10（05-02 五） | 阿里云 RDS PostgreSQL 开通；leads / chat_sessions / chat_messages 表迁移；Drizzle schema 打通 |
| D11（05-03 六） | Chat Widget Island + WSS 后端骨架（FC + API 网关）；飞书机器人通 |
| D12（05-04 日） | Admin `/admin/leads` 列表 + Auth.js magic link；CSV 导出 |
| D13（05-05 一） | **shipwright.co 海外灰度正式上线**（Phase 1a）；Sentry + 百度统计 + Plausible 埋点接入 |
| D14（05-06 二） | 压测：Lighthouse ≥ 95 / CWV 全绿；百度蜘蛛模拟抓取 5 页无异常；线索提交 → 飞书推送 e2e 通 |

**Week 2 产物里程碑**：**海外灰度上线 = 我们自己的 14 天承诺达成**（dogfooding 证据 #1）。

### Week 3（05-07 ~ 05-13）：剩余 SKU + SEOMachine

| Day | 产物 |
|---|---|
| D15-17 | SKU-02/03/04/05 四个详情页完成；2 篇 case study 页面（可用 mock 客户） |
| D18-19 | SEOMachine fork → `/research` `/write` 中文化跑通，产出 3 篇 supporting 文章 MDX |
| D20-21 | `/optimize-baidu` 新命令 + 百度主动推送 API 接入；百家号 API 注册 + 发布脚本 |

### Week 4（05-14 ~ 05-20）：上线 + 多投

| Day | 产物 |
|---|---|
| D22-24 | ICP 备案完成 → shipwright.cn 切流正式上线（Phase 1b） |
| D25-26 | 百家号 / 搜狐号 / 公众号矩阵账号注册 + 首批 5 篇一稿多投 |
| D27-28 | 首批 20 个关键词百度站长平台提交 + sitemap 生效 |

---

## Part 10：风险 / 取舍 / 待验证

| 风险 | 概率 | 影响 | 应对 |
|---|---|---|---|
| **ICP 备案 > 4 周**（各省管局波动） | 中 | 国内无法访问 | **已预置 shipwright.co 灰度**，D13 先上海外域名；备案期间所有公开素材暂用 .co；备案完成 3h 内切 DNS |
| 阿里云 OSS 域名被恶意举报下架 | 低 | 静态资产中断 | 双桶冗余（杭州 + 张家口），DNS 15min TTL |
| Vercel / Cloudflare 国内被封 | 中 | 海外流量也掉 | CF 还算稳；真出事切到 Bunny.net + Stackpath |
| Chat Widget WSS 稳定性（企业网穿透） | 中 | 客户发不出消息 | 默认 WSS，3s 握手失败降级 SSE；再失败降级为 HTTP 长轮询 10s |
| SEOMachine 百度 API 接入工作量失控 | 中 | Week 3 延期 | 百度站长平台主动推送 API 极简（HTTP POST），风险主要在 5118 配额（¥2000/年高级版，预算内）；若超时先用爬虫降级方案（合规范围内） |
| dogfooding 证据展示过度"自吹" | 低 | 品牌反噬 | 只在 README + About 页 + 一篇 blog 提及，不上首屏 Hero；用"公开仓库 + commit history"替代口号 |
| 三语内容同步（1 人写中文）| **高** | 繁中 / 英文长期滞后 | **Phase 1 只做简中全量 + 繁中 / 英文自动机翻（Claude + 术语表）+ 标注 "machine-translated"**；Phase 2 招 1 名 bilingual 写手补齐 |
| PIPL 合规（CRM 含手机号） | 中 | 监管风险 | ① 数据境内存储（阿里云 RDS 杭州）② 留资 checkbox 明示授权 ③ 删除接口 ④ 保留期 24 个月自动归档 |
| Logo 光标 2s 呼吸对低端机耗电 | 低 | 体验 | `prefers-reduced-motion` 检测后关闭 |
| 百度蜘蛛对 Astro Island 解析 | 低 | 部分动态内容未被索引 | Island 内容只作为交互增强，**SEO 必要内容全部 SSG 直出**，Pricing / SKU / Case 不走 Island |

### 待验证假设清单

- [ ] 阿里云 FC 对 WebSocket 长连接的成本（按连接时长计费？）
- [ ] 5118 API 的免费额度够不够 Week 3 的关键词研究
- [ ] Keystatic 在国内 GitHub 连不上时的降级体验（OAuth 回调能否走镜像）
- [ ] Cloudflare Pages 对国内访问的真实 P95（需自己 10 城实测）
- [ ] 百度主动推送 API 每日 10 万 quota 是否够（远期）
- [ ] 14 天 Live Timer 的"真数据"源 —— Phase 1 mock 没问题，Phase 2 需要 ops team 提供 API 合同

---

## 决策总表（一页压缩）

| 层 | 选型 | 一句话理由 |
|---|---|---|
| 前端框架 | **Astro 4+** | 内容型 80%、静态直出国内 P95 < 800ms、百度蜘蛛零风险 |
| UI | **Tailwind v4 + shadcn/ui + 自建品牌组件** | tokens 对齐 UI Designer，admin 用 shadcn 省时间 |
| 动画 | **纯 CSS + Motion One 3KB** | 0 Framer Motion，首屏 JS < 50KB |
| 国内托管 | **阿里云 OSS + CDN + FC** | ICP 合规 + P95 < 500ms |
| 海外托管 | **Cloudflare Pages + Workers** | 免费、Edge、港台延迟优 |
| 域名 | .cn（国内主）/ .co（海外主 + 灰度）/ .ai 保护 / .studio 备用 | .co 不需备案，Week 2 就能上线 |
| CMS | **Astro Content + Keystatic** | Git-based 0 SaaS 成本，MDX 可被 SEOMachine 直接写入 |
| DB | **阿里云 RDS PostgreSQL 基础版** | PIPL 合规境内存储 |
| 鉴权 | **Auth.js v5 + magic link** | admin 仅 3 人，不做公众注册 |
| Chat | **自建 WSS + Durable Objects / API 网关**，飞书通知 | 品牌 + dogfooding |
| CRM | **自建最小 admin，shadcn Table** | MVP 300 行够用 |
| SEO 引擎 | **fork seomachine → seomachine-cn + 5118 + 百度主动推送** | Craig 原作 MIT，替换数据源 |
| 多投 | 百家号 / 搜狐号 / 公众号自动；知乎 / 小红书半自动 | 只自动化有 API 的 |
| 监控 | 百度统计 + Plausible + Sentry + ARMS | 国内海外双通 |
| 开发节奏 | **Week 1 骨架 / Week 2 海外灰度上线 / Week 3 内容 / Week 4 国内正式** | 自己 14 天达成 = 最强 dogfooding |

---

## 相关笔记

- [[2026-04-22-ui-design-system]]
- [[2026-04-22-product-services-matrix]]
- [[2026-04-22-seo-keyword-matrix]]
- [[2026-04-22-brand-visual-concepts]]
- [[2026-04-22-competitive-landscape]]
