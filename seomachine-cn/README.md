# seomachine-cn · 本地骨架 (Phase 1.5)

> Shipwright 内部 SEO 流水线 · fork 自 Craig Hewitt SEOMachine (MIT) · 本地化为中文跨境电商 AI 服务.
> 本目录是 **本地可跑的 mock 骨架** · 无需 API key 能跑完整 flow. Phase 2 真 fork 到独立仓 `shipwright-org/seomachine-cn`.

---

## 命令 (3 个)

```bash
# 1. 研究 · 输入 seed keyword · 输出 research brief markdown
python seomachine-cn/src/research.py "跨境电商 AI 自动化"
# → 生成 docs/seo/research-跨境电商-ai-自动化.md

# 2. 写作 · 输入 research brief · 输出 MDX 到 src/content/blog/
python seomachine-cn/src/write.py docs/seo/research-跨境电商-ai-自动化.md
# → 生成 src/content/blog/<slug>.mdx

# 3. 优化 · 输入 MDX 路径 · 输出 10 条百度专属检查 report
python seomachine-cn/src/optimize_baidu.py src/content/blog/<slug>.mdx
# → 生成 docs/seo/optimize-reports/<slug>-<timestamp>.md
```

## 目录

```
seomachine-cn/
├── README.md              ← 本文件
├── src/
│   ├── research.py        ← /research slash command 的 Python 实现
│   ├── write.py           ← /write MDX 直出
│   ├── optimize_baidu.py  ← /optimize-baidu 10 条百度专属 check
│   └── adapters/          ← 数据源 adapter
│       ├── baidu_search_console.py  ← 百度站长 API (mock)
│       ├── fiveone18_api.py          ← 5118 长尾词 + 百度指数 (mock)
│       ├── baidu_push.py             ← 主动推送 (mock)
│       └── dataforseo_api.py         ← 海外对标 (mock)
├── samples/               ← 示例输出
│   ├── research-sample.md
│   └── write-sample.mdx
└── schemas/
    └── frontmatter.py     ← MDX frontmatter 校验 (对齐 Astro Content Schema Zod)
```

## Phase 1.5 Mock 策略

当前代码 **不连真 API** · 所有数据源 return 硬编码 mock list · 用来验证:
- research → brief markdown 格式对不对
- write → 产出的 MDX frontmatter 是不是符合 Astro Content Schema
- optimize-baidu → 10 条 check 是否都触发

Phase 2 切真 API · 只改 `adapters/*.py` 里的 mock return · 其他不动.

## Phase 2 真接 API 清单 (待用户配置)

- `BAIDU_PUSH_TOKEN` (百度站长平台 → 数据提交 → 主动推送)
- `BAIDU_ZHANZHANG_COOKIE` (百度站长爬虫降级 session)
- `FIVEONE18_API_KEY` (5118 会员 API)
- `DATAFORSEO_LOGIN` + `DATAFORSEO_PASSWORD` (海外对标)
- `ANTHROPIC_API_KEY` (write.py 真正生成 MDX 内容时用 Claude Sonnet)
- `BAIJIAHAO_APP_ID` + `BAIJIAHAO_APP_SECRET` (一稿多投自动发布)

## 与主仓 `shipwright` 的接入方式

本地开发: 直接 `python seomachine-cn/src/research.py ...` 跑 · MDX 出到主仓 `src/content/blog/`.

Phase 2 独立 fork 后: 主仓 `.claude/commands/{research,write,optimize-baidu}.md` 文件里引用独立仓的脚本 (git submodule 或 npm link).

## 产出节奏 (spec §5.1 Week 3-4)

| 月 | pillar | supporting | 百家号 | 知乎回答 | 小红书 |
|---|---|---|---|---|---|
| M1-2 (冷启动) | 1 | 6 | 6 | 12 | 40 |
| M3-12 (稳态) | 每月 1 | 每周 3 | 12/月 | 20/月 | 60/月 |

2026-04-23 当前状态:
- Pillar: 3/4 完成 (claude-code / shopify-custom / tiktok-shop)
- Supporting: 4 篇已发 (ai-customer-service / cart-abandonment / byok-pricing / multilingual-listing)
- 本轮补: Pillar 4 (cross-border-ai 完整指南) + 2-3 篇 supporting
