---
date: 2026-04-22
type: product-spec
status: draft-v1
owner: PM / Shipwright
phase: B (product-services-pricing)
depends_on: 阶段 A spec（市场研究与品牌定位）
---

# Shipwright / 船匠 — 产品服务矩阵与定价设计（Phase 1）

> Tagline：**别堆人，造船。**
> 适用窗口：2026-05 ~ 2027-04（Phase 1，国内中型跨境卖家）
> 交付承诺：**14 天硬上线**（超期按日退款，见 §3）
> 定价哲学：透明、可预算、反 Credit、反"book a call"

---

## 0. 设计总纲（为什么是这 4 个 SKU）

跨境电商 DTC 客户的 AI 采购漏斗可以拆成四层痛点：

1. **"我想试一下，但别把我套死"** → 需要一个 <¥20K 的入门款，3-5 天交付，跑通一个窄场景。
2. **"我已经被某个场景拖死了，要端到端解决"** → 需要主推款，覆盖一个完整业务闭环（客服 / 选品 / 站外投放 / 内容），14 天硬交付。
3. **"我有多个系统要打通，流程复杂"** → 需要高阶款，做跨 SaaS 的 AI workflow 编排（Shopify + ERP + Klaviyo + TikTok Shop + 小红书）。
4. **"跑通之后怎么持续优化 / 换模型 / 接新渠道"** → Retainer，月度续费，Agent 运维 + 新需求排期。

每一层都锁死在"跨境电商 / DTC 场景"，不做通用 AI 咨询，不做无电商元素的普通开发。

---

## 1. 服务 SKU 矩阵

### SKU-01｜**Pilot Pod / 试航舱**（入门款）

**产品定位**：低门槛触达，用一个窄场景证明 ROI，转化为 SKU-02 的钩子。

**目标客户画像**：
- 月 GMV ¥50K-¥500K 的跨境卖家（Shopify 独立站 + Amazon 混合）
- 团队 3-10 人，老板自己还在拉群回客服
- 没用过 AI agent，但已经在用 ChatGPT 写文案
- 预算敏感，需要"先看到东西再付第二笔"

**解决的具体痛点（选 1 个）**：
- a) Instagram DM / Shopify Inbox 客服回复滞后 12 小时以上
- b) 产品 listing（Amazon + Shopify）翻译 + SEO 文案跟不上上新速度
- c) 小红书 / TikTok 评论区监控 + 品牌声量预警漏掉差评

**交付内容清单**：
1. 1 个 Claude Code 部署的 AI agent（跑在客户自己的 Cloudflare Worker 或我们托管）
2. 与客户现有平台的 1 个集成（Shopify Admin API / Meta Graph API / 小红书开放接口之一）
3. 1 份 SOP 文档（何时触发、失败兜底、人工接管阈值）
4. 1 次 1 小时的客户培训（录屏 + 操作手册）
5. 30 天的 bug 保修

**不包含**：多渠道、A/B test、数据看板、模型微调。

**交付周期**：**5 个工作日**（比主推款更快，因为范围极窄）

**定价**：
- 国内客户：**¥12,800 一次性** + AI 调用 pass-through（客户 BYOK 或我们代付 + 10% 管理费）
- 海外客户：**$2,400 一次性** + AI cost pass-through

**续费逻辑**：一次性交付 → 30 天内 60% 折抵到 SKU-02 升级价（强 upsell 钩子）

---

### SKU-02｜**Vibecoding Pod / 匠造舱**（主推款，80% 订单打这里）

**产品定位**：Shipwright 的招牌产品。**14 天交付一个完整业务闭环的 AI workflow**。

**目标客户画像**：
- 月 GMV $30K-$300K（¥200K-¥2M）的成熟跨境卖家
- 有自己的运营 / 客服 / 投放团队（10-50 人）
- 在 Shopify / Amazon / TikTok Shop 至少 2 个渠道同时运营
- 老板已经承认"招人堆不动了"，开始找 AI 方案
- 预算 $5K-$15K 级别，可以做一次性投入

**解决的具体痛点（每单选 1 个场景锁死）**：

