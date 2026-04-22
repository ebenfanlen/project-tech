---
date: 2026-04-22
stage: B
type: spec
status: awaiting-approval
depends_on:
  - docs/superpowers/specs/2026-04-22-stage-a-brand-positioning-design.md
  - docs/research/2026-04-22-product-services-matrix.md
  - docs/research/2026-04-22-seo-keyword-matrix.md
next_stage: C (视觉识别系统 / Logo / VI)
---

# 阶段 B：产品服务与解决方案设计（Shipwright / 船匠）

> 本 spec 负责锁定：**产品线（SKU）、定价模型、14 天交付方法论、SEO/内容引擎**。
> 不负责视觉、文案细节、网站结构——这些留给阶段 C / D。
> 所有决策必须服务阶段 A 锁死的 3 个前提：**跨境电商 DTC 垂直 / 阶段 1 国内优先 / 「别堆人，造船。」**

---

## 1. 本阶段要决定的 7 件事

| 编号 | 决策项 | 默认方向 | 是否允许微调 |
|---|---|---|---|
| B-1 | 产品线与命名 | 4 个 SKU，全部沿用 maritime 词族（Pod / Pod / Fleet / Crew） | 命名可微调 |
| B-2 | 定价结构 | 三段式：Setup + Platform Fee + AI Pass-through / BYOK | **结构不可动**，数字可调 |
| B-3 | 14 天硬承诺 | Day-by-day 里程碑 + 超期 3%/天退款（上限 30%） | 超期条款可调 |
| B-4 | Phase 1 主推 SKU | SKU-02 Vibecoding Pod（¥58K / $8.5K） | — |
| B-5 | SEO 战略 | 百度优先 / 中文内容 / 4 pillar cluster / SEOMachine 全流水线 | 执行节奏可调 |
| B-6 | 反模式（我们不做什么） | 7 条产品反模式 + 5 条 SEO 反模式 | 增不减 |
| B-7 | 进入阶段 C 的前置条件 | 本 spec 通过 + 域名初检 + 3 份合同模板需求单 | — |

---

## 2. 产品线锁定（B-1）

### 2.1 4 个 SKU 总览

| SKU | 中英文名 | 定位 | 国内价 | 海外价 | 交付周期 | 年订单占比目标 |
|---|---|---|---|---|---|---|
| SKU-01 | Pilot Pod / 试航舱 | 入门款（钩子） | ¥12,800 | $2,400 | 5 天 | 25% |
| SKU-02 | **Vibecoding Pod / 匠造舱** | **主推款** | ¥58,000 + ¥2,400/月 | $8,500 + $350/月 | **14 天硬承诺** | **55%** |
| SKU-03 | Fleet Integration / 舰队集成 | 高阶款 | ¥168K–¥298K + ¥5,800/月 | $24.8K–$42K + $850/月 | 21–28 天（见 §5） | 5% |
| SKU-04 | Crew Retainer / 船员月租 | 月度续费 | ¥5.8K / ¥11.8K / ¥22.8K/月 | $880 / $1,780 / $3,480/月 | 月度循环 | 15%（独立计） |

**命名一致性审核**：Pod（小型作战单元）/ Fleet（舰队）/ Crew（船员）全部与品牌 Shipwright（船匠）同构，通过。

### 2.2 SKU-02 Vibecoding Pod 的 5 个场景锁

为了让 14 天硬承诺物理上可行，SKU-02 必须锁死在 5 个预置场景之一，**不做场景自由组合**：

| 代号 | 场景 | 目标客户标志 |
|---|---|---|
| V-CS | 全渠道 AI 客服中枢 | 月客服量 500+ |
| V-SEO | Listing 批量生成 + 多语言 | 月上新 50+ SKU |
| V-AD | TikTok/Meta 投放素材 + 回流分析 | 月投放 $10K+ |
| V-CONTENT | 小红书 / TikTok 内容日历 + 脚本 | 依赖 UGC/KOC 品牌 |
| V-OPS | 订单 / 物流 / 退款异常分诊 | 日订单 50+ |

