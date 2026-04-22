---
date: 2026-04-22
stage: D
type: spec
status: awaiting-approval
depends_on:
  - docs/superpowers/specs/2026-04-22-stage-a-brand-positioning-design.md
  - docs/superpowers/specs/2026-04-22-stage-b-product-services-design.md
  - docs/superpowers/specs/2026-04-22-stage-c-visual-identity-design.md
  - docs/research/2026-04-22-website-information-architecture.md
  - docs/research/2026-04-22-tech-architecture.md
next_stage: 实际开发 kickoff（Week 1 Day 1）
---

# 阶段 D：网站设计 + 开发 + SEO + 三语（执行规划）

> 本 spec 锁定：**技术栈、部署架构、信息架构、6 周交付计划、关键冲突决策**。
> 通过后立即进入实际开发（Week 1 Day 1）。
> 最大 KPI：**shipwright.co 海外灰度 Week 2 Day 13 上线 = 我们自己先达成 14 天承诺**（最强 dogfooding 证据）。

---

## 1. 本 spec 要决定的 8 件事

| # | 决策项 | 本 spec 的选择 | 有冲突否 |
|---|---|---|---|
| D-1 | 前端框架 | **Astro 4+** | ✅ 两个 agent 对齐 |
| D-2 | 国内托管 | **阿里云 OSS + CDN + FC** | ✅ |
| D-3 | 海外托管 | **Cloudflare Pages + Workers** | ✅ |
| D-4 | 域名策略 | **`.cn` 国内主 + `.co` 海外主（备案前灰度）+ `.ai` 保护** | ✅ |
| D-5 | CMS | **Astro Content Collections + Keystatic**（Git-based） | ✅ |
| D-6 | **Chat Widget 自建 vs Crisp** | **自建**（反 UX Architect Crisp 建议） | ❗**有冲突，决策在下面** |
| D-7 | 开发节奏 | **6 周完成 Phase 1 P0**（W1-2 骨架+灰度 / W3-4 内容+国内正式 / W5-6 剩余） | ✅ 融合两个节奏 |
| D-8 | 三语 Phase 1 策略 | **简中 100%，繁中/英文 Phase 2 做最小集** | ✅ |

---

## 2. 关键冲突决策：Chat Widget 自建（D-6）

**UX Architect 建议**：Phase 1 用 Crisp（1 天上线，省 2-3 周）
**Backend Architect 建议**：自建（品牌统一 + dogfooding）

**本 spec 决策：自建**。

理由（三条）：
1. Shipwright 的核心差异化是「**我们用 Claude Code 自己做的**」。Chat Widget 是首屏最显眼的交互元素（右下 FAB 常驻），如果用 Crisp，品牌一致性直接砸（Crisp 的绿色气泡 vs Deep Harbor + Signal Orange）。
2. Chat 会话数据是未来 Claude agent 智能回复的训练素材，必须进自家 DB，不能留在 Crisp 服务器。
3. Backend Architect 已把 Chat 自建规划进 **Week 2 Day 11** 的 3 天预算（WSS 骨架 + SSE 降级 + 长轮询兜底），时间线可控。

**技术降级路径**（Backend 设计）：
- WSS 握手失败 3s 内 → 降级 SSE
- SSE 不通 → 降级 HTTP 长轮询 10s
- 企业网 / 微信内置浏览器兼容性保底

**Phase 1 不做的智能回复**：Widget 上线时只做"留资 + 人工接管"，不接 Claude 自动回复（留到 Phase 2，避免 MVP 复杂度爆炸）。

---

## 3. 技术栈锁定（D-1 ~ D-5）

### 3.1 完整 Stack 表