| 场景代号 | 业务闭环 | 典型客户 |
|---|---|---|
| V-CS | 全渠道 AI 客服中枢（IG DM + Shopify Inbox + 邮件 + 小红书私信） | 月客服量 500+ 的 DTC |
| V-SEO | Amazon/Shopify listing 批量生成 + 多语言本地化 + 关键词优化 | 月上新 50+ SKU 的卖家 |
| V-AD | TikTok Shop + Meta Ads 素材批量生成 + 投后数据回流分析 | 月投放预算 $10K+ 的品牌 |
| V-CONTENT | 小红书 + TikTok 内容日历 + 脚本 + 种草笔记批量生成 | 依赖 UGC / KOC 的新消费品牌 |
| V-OPS | Shopify 订单异常 / 物流异常 / 退款 AI 分诊 | 日订单 50+ 的独立站 |

**交付内容清单**（以 V-CS 为例，其他场景同构）：
1. 3-5 个协作的 AI agent（主 agent + 工具 agent + 人工接管 agent）
2. 至少 3 个系统集成（Meta / Shopify / 邮箱 + 1 个 CRM 或工单系统）
3. Human-in-the-loop 工作流（置信度 <80% 自动转人工）
4. 1 个数据看板（响应时长 / 自动解决率 / 转人工率 / 成本 / token 消耗）
5. 多语言支持（中英 + 1 个小语种如日 / 西 / 阿）
6. 1 次 2 小时客户培训 + 1 次 1 小时运营复盘（交付 2 周后）
7. 60 天 bug 保修
8. 所有代码 + Prompt + Agent 配置 100% 交付给客户（反锁定）

**交付周期**：**14 个自然日（硬承诺）**。超期按 3% / 天退款，最高退 30%。

**定价**：
- 国内客户：**¥58,000 一次性 setup** + **¥2,400/月 platform fee**（月度托管 / 监控 / 小修小补，前 3 个月免费）+ AI cost pass-through
- 海外客户：**$8,500 setup** + **$350/月 platform fee** + AI cost pass-through
- **BYOK 折扣**：客户自带 Anthropic / OpenAI API key → platform fee -20%

**续费逻辑**：
- Setup 是一次性
- Platform fee 从第 4 个月开始按月订阅（可随时取消）
- 第 4 个月起自动转入 Retainer 对话（见 SKU-04）

**反悔条款**：第一周（Day 1-7）客户可无理由终止，退 70% setup，已投入工时折算。

---

### SKU-03｜**Fleet Integration / 舰队集成**（高阶款）

**产品定位**：给"已经有一堆 SaaS 工具但各自为政"的客户做 AI workflow 编排中枢。

**目标客户画像**：
- 月 GMV $200K-$1M 的"卡在中型天花板"卖家
- 用了 8+ 个 SaaS（Shopify + Klaviyo + Gorgias + ERP + 飞书 + Notion + ...）
- 有全职数据 / 运营总监，能配合需求梳理
- 痛点是"系统之间的胶水工作每天 4 小时以上"
- 预算 $15K-$40K 级别

**解决的具体痛点**：
- 多 SaaS 数据孤岛（订单在 Shopify，退款在 ERP，客服工单在 Gorgias，没人能一眼看全景）
- 跨系统决策延迟（差评进来，需要在 3 个系统里手动查订单 / 物流 / 客服历史）
- 报表拼接 2 天起步（周会前运营要手动导 CSV）

**交付内容清单**：
1. 1 个主控 Agent（作为跨 SaaS 决策中枢）+ 6-10 个工具 Agent
2. 5-8 个 SaaS 集成（按客户实际 stack 定制）
3. 1 个中央数据层（可选 Supabase / 客户自有 DB / Airtable）
4. 自动化 workflow 编排（Shipwright 自研 orchestration 层，基于 Claude Code + Temporal-like 模式）
5. 2 个自定义数据看板 + 1 个异常预警机器人（飞书 / Slack / 企业微信）
6. 1 次 4 小时深度培训 + 1 个月陪跑（每周 1 次同步会）
7. 90 天 bug 保修
8. 完整架构文档 + 代码 + 部署脚本交付

