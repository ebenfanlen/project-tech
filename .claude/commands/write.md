# /write - 跨境电商 SEO 内容生成

输入一个 research brief (`docs/seo/research-*.md`), 输出一篇 pillar 或 supporting MDX 到 `src/content/blog/`.

## 使用

```
/write <research-brief-path> [--type=pillar|supporting] [--length=6000|3500|2500]
```

## Brand Voice (强制约束, 与官网 CLAUDE.md 一致)

- **不准说**: "赋能 / 云原生 / 一站式 / 专业现代 / 全方位"
- **每个承诺可验证**: "14 天" = 14 × 24h 倒计时
- **每篇必须有**: 一个 "我们做错过的事" 或 "第一手经验" 章节 (可信度)
- **句式**: 短句 · 每 300 字至少 1 个具体数字或案例

## 结构模板 (Pillar 6000 字)

```
01. Hero
    - H1 (含主 KW)
    - description (前 155 字, 百度 SERP 友好)
    - 作者 + 发布日期 + 阅读时长

02. TL;DR (200 字)
    - 3-5 个核心 takeaway

03. 正文 (5000 字)
    - H2 每 800-1200 字一个大节
    - H3 下展开
    - 3-5 张自制图 (blueprint 风 · Deep Harbor 底)
    - 每 1500 字一条 "Shipwright 视角" 引用块

04. 代码示例 (如果技术文)
    - JetBrains Mono 等宽块

05. 数据表格 (对比类内容必备)

06. 真实案例引用
    - 从 /work 拉 1-2 个相关 case 做内链

07. 相关内链
    - 至少 3 个 supporting + 1 pillar + 1 SKU 页

08. 结论 + CTA
    - "如果你想让我们帮你跑一遍 → 预约 Pilot Pod"

09. 作者 bio (Shipwright Team)

10. Schema.org (Article + Author + BreadcrumbList)
```

## Structure for Supporting (2500-3500 字)

保留 Hero + TL;DR (100 字) + H2 3-4 个 + 1 代码/数据 + 内链 + CTA.
去掉 TOC + 作者 bio.

## Content Schema 对齐 (src/content.config.ts)

生成的 MDX frontmatter 必须符合 Zod schema:

```yaml
---
title: string (max 60)
description: string (max 155)
pubDate: YYYY-MM-DD
locale: zh-CN | zh-TW | en (default zh-CN)
cluster: pillar-cross-border-ai | pillar-shopify-custom | pillar-tiktok-shop | pillar-claude-code-method | supporting
keywords: string[] (max 8)
author: string (default "Shipwright Team")
status: draft | review | published
crossPost:
  baijiahao: <url>
  zhihu: <url>
  xiaohongshu: <note>
  wechat: <msg_id>
---
```

## 写作顺序

1. 读 research brief 锁定 seed KW + intent + cluster
2. Hero + description + TL;DR
3. 每个 H2 先写 bullet outline, 再扩展到 800-1200 字
4. 每个 H2 至少引用 1 个数字或案例 (来自 `/work` 或 internal benchmark)
5. 最后补 CTA + 内链 + 关键词 tag

## 反模式

- ❌ 不写 "随着 AI 的发展..." 套话开头
- ❌ 不做 SEO 关键词堆砌 (密度 ≤1.5%)
- ❌ 不生成未验证的产品功能宣传
- ❌ 不编造客户数据 (必须引 `/work` 或标 "内部 benchmark")

## 产出后

1. `/optimize-baidu <生成的 MDX 路径>` 做 百度专属 SEO 检查
2. 人工编辑 review (pillar 100% 人工 · supporting 抽查 30%)
3. PR → review → merge → CI 自动触发百度主动推送 API
