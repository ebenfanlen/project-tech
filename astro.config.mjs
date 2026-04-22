// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://shipwright.co",
  // i18n 路由预留 (Phase 2 启用翻译)
  // 当前 Phase 1: 简中默认走根路径 · 未配置 locale 子目录
  // Phase 2: 启用 zh-TW / en 后, 改这里的 locales + routing 即可
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "zh-TW", "en"],
    routing: {
      prefixDefaultLocale: false, // zh-CN 不走 /zh-CN/ 子目录
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // 三语 hreflang 准备 (Phase 2 启用翻译后加上 customPages)
      i18n: {
        defaultLocale: "zh-CN",
        locales: {
          "zh-CN": "zh-CN",
          "zh-TW": "zh-TW",
          en: "en",
        },
      },
      filter: (page) =>
        !page.includes("/admin") &&
        !page.includes("/api/"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // 首页和 Pricing 最高优先级
        if (item.url === "https://shipwright.co/" || item.url.endsWith("/pricing/")) {
          item.priority = 1.0;
          item.changefreq = "daily";
        }
        // 法律页低优先级
        if (item.url.includes("/legal/")) {
          item.priority = 0.3;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
