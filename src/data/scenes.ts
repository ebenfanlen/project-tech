// 5 大场景数据 · Vibecoding Pod 锁定的预置 starter kit

export interface Scene {
  code: "v-cs" | "v-seo" | "v-ad" | "v-content" | "v-ops";
  title: string;
  titleEn: string;
  hook: string;                         // 一句话价值主张
  targetSignal: string;                 // 目标客户的典型信号
  problem: string;                      // 客户场景描述
  agents: string[];                     // Agent 分工
  integrations: string[];               // 需要的 API 集成
  kpis: Array<{ label: string; before: string; after: string }>;
  sampleStack: string;                  // 客户典型 stack
  caseSlug?: string;                    // 对应 /work/ 案例
  priority: "P0" | "P1";
}

export const scenes: Scene[] = [
  {
    code: "v-cs",
    title: "V-CS · 全渠道 AI 客服中枢",
    titleEn: "AI Customer Service",
    hook: "IG DM + Shopify Inbox + 邮件 + 小红书私信 · 5 语种同时回复",
    targetSignal: "月客服量 500+ · 3+ 客服轮班 · 响应 >6h · 差评率 >3%",
    problem: "跨渠道场景切换 + 多语言需求 + 凌晨时段响应三件事叠加, 无法线性扩张人力. 招到 12 人还是跟不上 IG DM + 邮件 + 小红书私信三个入口。",
    agents: [
      "主 Agent (意图识别 + 路由)",
      "工具 Agent (查订单 / 查物流 / 查库存)",
      "人工接管 Agent (置信度 <80% 转人工)",
    ],
    integrations: [
      "Meta Graph API (IG DM)",
      "Shopify Admin API (Inbox + 订单)",
      "小红书开放平台 (私信)",
      "Zendesk / Gorgias (工单系统, 可选)",
    ],
    kpis: [
      { label: "IG DM 自动解决率", before: "0%", after: "63%" },
      { label: "平均响应时长", before: "14h", after: "11min" },
      { label: "差评率", before: "4.2%", after: "2.8%" },
    ],
    sampleStack: "Shopify + Amazon + 小红书 + IG + 3-5 客服团队",
    caseSlug: "lumesque-v-cs",
    priority: "P0",
  },
  {
    code: "v-seo",
    title: "V-SEO · Listing 批量生成 + 多语言",
    titleEn: "SEO Agent · Amazon Listing",
    hook: "Amazon + Shopify listing 月产从 80 条到 240 条 · 英日德三语同步",
    targetSignal: "月上新 30+ SKU · 有兼职写手 · 多站点 listing 断档",
    problem: "月上新 80 SKU, 3 个兼职写手手写 listing 跟不上. 美国站 listing 断档 2 周, 新品错过黄金展示期. 每条 listing 平均 45 分钟, 还要考虑 Helium 10 关键词和合规。",
    agents: [
      "规格提取 Agent (从 PDF / 1688 图片 OCR)",
      "多语言生成 Agent (Claude 英日德三语 + title/bullet/description/search terms)",
      "合规 Agent (避开 Amazon 禁用词 'best' / 'top' / 医疗宣称)",
    ],
    integrations: [
      "Amazon SP-API (listing 提交)",
      "Shopify Admin API (产品 + variants)",
      "Helium 10 关键词库",
      "Google Cloud Vision (图片场景 + 颜色提取)",
    ],
    kpis: [
      { label: "月产 listing 条数", before: "80", after: "240" },
      { label: "平均生成时间", before: "45min/条", after: "3min/条" },
      { label: "人工审核通过率", before: "—", after: "87%" },
    ],
    sampleStack: "Amazon (US/EU/JP) + Shopify + Helium 10 + 供应商 PDF/1688",
    caseSlug: "nordic-nest-v-seo",
    priority: "P0",
  },
  {
    code: "v-ad",
    title: "V-AD · 广告素材 + 投后回流",
    titleEn: "Ad Ops Agent",
    hook: "Meta + Google + TikTok Shop 广告素材批量生成 · ROAS 3 日滚动预测",
    targetSignal: "月投放 $10K+ · Meta/TikTok 同时在投 · ROAS 波动 >30%",
    problem: "投手人肉剪素材, 10 套广告 A/B 要 2 天. ROAS 决策靠经验, 预算分配不及时. 投后数据分散在 Meta Ads Manager / GA4 / Shopify, 复盘要导 3 份 CSV。",
    agents: [
      "素材生成 Agent (文案 + 图 + 视频脚本, 按 ICP + 痛点组合)",
      "ROAS 预测 Agent (基于历史 + 同品类 benchmark)",
      "预算分配 Agent (自动暂停 ROAS < 1 组合, 加预算给 ROAS > 3 组合)",
    ],
    integrations: [
      "Meta Marketing API",
      "Google Ads API",
      "TikTok Ads API",
      "Shopify Analytics",
      "GA4 BigQuery export",
    ],
    kpis: [
      { label: "素材日产量", before: "5", after: "25" },
      { label: "平均 ACoS", before: "35%", after: "18%" },
      { label: "投后复盘时间", before: "2 天/周", after: "自动生成" },
    ],
    sampleStack: "Shopify + Meta Ads + TikTok Ads + GA4 + BigQuery",
    priority: "P1",
  },
  {
    code: "v-content",
    title: "V-CONTENT · 小红书 / TikTok 内容日历",
    titleEn: "Content Agent",
    hook: "周更从 10 条到 50 条 · 脚本 + 封面 + SEO 关键词一套流水线",
    targetSignal: "依赖 UGC/KOC · 运营 6h/天写脚本 · 周更 <15 条",
    problem: "2 个运营每天花 6 小时写脚本 + 找素材 + 改文案, 周更 10 条顶天. 热点错过周期. 小红书 + TikTok 两个平台的内容策略还要分开做。",
    agents: [
      "热点扫描 Agent (每周扫小红书/TikTok 同品类 Top 100 笔记)",
      "脚本生成 Agent (4 类: 产品功能 / KOC 体验 / 场景化 / 痛点解决)",
      "包装 Agent (封面标题 + 标签 + 小红书 SEO 关键词)",
    ],
    integrations: [
      "小红书爬虫 (合规范围内)",
      "TikTok Content API",
      "Shopify 产品库",
      "热点数据平台 (5118 / 爱奇搜 / 飞瓜)",
    ],
    kpis: [
      { label: "周更数量", before: "10", after: "50" },
      { label: "小红书粉丝 (30 天)", before: "3.2K", after: "18K" },
      { label: "TikTok 破百万视频 (60 天)", before: "0", after: "2" },
    ],
    sampleStack: "小红书 + TikTok + Shopify + 2 人运营团队",
    priority: "P1",
  },
  {
    code: "v-ops",
    title: "V-OPS · 订单 / 物流 / 退款 AI 分诊",
    titleEn: "Ops Agent",
    hook: "异常 5 分钟飞书推送 · 周报自动生成 · 断货事件月 6 次 → 1 次",
    targetSignal: "日订单 50+ · 多站点 · ERP 和电商平台数据脱节",
    problem: "订单异常 (发错货/地址错/退款)、物流异常 (超时/丢件)、退款决策 三件事分散在 Shopify + ERP + 客服工单里, 运营每天 2 小时在跨系统查问题。周报生成要 2 天。",
    agents: [
      "异常分诊 Agent (判断异常类型 + 严重性 + 负责人路由)",
      "物流追踪 Agent (调 17track / 顺丰 / USPS API 查时效)",
      "退款决策 Agent (按策略矩阵自动通过 / 转人工)",
    ],
    integrations: [
      "Shopify Admin API",
      "Amazon SP-API (订单 + 退款)",
      "旺店通 / 店小秘 ERP",
      "17track / USPS / DHL 物流 API",
      "Gorgias / 企业微信客服",
    ],
    kpis: [
      { label: "异常响应时长", before: "24h", after: "5min" },
      { label: "断货事件", before: "月 6 次", after: "月 1 次" },
      { label: "周报生成", before: "2 天", after: "自动" },
    ],
    sampleStack: "Shopify + Amazon + 旺店通 + 飞书 + 运营总监",
    caseSlug: "voltcraft-fleet",
    priority: "P1",
  },
];

export const scenesByCode = new Map(scenes.map((s) => [s.code, s]));
