import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 博客（pillar + supporting），按语种分目录
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(60),            // 百度 SERP 截断
    description: z.string().max(155),      // meta description
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    locale: z.enum(["zh-CN", "zh-TW", "en"]).default("zh-CN"),
    cluster: z.enum([
      "pillar-cross-border-ai",      // Pillar 1: 跨境 AI 完整指南
      "pillar-shopify-custom",        // Pillar 2: Shopify 自动化定制
      "pillar-tiktok-shop",           // Pillar 3: TikTok Shop + 跨境
      "pillar-claude-code-method",    // Pillar 4: Claude Code 方法论
      "supporting",
    ]),
    keywords: z.array(z.string()).max(8),
    author: z.string().default("AiOars Team"),
    heroImage: z.string().optional(),
    canonical: z.string().url().optional(),
    crossPost: z
      .object({
        baijiahao: z.string().optional(),
        zhihu: z.string().optional(),
        xiaohongshu: z.string().optional(),
        wechat: z.string().optional(),
      })
      .optional(),
    status: z.enum(["draft", "review", "published"]).default("draft"),
  }),
});

// 案例研究
const cases = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string().max(80),
    clientHandle: z.string(),               // "某美妆 DTC" 这种脱敏句柄
    industry: z.string(),                    // 跨境美妆 / 3C / 家居 etc.
    gmvBand: z.enum(["lt_500k", "500k_2m", "2m_10m", "10m_100m", "gt_100m"]),
    sku: z.enum(["pilot-pod", "vibecoding-pod", "fleet-integration", "crew-retainer"]),
    scene: z.enum(["v-cs", "v-seo", "v-ad", "v-content", "v-ops"]),
    pubDate: z.coerce.date(),
    duration: z.string(),                    // "14 天"
    kpis: z.array(
      z.object({
        label: z.string(),
        before: z.string(),
        after: z.string(),
      })
    ),
    quote: z
      .object({
        text: z.string(),
        attribution: z.string(),             // "李总 · 某美妆 DTC 创始人"
      })
      .optional(),
    locale: z.enum(["zh-CN", "zh-TW", "en"]).default("zh-CN"),
    status: z.enum(["draft", "review", "published"]).default("draft"),
  }),
});

// Playbooks 免费模板下载
const playbooks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/playbooks" }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(155),
    pubDate: z.coerce.date(),
    gate: z.enum(["none", "email", "email_company", "email_wechat"]).default("email"),
    downloadUrl: z.string().optional(),       // 填写后前端发送 download event
    format: z.enum(["pdf", "mdx", "notion", "zip"]).default("pdf"),
    locale: z.enum(["zh-CN", "zh-TW", "en"]).default("zh-CN"),
    status: z.enum(["draft", "review", "published"]).default("draft"),
  }),
});

export const collections = { blog, cases, playbooks };