**决策**：每个场景维护一套 starter kit（Agent 架构 + API 集成 + Prompt 库 + 看板组件），是 14 天能兑现的关键。跨场景客户走 SKU-03。

### 2.3 待解锁的命名微调点（用户可选）

- **"Vibecoding Pod" vs "Shipwright Pod" vs "14-Day Pod"** — 目前暂定 Vibecoding，但该词在国内搜索量待 DataForSEO 验证（见 SEO 文档 §1.1 #13）。**建议**：对外（国内）用「匠造舱」为主，英文保留 Vibecoding 作技术圈关键词。
- SKU-03 中文名「舰队集成」vs「船队集成」— 保留「舰队」，更专业感。

---

## 3. 定价结构锁定（B-2）

### 3.1 三段式公式（不可动）

```
客户月度总支出 =
    Setup Fee（一次性，首月摊销）
  + Platform Fee（月度固定，可随时取消）
  + AI Cost Pass-through（按量，原价透传 + 可选 10% 管理费 或 BYOK -20~25% platform fee）
```

### 3.2 定价哲学硬规则

1. **官网全部定价公开**。线索进站 30 秒内能看到具体数字区间，反 CC Strategic 的 "book a call"。
2. **BYOK 必选项**。客户自带 API key → platform fee 立减 20%（SKU-02）/ 25%（SKU-03）。反 MindStudio-lite 的隐性 markup。
3. **反 Credit 计费**。永远不用「10 credits = 1 次调用」这种换算。AI cost 明细月度账单透明化。
4. **国内 ¥ 报价 ≈ 美元 × 6.8**（而非 7.0），隐含 3% 折扣，反映国内获客成本 + 收款周期优势，不是议价空间。
5. **阶梯折扣**：预付 3 月 -5% / 预付 12 月 -12% + 锁价（仅适用 Platform Fee + Retainer）。

### 3.3 BYOK 安全托管方案（**本 spec 遗留问题 → 阶段 D 必须落地**）

- **红线**：客户 API key **绝不**落 Shipwright 数据库
- **默认方案**：Cloudflare Workers Secrets + 客户独立 Worker 实例（每客户一个 namespace）
- **备选方案**：客户自建 Cloudflare 账号 + 我们托管代码（key 对我们不可见）
- **决定人**：阶段 D 技术 lead 在架构评审时二选一，需法务 review

---

## 4. 14 天交付方法论（B-3）

### 4.1 Day-by-Day 骨架（SKU-02 Vibecoding Pod 标准版）

| 日 | 阶段 | 可验收产物 |
|---|---|---|
| D1 | Discovery Kickoff | 业务流程图 + 技术 stack 清单 |
| D2 | 需求细化 | PRD v1（含验收标准 + 异常路径） |
| D3 | 技术方案 + Prompt v1 | 架构图 + Agent 分工 + API 权限清单 |
| D4 | 开发启动 | Repo + CI/CD + 首个 agent 骨架 |
| D5 | 核心 Agent | 主 agent staging happy path |
| D6 | 集成 | 2+ 外部 API 集成 + 单测 |
| **D7** | **Mid-sprint Demo** | **真实数据跑通 demo**（**go/no-go 决策点**） |
| D8 | Human-in-the-loop | 人工接管逻辑 + 工单模板 |
| D9 | 多语言 + 边界 | 多语言测试 + 10+ 边界 case |
| D10 | 数据看板 | 看板 v1 部署 staging |
| D11 | UAT 启动 | 客户在 staging 跑 48h 真实业务 |
| D12 | UAT bug fix | Bug 全 close 或 defer（客户签字） |
| D13 | 生产部署 + 培训 | 上线 + 培训录屏 + 操作手册 |
| D14 | Handoff | 代码交付客户 org + 运维手册 + 保修合同 |

### 4.2 为什么能做到（可公开话术）

1. **Follow-the-sun 物理事实**：北京早班 + 深圳/东南亚晚班 = 16h/天
2. **Claude Code 3x 生产率**（内部 benchmark 数据，Phase 1 收集 20 个项目实测后对外发布）
3. **5 大场景 starter kits 70% 模板化**（Shipwright 核心资产，不开源）
4. **PM 强控 scope**（D2 PRD 签字后新需求入 Retainer 排期）

