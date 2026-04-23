// Phase 1.5 持久化: JSON 文件落盘 + 内存缓存
// Phase 2 Day 10 切换到阿里云 RDS PostgreSQL + Drizzle ORM

import { promises as fs } from "node:fs";
import path from "node:path";

const DATA_DIR = process.env.SHIPWRIGHT_DATA_DIR || ".shipwright-data";
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

export interface Lead {
  id: string;
  createdAt: string;
  updatedAt?: string;
  name: string;
  contact_type: "mobile" | "wechat" | "email";
  contact_value: string;
  company?: string;
  gmv_band: string;
  scenario: string;
  utm_source?: string;
  notes?: string;
  sourcePage?: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
}

async function ensureStore(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(LEADS_FILE);
  } catch {
    await fs.writeFile(LEADS_FILE, "[]", "utf-8");
  }
}

export async function getAllLeads(): Promise<Lead[]> {
  await ensureStore();
  const content = await fs.readFile(LEADS_FILE, "utf-8");
  try {
    return JSON.parse(content) as Lead[];
  } catch {
    return [];
  }
}

export async function createLead(
  input: Omit<Lead, "id" | "createdAt" | "status">
): Promise<Lead> {
  const leads = await getAllLeads();
  const lead: Lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
    ...input,
  };
  leads.push(lead);
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  return lead;
}

export async function updateLeadStatus(
  id: string,
  status: Lead["status"]
): Promise<Lead | null> {
  const leads = await getAllLeads();
  const lead = leads.find((l) => l.id === id);
  if (!lead) return null;
  lead.status = status;
  lead.updatedAt = new Date().toISOString();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  return lead;
}

export async function deleteLead(id: string): Promise<boolean> {
  const leads = await getAllLeads();
  const idx = leads.findIndex((l) => l.id === id);
  if (idx === -1) return false;
  leads.splice(idx, 1);
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
  return true;
}

// 简单 admin token · Phase 2 切 Auth.js magic link
export function verifyAdminToken(token: string | null): boolean {
  const expected = process.env.ADMIN_TOKEN || "shipwright-dev-token-2026";
  return Boolean(token && token === expected);
}