| 层 | 选型 | 版本 | 授权 |
|---|---|---|---|
| **前端框架** | Astro | 4+ | MIT |
| CSS | Tailwind | v4 | MIT |
| 组件库 | shadcn/ui（Admin 后台）+ 自建品牌组件（首屏/定价等） | — | — |
| 图标 | Lucide React + Tabler（按需） | — | ISC / MIT |
| 动画 | 纯 CSS @keyframes + Motion One（3KB） | — | MIT |
| 页面过渡 | Astro View Transitions API（原生） | — | — |
| **英文字体** | Inter Variable | — | OFL |
| **中文字体** | HarmonyOS Sans SC/TC | — | 华为免费商用 |
| **等宽** | JetBrains Mono | — | OFL |
| **CMS** | Astro Content Collections + Keystatic | — | MIT |
| **API 运行时（国内）** | 阿里云函数计算 FC（Node 20） | — | — |
| **API 运行时（海外）** | Cloudflare Workers | — | — |
| **DB** | 阿里云 RDS PostgreSQL 基础版（2C4G + 20G） | 16+ | — |
| **ORM** | Drizzle ORM | — | Apache 2.0 |
| **鉴权** | Auth.js v5 + magic link（email） | — | ISC |
| **Chat 实时** | 自建 WSS → SSE → 长轮询三级降级 | — | — |
| **对象存储** | 阿里云 OSS（国内） + Cloudflare R2（海外） | — | — |
| **CDN（国内）** | 阿里云 CDN（2800+ 节点） | — | — |
| **CDN（海外）** | Cloudflare CDN | — | — |
| **监控** | 百度统计 + Plausible（自托管）+ Sentry + 阿里云 ARMS | — | — |
| **CI/CD** | GitHub Actions（双分发 OSS + CF Pages） | — | — |

**JS 首屏预算**：<50KB gzip（**零 Framer Motion**）

### 3.2 Astro Islands 边界（哪些组件水合）

- `<ChatWidgetIsland client:idle>` — 右下 FAB + 对话 UI
- `<LiveTimerIsland client:visible>` — Hero 下方 14 天倒计时
- `<PricingCalcIsland client:visible>` — 定价页滑块计算
- `<ContactFormIsland client:idle>` — 留资表单 + 防 CSRF
- `<AdminCRMIsland client:load>` — `/admin/*` 全部

**SEO 硬规则**：所有 SEO-critical 内容（Pricing 数字 / SKU 描述 / Case Study / Blog 正文）**不走 Island**，全部 SSG 直出，百度蜘蛛零风险。

### 3.3 域名策略（D-4）

| 域名 | 用途 | Phase 1 启用时间 |
|---|---|---|
| **shipwright.cn** | 国内主，ICP 备案主体 | 备案完成后（预计 Week 3-4） |
| **shipwright.co** | 海外主 + 备案前灰度 | **Week 2 Day 13 上线** |
| shipwright.ai | 品牌保护 + 301 到 .co | 购入即 301 |
| shipwright.studio | 内部 staging | 购入即用 |

**DNS 分流**：中国大陆 IP → .cn → 阿里云 CDN；海外 IP → .co → Cloudflare CDN。

---

## 4. 信息架构锁定（23 页清单）

### 4.1 Phase 1 必做（P0，20 页）

| # | URL | 名称 | SEO 主 KW |
|---|---|---|---|
| 1 | `/` | 首页 | 跨境电商 AI 自动化 |
| 2 | `/pricing` | 定价 | AI agent 定价 / vibecoding 价格 |
| 3 | `/how` | 14 天方法论 | 14 天交付方法论 |
| 4 | `/pilot-pod` | 试航舱 | AI 试点 / AI POC 跨境 |
| 5 | `/vibecoding-pod` | 匠造舱 | vibecoding / AI 工作流定制 |
| 6 | `/fleet-integration` | 舰队集成 | AI agent 企业集成 |
| 7 | `/crew-retainer` | 船员月租 | AI 代运营 / agent 运维 |
| 8 | `/work` | 案例墙 | AI 案例 跨境电商 |
| 9 | `/work/{3 个 case}` | 案例详情 | 长尾 |
| 10 | `/blog` | 博客列表 | 跨境电商 AI |
| 11 | `/blog/{首批 5 篇}` | 博客详情（1 pillar + 4 supporting） | 40 个 KW |
| 12 | `/scenes/v-cs` | V-CS 客服场景 | AI 客服 跨境 |
| 13 | `/scenes/v-seo` | V-SEO 场景 | SEO agent / AI SEO 内容 |
| 14 | `/about` | 关于 | shipwright 团队 |
| 15 | `/contact` | 联系 / 预约 | AI 诊断预约 |
| 16 | `/legal/terms` | 服务条款 | — |
| 17 | `/legal/privacy` | 隐私政策 | — |
| 18 | `/legal/icp` | ICP 备案 | — |
| 19 | `/admin/leads` | CRM 列表 | — |
| 20 | `/admin/leads/{id}` | CRM 详情 | — |

### 4.2 P1 应做（7 页，Week 5-6）

`/products` / `/scenes` / `/scenes/v-ad` / `/scenes/v-content` / `/scenes/v-ops` / `/playbooks` + 首批 2 模板 / `/changelog` / `/legal/sla`

### 4.3 P2 推迟（Phase 2 或更后）

`/careers` / `/portal/*`（Phase 2，Phase 1 用飞书表替代） / `/blog/tag/*`

