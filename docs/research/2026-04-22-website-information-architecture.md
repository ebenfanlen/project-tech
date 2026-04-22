---
date: 2026-04-22
type: website-ia
status: draft-v1
project: shipwright
owner: ArchitectUX
phase: Phase 1 MVP
---

# Shipwright / 船匠 网站信息架构（IA）

> 「别堆人，造船。」/ "Don't hire. Ship."
>
> 本文档输出：Sitemap（3 层）· 页面清单（23 页）· 首页 section 拆解（10 section）· 三语策略 · 内容页模板 · 客服 + CRM 需求 · Nav/Footer 设计。
>
> 原则：**先做最小有效集（Phase 1）**，不做「先大后删」。所有页面标注 priority（P0 必须 / P1 应该 / P2 可推迟）。

---

## Part 1：信息架构（Sitemap）

### 1.1 顶层结构（Nav-Level，P0 全部 Phase 1 必备）

```
Shipwright.ai（根域名 / 主入口）
│
├── /                            首页（双画像 CTA）                       [P0]
│
├── /products/                   产品矩阵（nav dropdown 的 overview 页）   [P1]
│   ├── /pilot-pod/              Pilot Pod 试航舱 ¥12.8K / 5 天           [P0]
│   ├── /vibecoding-pod/         Vibecoding Pod 匠造舱 ¥58K / 14 天       [P0]
│   ├── /fleet-integration/      Fleet Integration 舰队集成 ¥168K-298K+  [P0]
│   └── /crew-retainer/          Crew Retainer 船员月租 ¥5.8K-22.8K/月   [P0]
│
├── /scenes/                     5 大场景（SEO 长尾收口 + nav dropdown）   [P1]
│   ├── /scenes/v-cs/            V-CS 智能客服场景                         [P0]
│   ├── /scenes/v-seo/           V-SEO 独立站 SEO 场景                    [P0]
│   ├── /scenes/v-ad/            V-AD 广告投放场景                         [P1]
│   ├── /scenes/v-content/       V-Content 内容/红人场景                   [P1]
│   └── /scenes/v-ops/           V-Ops 运营自动化场景                      [P1]
│
├── /how/                        14 天方法论（Timeline 可视化）            [P0]
│
├── /work/                       案例墙（grid 列表）                        [P0]
│   └── /work/{case-slug}/       单个 case 详情页（Phase 1 至少 3 个真 case） [P0]
│
├── /blog/                       博客列表（pillar + supporting 混合）       [P0]
│   ├── /blog/category/{cat}/    分类聚合（4 个 pillar cluster）           [P1]
│   ├── /blog/tag/{tag}/         标签聚合                                 [P2]
│   └── /blog/{post-slug}/       单篇文章                                 [P0]
│
├── /pricing/                    定价（4 SKU 并排 + BYOK chip）            [P0]
│
├── /playbooks/                  免费 playbook / 模板下载                  [P1]
│   └── /playbooks/{slug}/       单个 playbook 详情                       [P1]
│
├── /about/                      关于我们 / 团队 / 价值观                  [P0]
│
├── /contact/                    预约 30 分钟 AI 诊断                      [P0]
│
├── /changelog/                  产品更新 / 自家 dogfooding 证据            [P1]
│
└── /careers/                    招聘                                     [P2 延后]
```

### 1.2 Footer-Only 页面（不进主 Nav）

```
├── /legal/terms/                服务条款                                 [P0]
├── /legal/privacy/              隐私政策                                 [P0]
├── /legal/sla/                  SLA（Fleet + Retainer 客户需要）         [P1]
├── /legal/icp/                  ICP 备案信息（法规要求）                  [P0]
├── /sitemap.xml                 机读 sitemap（SEO 刚需）                  [P0]
├── /sitemap-html/               人类可读 sitemap                         [P1]
├── /rss.xml                     博客 RSS                                [P1]
└── /llms.txt                    AI 友好索引（新规范）                     [P1]
```

### 1.3 客户专属页面（Phase 1 决策：**暂不做完整 Dashboard**）

```
├── /portal/                     客户登录入口（Phase 2 启用）              [P2]
│   ├── /portal/ship-dashboard/  交付看板（14 天 burn-down / demo 链接）  [P2]
│   ├── /portal/deliverables/    交付物下载（代码仓 / 文档 / runbook）    [P2]
│   └── /portal/billing/         发票 / 合同                              [P2]
```

**Phase 1 替代方案**：用飞书多维表格 + 共享 Notion 页面做「准 dashboard」，不做自研 portal。每个 Pod / Fleet 客户发一个链接。网站留 `/portal/` 作路由预留，但先 302 跳到飞书。

### 1.4 管理后台（Admin / CRM，只列路由不做 UI）

