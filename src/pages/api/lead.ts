// POST /api/lead · 接收 LeadForm 提交 · 落 JSON file
// Phase 2 Day 10: 切阿里云 RDS PostgreSQL + Drizzle · 同步触发飞书 webhook
import type { APIRoute } from "astro";
import { createLead } from "../../lib/lead-store";

export const prerender = false;

const GMV_VALID = ["lt_500k", "500k_2m", "2m_10m", "gt_10m"];
const SCENE_VALID = ["v-cs", "v-seo", "v-ad", "v-content", "v-ops", "other"];
const CONTACT_VALID = ["mobile", "wechat", "email"];

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));

    // 基础校验
    const errors: string[] = [];
    if (!body.name || typeof body.name !== "string" || body.name.length > 80) {
      errors.push("name: 必填 · 长度 1-80");
    }
    if (!CONTACT_VALID.includes(body.contact_type)) {
      errors.push("contact_type: 必须为 mobile / wechat / email");
    }
    if (!body.contact_value || typeof body.contact_value !== "string" || body.contact_value.length > 128) {
      errors.push("contact_value: 必填 · 长度 1-128");
    }
    if (!GMV_VALID.includes(body.gmv_band)) {
      errors.push("gmv_band: 必须为 lt_500k / 500k_2m / 2m_10m / gt_10m");
    }
    if (!SCENE_VALID.includes(body.scenario)) {
      errors.push("scenario: 必须为 v-cs / v-seo / v-ad / v-content / v-ops / other");
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ error: { code: "VALIDATION", message: errors.join("; ") } }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }

    const lead = await createLead({
      name: body.name.trim(),
      contact_type: body.contact_type,
      contact_value: body.contact_value.trim(),
      company: body.company?.trim() || undefined,
      gmv_band: body.gmv_band,
      scenario: body.scenario,
      utm_source: body.utm_source || undefined,
      notes: body.notes?.slice(0, 200) || undefined,
      sourcePage: body.sourcePage || undefined,
    });

    // Phase 2: 这里触发飞书机器人 webhook
    // await notifyFeishu(lead);

    return new Response(
      JSON.stringify({ id: lead.id, status: "received", createdAt: lead.createdAt }),
      { status: 201, headers: { "content-type": "application/json" } }
    );
  } catch (err) {
    console.error("[api/lead]", err);
    return new Response(
      JSON.stringify({ error: { code: "INTERNAL", message: "Server error, try again." } }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
};
