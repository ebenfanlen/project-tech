// 首页 8 条核心 FAQ (来自 UX Architect 文档 §3.9)

export interface FaqItem {
  q: string;
  a: string;
}

export const homepageFaq: FaqItem[] = [
  {
    q: "14 天真的能交付吗？如果延期怎么办？",
    a: "14 天是硬承诺，基于 follow-the-sun 双班团队 + Claude Code 3x 生产率 + 5 大场景预置 starter kits (70% 模板化) 三件事支撑。超期按 3% setup fee/天退款，最高退 30%。第 7 天 Mid-sprint Demo 是 go/no-go 决策点，不满意可协商阶段性交付 + 退款。",
  },
  {
    q: "代码和模型是我的吗？",
    a: "100% 是你的。所有 Agent 代码、Prompt、配置文件、部署脚本、数据看板源码，在 Day 14 交付时全部推到你的 GitHub 组织。我们不保留任何 backdoor、不锁 API、不收后续许可费。反 vendor lock 是核心卖点。",
  },
  {
    q: "BYOK (自带 OpenAI / Anthropic Key) 会便宜多少？",
    a: "Vibecoding Pod 的 Platform Fee 立减 20%，Fleet Integration 立减 25%。BYOK 模式下 AI 调用费直接由你付给模型厂商，我们不转售、不加 markup、不搞 credit 黑盒。大客户有自己采购流程的尤其推荐。",
  },
  {
    q: "和找一个外包公司有什么区别？",
    a: "三个根本区别：① 我们明码标价发在官网，不是 'book a call'；② 14 天硬交付 + 退款条款，不是模糊 '4-8 周'；③ 代码所有权 100% 给你，不是 '项目归我们维护'。我们是 vibecoding pod，不是外包，不做贴牌、不做纯咨询。",
  },
  {
    q: "我已经有技术团队，为什么还需要你们？",
    a: "你的团队擅长的是你的业务，我们擅长的是 Claude Code + AI agent + 5 大跨境电商场景的 starter kits (已经踩过坑)。用我们 14 天做完，再让你的团队接手维护 (Crew Retainer 可选)，综合成本比你自己从零搭便宜 60% 以上。",
  },
  {
    q: "交付后我自己能维护吗？",
    a: "能。Day 14 交付时你会拿到：① 全部源码 + CLAUDE.md + .claude/commands/ 配置；② 2h 培训录屏 + 操作手册 PDF；③ 60 天 bug 保修期。有自己的 Senior Dev 就能接手。如果不想自己维护，转 Crew Retainer (¥5.8K/月起) 即可。",
  },
  {
    q: "数据安全怎么保证？(跨境电商客户隐私)",
    a: "三层：① 客户数据不出境 (阿里云杭州 RDS，PIPL 合规)；② BYOK 模式下 API key 不落我们 DB (Cloudflare Secrets 托管)；③ 代码和 Prompt 100% 交付后我们保留备份 30 天后销毁。重点客户可签 DPA。",
  },
  {
    q: "失败了能退款吗？",
    a: "能。Vibecoding Pod 第一周 (Day 1-7) 可无理由终止，退 70% setup，已投入工时折算。Day 7 Mid-sprint Demo 不通过协商阶段性交付。Day 14 超期按 3%/天退款 (上限 30%)。反悔条款写在合同里。",
  },
];