### 4.3 超期退款条款

- **规则**：超 D14 按 **3% setup fee / 天** 退款，上限 30%
- **触发例外**：客户方原因延误（API 权限未开 / UAT 不配合）暂停计时，需双方签字
- **遗留问题 → 阶段 D 启动前必须解决**：国内《合同法》合规 + 美国 Stripe 合同模板的超期条款用词，需法务起草 3 份标准模板（SKU-01 / SKU-02+04 合并 / SKU-03）

### 4.4 SKU-03 对外口径调整（**决策**）

Product PM 文档建议 SKU-03 对外公开为 "21–28 天"，但**本 spec 决策**：Phase 1 前 3 个 SKU-03 实单对外口径为 **"≤35 天"**，内部硬承诺 28 天。前 3 单实测跑完后（预计 2026-Q4），再决定是否把官网承诺升级到 28 天硬 / 21 天硬。原因：保留 buffer 不砸 14 天品牌资产。

---

## 5. SEO / 内容引擎锁定（B-5）

### 5.1 战略方向

1. **百度优先（Phase 1）** — 中文跨境 AI 服务 SEO 是结构性空白，CC Strategic / Liam Ottley 等英文内容无中文版，抢占窗口期（2026-05 ~ 2027-04）
2. **4 个 Pillar Cluster** — 拓扑如下（详见 SEO 文档 §3）：
   - Pillar 1：《跨境电商 AI 自动化完整指南》（核心流量 pillar）
   - Pillar 2：《Shopify 自动化定制开发指南》
   - Pillar 3：《TikTok Shop + 跨境自动化手册》（2026 增量池）
   - Pillar 4：《AI Agent + Claude Code 落地方法论》（品牌 pillar，对应 SKU-02/03 高客单）
3. **SEOMachine 作为内容生产流水线**（`/research` → `/write` → `/optimize`）— 见 §6
4. **一稿多投矩阵**：主站 + 百家号 + 知乎（百度 SERP 占位强）+ 小红书（长尾 + 品牌）+ 微信公众号（微信指数 → 百度索引）

### 5.2 关键词矩阵锁定

- Phase 1 中文 40 个核心 KW（14 Top + 12 Mid + 14 Bottom），详见 `docs/research/2026-04-22-seo-keyword-matrix.md` §1.1
- Phase 2 英文 12 个种子词预留（详见同文档 §1.2）
- **本 spec 决策**：40 个中文 KW 必须在阶段 D 上线前用 DataForSEO API 完整校准一次，产生 v2 关键词文档

### 5.3 12 月发布节奏（锁定）

| 月 | Pillar | Supporting | 百家号 | 知乎回答 | 小红书 |
|---|---|---|---|---|---|
| M1–2 | 1 | 6 | 6 | 12 | 40 |
| M3–12 | 每月 1 | 每周 3 | 12/月 | 20/月 | 60/月 |
| **12M 累计** | **12** | **~145** | **~135** | **~230** | **~640** |

### 5.4 首年 KPI 假设（承压目标）

| 指标 | 目标 |
|---|---|
| Month 4 | 首个 organic lead（百度 + 知乎混合流量） |
| Month 12 月 organic sessions | 20K–28K（百度主导 ~90%） |
| Month 12 月 organic leads | 40–70/月 |
| Session → 付费客户 | 0.126%（业界 B2B 服务中位数偏上） |
| 12 月累计签约额 | ¥800K–¥1.2M |
| 内容 ROI | 10–15x |

**注**：这些是**努力目标**，非合同承诺。阶段 D 上线后月度复盘校准。

---

## 6. SEOMachine 集成计划（与任务 #5 合并）

### 6.1 集成目标

把 SEOMachine（github.com/TheCraigHewitt/seomachine，MIT，6.6K stars）作为 Shipwright 的内容运营引擎，**自用 + 产品化双用途**：

- **自用**：给 Shipwright 官网产出 12 pillar + 145 supporting 中文内容
- **产品化**：打包成 SKU-02 V-SEO / V-CONTENT 场景的 starter kit 一部分卖给客户（作为内容生成 agent 的一个组件）

