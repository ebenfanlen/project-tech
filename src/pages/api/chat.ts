// POST /api/chat · Chat Widget AI 回复
// Phase 1.5: 规则 + keyword 路由 (无 Claude API call)
// Phase 2 Day 11: 真 Claude Haiku API call · WSS for streaming
import type { APIRoute } from "astro";

export const prerender = false;

const KNOWLEDGE = {
  skus: {
    pilot: { name: "Pilot Pod 试航舱", price: "¥12,800 / 5 天", href: "/pilot-pod" },
    vibecoding: { name: "Vibecoding Pod 匠造舱", price: "¥58,000 / 14 天 (主推)", href: "/vibecoding-pod" },
    fleet: { name: "Fleet Integration 舰队集成", price: "¥168K-298K / 21-28 天", href: "/fleet-integration" },
    crew: { name: "Crew Retainer 船员月租", price: "¥5.8K-22.8K/月", href: "/crew-retainer" },
  },
  scenes: {
    "v-cs": { title: "客服 (IG DM + Inbox + 小红书)", href: "/scenes/v-cs" },
    "v-seo": { title: "Listing + 多语言", href: "/scenes/v-seo" },
    "v-ad": { title: "广告素材 + ROAS", href: "/scenes/v-ad" },
    "v-content": { title: "小红书 / TikTok 内容", href: "/scenes/v-content" },
    "v-ops": { title: "订单 / 物流 / 退款", href: "/scenes/v-ops" },
  },
};