**交付周期**：**21-28 天**（超 14 天，因为系统复杂度指数上升，这里不做 14 天承诺，但有阶段性里程碑每周交付验收）

**定价**：
- 国内客户：**¥168,000-¥298,000 setup**（按集成 SaaS 数量阶梯报价）+ **¥5,800/月 platform fee** + AI cost pass-through
- 海外客户：**$24,800-$42,000 setup** + **$850/月 platform fee** + AI cost pass-through
- **BYOK 折扣**：platform fee -25%

**续费逻辑**：
- Setup 一次性 + platform fee 强绑定 6 个月起（高阶客户运维刚需）
- 半年后自动转入高阶 Retainer（¥9,800/月 起）

---

### SKU-04｜**Crew Retainer / 船员月租**（月度持续优化）

**产品定位**：SKU-02 / SKU-03 交付后，长期绑定客户的续费引擎。

**目标客户画像**：
- 已购买 SKU-02 或 SKU-03，交付完成满 3 个月
- 有持续的 AI 需求（新渠道接入、新场景扩展、模型升级、Prompt 优化）
- 不想自己招 AI 工程师（招 1 个全职 AI 工程师国内至少 ¥35K/月 + 五险一金）

**交付内容清单（月度循环）**：
- 每月固定小时数（20h / 40h / 80h 三档）
- 覆盖：bug 修复、Prompt 优化、模型切换（比如从 Claude 3.5 升到 Claude 4.x）、新场景小改、数据看板新增指标、应急响应
- 每月 1 次 1 小时 review 会（业务 + 技术双视角）
- 每季度 1 次 roadmap 会（对齐下一季度新场景）
- 优先排期（Retainer 客户的新需求插队普通客户）
- 7x12 中文 IM 响应（飞书 / 企业微信 / 钉钉 4 小时内响应工作日）

**定价（三档）**：

| 档位 | 国内（¥/月） | 海外（$/月） | 包含小时 | 超时小时价 |
|---|---|---|---|---|
| Crew-S 轻量 | ¥5,800 | $880 | 20h | ¥380/h 或 $58/h |
| Crew-M 标准 | ¥11,800 | $1,780 | 40h | ¥340/h 或 $52/h |
| Crew-L 深度 | ¥22,800 | $3,480 | 80h | ¥310/h 或 $48/h |

**续费逻辑**：月付，3 个月起订，预付 3 个月享 5% 折扣，预付 12 个月享 12% 折扣 + 锁定价格 1 年。

---

## 2. 定价逻辑详解

### 2.1 三段式定价公式

所有 SKU 遵循相同的**透明公式**：

```
客户月度总支出 = Setup Fee（一次性，首月摊销）
              + Platform Fee（月度固定）
              + AI Cost Pass-through（按量，原价透传 + 可选 10% 管理费）
```

**举例**（SKU-02 V-CS 客服场景，月客服量 2000 条）：
- 首月：¥58,000 setup（一次性）+ 前 3 月 platform 免费 + AI 成本约 ¥1,200（2000 条 × 约 1.5K tokens × Claude Sonnet 定价）
- 第 4 月起：¥2,400 platform + AI 成本约 ¥1,500-2,500 = **约 ¥4K/月**（对比招 1 个客服 ¥6K/月 + 只能覆盖 1 个语种 + 8 小时）

### 2.2 BYOK（Bring Your Own Key）策略

客户可以选择：
- **托管模式**：Shipwright 代付 AI API → pass-through 原价 + 10% 管理费（简单省心）
- **BYOK 模式**：客户自己开 Anthropic / OpenAI / Google 账号，提供 API key → platform fee 立减 20-25%，AI 成本客户直付

**为什么提供 BYOK**：
- 大客户有自己的采购流程，不接受我们转售 AI 额度
- 体现"反锁定"品牌主张
- 对标 MindStudio 的 Pass-through 模式，符合海外 DTC 客户习惯

### 2.3 人民币 vs 美元定价策略