### 4.4 首页 10 个 Section（锁定）

Nav → Hero（双画像 CTA + Live CLI demo）→ 14 天 Live Timer → 客户信任墙 → "不像 Agency"三列对比（反 CC Strategic）→ 4 SKU 横排 → 14 天方法论预览 → 3 个 featured case → 8 个 FAQ → 最终 CTA + Footer

**详细 section 规范**见 UX Architect 文档 §3。每个 section 的视觉语言、行为、数据源都已定。

---

## 5. 三语策略锁定（D-8）

### 5.1 Phase 1 覆盖

| 语言 | Phase 1 | Phase 2 | 备注 |
|---|---|---|---|
| **简中 zh-CN** | 100%（默认，主） | 100% | Phase 1 唯一完整语言 |
| **繁中 zh-TW** | 0% | 最小集 8 页 | home + pricing + 4 SKU + how + about + contact |
| **英文 en** | 0%（仅 SEO hreflang 标签预留） | 最小集 12 页 | + 2 个场景页 + legal |

### 5.2 URL + hreflang

- **子目录**：`/zh-tw/*` `/en/*`（不用子域名，SEO 权重集中）
- **slug 统一英文**：`/pilot-pod` 而非 `/试航舱`（百度 + Google 双友好）
- hreflang + x-default 全页注入（Phase 1 预留标签，Phase 2 内容补齐）
- **不做系统自动跳转**（百度蜘蛛要求 URL 稳定）
- **语言切换保留路径** + 7 天 Cookie 偏好

---

## 6. Chat Widget + CRM 架构锁定（D-6 延展）

### 6.1 Widget 行为（UX Architect 设计保留）

| 场景 | 行为 |
|---|---|
| 首次进站 | 右下 FAB 常驻，**不主动弹** |
| 停留 >45s 或滚动 >70% | 右上角气泡提示 3 秒 |
| 进入 `/pricing` 30s | 主动弹"要我帮你算 SKU 吗？" |
| 进入 `/contact` | 不弹 |
| 非工作时间（22:00–09:00） | 文案改为"留个联系方式 2h 内回" |

### 6.2 留资字段（5 必填 + 2 选填）

1. 姓名（必）
2. 联系方式（必，手机 or 微信 二选一）
3. 公司名（选）
4. 年 GMV 区间（必，select）
5. 想解决的场景（必，5 大场景 select）
6. 怎么找到我们的（选）
7. 备注（选，100 字）

### 6.3 状态流转（5 态）

```
New → Contacted → Qualified → Converted (Pilot/Vibecoding/Fleet/Retainer)
                      ↓
                 Disqualified / Lost
```

### 6.4 CRM DB Schema（锁定，详见 Backend §5.3）

3 张表：`leads` / `chat_sessions` / `chat_messages`，Drizzle ORM，PIPL 合规境内存储（阿里云 RDS 杭州）。

### 6.5 飞书 / 企微推送

新线索到达 → 飞书机器人 interactive card → "去接管" 按钮直跳 `/admin/leads/{id}`。

---

## 7. SEOMachine 本地化 fork 计划（任务 #5 合并）

### 7.1 改造清单

| # | 改造项 | 工作量 | Week |
|---|---|---|---|
| 1 | Fork → `shipwright-org/seomachine-cn`（私有仓）| 0.5d | W1 |
| 2 | 数据源 GSC → **百度站长平台 API** | 2d | W3 |
| 3 | 关键词库 DataForSEO → **5118 API**（主） + DataForSEO（海外对标） | 2d | W3 |
| 4 | `/research` 中文化 + 百度下拉 / 相关搜索抓取 | 1d | W3 |
| 5 | `/write` 输出规则对齐 Astro Content Schema（Zod） | 1d | W3 |
| 6 | 新增 `/optimize-baidu` 命令（百度专属 meta + MIP + 主动推送 API） | 2d | W4 |
| 7 | 一稿多投 pipeline（百家号 / 搜狐号 / 公众号全自动；知乎 / 小红书半自动） | 3d | W4–W5 |

### 7.2 Claude Code Workspace 配置（dogfooding）

- 主仓 `shipwright/.claude/commands/` 软链 seomachine-cn 命令 + 自建 `publish.md` `lead-triage.md` `live-log.md`
- `.claude/agents/` 装 5 大 SKU-02 场景 starter kit（核心私有 + 部分开源作"试用装"）
- `CLAUDE.md` 写团队 coding standards + 品牌声音约束 + 内容生产 SOP