```
├── /admin/                      管理员登录                                [P0]
│   ├── /admin/leads/            留资列表（chat widget + contact form 汇入） [P0]
│   ├── /admin/leads/{id}/       单个 lead 详情 + 状态流转                [P0]
│   ├── /admin/cases/            case studies 内容管理（CMS）            [P1]
│   ├── /admin/blog/             博客文章 CMS                            [P1]
│   ├── /admin/changelog/        更新日志发布                             [P1]
│   └── /admin/analytics/        简单流量 / 转化看板                       [P1]
```

**Phase 1 决策**：`/admin/leads` 必做（自建极简 CRM），其他 CMS 部分用 **Markdown + Git** 管理（博客 / case / changelog 全部走 `content/` 目录 PR 流程），不做 GUI CMS。

---

## Part 2：页面清单（23 个页面）

> 每页标注：URL / 中文名 / 英文名 / 目标用户 / JTBD / Priority / 三语同步 / Hero Headline / SEO 主 KW

### 表 2.1 主要页面（Phase 1 必做 P0 + P1）

| # | URL | 中文名 | 英文名 | 目标用户 | JTBD | P | 三语 | Hero Headline（中） | SEO 主 KW |
|---|-----|-------|-------|---------|------|---|------|------------------|----------|
| 1 | `/` | 首页 | Home | 电商老板（60%）+ 技术 Lead（40%） | 30 秒内判断「这家能不能帮我 14 天出活」 | P0 | 三语同步 | 别堆人，造船。14 天交付你的第一条跨境电商 AI 工作流。 | AI 员工 / AI agent 跨境电商 |
| 2 | `/pricing` | 定价 | Pricing | 所有人（决策前必看） | 对比 4 SKU + 看到真实数字 + 判断 BYOK | P0 | 三语同步 | 定价像代码一样公开。4 款 SKU，明码标价。 | AI agent 定价 / vibecoding 价格 |
| 3 | `/how` | 14 天方法论 | How We Ship | 技术 Lead + 电商老板 | 理解 14 天到底怎么交付（反「外包黑盒」焦虑） | P0 | 三语同步 | 14 天，6 个节点，每天看得见进度。 | 14 天交付方法论 / agent 开发流程 |
| 4 | `/pilot-pod` | 试航舱 | Pilot Pod | 第一次接触的电商老板 | 用 ¥12.8K 5 天试错换真 ROI 数字 | P0 | 三语同步 | 5 天 ¥12.8K，先让你看到一个会干活的 AI。 | AI 试点 / AI POC 跨境电商 |
| 5 | `/vibecoding-pod` | 匠造舱 | Vibecoding Pod | 准备上主力场景的电商老板 | 14 天拿到 1 个生产级 AI 工作流 + 源码 | P0 | 三语同步 | 14 天。1 个场景。一套你能自己维护的代码。 | vibecoding / AI 工作流定制 |
| 6 | `/fleet-integration` | 舰队集成 | Fleet Integration | 年 GMV 千万级以上的品牌方 | 21-28 天把多场景 agent 接入现有 ERP/OMS | P0 | 三语同步 | 把 4 个 AI 员工接进你的 ERP，像真实同事一样工作。 | AI agent 企业集成 / 跨境电商自动化 |
| 7 | `/crew-retainer` | 船员月租 | Crew Retainer | 交付后想继续维护的老客户 | 持续优化 + SLA + 代维护 | P0 | 三语同步 | 船造完了，船员留下继续开。 | AI 代运营 / agent 运维 |
| 8 | `/work` | 案例墙 | Case Studies | 决策前的「同行验证」心理 | 快速扫 10 个同行案例 | P0 | 简中 P0 / 繁英 P1 | 真数字。真客户。真可以复现。 | AI 案例 跨境电商 |
| 9 | `/work/{case-slug}` | 案例详情 | Case Detail | 看到相似场景的潜在客户 | 3 分钟读完一个完整 before/after | P0 | 简中 P0 / 繁英 P1 | — | case 相关长尾 |
| 10 | `/blog` | 博客 | Blog | SEO 流量（搜索用户） | 找到具体问题的答案 | P0 | 简中 P0 / 繁英 P2 | 船匠手记：14 天交付的工程笔记。 | 跨境电商 AI / vibecoding |
| 11 | `/blog/{slug}` | 博客文章 | Blog Post | 搜索长尾的从业者 | 读完一个问题的完整解决 | P0 | 简中 P0 | — | 40 个 KW 各对应一篇 |
| 12 | `/about` | 关于 | About | 做 due diligence 的企业客户 | 判断「这支队伍靠不靠谱」 | P0 | 三语同步 | 三个做过 500 万 GMV 独立站的人，决定不再堆 10 个人。 | shipwright 团队 / 船匠团队 |
| 13 | `/contact` | 联系 | Contact | 准备预约的潜在客户 | 30 秒内预约一个 30 分钟诊断 | P0 | 三语同步 | 30 分钟诊断，告诉你哪个 AI 员工最值得先造。 | AI 诊断预约 |
| 14 | `/scenes/v-cs` | V-CS 客服场景 | AI Customer Service | 客服量大的 DTC（邮件 + live chat） | 用 SEO 找到「怎么做多语言 AI 客服」答案 | P0 | 简中 P0 / 英文 P1 | 一个 AI 客服，英德法日西五语同时回复。 | AI 客服 跨境 / 多语言客服 agent |
| 15 | `/scenes/v-seo` | V-SEO 场景 | SEO Agent | 独立站想做内容 SEO 的品牌 | 「能否用 AI 量产 SEO 内容」 | P0 | 简中 P0 / 英文 P1 | 一个月 50 篇长尾 SEO，排名真的能上。 | SEO agent / AI SEO 内容 |
| 16 | `/scenes/v-ad` | V-AD 广告场景 | Ad Ops Agent | Meta/Google 投手 | 「AI 能不能自动优化广告」 | P1 | 简中 P0 | Meta + Google，一个 AI 投手。 | AI 投放 / 广告优化 agent |
| 17 | `/scenes/v-content` | V-Content 内容场景 | Content Agent | 想做红人/内容营销的品牌 | 红人筛选 + outreach 自动化 | P1 | 简中 P0 | 红人筛选 + 冷启外联，一个 AI 跑完。 | 红人营销 agent / influencer AI |
| 18 | `/scenes/v-ops` | V-Ops 运营场景 | Ops Agent | 多 SKU / 多店铺运营方 | 库存 / 订单 / 物流的自动化工作流 | P1 | 简中 P0 | 库存、订单、物流，一个 AI 后台跑。 | 电商自动化 / 运营 agent |
| 19 | `/playbooks` | Playbooks | Playbooks | SEO 流量 + 留资转化 | 免费下载 + 留邮箱成 lead | P1 | 简中 P0 | 我们自己用的 playbook，原样给你。 | AI playbook / 跨境电商模板 |
| 20 | `/changelog` | 产品更新 | Changelog | 回头客 + 技术决策者 | 看 dogfooding 证据（活的产品） | P1 | 简中 P0 | 我们自己每周都在用这些工具。 | shipwright 更新 |