| 维度 | 国内客户（¥） | 海外客户（$） |
|---|---|---|
| 汇率参考 | 1 USD ≈ 7.0 CNY | — |
| 隐性折扣 | 人民币报价 ≈ 美元报价 × 6.8（即 3% 隐性折扣） | — |
| 开票 | 6% 增值税专票 或 公司对公转账 | Stripe / Wise / 对公电汇 |
| 合同语言 | 中文合同 | 英文合同 + 可选中文附件 |
| 支付节奏 | 50% 启动 + 50% 交付 | 40% 启动 + 40% Day 10 + 20% Day 14 |
| 催收 | 国内有熟人网络 + 法务兜底 | 使用 Stripe 托管 + 合同仲裁条款（香港） |

**为什么国内便宜 3%**：
- 获客成本低（朋友介绍 + 小红书自然流量）
- 收款周期短（国内 T+0 到账 vs 海外 Stripe T+7）
- 开票成本已内含

### 2.4 对标压制竞品

| 竞品 | 对标产品 | 竞品定价 | Shipwright 定价 | 压制逻辑 |
|---|---|---|---|---|
| CC Strategic | AI 咨询项目 | 不透明，估 $15K-$50K | SKU-02 $8.5K 透明 | 打"定价透明 + 垂直锁死 + 14 天" |
| NextAutomation | AI workflow | $5K 起（只是起步价）| SKU-01 $2.4K / SKU-02 $8.5K | 打"有 case study + 中文支持" |
| LeftClick | 自动化咨询 | 订阅制 $3K-$8K/月 | Crew-M $1.78K/月 | 打"3 年跨境电商垂直积累" |
| MindStudio | SaaS 平台 | Platform + Pass-through | 同模式但定制化 | 打"定制化 + 代码交付 + 无 vendor lock" |
| 国内通用 AI 外包 | 按人月 | ¥30K-¥80K/人月 | SKU-02 ¥58K 一口价 | 打"14 天 vs 2-3 个月 + 可验收产物"|

---

## 3. 14 天交付方法论

### 3.1 Day by Day 里程碑（SKU-02 标准版）

| 日期 | 阶段 | 负责人 | 可验收产物 | 客户参与度 |
|---|---|---|---|---|
| **Day 1** | Discovery Kickoff | PM + Tech Lead | Kickoff 会议纪要 + 业务流程图（Miro）+ 技术 stack 清单 | 2h 会议 |
| **Day 2** | 需求细化 | PM | PRD v1（场景定义、输入输出、验收标准、异常路径）| 1h 评审 |
| **Day 3** | 技术方案 + Prompt 草稿 | Tech Lead + AI Engineer | 架构图 + Agent 分工 + Prompt v1 + API 权限清单 | 30min 确认 |
| **Day 4** | 开发启动（Day 4 上午 kickoff，下午开始 coding）| AI Engineer A（国内早班）| Repo 初始化 + CI/CD + 至少 1 个 agent 的骨架代码 | 异步 |
| **Day 5** | 核心 Agent 开发 | AI Engineer A + B（follow-the-sun） | 主 agent 在 staging 跑通 happy path | 异步 |
| **Day 6** | 集成开发 | Integration Engineer | 至少 2 个外部 API 集成完成 + 单元测试 | 异步 |
| **Day 7** | **Mid-sprint Demo** | 全员 | 客户看到真实数据跑通 demo（用客户 sandbox 或脱敏数据）| 1h demo |
| **Day 8** | Human-in-the-loop 流程 | AI Engineer | 人工接管触发逻辑 + 转人工工单模板 | 异步 |
| **Day 9** | 多语言 + 边界情况 | AI Engineer | 多语言测试报告 + 10+ 个边界 case 通过 | 异步 |
| **Day 10** | 数据看板 | Frontend | 看板 v1 部署在 staging（关键指标：响应时长 / 自动解决率 / 成本 / token 消耗）| 30min 确认 |
| **Day 11** | UAT 启动 | PM + 客户 | 客户在 staging 跑 48h 真实业务 | 每日 15min stand-up |
| **Day 12** | UAT Bug 修复 | 全员 | Bug 清单全部 close 或 defer（需客户签字）| 异步 |
| **Day 13** | 生产部署 + 客户培训 | Tech Lead + PM | 生产环境上线 + 2h 培训录屏 + 操作手册 PDF | 2h 培训 |
| **Day 14** | Handoff & QA | PM | 代码仓库交付（客户 org）+ 运维手册 + 60 天保修合同 + 账单结算 | 30min 交付会 |

