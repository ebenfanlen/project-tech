import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", (p) => p.data.status === "published");

  return rss({
    title: "船匠手记 · Shipwright Blog",
    description:
      "14 天交付过程中的真实决策、踩坑、数字。跨境电商 AI 自动化的工程 playbook.",
    site: context.site ?? "https://shipwright.co",
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id.replace(/^zh-CN\//, "").replace(/\.mdx$/, "")}`,
        author: `hello@shipwright.co (${post.data.author})`,
        categories: post.data.keywords,
      })),
    customData: `
      <language>zh-CN</language>
      <atom:link href="https://shipwright.co/rss.xml" rel="self" type="application/rss+xml" />
      <image>
        <url>https://shipwright.co/favicon.svg</url>
        <title>船匠手记 · Shipwright Blog</title>
        <link>https://shipwright.co</link>
      </image>
    `,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
  });
}
