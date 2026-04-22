---
stage: A
topic: 市场研究与品牌定位
date: 2026-04-22
status: draft-awaiting-user-review
next_stage: B (产品服务与解决方案设计)
---

# 阶段 A · 市场研究与品牌定位 Spec

## 0. Executive Summary

一家 Claude Code-native 的 AI 技术服务工作室，对外身份 **Shipwright / 船匠**，专注 **跨境电商 / DTC 品牌** 垂直。核心承诺：**14 天交付一支 AI pod，flat-rate 透明定价**。Phase 1 主打国内市场（独立站 / 亚马逊 / TikTok Shop 中小卖家 + 中国出海品牌），Phase 2 自然延伸到欧美 Shopify DTC。主 tagline：**"别堆人，造船。" / "Don't hire. Ship."**。品牌人格：**工匠派**（Linear / 37signals 气质）为主，注入 **极客派** 的交付证据感（trace、架构、源码）。

---

## 1. 市场机会与时机（压缩）

- SMB AI 使用率：2024 年 40% → **2026 年 58%**；自动化采用率 22% → 38%
- Gartner 预测：2027 年 100 人以下企业 **65%+** 将使用至少一个 AI workflow 工具
- Anthropic 2026-04-08 发布 Claude Managed Agents，官方承认"构建生产级 agent 需 3-6 个月"——市场教育成本被权威方代付
- 跨境电商卖家在 TikTok Shop / 多站点扩张后普遍面临"人招不起、工具拼不齐"，**窗口期在 2026-2027**

完整数据见 `docs/research/2026-04-22-competitive-landscape.md`。

---

## 2. 竞争格局（快照）

- **CC Strategic**：横向 SMB boutique，dual-audience 首屏分叉，但 `/blog` `/case-studies` **404**——内容资产空白
- **NextAutomation**：14 天部署、$5K 起步透明——最接近我们的模式但不做垂直
- **Liam Ottley / Nick Saraev / LeftClick**：Solo IP + Skool 社群打法，模式强但属于个人品牌，不适合团队
- **Lindy / Relevance AI / CrewAI / MindStudio**：平台型，Credit 计费或 No-code 局限

**我们的差异化结构**：
1. 唯一一家明确锁定 **跨境电商垂直**
2. 唯一一家 **订阅化定价**（仿 MindStudio）而非 CC 式项目 flat-rate
3. 唯一一家把"内容资产空白"作为攻击目标（用 SEOMachine 自己打自己）
4. 唯一一家明确 **14 天硬承诺** + 透明价目表（不是"Book a call"）
5. **Claude Code-native**（不是 n8n/Zapier 重包）——基础设施代差

---

## 3. 核心定位决策

### 3.1 垂直锁定：跨境电商 / DTC 品牌（Phase 1 国内 → Phase 2 海外）

**选择理由**：这是 9 个候选垂直中**唯一一个"国内客户 = 海外客户"的同构垂直**——国内跨境卖家的痛点（多语言客服、listing 优化、广告文案批量、评论分析、ERP 同步）和海外 Shopify DTC 完全重合，Phase 1 跑通的 workflow 几乎不改逻辑能卖给 Phase 2。

### 3.2 Phase 分期

| Phase | 时间 | 主市场 | 目标 |
|-------|------|--------|------|
| **Phase 1** | 2026-05 ~ 2027-04 | 中国大陆（简中） | 12 个月内 3-5 个标杆案例；月度稳定营收 ¥100-300K；SEO 月搜索排名前 3 占位 5 个关键词 |
| **Phase 2** | 2027-05 起 | 欧美（英文）+ 港台（繁中） | Shopify App Store 上架 / Product Hunt 发布 / 欧美第一批 10 个付费客户 |

### 3.3 五条差异化主轴（全部要在网站首屏 3 秒内可见）

1. **14 天交付** — 硬承诺，违约退款
2. **Flat-rate 透明** — 价目表上墙，不 Book a call
3. **Claude Code-native** — 架构事实，不是营销修辞
4. **跨境电商原生** — 所有案例 / 文案 / 选题全部围绕此垂直
5. **Dogfooding 可见** — SEOMachine / Chat widget / CRM 后台就是我们给自己搭的样板间

---

## 4. ICP（Ideal Customer Profile）

### Phase 1 · 国内 ICP

**公司画像**
- 独立站（Shopify / Shopline / 店匠）月 GMV **¥50K-$300K**
- 亚马逊精品卖家（非铺货，FBA 为主）
- TikTok Shop 美区 / 东南亚新卖家（2025-2026 入场）
- 中国出海品牌早期形态（3-30 人团队，Anker 早期/SHEIN 子品牌风格）