**每一天的硬红线**：没完成当日产物 → 当晚 stand-up 升级；连续 2 天延误 → 客户有权无责终止 + 退款（超期条款）。

### 3.2 为什么我们能做到 14 天（而行业普遍 4-8 周）

**1. Follow-the-sun 物理事实**

- 北京团队：9:00-18:00（UTC+8）
- 晚班 / 深圳 / 东南亚团队：18:00-次日 2:00（UTC+8）
- 美西客户 async 响应：当地时间 18:00 发问题 → 中国早班 9:00 已在处理 → 客户次日醒来看到答复

一天干 16 小时，14 天 ≈ 美西团队 28 天。

**2. Claude Code 生产率实测数据**

- 内部 benchmark：一个全栈工程师 + Claude Code 的产出 ≈ 3 个未用 Claude Code 的工程师
- 典型 SKU-02 项目代码量 3K-8K 行（agent + 集成 + 看板），Claude Code 辅助下 5-7 天可完成首版

**3. 模板化 starter kits（Shipwright 内部资产）**

针对 5 大场景（V-CS / V-SEO / V-AD / V-CONTENT / V-OPS）各有：
- 预置 Agent 架构模板
- 预置 Shopify / Meta / TikTok Shop / Amazon SP-API / 小红书开放平台 集成代码
- 预置 Prompt 库（中英日西阿 5 语种）
- 预置看板组件库

这些模板让每个新项目 Day 1 不是从零开始，而是从"70% 成品 + 30% 客户定制"开始。

**4. PM 强控流 + 硬拒绝 scope creep**

- Day 2 的 PRD 一旦签字，中途新需求全部入 Crew Retainer 排期
- 每日 15min stand-up 硬锁 blocker
- Day 7 Mid-sprint Demo 是 go/no-go 决策点，no-go 则协商阶段性交付 + 退款

---

## 4. 典型使用场景（讲故事，不是 feature list）

### 4.1 SKU-01 Pilot Pod 场景

**故事 A（V-CS 预热版）**：深圳某跨境美妆独立站 Lumesque，月 GMV ¥80 万，3 个客服轮班回 Instagram DM + 邮箱 + 独立站 chat，响应时长平均 14 小时，差评率 4.2%。

Shipwright 交付 Pilot Pod（¥12,800，5 天）：只做 Instagram DM 这 1 个渠道，1 个 AI agent 回复常见问题（尺寸 / 物流 / 过敏成分），置信度 <75% 转人工。上线第 2 周数据：IG DM 自动解决率 63%，平均响应时长从 14h 降到 11min，差评率降到 2.8%。客户第 3 周升级 SKU-02（V-CS 全渠道版），¥12,800 抵扣 ¥58,000 setup 中的 ¥7,680。

### 4.2 SKU-02 Vibecoding Pod 场景

**故事 B（V-SEO）**：杭州某 Amazon + Shopify 家居品牌 NordicNest，月上新 80 个 SKU，3 个兼职写手手写 listing，产出速度严重掉队，美国站 listing 断档 2 周。

Shipwright 交付 Vibecoding Pod V-SEO（¥58,000 + ¥2,400/月，14 天）：
- Agent 1 从供应商 PDF / 1688 图片提取产品规格
- Agent 2 生成英 / 日 / 德 3 语 listing（标题 + 5 个 bullet + description）
- Agent 3 按 Helium 10 关键词库优化 + 合规检查（避开 Amazon 禁用词）
- 看板显示：生成条数 / 人工审核通过率 / Amazon 上架后 7 天 sessions