### 表 2.2 辅助页面（Phase 1 必备，但优先级较低）

| # | URL | 中文名 | 英文名 | 目标 | P | 三语 |
|---|-----|-------|-------|------|---|------|
| 21 | `/products` | 产品矩阵 overview | Products | Nav dropdown 兜底页 | P1 | 三语 |
| 22 | `/scenes` | 场景矩阵 overview | Scenes | Nav dropdown 兜底页 | P1 | 简中 |
| 23 | `/legal/terms` `/legal/privacy` `/legal/icp` `/legal/sla` | 法律页 | Legal | 合规 | P0 | 简中 P0 / 英文 P1 |

### 表 2.3 Phase 1 不做的（推迟到 Phase 2+）

| URL | 原因 |
|-----|------|
| `/careers` | 团队 <10 人时不需要招聘页，放 Notion 链接 |
| `/portal/*` | 先用飞书表替代，Phase 2 再做 |
| `/blog/tag/*` | 文章 <30 篇时不必要 |
| `/events` | 暂无线下活动 |

**Phase 1 MVP 页面数：20 个（P0）+ 3 个 nav overview（P1）= 23 页**。

---

## Part 3：首页结构设计（10 个 section）

首页是转化漏斗第一屏，**跳出率决定生死**。设计原则：3 秒看懂是什么，10 秒看懂给谁，30 秒决定要不要往下读。

### Section 1：Sticky Nav（常驻顶部）

- **内容**：Logo（船匠 + CLI 光标桅杆）| 产品 ▾ | 方法论 | 案例 | 博客 | 定价 | 关于 | [语言切换 中/繁/EN] [主题 🌓] [开始 14 天 →] 
- **视觉**：高度 64px，Canvas Linen 底色 + 8px 模糊，滚动时加 1px Deep Harbor 下边线
- **行为**：滚动 >200px 时 Logo 从完整版缩为仅 Keel 图标；CTA 按钮 hover 变 Signal Orange

### Section 2：Hero（别堆人，造船。）

- **内容**：
  - 主 Headline：「**别堆人，造船。**」（Inter + HarmonyOS，88px Deep Harbor）
  - Sub：「14 天交付你的第一条跨境电商 AI 工作流。不是外包，是你自己的船。」
  - **双画像 CTA**（关键）：
    - 左按钮（主）：「我是电商老板，5 天试点 →」→ `/pilot-pod`
    - 右按钮（次）：「我是技术 Lead，看方法论 →」→ `/how`
  - 右侧视觉：**Live CLI demo**（JetBrains Mono 打字机效果）显示 `$ shipwright start pilot-pod --scene=v-cs` + 实时 build log
