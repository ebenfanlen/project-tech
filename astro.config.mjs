// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://shipwright.co",
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
