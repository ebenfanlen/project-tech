# SEOMachine-CN Fork Plan

> Shipwright 内部 SEO 流水线 · fork 自 Craig Hewitt SEOMachine (MIT).
> 目标: 12 月产出 12 pillar + ~145 supporting 中文内容, 覆盖百度 SERP 空白池.

## 上游

- **原项目**: https://github.com/TheCraigHewitt/seomachine
- **授权**: MIT
- **核心**: Python + Claude Code slash commands (`/research` `/write` `/optimize`)

## Shipwright fork: `shipwright-org/seomachine-cn`

私有仓 · 2026-05-07 (Week 3 Day 15) 启动.

## 改造清单 (按优先级)

| # | 改造项 | 工作量 | Week |
|---|---|---|---|
| 1 | Fork → 私有仓 + CI/Actions 配置 | 0.5d | W1 D6 完成 (config 就绪) |
| 2 | 数据源替换: GSC → **百度站长平台 API** (`https://ziyuan.baidu.com/linksubmit/`) | 2d | W3 |
| 3 | 关键词库: DataForSEO → **5118 API** (主, 国内长尾 + 百度指数) · 保留 DataForSEO 作海外对标 | 2d | W3 |
| 4 | `/research` 命令 prompt 中文化 + 加入**百度下拉 / 相关搜索**抓取 | 1d | W3 |
| 5 | `/write` 命令: 输出规则对齐 Astro Content Schema (Zod), **MDX 直出**到 `src/content/blog/` | 1d | W3 |
| 6 | 新增 `/optimize-baidu` 命令 (见 `.claude/commands/optimize-baidu.md`) | 2d | W4 |
| 7 | 一稿多投 pipeline (百家号 / 搜狐号 / 公众号 **自动** · 知乎 / 小红书 **半自动**) | 3d | W4-W5 |
| 8 | DataForSEO 保留作 Phase 2 海外对标 | 0.5d | P2 |

## 目录结构 (改造后)

```
seomachine-cn/
├── .claude/
│   └── commands/
│       ├── research.md          ← 中文化 + 5118
│       ├── write.md              ← MDX 直出
│       └── optimize-baidu.md     ← 新增
├── src/
│   ├── adapters/
│   │   ├── baidu_search_console.py   ← 新 (百度站长 API)
│   │   ├── 5118_api.py                ← 新 (国内长尾库)
│   │   ├── dataforseo_api.py          ← 保留 (海外对标)
│   │   └── baidu_push_api.py          ← 新 (主动推送)
│   └── pipelines/
│       ├── research_pipeline.py       ← 改造
│       ├── write_pipeline.py          ← 改造 (MDX output)
│       └── crosspost_pipeline.py      ← 新 (百家号/搜狐号/公众号)
└── README.md
```

## 内容产出节奏 (Phase 1 · 12 月)

| 月 | Pillar | Supporting | 百家号 | 知乎回答 | 小红书 |
|---|---|---|---|---|---|
| M1-2 (冷启动) | 1 | 6 | 6 | 12 | 40 |
| M3-12 (稳态) | 1/月 | 3/周 (12/月) | 12/月 | 20/月 | 60/月 |
| **12 月累计** | **12** | **~145** | **~135** | **~230** | **~640** |

## 已有内容 (截至 2026-04-23)

- 首篇 pillar (shipwright-org/shipwright):
  `src/content/blog/ai-driven-dtc-14-day-mvp.mdx` · cluster `pillar-claude-code-method` · 2500+ 字

## Claude Code 本地 fork 集成

`shipwright-org/shipwright` 的 `.claude/commands/` 目录下已有三个命令占位 (见同名 md):
- `research.md`
- `write.md`
- `optimize-baidu.md`

Week 3 D15 启动 fork 后, 这些命令会通过 git submodule 或 npm link 方式引用 seomachine-cn 的实际 Python 脚本.

## 一稿多投平台能力

| 平台 | 有公开 API | 自动化策略 | 工作量 |
|---|---|---|---|
| 百家号 | ✓ (机构号认证) | **全自动** | 2d |
| 搜狐号 | ✓ | 全自动 | 1d |
| 头条号 | ✗ (仅草稿 API) | 半自动 (脚本 + 桌面通知) | 0.5d |
| 知乎 (专栏) | ✗ | **半自动** (格式化 markdown + 一键复制) | 0.5d |
| 小红书 | ✗ | **半自动** (长图 9:16 + 文案 + 手工发) | 1d |
| 微信公众号 | ✓ (认证订阅号/服务号 draft API) | 全自动发草稿, 人工定时发布 | 1.5d |

**优先级**: 百家号 > 微信公众号 > 知乎 > 小红书 > 搜狐号 > 头条号.

## 关键依赖 (需要用户账号)

Week 3 D15 启动前需要:

1. **百度站长平台账号 + 已备案域名** (阻塞)
2. **5118 会员** (¥2,000/年高级版 · 预算内)
3. **百家号 / 搜狐号 / 微信公众号** 认证账号
4. **阿里云 RDS Postgres** (crosspost log 落库)
5. **GitHub Secrets 配置**: `BAIDU_PUSH_TOKEN` / `5118_API_KEY` / `BAIJIAHAO_TOKEN`

## KPI (首年 · 2026-05 ~ 2027-04)

| 指标 | Month 4 | Month 12 |
|---|---|---|
| 首个 organic lead | ✓ (预期来源: 知乎 + 百度) | - |
| 月 organic sessions | 2,500 | 20,000-28,000 |
| 月 organic leads | 3-5 | 40-70 |
| 排名前 10 KW 数 | 5-8 | 18-24 |

## 相关 spec / research

- `docs/superpowers/specs/2026-04-22-stage-b-product-services-design.md` § 6 SEOMachine 集成计划
- `docs/research/2026-04-22-seo-keyword-matrix.md` (40 核心 KW + 22 内容选题 + 4 Pillar Cluster)