**决策人**
- 创始人 / 合伙人（一号位亲自拍板）
- 年龄 28-42，英文可读写但不深
- 痛点词：人不够用、运营成本高、多语言客服拉胯、广告 ROI 波动大、ERP 拼不齐

**决策链 & 预算**
- 决策周期 **1-2 周**（非企业 IT 采购流程）
- 愿意为**确定性结果**支付 ¥5K-30K/月订阅
- 极度排斥"PPT 顾问 + 咨询费"模式，要看到交付物

### Phase 2 · 海外 ICP（同构延伸）

- Shopify DTC brand $10K-$1M/mo GMV
- 海外华人电商创业者（北美 / 东南亚 / 澳新）
- 港台中小跨境品牌（繁中市场切入）

### 非 ICP（明确拒绝）

- 铺货型大卖家（需求是"堆量"而不是"提质"）
- 企业级客户（决策链长、SOC 2 未就绪前不触碰）
- 本地生活 / 服务业 SMB（CC Strategic 的地盘，不正面冲突）
- 想要"定制大模型训练"的客户（超出 Claude Code-native 能力边界）

---

## 5. 品牌身份

### 5.1 公司命名

**主品牌**：**Shipwright** / **船匠**

**中文名**：船匠（chuán jiàng，2 字，匠人气质）

**命名角度**：Craft × Maritime 双关
- `ship` 在软件语境 = 交付（"ship it"）
- `ship` 在电商语境 = 发货
- `-wright` = 造物匠人（playwright / wheelwright）
- 中文"匠"承接手艺人身份

**备选**（若主选遇域名不可得或商标冲突）：
1. **Fourteen / 拾肆**（14 天直接做成品牌资产）
2. **Kiln Labs / 窑厂**（高温一次成型的手艺叙事，适合做方法论品牌 "Kiln Method"）

**明确拒绝**：
- **Tidepod / 潮舱**（Tide Pods 是宝洁洗衣凝珠，Phase 2 海外笑场）
- **Cargo Studio**（语义过拥挤，且 Cargo 是 Rust 包管理器）

**域名策略**（待注册验证）：
- 一级候选：`shipwright.ai` / `shipwright.studio`
- 二级候选：`shipwright.team` / `tryshipwright.com` / `shipwright.work`
- `shipwright.io` 是 CNCF K8s 项目但非品牌占位（语义不冲突）

### 5.2 主 Tagline（中英对照做 hero）

> **别堆人，造船。**
> **Don't hire. Ship.**

**为什么**：
- 中文六字可 T 恤化，对标 CC "Don't scale on effort. Scale on systems." 的句式但不抄
- 英文三词双关（ship software / ship orders），与中文同构（Don't X. Y.）
- 精准踩中跨境卖家的"招人焦虑"（他们最近在纠结要不要再招一个运营）

**次 tagline 素材**（用于 meta description / 广告 / 社媒签名）
- 中文："我们接单，agent 干活，你收货。"
- 英文："You sell. Agents ship. We build the dock."
- 身份锚："船匠。不是 agency，不是 SaaS。" / "Shipwrights for modern commerce."

### 5.3 品牌人格

**主调：工匠派（Craftsman）**
- 语言：**"接活、造物、交付、签收"**——动词驱动，不吹形容词
- 气质：Linear / Basecamp / 37signals / Vercel 的克制版
- 声音 sample（About 页参考文案）：
  > 我们是一支 pod。接活、造物、交付、签收。每个项目 14 天从零到上线。代码我们写、agent 我们调、SOP 我们留给你。不做顾问，不卖许可证。

**副调：极客派（Geek）证据感（10% 注入）**
- 只出现在技术博客 / 案例页 / Changelog / GitHub README
- 内容：Claude Skills 源码、agent trace、架构剖面图、latency 指标、成本账本
- 目的：给付费老板一个技术锚点（他们不看细节但知道"这伙人是真的"）

**明确拒绝：船长派（Captain）**
- CC Strategic 和大部分 cross-border agency 都在占这个位（"我们掌舵 AI 这艘船"）
- 视觉上"海军蓝 + 铜金 + 罗盘"已烂大街
- 我们占"造船的人"的位，不是"开船的人"

### 5.4 品牌反模式（8 条 Don'ts）

