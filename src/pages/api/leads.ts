// GET /api/leads · Admin 拉 leads 列表
// PATCH /api/leads/{id} · 改 status
// DELETE /api/leads/{id} · 删除
// 简单 header/query token auth · Phase 2 切 Auth.js magic link
import type { APIRoute } from "astro";
import { getAllLeads, updateLeadStatus, deleteLead, verifyAdminToken } from "../../lib/lead-store";

export const prerender = false;

function authOK(request: Request): boolean {
  const url = new URL(request.url);
  const header = request.headers.get("x-admin-token");
  const query = url.searchParams.get("token");
  return verifyAdminToken(header ?? query);
}

export const GET: APIRoute = async ({ request }) => {
  if (!authOK(request)) {
    return new Response(
      JSON.stringify({ error: { code: "UNAUTHORIZED", message: "Missing/invalid admin token" } }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
  const leads = await getAllLeads();
  return new Response(JSON.stringify({ leads, total: leads.length }), {
    headers: { "content-type": "application/json" },
  });
};

export const PATCH: APIRoute = async ({ request }) => {
  if (!authOK(request)) {
    return new Response(
      JSON.stringify({ error: { code: "UNAUTHORIZED" } }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
  try {
    const body = await request.json();
    if (!body.id || !body.status) {
      return new Response(
        JSON.stringify({ error: { code: "VALIDATION", message: "id and status required" } }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
    const updated = await updateLeadStatus(body.id, body.status);
    if (!updated) {
      return new Response(
        JSON.stringify({ error: { code: "NOT_FOUND" } }),
        { status: 404, headers: { "content-type": "application/json" } }
      );
    }
    return new Response(JSON.stringify(updated), {
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: { code: "INTERNAL" } }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  if (!authOK(request)) {
    return new Response(
      JSON.stringify({ error: { code: "UNAUTHORIZED" } }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
  try {
    const body = await request.json();
    if (!body.id) {
      return new Response(
        JSON.stringify({ error: { code: "VALIDATION" } }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
    const ok = await deleteLead(body.id);
    return new Response(JSON.stringify({ deleted: ok }), {
      status: ok ? 200 : 404,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: { code: "INTERNAL" } }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
};