function route(userMessage: string): string {
  const m = userMessage.toLowerCase();

  // 客服场景
  if (/客服|dm|inbox|邮件回复|小红书私信|customer\s*service/.test(m)) {
    return `听起来是 V-CS 场景 · ${KNOWLEDGE.skus.vibecoding.name} (${KNOWLEDGE.skus.vibecoding.price}) 就能搞定 IG DM + Shopify Inbox + 邮件 + 小红书 4 个渠道 · 5 语种同时回复 · 自动解决率 60%+.

看案例: /work/lumesque-v-cs (月 GMV ¥80 万品牌 · 响应 14h → 11min)
场景详情: /scenes/v-cs

如果预算紧, 先走 Pilot Pod ¥12,800 / 5 天跑通一个窄场景试试: /pilot-pod?scene=v-cs`;
  }

  // SEO / listing
  if (/listing|seo|amazon|多语言/.test(m)) {
    return `V-SEO 场景 · ${KNOWLEDGE.skus.vibecoding.name}. 典型交付: Amazon + Shopify listing 月产 80 → 240 条 + 英日德三语.

看案例: /work/nordic-nest-v-seo (月 GMV $120K 家居品牌)
场景详情: /scenes/v-seo`;
  }

  // 广告
  if (/广告|投放|meta\s*ads?|tiktok\s*ads?|roas|acos/.test(m)) {
    return `V-AD 场景 · Meta + Google + TikTok Shop 广告素材批量 + ROAS 滚动预测.

目标客户: 月投放 $10K+ · ACoS > 30% 想优化.
场景详情: /scenes/v-ad · Vibecoding Pod ¥58K / 14 天`;
  }

  // 内容 / 红人
  if (/内容|红人|小红书运营|tiktok\s*内容|脚本/.test(m)) {
    return `V-CONTENT 场景 · 小红书 / TikTok 内容日历 + 脚本 4 类.

实测: 周更从 10 条涨到 50 条 · 小红书粉丝 3.2K → 18K (60 天).
场景详情: /scenes/v-content`;
  }

  // 运营 / 订单
  if (/订单|物流|退款|库存|erp|跨系统|多\s*saas/.test(m)) {
    return `V-OPS 场景 (可能也要 Fleet Integration).

单场景: Vibecoding Pod ¥58K / 14 天 · 场景详情 /scenes/v-ops
多系统编排 (8+ SaaS): Fleet Integration ¥168K-298K / 21-28 天 · /fleet-integration

看案例: /work/voltcraft-fleet (跨系统切换 4h → 40min)`;
  }

  // 定价
  if (/价格|多少钱|定价|收费|费用|成本|pricing|cost/.test(m)) {
    return `4 SKU 明码标价, 都在 /pricing 公开:

· ${KNOWLEDGE.skus.pilot.name}: ${KNOWLEDGE.skus.pilot.price}
· ${KNOWLEDGE.skus.vibecoding.name}: ${KNOWLEDGE.skus.vibecoding.price} · BYOK -20%
· ${KNOWLEDGE.skus.fleet.name}: ${KNOWLEDGE.skus.fleet.price} · BYOK -25%
· ${KNOWLEDGE.skus.crew.name}: ${KNOWLEDGE.skus.crew.price} · 三档

反 book-a-call · 反 credit 黑盒 · 反按人月计费.`;
  }

  // 14 天 / 方法论
  if (/14\s*天|方法论|day\s*by\s*day|流程|交付/.test(m)) {
    return `14 天是硬承诺 + 合同写明:

· 超期按 3% setup/天退款, 上限 30%
· Day 7 Mid-sprint Demo 可无理由终止退 70%
· 客户方延误 (API 权限未开 / UAT 不配合) 暂停计时

详细 Day-by-Day: /how
为什么能做到: follow-the-sun (16h/天) + Claude Code ×3 生产率 + 5 大场景 70% 模板化`;
  }

  // BYOK
  if (/byok|api\s*key|自带|credit/.test(m)) {
    return `BYOK (Bring Your Own Key) · 你自己开 Anthropic / OpenAI 账号:

· Vibecoding Pod Platform Fee -20%
· Fleet Integration Platform Fee -25%
· AI cost 直付模型厂商 · AiOars 0 markup
· API Key 存 Cloudflare Workers Secrets (不落我们 DB)

读这篇 blog 看详细对比: /blog/byok-vs-credit-pricing`;
  }

  // Retainer
  if (/retainer|月租|持续|维护/.test(m)) {
    return `${KNOWLEDGE.skus.crew.name} (${KNOWLEDGE.skus.crew.price}) 三档:

· Crew-S 轻量 ¥5,800/月 · 20 小时
· Crew-M 标准 ¥11,800/月 · 40 小时 (最受欢迎)
· Crew-L 深度 ¥22,800/月 · 80 小时

对标自招 AI 工程师: ¥35K+/月 全包 · 招 2-3 月 + 熟悉 3 月 = 半年才出活.
详情: ${KNOWLEDGE.skus.crew.href}`;
  }

  // 英文
  if (/pricing|what\s*do\s*you\s*do|how\s*much|quote/.test(m) && !/定价|多少/.test(m)) {
    return `English version coming Phase 2. 目前 bilingual 支持有限. 核心信息:

· We ship in 14 days. Code 100% yours. Transparent pricing.
· 4 SKUs: Pilot (¥12.8K/5d) / Vibecoding (¥58K/14d) / Fleet (¥168K+/21-28d) / Crew Retainer (¥5.8K+/mo).
· BYOK accepted, 0 markup.
· Email hello@aioars.com for English discussion.`;
  }

  // 默认兜底
  return `我正在 route 关键词理解 · Phase 2 Day 11 会接真 Claude Haiku 做通用回复.

最快路径:
· 看 [4 个 SKU 定价](/pricing) 决定预算
· 看 [14 天方法论](/how) 理解交付
· [预约 30 分钟真人诊断](/contact) 告诉你用哪个 SKU

你主要想解决哪件事? 客服 / listing / 广告 / 内容 / 运营?`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const msg = typeof body.message === "string" ? body.message.slice(0, 500) : "";
    const sessionId = typeof body.sessionId === "string" ? body.sessionId : crypto.randomUUID();

    if (!msg.trim()) {
      return new Response(
        JSON.stringify({ error: { code: "VALIDATION", message: "message required" } }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    const reply = route(msg);

    return new Response(
      JSON.stringify({
        sessionId,
        reply,
        model: "aioars-rule-router-v1",  // Phase 2 → "claude-haiku-4-5"
        latency_ms: 0,
      }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    console.error("[api/chat]", err);
    return new Response(
      JSON.stringify({ error: { code: "INTERNAL" } }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
};