上线第 30 天：月产 listing 从 80 条涨到 240 条（3x），人工审核通过率 87%，月 AI 成本 ¥1,800，节省 2 个兼职人力（≈ ¥12K/月）。客户 3 个月后续 Crew-M Retainer（¥11,800/月）。

**故事 C（V-CONTENT）**：上海某新消费茶饮出海品牌 Oolóng，主打 TikTok + 小红书种草，运营 2 人每天花 6 小时写脚本 / 找素材 / 改文案，周更 10 条顶天。

Shipwright 交付 Vibecoding Pod V-CONTENT（¥58,000 + ¥2,400/月，14 天）：
- Agent 1 每周扫描热门 TikTok / 小红书关键词 + 竞品笔记
- Agent 2 生成 30 条脚本（分 "产品功能 / KOC 体验 / 场景化 / 痛点解决" 4 类）
- Agent 3 配套生成封面标题 + 标签 + 小红书 SEO 关键词
- 人工最终过审 + 拍摄

上线第 45 天：周更从 10 条涨到 50 条，小红书粉丝从 3.2K 涨到 18K，TikTok 自然播放破百万视频 2 条。

### 4.3 SKU-03 Fleet Integration 场景

**故事 D**：广州某跨境 3C 配件品牌 VoltCraft，月 GMV $280K，Shopify + Amazon US/EU/JP + TikTok Shop US + 小红书，用 Klaviyo + Gorgias + 旺店通 ERP + 飞书 + 自建 BI，运营总监每天 4 小时在 8 个 tab 之间切换。

Shipwright 交付 Fleet Integration（¥238,000 + ¥5,800/月，25 天）：
- 主控 Agent：接收飞书 / 企业微信 @ 消息，自然语言查询跨系统（"查一下昨天美国站退款 Top 5 原因"）
- 集成 6 个 SaaS（Shopify / Amazon SP-API / TikTok Shop / Klaviyo / Gorgias / 旺店通）
- 异常预警机器人：订单延迟 / 库存 <7 天 / 差评 / 广告 ROAS 暴跌 → 飞书实时推送
- 2 个看板：运营日报 + 周报自动生成

上线第 60 天：运营总监日均跨系统切换时间从 4h 降到 40min，库存断货事件从月 6 次降到 1 次。12 月续签高阶 Retainer。

### 4.4 SKU-04 Crew Retainer 场景

**故事 E**：上面的 NordicNest 在 V-SEO 上线 3 个月后进入 Crew-M Retainer。月度交付样例：
- 第 4 月：Amazon 新站点（西班牙 + 意大利）listing 生成，新增 2 语种 Prompt
- 第 5 月：Claude 3.5 升到 Claude 4，Prompt 迁移 + AB test + 成本优化（降 22%）
- 第 6 月：加入"季节性促销自动生成"场景，Black Friday 前批量生成促销 listing
- 第 7 月：接入 TikTok Shop US，新增 1 个渠道 + 对应 agent

---

## 5. Upsell / 续费路径

```
Pilot Pod (SKU-01, ¥12.8K)
       │
       ├── 30 天内 60% 折抵 ──→ Vibecoding Pod (SKU-02, ¥58K)
       │                                   │
       │                                   ├── 前 3 月免 platform fee
       │                                   │
       │                                   ├── 第 4 月起 ¥2.4K/月
       │                                   │
       │                                   └── 3 个月后 ────→ Crew Retainer (SKU-04)
       │                                                        │
       │                                                        └── 业务复杂化 ──→ Fleet Integration (SKU-03)
       │
       └── 不升级（20% 客户）→ 作为 case study + 口碑扩散
```

**关键转化指标（内部目标）**：
- SKU-01 → SKU-02 转化率目标 **45%**（Pilot 作为销售漏斗顶端）
- SKU-02 → SKU-04 转化率目标 **60%**（交付完成 3 个月后）
- SKU-02 → SKU-03 升级率目标 **15%**（客户 GMV 跨过 $150K 阈值）
- Retainer 12 个月留存率目标 **70%**