- **视觉**：Canvas Linen 底 + Deep Harbor 主文字 + Signal Orange CTA；左文右 terminal 的 60/40 布局，移动端 terminal 收到下方
- **行为**：Hero 上方挂 Live Timer（Section 3）；CTA 点击触发 GA4 + 百度统计双埋点

### Section 3：14 天 Live Timer（Geek 证据核心）

- **内容**：紧贴 Hero 下方的横条，显示「**当前正在交付：Case #047 · V-CS Pod · Day 9 / 14 · Next Demo in 18h**」
- **视觉**：Deep Harbor 底 + Canvas Linen 字 + 左侧一个 blinking Signal Orange 圆点；整条横贯屏幕，高度 48px
- **行为**：数据来自 `/admin/cases/` 数据库的 active case，每 60 秒轮询刷新；没 case 时显示「下一批开航：{日期}」
- **用途**：反「外包黑盒」——你能看见我们此刻在交付一个真客户。

### Section 4：客户信任墙

- **内容**：8-12 个客户 logo（灰度），下方一行「已为 {N} 个品牌交付 {M} 个 AI 员工，累计节省 {H} 小时/月」动态计数
- **视觉**：Canvas Linen 底，logo 统一高度 40px，hover 变全彩 + tooltip 显示「这家用的是 V-CS Pod」
- **行为**：logo 点击跳到对应 `/work/{case-slug}`；Phase 1 至少 3 个真 logo + 5 个匿名（写「某 DTC 服饰品牌 / 年 GMV 2000 万」）

### Section 5：「不像 Agency」宣言（反 Codecraft Strategic）

- **内容**：三列对比表
  - 传统 Agency：黑盒 / 加人 / 不给源码 / 按月计费永远不结束
  - AI 咨询公司：PPT / 不落地 / 你还得自己招人
  - **船匠 Shipwright**：14 天 / 不加人 / 源码归你 / 明码标价 ¥12.8K 起
- **视觉**：三列 Card，中间 Shipwright 列用 Signal Orange 描边 + 轻阴影，Card 底色 Canvas Linen；标题用 Inter 32px，正文用 HarmonyOS 16px
- **行为**：无 CTA，纯立场表达；移动端堆叠成 3 张卡

### Section 6：4 SKU 横向展示

- **内容**：4 张 Card 横向并排
  - Pilot Pod ¥12.8K / 5 天 / 「先试航」
  - Vibecoding Pod ¥58K + ¥2.4K/月 / 14 天 / 「主力打造」
  - Fleet Integration ¥168K-298K+ / 21-28 天 / 「舰队集成」
  - Crew Retainer ¥5.8K-22.8K/月 / 持续 / 「船员月租」
- **视觉**：每张 Card 顶部一个彩色条（从 Pilot 到 Fleet 颜色由浅到深 Deep Harbor），中间核心数字大号显示，底部一个 ghost button「查看详情 →」
- **行为**：Card 点击进对应 SKU 页；底部一个链接「查看完整定价对比 →」跳 `/pricing`

### Section 7：14 天方法论预览

- **内容**：横向 Timeline 展示 6 个节点：**Day 0 Kick-off → Day 2 Spec Lock → Day 5 First Demo → Day 9 Integration → Day 12 UAT → Day 14 Handoff**
- **视觉**：Timeline 用 Deep Harbor 实线连接，节点用 Signal Orange 圆点，每个节点下方 1 行说明；hover 节点显示该阶段的 deliverable 清单
- **行为**：底部 CTA「看完整方法论 →」跳 `/how`

### Section 8：案例精选（3 个 featured case）

- **内容**：3 张大 Card（比 SKU 卡更大），每张显示：
  - 客户品类（如「某北美 DTC 宠物食品」）
  - 1 个核心数字（如「客服响应 3h → 8min」）
  - 1 句客户 quote（真人头像 + 姓氏首字母）
  - 「读完整案例 →」链接
- **视觉**：Canvas Linen 底 + Deep Harbor 数字突出显示（64px bold）；Card 间距 32px
- **行为**：Card 点击进 `/work/{case-slug}`；底部「查看全部案例 →」跳 `/work`

### Section 9：FAQ（8 个核心问题）

- **内容**：Accordion 折叠，默认全收起
  1. 14 天真的能交付吗？如果延期怎么办？
  2. 代码和模型是我的吗？
  3. BYOK（自带 OpenAI / Anthropic Key）会便宜多少？
  4. 和找一个外包公司有什么区别？
  5. 我已经有技术团队，为什么还需要你们？
  6. 交付后我自己能维护吗？
  7. 数据安全怎么保证？（跨境电商客户隐私）
  8. 失败了能退款吗？