### 6.2 集成动作（阶段 D 执行）

1. Fork SEOMachine 到 `shipwright-org/seomachine-cn`，加中文本地化（Prompt 模板翻译 + 百度关键词 API 适配）
2. 替换 Google Search Console 单一数据源 → **加入百度站长平台 API + 5118 API + 百度指数爬取**
3. 替换 DataForSEO 为可选数据源 — 国内成本高，优先用 5118 / 爱站作主数据源 + DataForSEO 做海外对标
4. 增加 `/optimize-baidu` 子命令：检查百度专属元素（meta `applicable-device`、MIP 适配、主动推送 API、百家号卡片）
5. 内网部署：Shipwright 自己的 Claude Code workspace 里 `.claude/commands/` 装载 SEOMachine 命令
6. 产出 Shipwright 内部 Playbook：SEOMachine 如何喂 40 个核心 KW → 如何批产 145 篇 supporting → 人工编辑 SOP

### 6.3 自己的 Claude Code workspace 建设

Shipwright 主仓库（阶段 D 创建）需要：
- `.claude/commands/` 装 SEOMachine 派生命令
- `.claude/agents/` 装 5 大场景 starter kit agents
- `CLAUDE.md` 写 Shipwright 的 coding standards + 品牌声音
- 这个仓库本身也是**对外 dogfooding 证据**（可公开部分在 GitHub，私有 starter kit 不开源）

---

## 7. 反模式锁定（B-6）

### 7.1 产品反模式（7 条）

1. 不做纯咨询 / PPT 交付（必须交付可运行代码）
2. 不做无 AI 元素的普通开发（纯 Shopify 建站、纯 App、纯 UI/UX）
3. 不做非跨境电商 / DTC 垂直
4. 不做 <¥10K 或 >¥500K 的项目（Phase 1）
5. 不做 white-label / 贴牌
6. 不做不透明定价 / "book a call"
7. 不做 Credit 计费 / token 黑盒

### 7.2 SEO 反模式（5 条）

1. 不买黑链 / PBN / 镜像站
2. 不堆砌 AI 垃圾内容（pillar 100% 人工编辑，supporting 抽查 30%）
3. 不做非跨境电商主题的内容农场
4. 不做关键词堆砌 / Cloaking / Doorway pages
5. 不为短期排名妥协品牌调性（拒绝"月入 10 万"、"AI 黑科技"标题党）

---

## 8. 转化漏斗与核心指标（B-4 延展）

### 8.1 SKU 间的自然流转

```
Pilot Pod (¥12.8K) ──60% 折抵──→ Vibecoding Pod (¥58K + ¥2.4K/月)
                                     │
                            ┌────────┼────────┐
                            ▼        ▼        ▼
                       Crew Retainer  │   Fleet Integration
                       (¥5.8K+/月)    │   (¥168K+/月)
                                      │
                                 (20% 客户不升级
                                  → case study + 口碑)
```

### 8.2 转化目标（内部北极星）

- SKU-01 → SKU-02：**45%**
- SKU-02 → SKU-04：**60%**（交付后 3 个月）
- SKU-02 → SKU-03：**15%**
- SKU-04 12 月留存：**70%**

### 8.3 官网客服入口（从用户 Message 5 延续）

- 右下角 live chat widget
- 留资进后台（简单 CRM）
- **在线客服首句话默认 CTA**：「30 分钟免费 AI 诊断」→ 对应 SKU-01 漏斗顶
- 技术选型待阶段 D：自建（Claude Code + 小红书/飞书 webhook）vs 套件（Tawk.to / Crisp 接 Claude API）

---

## 9. 决策移交单

### 9.1 移交给阶段 C（视觉识别系统）

- SKU 命名（Pilot Pod / Vibecoding Pod / Fleet Integration / Crew Retainer）必须在视觉上反映 maritime 主题
- Logo 需支持与 4 个 SKU 的图标变体同源（比如船 / 舰队 / 舰桥 / 船员抽象化）
- 主视觉色建议（仅建议，阶段 C 定夺）：深海蓝 + 工艺感米白 / 暖灰 / 一抹警示橙（用于 14 天 timer）
- 不要卡通化、不要 SaaS 那种花花绿绿渐变、不要 AI 公司陈词的紫粉配色

