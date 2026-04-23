# AiOars · Claude Code Standards

> 这个文件是团队 + Claude 的共享约束. 所有 Claude Code 调用 / AI agent / 内部工具都读这份.
> 与官网品牌一致 · 反 CC Strategic / 反 credit 计费 / 反 vendor lock.

---

## 1. Brand Voice (所有文案 / UI copy / Chat reply 强制)

**禁用词**: 赋能 · 云原生 · 一站式 · 专业现代 · 全方位 · 前瞻性 · 颠覆 · 黑科技 · 秒杀

**必须可验证的承诺**:
- "14 天" = 14 × 24h 倒计时 · 不是工作日
- "代码 100% 归你" = Day 14 交付 GitHub org 权限移交
- "透明定价" = 官网 /pricing 明码标价 · 不 book-a-call
- "BYOK 0 markup" = 客户 API Key 直付模型厂商

**每篇 blog / case study 必须包含**:
- 至少 1 个 "我们做错过的事" / "第一手经验" 章节
- 每 300 字至少 1 个具体数字或实例
- 至少 1 条外链指向权威源 (Shopify docs / Amazon SP-API docs / Gartner)

---

## 2. Code Standards

### TypeScript
- `strict: true` + `noUncheckedIndexedAccess: true`
- No `any` · 用 `unknown` + type guard
- Named export 优先于 default export

### Astro
- 静态页面必须 SSG (不走 Island) · SEO-critical 内容尤其
- Island 只用在真正需要客户端状态的地方 (Chat Widget / LeadForm / Theme Toggle)
- `client:idle` > `client:visible` > `client:load` 优先级

### CSS
- Tailwind v4 `@theme` 驱动 tokens · 不写 hardcoded HEX
- Semantic tokens (`--fg-display` / `--bg-page`) 响应 `[data-theme]`
- 圆角偏方 (主力 6px) · 禁止 20px+ 大圆角
- 动画只服务证据 · 不服务氛围 (14 天 Timer / 呼吸桅杆 / Signal pulse 三种)

### ORM / DB (Week 2+ 接入)
- Drizzle ORM (非 Prisma, 保持轻)
- 禁止 N+1 查询 · 关系用 `.with()` 或显式 JOIN
- 所有 mutation 写 event log 到 `audit_log` 表
- PIPL 合规: 中国境内用户手机号必须存杭州 RDS · 不出境

### API
- 错误统一返回 `{ error: { code, message } }`
- 成功返回业务数据根对象 (不包 `data` 字段)
- 速率限制: 每 IP 每分钟 60 次

---

## 3. 内容生产 SOP

```
docs/seo/research-<slug>.md       ← /research 产出
    ↓
src/content/blog/<slug>.mdx        ← /write 产出
    ↓
docs/seo/optimize-reports/...      ← /optimize-baidu 产出
    ↓
PR → review → merge → CI 触发:
    - Astro build
    - 阿里云 OSS + CF Pages 双分发
    - 百度主动推送 API
    - 百家号 API 同步 (authenticated)
```

详见:
- `.claude/commands/research.md`
- `.claude/commands/write.md`
- `.claude/commands/optimize-baidu.md`

---

## 4. Git Convention

- Commit message 中文 · 按 Day/阶段编号:
  - `Day N: <主要改动> · <次要改动>`
  - `Week N · <主题>: <改动>`
  - `fix: <问题描述> (<path>:<line>)`
- Co-Author: `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
- 不用 --amend 除非明确要求
- 不 force push 到 main/master

---

## 5. 禁止

- 不用 emoji (内部工具除外, 比如 `🚢` 在 changelog 代表发布)
- 不在用户可见处暴露 "GPT / OpenAI" 字样 (我们卖 Claude 方案)
- 不写 `// TODO: fix later` (要么现在修, 要么写 GitHub issue)
- 不用 `console.log` 做调试 (生产代码必须 removed)

---

## 6. 环境变量 (GitHub Secrets 占位)

```
CLOUDFLARE_API_TOKEN=           # W2 CF Pages 部署
CLOUDFLARE_ACCOUNT_ID=
ALIYUN_ACCESS_KEY_ID=           # W4 ICP 备案完成后国内部署
ALIYUN_ACCESS_KEY_SECRET=
BAIDU_PUSH_TOKEN=               # W3 百度站长主动推送
DEPLOY_WEBHOOK_URL=             # 飞书机器人 (可选)
SENTRY_DSN=                     # 错误监控
DATAFORSEO_LOGIN=               # 海外 KW 研究 (可选)
DATAFORSEO_PASSWORD=
5118_API_KEY=                   # 国内 KW 研究 (主)
ANTHROPIC_API_KEY=              # Chat Widget 真 AI 回复 (Phase 2)
```

---

## 7. SKU Starter Kits (内部资产, 不开源)

5 大场景预置在 `.claude/agents/`:

- `v-cs/` — IG DM + Shopify Inbox + 小红书私信 Agent 架构模板
- `v-seo/` — Amazon listing + Helium 10 + 多语言流水线
- `v-ad/` — Meta + TikTok 广告素材 + ROAS 预测
- `v-content/` — 小红书 / TikTok 内容日历 + 脚本 4 类
- `v-ops/` — 订单 / 物流 / 退款 AI 分诊

精简 demo 版 (v-cs-starter-public / v-content-starter-public) 公开在 GitHub 作引流 "试用装".
核心生产版在 aioars-org/sku-starters-private.

---

## 8. 14 天方法论 Day-by-Day (客户项目)

详见 /how 网页 + `src/data/methodology.ts` · 14 节点每个有可验收产物 · Day 7 go/no-go · 超期按日退款.