- **视觉**：每条 FAQ 展开时正文 Canvas Linen 底 + 左侧 Signal Orange 3px 竖线
- **行为**：手风琴单开（展开一条自动收起其他）；底部「更多问题 →」跳 `/contact`

### Section 10：最终 CTA + Footer

- **内容**：
  - 大字 CTA 区：「**准备好造你的第一艘船了吗？**」+ 两个按钮（「预约 30 分钟诊断」+「下载 Pilot Pod 合同样本」）
  - Footer（见 Part 7 详细设计）
- **视觉**：Deep Harbor 满屏底 + Canvas Linen 字 + Signal Orange 主 CTA；视觉上是一个明显的章节结束
- **行为**：主 CTA 打开 Calendly-like 预约弹窗（或直接跳 `/contact`）

---

## Part 4：三语策略

### 4.1 覆盖范围分层

| 语言 | Phase 1 | Phase 2 | Phase 3 |
|------|--------|--------|--------|
| **简中 zh-CN** | 100%（默认） | 100% | 100% |
| **繁中 zh-TW** | 0% | **最小集 8 页**（见下） | 主要页面 + 博客 Top 20 |
| **英文 en** | 0%（仅 SEO 标签） | **最小集 12 页** | 博客全量 + 所有场景页 |

### 4.2 Phase 2 繁中最小集（8 页）

- `/zh-tw/` 首页
- `/zh-tw/pricing`
- `/zh-tw/pilot-pod`（繁中客户多来自台湾 DTC，Pilot 是入口）
- `/zh-tw/vibecoding-pod`
- `/zh-tw/fleet-integration`
- `/zh-tw/how`
- `/zh-tw/about`
- `/zh-tw/contact`

**不翻译**：博客、场景长尾页、changelog、playbooks（繁中 SEO 用简中内容 + hreflang zh-Hant 标签覆盖即可，不单独写）。

### 4.3 Phase 2 英文最小集（12 页）

- `/en/` 首页
- `/en/pricing`
- 4 个 SKU 页
- `/en/how`
- `/en/scenes/v-cs`、`/en/scenes/v-seo`（英文 SEO 重点）
- `/en/about`
- `/en/contact`
- `/en/legal/terms` + `/en/legal/privacy`（英语客户合规）

### 4.4 hreflang 配置

每页 `<head>` 注入：

```html
<link rel="alternate" hreflang="zh-CN" href="https://shipwright.ai/pricing" />
<link rel="alternate" hreflang="zh-TW" href="https://shipwright.ai/zh-tw/pricing" />
<link rel="alternate" hreflang="en" href="https://shipwright.ai/en/pricing" />
<link rel="alternate" hreflang="x-default" href="https://shipwright.ai/pricing" />
```

### 4.5 URL 策略

- **推荐：子目录** `/zh-tw/` `/en/`，不用子域名
  - 原因：SEO 权重集中、百度对子目录友好、运维简单
  - 反模式：不用 `tw.shipwright.ai`（分散权重）
- **Slug 策略：统一英文 slug**（`/pilot-pod` 而非 `/试航舱`）
  - 原因：URL 机读友好、跨语言一致、百度 + Google 都接受
  - 中文品牌感靠 `<title>` + `<h1>` + 面包屑传达
- **首页例外**：简中 `/`，繁中 `/zh-tw/`，英文 `/en/`（`x-default` 指向简中 `/`）

### 4.6 语言切换器 UX

- **位置**：顶部 Nav 右侧，主题切换左边
- **样式**：Text button `中文 ▾`（当前语言）+ 点击展开 `简体中文 · 繁體中文 · English`
- **行为**：
  - 切换后**保留当前页面路径**（`/pricing` → `/en/pricing`，不要跳回首页）
  - 切换后写 Cookie `lang_pref=zh-tw`，7 天内访问根路径自动跳转
  - 不做系统自动检测跳转（百度爬虫需要稳定 URL，自动跳转会被惩罚）
- **移动端**：hamburger 菜单底部展开语言列表

### 4.7 关键原则

- **定价页必须三语同步发布**（Phase 2 启动日 Day 0 同时上线简繁英三版，价格不因语言变）
- **案例详情简中 only**（翻译成本高且客户 logo 已是真实佐证）
- **博客简中 only**（SEO 重心在百度和微信搜一搜；Google SEO Phase 3 另做英文原创）

---

## Part 5：博客 / SEO 内容页模板

### 5.1 Pillar 长文模板（6000 字）

**结构模板**（12 个模块）：

