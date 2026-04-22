# Shipwright / 船匠

> 别堆人，造船。/ Don't hire. Ship.
>
> 跨境电商 DTC 的 AI 工作流定制团队。14 天硬交付 · 代码 100% 归你 · 透明定价 · 支持 BYOK。

[shipwright.co](https://shipwright.co) (海外主) · [shipwright.cn](https://shipwright.cn) (国内主 · 备案中)

这个仓库本身就是 dogfooding 证据 — 我们用自己对客户承诺的 14 天 MVP 方法, 造了这个官网。

## 技术栈

- **Astro 4.x** (静态优先 + React Island 精确水合)
- **Tailwind CSS v4** (`@theme` 原生 CSS 变量, 50+ UI tokens)
- **字体自托管**: Inter Variable + Noto Sans SC/TC Variable + JetBrains Mono Variable
- **Content**: Astro Content Collections + Zod schema
- **动画**: 纯 CSS `@keyframes` (`mast-breath` 2s 呼吸 · `pulse-signal` 2s)
- **pangu.js**: 中英自动薄空格
- **SEO**: `@astrojs/sitemap` + 三语 hreflang + 百度/Google 友好

JS 首屏预算 **< 50KB gzip**, 零 Framer Motion 依赖。

## 目录结构

```
src/
├── components/          UI 组件 (Logo / NavBar / LiveTimer / LeadForm 等)
├── content/            MDX 内容 (blog/cases/playbooks)
├── content.config.ts   Content Collections Zod schema
├── data/               单一数据源 (skus / cases / faq / methodology / roadmap)
├── layouts/            Page layouts (BaseLayout / LegalLayout)
├── pages/              路由 (首页 + SKU × 4 + Legal × 4 + ...)
└── styles/
    └── global.css      Tailwind v4 @theme + semantic tokens + 动画 keyframes

public/
├── favicon.svg         The Keel logo (auto dark mode)
├── og-default.svg      社交分享图
├── robots.txt          搜索引擎 + AI 爬虫
└── llms.txt            LLM-friendly 索引 (新规范)

docs/
├── superpowers/specs/  4 份阶段 spec (A 品牌 · B 产品 · C 视觉 · D 开发)
└── research/           7 份子 agent 调研 (竞品 · SEO · tech · IA ...)
```

## 本地开发

```bash
pnpm install
pnpm dev              # http://127.0.0.1:4321
pnpm build            # → dist/
pnpm preview          # 预览 production build
```

## 部署架构

双栈同代码, 按访问者地理 edge 分流:

- **国内 (shipwright.cn)**: GitHub Actions → 阿里云 OSS + CDN (杭州/张家口双 region) + 函数计算 FC + RDS PostgreSQL
- **海外 (shipwright.co)**: GitHub Actions → Cloudflare Pages + Workers + R2 + Neon (Phase 2)

CI/CD:
- `.github/workflows/ci.yml`: PR / push 上 build + smoke test
- `.github/workflows/deploy.yml`: main 分支双分发 + 百度主动推送 API

首次部署前需要在 GitHub Secrets 配置:
- `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- `ALIYUN_ACCESS_KEY_ID`, `ALIYUN_ACCESS_KEY_SECRET`
- `BAIDU_PUSH_TOKEN` (可选, 百度站长平台)
- `DEPLOY_WEBHOOK_URL` (可选, 飞书机器人通知)

## 6 周路线图 (2026-04-23 起)

| Week | 目标 | 状态 |
|------|------|------|
| W1 | 骨架 + 海外灰度 shipwright.co 上线 | ✅ 完成 (D1-D7) |
| W2 | 内容引擎 + Chat Widget + CRM | 🚧 进行中 |
| W3 | 剩余 SKU 详情 + SEOMachine 本地化 fork | 计划中 |
| W4 | 国内 ICP 备案完成 + shipwright.cn 切流 | 计划中 |
| W5-6 | P1 补齐 + 一稿多投 + 内容冲刺 | 计划中 |

详见 [`/roadmap`](https://shipwright.co/roadmap) 网站页面.

## 品牌资产

- **Logo**: Concept B · The Keel (梯形船体 + 2s 呼吸 CLI 光标桅杆)
- **主色**: Deep Harbor `#2B5468` · Canvas Linen `#FDFCF9` · Signal Orange `#E86A2A`
- **字体**: Inter Variable (EN) + Noto Sans SC/TC Variable (ZH) + JetBrains Mono (Code)
- **圆角**: 偏方 6px 主力 (工艺感, 反消费 App 审美)
- **动画**: 只服务证据 (14 天 Timer / 桅杆呼吸), 不服务氛围

完整视觉系统见 `docs/research/2026-04-22-ui-design-system.md`.

## 不做什么

- 不做纯咨询 / PPT 交付
- 不做无 AI 元素的普通软件开发
- 不做非跨境电商 / DTC 垂直
- 不做 <¥10K 或 >¥500K 的项目 (Phase 1 范围)
- 不做 white-label / 贴牌
- 不做不透明定价 / book-a-call
- 不做 Credit 计费 / token 黑盒

## 联系

- hello@shipwright.co
- [30 分钟免费诊断 →](https://shipwright.co/contact)

---

© 2026 Shipwright 船匠 · 别堆人, 造船.