**自然升级的触发信号**：
- 客户主动问"能不能加个 XX 渠道" → 升级
- 月 AI 成本占 platform fee 的 3 倍以上 → 业务已深度依赖 → Retainer
- 客户新招运营 / 数据岗位 → Fleet Integration 机会
- 客户 GMV 月增速 >20% 持续 2 个月 → 升级窗口期

---

## 6. 反模式（我们不做什么）

聚焦就是拒绝。Shipwright 明确**不做**以下事情：

1. **不做纯咨询 / PPT 交付**
   所有 SKU 必须交付可运行代码 + 部署的 agent + 数据看板。不做"AI 战略咨询报告"、"数字化转型白皮书"这种 PPT 生意。理由：我们的品牌是"别堆人，造船"—船必须真的下水。

2. **不做无 AI 元素的普通软件开发**
   不做纯 Shopify 建站、不做纯 App 开发、不做数据库迁移、不做纯 UI/UX。客户如果需要这些，我们介绍合作伙伴（合作分佣另议），但不自营。理由：低毛利 + 稀释品牌定位。

3. **不做非跨境电商 / DTC 垂直**
   不接 SaaS 企业服务客户、不接教育 / 医疗 / 金融客户、不接 B2B 工业客户。哪怕单价高也不做。理由：Phase 1 品牌认知必须锁死"跨境电商"心智，分散垂直 = 品牌失焦。

4. **不做 <¥10K 或 >¥500K 的项目**
   低于 ¥10K 的不接（获客成本高于毛利，建议客户用 ChatGPT Team / Zapier 自助）。高于 ¥500K 的 Phase 1 不接（超出 14 天交付能力，Phase 2 再考虑大客户模式）。

5. **不做 white-label / 贴牌**
   不给其他 AI 公司 / 咨询公司做贴牌交付。理由：品牌资产必须积累在 Shipwright 自己，不做别人的施工队。

6. **不做不透明定价 / "book a call"**
   所有 SKU 定价公开在官网。客户线索进来 30 分钟内能看到具体价格范围。反面教材：CC Strategic 官网全是"contact us"—我们正面打这个。

7. **不做 Credit 计费 / token 黑盒**
   AI 成本原价透传或 BYOK，不搞 "10 credits = 1 次调用" 这种换算游戏。反面教材：多数国内 AI SaaS 用 credit 包装利润—我们正面打这个。

---

## 7. 附录：一句话产品介绍（官网用）

- **Pilot Pod / 试航舱**：¥12,800 / 5 天，跑通一个 AI 场景，证明 ROI 后再决定要不要造整艘船。
- **Vibecoding Pod / 匠造舱**：¥58,000 / 14 天，交付一个完整业务闭环的 AI workflow，代码和 prompt 全部归你。
- **Fleet Integration / 舰队集成**：¥168K 起 / 21-28 天，把你散落在 8 个 SaaS 里的流程串成一个 AI 决策中枢。
- **Crew Retainer / 船员月租**：¥5,800/月 起，固定小时数 + 优先排期，省去你自己招 AI 工程师。

---

## 8. 待验证假设（提给阶段 C 市场验证）

1. ¥58K 的 SKU-02 定价对月 GMV ¥200K-¥2M 的国内跨境卖家是否"痛但能付"？需要 10 个目标客户访谈验证。
2. 14 天硬承诺的超期退款条款法律合规性（国内合同法 + 美国 Stripe 合同模板）需法务 review。
3. BYOK 模式下客户 API key 托管的安全合规（客户 key 不落我们数据库，只放 Cloudflare Secrets）需技术方案确认。
4. SKU-01 → SKU-02 转化率 45% 假设需要前 20 个客户跑完后校准。
5. Fleet Integration 的 21-28 天交付能力需要 Phase 1 前 3 单实测后再公开承诺（初期可能需延长到 35 天）。

---

**文档状态**：draft-v1，等待阶段 B spec 合成 + PM / 技术 lead / 销售 3 方 review。
**下一步**：
- 阶段 B 主 agent 合成 spec
- 法务起草 3 份标准合同模板（SKU-02 / SKU-03 / SKU-04）
- 官网 /pricing 页面做成这份文档的可视化版