1. ❌ 不做紫色 / 青色 / 粉色 gradient（AI agency 视觉尸体）
2. ❌ 不用"赋能 / 转型 / 重塑 / 打造 / 智能化 / 数字化"动词（除非引用客户原话）
3. ❌ 不把 "Book a call" 作为主 CTA——主 CTA 是"看价格"或"看 14 天流程"
4. ❌ 不用"多元团队对着笔记本笑" stock photo——放真实 agent trace / 自家 SEOMachine 后台
5. ❌ 不用 "AI-powered" 前缀式文案——我们说 "Claude Code native"（架构事实）
6. ❌ 不复制 Liam/Nick 个人 IP 短视频打法（团队品牌 ≠ personal guru）
7. ❌ 不出现 "解决方案" 三字（办公室 BGM 级死词）
8. ❌ 不把 logo 做成机器人头 / 大脑 / 神经网络节点（默认丑）——用字标或抽象船体剪影

---

## 6. Voice & Tone

### 语言原则
- **动词 > 形容词**：说"我们做了什么"和"交付了什么"，不说"我们是什么"
- **数字 > 承诺**：14 天、¥XX/月、X 个 agent、Y 个 skill——能数的都数
- **引用 > 推断**：客户原话、Git 提交、trace 截图胜过任何营销措辞
- **自嘲 > 自吹**：做不到的事情承认做不到；行业套路公开吐槽

### 中英文差异
- 中文口语化但不轻浮（参考宝玉 / 36氪早期 / Linear 中文文档气质）
- 英文直白但不粗俗（参考 Stripe docs / Basecamp / Anthropic Docs）
- **不追求"一句翻两种语言"**——同一内容在中英两种上下文里可以叙事不同但品牌气质一致

---

## 7. 视觉方向提示（交接给阶段 C）

> 非阶段 A 的产物，仅作为下一阶段的边界约束。

- **色彩基底**：米白（#F8F5EE / #FAFAF7 类）+ 墨黑（#1A1A1A / #0F0F0F 类），**单点警示橙** 作强调色（#FF6B00 类）——拒绝 gradient
- **字体**：衬线标题（思源宋 / Fraunces / IBM Plex Serif）+ 无衬线正文（思源黑 / Inter）+ 等宽技术区（JetBrains Mono / IBM Plex Mono）三族混排
- **图形语言**：技术蓝图 / 机械剖面 / 船坞图纸 / ASCII / agent trace 可视化
- **Hero 动画**（用户明确要求）：不做炫技粒子；考虑 **"14 天时间轴动画"** 或 **"agent 实时运行 trace 流"** 或 **"船体剖面逐步组装"** 三选一（阶段 D 定）
- **Logo 初步构想**：字标（Shipwright wordmark）+ 一个抽象船体剪影 / 龙骨线（ship rib）符号
- **拒绝**：机器人头、大脑、神经网络节点、电路板、渐变光晕、AI 生成感女性肖像

---

## 8. 阶段 B 衔接清单（带到下一个 spec）

阶段 A 已锁定的，阶段 B 必须遵守：
- 垂直 = 跨境电商 DTC
- Phase 1 国内、Phase 2 海外
- 14 天硬承诺 + 订阅化 flat-rate
- Claude Code-native 技术栈
- Dogfooding 原则（我们用的 = 我们卖的）

阶段 B 需要决策的（此处仅列题不决策）：
1. 服务目录（SKU 清单）及每项定价
2. 定价模型细节：platform fee + pass-through AI cost 还是纯订阅？BYOK 选项？
3. 起步产品化标品：AI Content Engine（SEOMachine fork）是否作为"首发 SKU"
4. Chat Widget + 轻 CRM：内部工具 还是 可交付产品？两用？
5. 案例/内容的起步选题（跨境电商关键词矩阵）
6. 14 天交付的里程碑模板（M1/M2/M3 做什么）

---

## 9. 审批请求

**本 spec 请重点复审的 3 个决策点**（按影响力排序）：

1. **公司名 Shipwright / 船匠** — 如不认可，我会切到备选 Fourteen / 拾肆 或 Kiln Labs / 窑厂
2. **垂直锁定跨境电商 DTC** — 如想改，需要整个 spec 重写
3. **Phase 1 国内 / Phase 2 海外** — 如想 Phase 1 直接出海，市场优势分析会变化

**其他内容**（tagline、人格、反模式、视觉提示）非不可替换，可随实施微调。

---

## 10. 附录 · 决策溯源

- Vertical 选择过程见会话上下文（9 候选垂直四维评估表）
- 同类公司调研见 `docs/research/2026-04-22-competitive-landscape.md`
- 命名备选权衡见上文 5.1 + Brand Guardian 原始输出（保留在会话上下文，未单独落盘）