### 9.2 移交给阶段 D（网站 / 开发 / SEO）

- `/pricing` 页必须可视化呈现本 spec §2.1 表格
- `/how` 页必须可视化呈现 14 天 day-by-day 方法论（§4.1）
- `/cases`、`/blog` 必须从 Day 1 有真内容（反 CC Strategic 404 case-studies 漏洞）
- 三语结构：简中（主）/ 繁中（Phase 2）/ 英文（Phase 2），子目录 `/zh-tw/`、`/en/` + hreflang
- Live chat widget + 简单 CRM（阶段 D 技术选型）
- SEOMachine 部署 + 本地化 fork
- 三语之外不做更多语种（反拖累）

### 9.3 法务 / 商务侧（阶段 D 启动前必须到位）

1. 3 份标准合同模板：SKU-01 短约 / SKU-02+04 主约 / SKU-03 高阶约
2. 14 天超期退款条款合规性（国内合同法 + 美国 Stripe）
3. BYOK 场景客户 API key 托管协议
4. ICP 备案主体（shipwright.cn 备案公司实体）
5. 开票资质 + 对公账户

---

## 10. 待验证假设（Phase 1 上线后 3 个月校准）

| # | 假设 | 校准方式 |
|---|---|---|
| A-1 | ¥58K SKU-02 对月 GMV ¥200K-¥2M 国内卖家是"痛但能付" | 10 个目标客户访谈 |
| A-2 | SKU-01 → SKU-02 45% 转化 | 前 20 个 Pilot 客户跑完 |
| A-3 | 14 天硬承诺交付可持续 | 前 10 个 SKU-02 项目的实际交付天数 |
| A-4 | 百度 SEO 4 个月出首个 lead | Month 4 流量报表 |
| A-5 | 40 个 KW 估算搜索量准确度 | DataForSEO API 复核 |
| A-6 | SKU-03 对外 35 天 vs 承诺 28 天 | 前 3 单 Fleet 实测 |
| A-7 | BYOK 客户占比 | Phase 1 前 6 月订单分析 |

---

## 11. 本 spec 的明确"不定"清单（防止越界）

本 spec **不定**以下事项（留给阶段 C/D）：

- ❌ 视觉 / 品牌图形 / 配色 / 字体（阶段 C）
- ❌ 网站信息架构 / 页面数 / 组件设计（阶段 D）
- ❌ 技术栈（Next.js vs Astro vs Nuxt）（阶段 D）
- ❌ 部署平台（Vercel vs Cloudflare Pages vs 阿里云）（阶段 D）
- ❌ 具体 Claude 模型版本选型（阶段 D 启动时锁）
- ❌ 团队构成 / 工时报价 / 成本结构（商务私密文档）
- ❌ 详细合同条款（法务模板文档）

---

## 12. 通过条件

本 spec 通过后，主 agent 立即进入阶段 C：视觉识别系统设计（Logo + VI + 启动网站视觉设计）。

**通过条件检查清单**：
- [ ] 用户 review 本 spec 并确认
- [ ] SKU 命名（尤其 Vibecoding Pod 中文名）最终确定
- [ ] 4 个 Pillar 选题方向用户认可
- [ ] 14 天硬承诺 + 超期退款接受（法务待办单进入 todo）
- [ ] SEOMachine 集成计划（§6）用户认可
- [ ] 本 spec 合并到主分支，提交给阶段 C 作为前置文档

---

## 相关文件

- 阶段 A spec：`docs/superpowers/specs/2026-04-22-stage-a-brand-positioning-design.md`
- 竞品调研：`docs/research/2026-04-22-competitive-landscape.md`
- 产品服务矩阵（完整版）：`docs/research/2026-04-22-product-services-matrix.md`
- SEO 关键词矩阵（完整版）：`docs/research/2026-04-22-seo-keyword-matrix.md`
