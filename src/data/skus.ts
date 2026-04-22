// 4 个 SKU 产品数据 · 单一数据源 (首页 + /pricing + 各 SKU 详情复用)

export interface SkuFeature {
  icon?: string;
  text: string;
}

export interface Sku {
  id: "pilot-pod" | "vibecoding-pod" | "fleet-integration" | "crew-retainer";
  slug: string;
  nameZh: string;
  nameEn: string;
  subtitle: string;                  // 一句话定位
  tagline: string;                    // Hero 用的更短 tagline
  priceCN: string;                    // 国内价格展示
  priceUS: string;                    // 海外价格展示
  duration: string;                   // 交付周期
  recommended?: boolean;              // 是否主推
  byokDiscount?: string;              // BYOK 折扣文案
  targetPersona: string;              // 目标客户一句话
  problem: string;                    // 解决什么问题
  features: SkuFeature[];             // 关键交付点
  cta: string;                        // CTA 文案
  ctaHref: string;
  accentColor: "signal" | "primary";  // 视觉强调色
}

export const skus: Sku[] = [
  {
    id: "pilot-pod",
    slug: "/pilot-pod",
    nameZh: "试航舱",
    nameEn: "Pilot Pod",
    subtitle: "5 天跑通一个 AI 场景，证明 ROI 再决定要不要造整艘船",
    tagline: "先试航，再造船",
    priceCN: "¥12,800",
    priceUS: "$2,400",
    duration: "5 个工作日",
    targetPersona: "月 GMV ¥50K-¥500K · 第一次接触 AI 的卖家",
    problem: "预算有限，想先花小钱看到真 ROI 数字再决定",
    features: [
      { text: "1 个 Claude Code 部署的 AI agent" },
      { text: "1 个平台集成 (Shopify / Meta / 小红书 三选一)" },
      { text: "1 份 SOP + 1 小时客户培训" },
      { text: "30 天 bug 保修" },
      { text: "60% 一次性抵扣升级 SKU-02" },
    ],
    cta: "Pilot 14 天 →",
    ctaHref: "/pilot-pod",
    accentColor: "signal",
  },
  {
    id: "vibecoding-pod",
    slug: "/vibecoding-pod",
    nameZh: "匠造舱",
    nameEn: "Vibecoding Pod",
    subtitle: "14 天交付一个完整业务闭环的 AI workflow · 80% 订单打这里",
    tagline: "14 天硬交付，代码 100% 归你",
    priceCN: "¥58,000",
    priceUS: "$8,500",
    duration: "14 天 (硬承诺)",
    recommended: true,
    byokDiscount: "BYOK −20%",
    targetPersona: "月 GMV $30K-$300K · 在 2+ 渠道同时运营的成熟卖家",
    problem: "老板承认招人堆不动了，要一次性把一个场景彻底打通",
    features: [
      { text: "3-5 个协作的 AI agent (主 + 工具 + 人工接管)" },
      { text: "3+ 个系统集成 (Shopify / Meta / Amazon / 小红书 /...)" },
      { text: "Human-in-the-loop (置信度 <80% 转人工)" },
      { text: "多语言 (中英 + 1 个小语种)" },
      { text: "数据看板 + 60 天 bug 保修 + 代码 100% 交付" },
      { text: "超 14 天按 3%/天退款, 上限 30%" },
    ],
    cta: "开始 14 天 →",
    ctaHref: "/vibecoding-pod",
    accentColor: "primary",
  },
  {
    id: "fleet-integration",
    slug: "/fleet-integration",
    nameZh: "舰队集成",
    nameEn: "Fleet Integration",
    subtitle: "把你散落在 8 个 SaaS 里的流程串成一个 AI 决策中枢",
    tagline: "多系统 AI 编排中枢",
    priceCN: "¥168K-¥298K",
    priceUS: "$24.8K-$42K",
    duration: "21-28 天",
    byokDiscount: "BYOK −25%",
    targetPersona: "月 GMV $200K-$1M · 卡在中型天花板 / 8+ SaaS 工具的品牌",
    problem: "系统之间的胶水工作每天 4 小时以上，差评进来需要在 3 个系统里手查",
    features: [
      { text: "主控 Agent + 6-10 工具 Agent 架构" },
      { text: "5-8 个 SaaS 集成 (按客户 stack 定制)" },
      { text: "中央数据层 (Supabase / 客户 DB / Airtable)" },
      { text: "Shipwright 自研 orchestration 层" },
      { text: "2 自定义看板 + 异常预警机器人 (飞书/Slack)" },
      { text: "1 个月陪跑 + 90 天 bug 保修 + 架构文档全交付" },
    ],
    cta: "排一次 30 分钟诊断 →",
    ctaHref: "/contact",
    accentColor: "primary",
  },
  {
    id: "crew-retainer",
    slug: "/crew-retainer",
    nameZh: "船员月租",
    nameEn: "Crew Retainer",
    subtitle: "船造完了，船员留下继续开 · 按月订阅省一个全职 AI 工程师",
    tagline: "月度续费引擎",
    priceCN: "¥5.8K-¥22.8K/月",
    priceUS: "$880-$3,480/月",
    duration: "月度循环",
    targetPersona: "已购 SKU-02/03 交付满 3 个月 · 持续 AI 需求",
    problem: "不想自己招全职 AI 工程师 (国内至少 ¥35K/月 + 五险一金)",
    features: [
      { text: "三档 (轻量 20h / 标准 40h / 深度 80h 每月)" },
      { text: "bug 修复 + Prompt 优化 + 模型切换" },
      { text: "新场景小改 + 看板新增指标 + 应急响应" },
      { text: "7×12 中文 IM 4h 内响应 (飞书/企微/钉钉)" },
      { text: "月度 review + 季度 roadmap 会" },
      { text: "预付 12 月 -12% + 锁价 1 年" },
    ],
    cta: "了解 Retainer →",
    ctaHref: "/crew-retainer",
    accentColor: "primary",
  },
];