```
01. Hero 区
    - H1（含主 KW）
    - 副标题（说明 JTBD）
    - 作者头像 + 发布日期 + 阅读时长（「18 分钟」）
    - 3 个一键分享按钮（微信 / 小红书 / X）

02. TOC 目录
    - sticky 左侧栏（桌面）/ 顶部折叠（移动）
    - 自动锚点 + 阅读进度条

03. TL;DR 摘要（200 字）
    - Canvas Linen 底色框 + Signal Orange 左边线
    - 列出 3-5 个核心 takeaway

04. 正文（5000 字）
    - H2 每 800-1200 字一个大节
    - H3 下展开
    - 插入 3-5 张自制图（Deep Harbor 底 + Canvas Linen 文字的品牌图）
    - 每 1500 字插入一条「Shipwright 视角」引用块（我们自己怎么做的）

05. 代码示例（如果技术文）
    - JetBrains Mono + Deep Harbor 底
    - 右上角复制按钮

06. 数据表格（如果有）
    - 对比类内容必备

07. 真实案例引用
    - 从 /work 里拉 1-2 个相关 case 做内链

08. 相关内链（至少 3 个 supporting 文章 + 1 个 pillar + 1 个 SKU 页）

09. 结论 + CTA
    - 「如果你想让我们帮你跑一遍 → 预约 Pilot Pod」

10. 作者 bio
    - 头像 + 1 段话 + 联系方式

11. Schema.org 结构化数据（Article + Author + BreadcrumbList）

12. Comments / 留资 Widget
    - 邮箱订阅 + 「下载 playbook」二次转化
```

### 5.2 Supporting 文章模板（2500-3500 字）

去掉 Pillar 的 TOC + 作者 bio，保留：

- Hero + H1
- TL;DR（100 字）
- 正文（2500 字，H2 3-4 个）
- 1 个代码示例或数据
- 相关内链（至少 1 个 pillar + 2 个 supporting）
- 结论 + CTA

### 5.3 Case Study 模板

4 段式固定结构：

```
Section 1 - 问题（Problem）
  - 客户背景（行业 / GMV / 团队规模 / 当前痛点）
  - 1 张对比图：改造前的工作流

Section 2 - 方案（Solution）
  - 我们选了哪个 SKU（Pilot / Vibecoding / Fleet）
  - 14 天里每一阶段做了什么（Timeline 复用首页样式）
  - 技术栈 / 集成点

Section 3 - 数字（Results）
  - 3-5 个量化指标的 before/after
  - 每个指标一个大号数字 Card
  - 可视化柱状图（简单）

Section 4 - Quote + 续约
  - 客户真实引用（姓氏首字母脱敏）
  - 续约了什么（Crew Retainer / 增加场景）
  - CTA：「跟你这个场景很像？预约 30 分钟诊断」
```

### 5.4 Playbook / 免费下载 Gate 策略

**决策：分级 gate**

| 内容类型 | Gate 策略 |
|---------|---------|
| 博客文章（pillar + supporting） | **不 gate**，SEO 需要开放 |
| Case study 详情 | **不 gate**，信任建立需要开放 |
| Playbook PDF（如「V-CS 14 天实施 checklist」） | **邮箱 gate**（不要电话，摩擦太大） |
| 高价值模板（如「Fleet Integration RFP 模板」） | **邮箱 + 公司名 + GMV 区间**（标记高质量 lead） |
| Pilot Pod 合同样本 | **邮箱 + 微信号**（最高意向信号） |

**实现**：邮箱 gate 用轻量弹窗（80% 透明遮罩 + 居中 Card）；提交后立刻给下载链接 + 发 3 封自动化邮件（D0 资源 / D3 相关案例 / D7 预约诊断）。

---

## Part 6：客服 Chat Widget + CRM 需求

### 6.1 Widget 行为规范

| 场景 | 行为 |
|------|------|
| 首次进站 | 不主动弹（避免用户反感），右下 FAB 常驻 |
| 停留 >45 秒 OR 滚动 >70% | 右上角气泡提示「有问题聊一下？」（3 秒后自动消失） |
| 进入 `/pricing` | 30 秒后主动弹：「需要我帮你算一下你的场景用哪个 SKU？」 |
| 进入 `/contact` | 不弹（避免与表单冲突） |
| 已留过资的 returning visitor | 显示「欢迎回来，{姓名}」+ 快捷「联系你的顾问」 |
| 非工作时间（22:00-09:00） | 改文案「现在不在线，留个联系方式 2 小时内回」 |

### 6.2 留资字段最小集（5 个，绝不超过 7 个）

1. **姓名** / 称呼（必填，text）
2. **联系方式**（必填，二选一：手机号 或 微信号）
3. **公司名**（选填，text，但自动高亮提示「填了能更快对接」）
4. **年 GMV 区间**（必填，select：<500 万 / 500-2000 万 / 2000 万-1 亿 / 1 亿+）
5. **想解决的场景**（必填，select：客服 / SEO / 广告 / 内容 / 运营 / 还没想好）
6. **怎么找到我们的**（选填，select：百度 / 小红书 / 朋友推荐 / 其他）
7. **备注**（选填，textarea，100 字）

