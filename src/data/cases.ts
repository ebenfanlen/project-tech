// 首页 featured case 数据 (来自 Product PM 的故事 A-E 脱敏版)

export interface HighlightCase {
  slug: string;
  clientHandle: string;
  industry: string;
  gmvBand: string;
  sku: string;
  scene: string;
  problem: string;
  hook: string;        // 一句话核心数字改善
  kpis: Array<{ label: string; before: string; after: string }>;
  quote?: { text: string; attribution: string };
  renewal?: string;
}

export const featuredCases: HighlightCase[] = [
  {
    slug: "lumesque-ig-dm",
    clientHandle: "某深圳跨境美妆独立站",
    industry: "美妆 · 独立站",
    gmvBand: "月 GMV ¥80 万",
    sku: "Vibecoding Pod",
    scene: "V-CS",
    problem: "3 个客服轮班回 IG DM + 邮件 + chat，响应时长平均 14h，差评率 4.2%",
    hook: "IG DM 响应从 14h 降到 11 分钟",
    kpis: [
      { label: "IG DM 自动解决率", before: "0%", after: "63%" },
      { label: "平均响应时长", before: "14h", after: "11min" },
      { label: "差评率", before: "4.2%", after: "2.8%" },
    ],
    quote: {
      text: "第 2 周就开始省人力了。第 3 周直接续了 Vibecoding Pod 全渠道版。",
      attribution: "某美妆 DTC 创始人 · L",
    },
    renewal: "升级到 V-CS 全渠道 Vibecoding Pod (¥58K)",
  },
  {
    slug: "nordic-nest-listing",
    clientHandle: "某杭州 Amazon + Shopify 家居品牌",
    industry: "家居 · Amazon+独立站",
    gmvBand: "月 GMV $120K",
    sku: "Vibecoding Pod · V-SEO",
    scene: "V-SEO",
    problem: "月上新 80 SKU，3 个兼职写手手写 listing，美国站 listing 断档 2 周",
    hook: "月产 listing 从 80 条 → 240 条",
    kpis: [
      { label: "月产 listing 条数", before: "80", after: "240" },
      { label: "人工审核通过率", before: "—", after: "87%" },
      { label: "节省兼职人力", before: "3 人", after: "1 人兼职" },
    ],
    quote: {
      text: "3 个月后我们直接续了 Crew-M Retainer，再也不用招内容岗了。",
      attribution: "某家居品牌运营总监 · Z",
    },
    renewal: "续约 Crew-M Retainer (¥11,800/月)",
  },
  {
    slug: "voltcraft-fleet",
    clientHandle: "某广州跨境 3C 配件品牌",
    industry: "3C · Shopify+Amazon+TikTok Shop",
    gmvBand: "月 GMV $280K",
    sku: "Fleet Integration",
    scene: "V-OPS",
    problem: "6 个 SaaS 数据孤岛，运营总监每天 4h 在 tab 之间切换",
    hook: "跨系统切换时间 4h → 40min",
    kpis: [
      { label: "日均系统切换时长", before: "4h", after: "40min" },
      { label: "库存断货事件", before: "月 6 次", after: "月 1 次" },
      { label: "周报生成时间", before: "2 天", after: "自动" },
    ],
    quote: {
      text: "自然语言问 AI 跨系统查数据，这个体验一旦用上就回不去了。",
      attribution: "某 3C 品牌运营总监 · W",
    },
    renewal: "12 月续签 Fleet 高阶 Retainer",
  },
];