**开源 vs 私有边界**：

| 仓库 | 可见性 |
|---|---|
| `shipwright`（主站） | **公开**（dogfooding 最强证据） |
| `seomachine-cn` | 私有（含 5118 / 百度 token） |
| `sku-starters-private` | 私有（卖钱的资产） |
| SKU-01 / SKU-04 精简 demo | 公开（引流"试用装"） |

---

## 8. 6 周开发里程碑（合并 UX + Backend 节奏）

### 8.1 Week 1（04-23 ~ 04-29）：骨架 + 5 页 + 备案启动

| Day | 日期 | 可验收产物 |
|---|---|---|
| D1 | 04-23 | `pnpm create astro` + Tailwind v4 + Content Collections + Keystatic；首屏静态 HTML 可访问 |
| D2 | 04-24 | UI tokens 全部落 `@theme`；Inter + HarmonyOS 字体子集化；Dark Mode 三态切换器 |
| D3 | 04-25 | Home v0：Hero + 呼吸桅杆 + 14d Timer Island（mock 数据）+ 3 段主线 |
| D4 | 04-26 | Pricing v0：4 SKU + 滑块计算 Island；How v0 |
| D5 | 04-27 | `/pilot-pod` v0 + `/contact` + 留资表单 Island → FC mock endpoint |
| D6 | 04-28 | **阿里云账号 + shipwright.cn 注册 + ICP 备案提交**；shipwright.co 购入接 Cloudflare |
| D7 | 04-29 | GitHub Actions 双分发（OSS + CF Pages）打通；shipwright.co 临时可访问 |

### 8.2 Week 2（04-30 ~ 05-06）：**14 天承诺达成 → 海外灰度上线**

| Day | 日期 | 可验收产物 |
|---|---|---|
| D8 | 04-30 | i18n 路由 + hreflang 注入（home + pricing 预留三语标签） |
| D9 | 05-01 | Keystatic 后台跑通；首篇 pillar《14 天 MVP 方法论》MDX 入库 |
| D10 | 05-02 | 阿里云 RDS + Drizzle schema（leads / chat_sessions / chat_messages） |
| D11 | 05-03 | Chat Widget Island + WSS 后端骨架（FC + API 网关）+ 飞书机器人 |
| D12 | 05-04 | Admin `/admin/leads` 列表 + Auth.js magic link + CSV 导出 |
| **D13** | **05-05** | **🚢 shipwright.co 海外灰度正式上线**（Phase 1a，dogfooding #1）|
| D14 | 05-06 | 压测：Lighthouse ≥ 95 / CWV 全绿；百度蜘蛛模拟 5 页无异常；e2e 留资 → 飞书通 |

### 8.3 Week 3（05-07 ~ 05-13）：剩余 SKU + SEOMachine 基建

- D15–17：SKU-02/03/04 详情页 + 2 个 case（可用 mock）
- D18–19：SEOMachine fork → `/research` `/write` 中文化跑通，3 篇 supporting MDX
- D20–21：`/optimize-baidu` + 百度主动推送 API + 百家号 API 注册

### 8.4 Week 4（05-14 ~ 05-20）：国内备案切流 + 一稿多投

- D22–24：**ICP 备案完成 → shipwright.cn 切流正式上线**（Phase 1b）
- D25–26：百家号 / 搜狐号 / 公众号矩阵账号注册 + 首批 5 篇一稿多投
- D27–28：首批 20 个关键词百度站长平台提交 + sitemap 生效

### 8.5 Week 5–6（05-21 ~ 06-03）：P1 补齐 + 内容冲刺

- V-AD / V-Content / V-Ops 场景页
- 2 个 playbook 模板 + `/playbooks` 列表页
- `/changelog` + 首批更新日志
- 剩余 2 个 case study
- 4 篇 supporting 文章 + 1 篇 pillar
- 准备 Phase 2 繁中 / 英文翻译队列

**6 周交付目标**：**20 页 P0 + 7 页 P1 = Phase 1 完整 27 页 + 首批 10 篇 blog + CRM 小闭环**

---

## 9. 硬约束（UX Architect 给的 10 条 + 本 spec 补充）