### 6.3 CRM 后台结构

```
/admin/leads/                  Lead 列表页
├── 筛选：状态 / 来源 / GMV 区间 / 场景 / 时间
├── 排序：最新 / 评分 / 未跟进最久
└── 批量操作：分配负责人 / 标签 / 导出

/admin/leads/{id}/             单 lead 详情
├── 基本信息（7 字段）
├── 对话历史（chat widget 所有交互）
├── 访问轨迹（access log：看过哪些页、停留时长）
├── 状态流转（New → Contacted → Qualified → Pilot → Customer → Churn）
├── 备注时间线（每次沟通手动补记）
├── 下一步动作（提醒日期 + 任务）
└── 外部集成按钮：[推送到飞书多维表] [同步到企微客户联系]
```

### 6.4 状态流转（简化版 5 态）

```
New（新留资）
  ↓ 2 小时内人工首触
Contacted（已首触）
  ↓ 首触后 72 小时内判断
Qualified（合格）  → [转到企业微信持续跟进]
  ↓ 或
Disqualified（不合格，归档，原因标记）
  ↓ Qualified 之后
Converted（成交 Pilot/Vibecoding/Fleet）
  ↓ 或
Lost（流失，原因标记：价格 / 时机 / 竞品 / 其他）
```

### 6.5 自建 vs 第三方建议

**最终建议：Phase 1 用 Crisp + 自建 Lead DB 混合方案**

| 方案 | 优势 | 劣势 | 建议 |
|------|------|------|------|
| **Crisp**（推荐 Phase 1） | 快（1 天上线）/ 便宜（¥200/月起）/ 中文完善 / 有移动 App / 支持微信对接 | 数据在他们服务器 / 定制化差 | **Chat widget 用它** |
| **Tawk.to** | 免费 | 中文支持一般 / 品牌去除要付费 | 不推荐 |
| **Intercom** | 功能强 | 贵（$74/座席/月起） / 对中国用户不友好 | 不推荐 |
| **自建** | 完全掌控 / 数据自主 | 开发 2-3 周 | Phase 2 考虑 |

**Phase 1 架构**：
- Chat widget：Crisp（通过 webhook 把每条对话实时同步到自建 `/admin/leads/`）
- 留资表单：自建（直接写自家 DB）
- Lead 管理：自建极简 CRM（Next.js + Postgres + Prisma）
- 同步到企微：用 webhook 推送（企微机器人）

**Phase 2 迁移**：如果 lead 量 >500/月，再考虑自建完整 chat（成本临界点）。

---

## Part 7：导航与 Footer 设计

### 7.1 顶部 Nav（桌面）

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Logo 船匠]   产品 ▾   方法论   案例   博客   定价   关于    中文 ▾ 🌓  [开始 14 天 →] │
└────────────────────────────────────────────────────────────────────────┘
```

- **Logo**：Concept B The Keel，高度 32px，点击回首页
- **主菜单**（6 项）：产品 ▾ / 方法论 / 案例 / 博客 / 定价 / 关于（不含 contact，contact 藏在主 CTA 里）
- **右侧工具区**：语言切换 / 主题切换 / 主 CTA 按钮
- **主 CTA 按钮样式**：Signal Orange 底 + Canvas Linen 字 + 圆角 8px + hover 升高 1px 阴影

### 7.2 产品下拉（Mega Menu）

点击「产品 ▾」展开一个两列 mega menu：

```
┌─────────────────────────────────────────────────────────────────┐
│  产品 SKU                         │  场景着陆页                    │
├───────────────────────────────────┼──────────────────────────────┤
│  🚤 Pilot Pod       ¥12.8K/5d     │  💬 V-CS 客服                 │
│  ⚓ Vibecoding Pod  ¥58K/14d      │  🔍 V-SEO 独立站 SEO          │
│  🚢 Fleet Integration ¥168K+/21d  │  📣 V-AD 广告投放             │
│  👷 Crew Retainer   ¥5.8K+/月     │  ✍️ V-Content 内容            │
│                                   │  ⚙️ V-Ops 运营                │
│  → 查看完整定价对比                │  → 查看所有场景                │
└─────────────────────────────────────────────────────────────────┘
```

### 7.3 移动端 Nav（<768px）

- 左 Logo，右 hamburger icon + 主 CTA 按钮（缩小版「开始」）
- 点击 hamburger 全屏侧滑菜单：
  ```
  产品 ▾
    └ 4 SKU + 5 场景（展开式）
  方法论
  案例
  博客
  定价
  关于
  ─────────
  语言：中 / 繁 / EN
  主题：🌞 / 🌙 / 💻
  ─────────
  [开始 14 天 →]
  ```

### 7.4 Footer（桌面 4 栏）

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo 船匠]                                                         │
│  「别堆人，造船。」                                                   │
│  14 天交付你的跨境电商 AI 员工。                                      │
│                                                                     │
│  📧 hello@shipwright.ai   📱 +86 xxx-xxxx-xxxx                      │
├─────────────────────────────────────────────────────────────────────┤
│ 产品              公司              资源              法律            │
│ ──                ──                ──                ──             │
│ Pilot Pod         关于我们           博客              服务条款        │
│ Vibecoding Pod    案例              Playbooks         隐私政策        │
│ Fleet Integration 方法论             Changelog         SLA            │
│ Crew Retainer     联系我们           RSS               ICP 备案        │
│ 所有场景 →        招聘（Phase 2）    Sitemap           llms.txt       │
├─────────────────────────────────────────────────────────────────────┤
│ 订阅船匠手记                                                          │
│ [邮箱输入框..........] [订阅]                                         │
│                                                                     │
│ 关注我们：                                                            │
│ [小红书] [微信公众号 二维码悬浮] [LinkedIn] [GitHub] [X/Twitter]       │
├─────────────────────────────────────────────────────────────────────┤
│  © 2026 Shipwright 船匠    沪 ICP 备 xxxxxxxx 号    沪公网安备 xxxxxx   │
│  📍 上海 · 纽约 · 深圳                                                │
└─────────────────────────────────────────────────────────────────────┘
```