1. 亮/暗/系统三态主题切换（`[data-theme]`）
2. 全页 hreflang 标签（Phase 1 预留 zh-CN / zh-TW / en）
3. URL 全英文 slug
4. 首页 14 天 Live Timer **必须真数据**，没 case 时降级"下一批开航"
5. Chat Widget 首次**不主动弹**
6. ICP 备案号 + 备案编号 Phase 1b 上线 Day 0 必须显示
7. CTA 事件双埋点（GA4 + 百度统计）
8. Mobile-first CSS
9. Performance budget：LCP <2.5s / CLS <0.1 / TBT <200ms
10. Schema.org：首页 Organization / 博客 Article / 案例 CaseStudy（Article 扩展）/ SKU Product + Offer
11. **（本 spec 补充）**：`prefers-reduced-motion` 下桅杆呼吸关闭
12. **（本 spec 补充）**：所有 SEO-critical 内容不走 Island（SSG 直出）
13. **（本 spec 补充）**：admin 不开放公网注册入口

---

## 10. 风险与兜底

| 风险 | 概率 | 影响 | 应对 |
|---|---|---|---|
| **ICP 备案 > 4 周** | 中 | 国内无法访问 | **预置 shipwright.co 灰度**（W2 D13 先上），备案完成 3h 切 DNS |
| 阿里云 OSS 被举报下架 | 低 | 静态中断 | 杭州 + 张家口双桶冗余，DNS 15min TTL |
| Vercel / CF 国内偶发不稳 | 中 | 海外流量掉 | 真出事切 Bunny.net + Stackpath |
| Chat WSS 企业网穿透 | 中 | 消息丢失 | 三级降级 WSS→SSE→长轮询 |
| SEOMachine 百度 API 接入失控 | 中 | W3 延期 | 百度推送极简（HTTP POST），5118 超时降爬虫降级 |
| **三语同步（1 人写中文）** | **高** | 繁/英文长期滞后 | Phase 1 简中 only + Phase 2 机翻 + 术语表 + 招 bilingual 写手 |
| PIPL 合规 | 中 | 监管风险 | 境内存储 + 授权 checkbox + 删除接口 + 24 月自动归档 |
| 2s 桅杆对低端机耗电 | 低 | 体验 | `prefers-reduced-motion` 关闭 |
| 百度蜘蛛 Astro Island 解析 | 低 | 部分动态未索引 | SEO-critical 全 SSG，Island 仅交互增强 |

---

## 11. 待验证假设（上线后校准）

- 阿里云 FC 对 WebSocket 长连接的计费
- 5118 API 免费额度够 W3 的 KW 研究
- Keystatic 在 GitHub 国内连不上时的降级
- CF Pages 对国内的真实 P95（10 城实测）
- 百度主动推送 API 10 万 / 日 quota 是否够
- 14 天 Live Timer 真数据源（Phase 2 接 ops dashboard）

---

## 12. 本 spec 不定的清单

- ❌ 具体 UI 微调（组件 padding 微调留给开发中 review）
- ❌ 博客具体选题排序（交给 SEOMachine + SEO Specialist 文档里的 22 个选题）
- ❌ Phase 2 具体启动日期（Phase 1 结束后评估）
- ❌ 合同 / SLA / 法务条款（法务另起文档）
- ❌ 团队招聘计划（商务私密）

---

## 13. 通过条件 + 下一步

**通过本 spec 后的立即下一步**：

1. 创建主仓 `shipwright/` 的 Astro 骨架（**Week 1 Day 1** = 2026-04-23 起跑）
2. 同步注册 shipwright.cn + shipwright.co + shipwright.ai 三个域名
3. 阿里云账号开通 + ICP 备案材料准备
4. GitHub 组织 `shipwright-org` 创建（主仓公开 + 两个私有 SKU/SEO 仓库）
5. `.claude/commands/` + `CLAUDE.md` 初始化
6. 进入实际 coding

**通过条件检查清单**：
- [ ] 用户 review 本 spec 并确认
- [ ] 特别确认 **D-6 Chat Widget 自建**（反 UX Architect 的 Crisp 建议）
- [ ] 特别确认 **D-7 6 周交付 + Week 2 Day 13 海外灰度上线**（自己的 14 天承诺）
- [ ] 确认域名策略（.cn + .co + .ai + .studio）
- [ ] 确认阶段 D 启动日（默认 2026-04-23 明天）

---

## 相关文件

- 阶段 A spec: `docs/superpowers/specs/2026-04-22-stage-a-brand-positioning-design.md`
- 阶段 B spec: `docs/superpowers/specs/2026-04-22-stage-b-product-services-design.md`
- 阶段 C spec: `docs/superpowers/specs/2026-04-22-stage-c-visual-identity-design.md`
- 网站 IA（完整版）: `docs/research/2026-04-22-website-information-architecture.md`
- 技术架构（完整版）: `docs/research/2026-04-22-tech-architecture.md`