- **视觉**：Deep Harbor 底 + Canvas Linen 字 + Signal Orange 链接 hover
- **ICP 备案号**：Phase 1 上线当天必须有（中国大陆业务合规）
- **微信公众号**：hover 时浮出二维码（不占位）
- **Newsletter 订阅**：接自建 email list（或 Substack / Buttondown）

### 7.5 移动端 Footer

4 栏堆叠成 accordion，点击栏目标题展开子链接；Newsletter + 社交 + 备案信息保留。

---

## 附录 A：Phase 1 交付清单（给 LuxuryDeveloper）

```
必做（P0，20 页）：
├── 首页 /
├── 4 SKU 页（pilot-pod / vibecoding-pod / fleet-integration / crew-retainer）
├── /pricing
├── /how
├── /work + /work/{3 个真 case}
├── /blog + /blog/{首批 5 篇：1 pillar + 4 supporting}
├── /scenes/v-cs + /scenes/v-seo
├── /about
├── /contact
├── /legal/terms + /legal/privacy + /legal/icp
└── /admin/leads + /admin/leads/{id}（极简 CRM）

应做（P1，7 页）：
├── /products（nav overview）
├── /scenes（nav overview）
├── /scenes/v-ad + /scenes/v-content + /scenes/v-ops
├── /playbooks + /playbooks/{首批 2 个模板}
├── /changelog
└── /legal/sla

暂不做（P2）：
├── /careers
├── /portal/*
├── 繁中页面（Phase 2 启动时集中做 8 页最小集）
├── 英文页面（Phase 2 启动时集中做 12 页最小集）
└── /admin 的 CMS GUI（Phase 1 全走 Markdown + Git）
```

## 附录 B：ArchitectUX 对开发的硬约束

1. **所有页面默认亮/暗/系统三态主题切换**（Deep Harbor / Canvas Linen 互换，代码里 `[data-theme]` 切换）
2. **所有页面 `<head>` 必须有 hreflang 标签**（即使 Phase 1 只有简中，标签预留）
3. **URL 全英文 slug**，中文品牌感靠 `<title>` / `<h1>` / 面包屑
4. **首页 Section 3 Live Timer 必须真数据**（不允许 fake it），没 case 时降级显示「下一批开航」
5. **Chat widget 首次不主动弹**（遵守 UX 第一准则：不打扰）
6. **ICP 备案号 + 备案编号** Phase 1 上线 Day 0 必须显示
7. **所有 CTA 事件双埋点**（GA4 + 百度统计），避免单点失败
8. **Mobile-first 写 CSS**，桌面用 min-width 媒体查询向上增强
9. **performance budget**：首屏 LCP <2.5s，CLS <0.1，TBT <200ms（百度同样敏感）
10. **SEO Schema.org**：首页 Organization，博客 Article，案例 CaseStudy（自定义 type 或用 Article），SKU 页 Product + Offer

---

**ArchitectUX Agent 签发**
**Date**: 2026-04-22
**Version**: draft-v1
**Next Step**: LuxuryDeveloper 接手 CSS 基础系统实施 + ProjectManager 切分 Phase 1 sprint（建议 3 个 sprint × 2 周 = 6 周交付 20 页 P0）
