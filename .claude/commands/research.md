# /research - 跨境电商关键词研究 (SEOMachine-CN fork)

基于 Craig Hewitt SEOMachine (MIT), 本地化为 shipwright-org/seomachine-cn.
替换数据源: Google Search Console → 百度站长平台 + 5118 · 保留 DataForSEO 作海外对标.

## 使用

```
/research <seed-keyword> [--platform=baidu|google|both] [--intent=top|mid|bottom]
```

## 输入规范 (最小信息包)

调用时我需要你给出:

1. **Seed keyword** (从 `docs/research/2026-04-22-seo-keyword-matrix.md` 40 个核心 KW 选)
2. **Business context** (2 句话):
   > "Shipwright 是华人团队的 AI 跨境电商服务商. 目标客户: 月 GMV ¥50K-$300K 的中型跨境卖家. 主力卖 [X SKU] 解决 [Y 场景]."
3. **Target SERP**: `baidu` (中国大陆) / `google` (US+SG) / `both`
4. **Intent lock**: `top` (认知) / `mid` (考虑) / `bottom` (决策)
5. **Competitive exclude**: 3-5 个不想抄的竞品站 (默认: ccstrategic.io, liamottley.com, 中国汉化 AI 自媒体 Top 10)

## 输出规范

每次 `/research` 产出一个 research brief 到 `docs/seo/research-{slug}.md`:

```yaml
---
seedKeyword: <主 KW>
intent: top|mid|bottom
targetSERP: baidu|google|both
generatedAt: <timestamp>
---
```

正文包含:

1. **50 条相关 KW 表** (SV / KD / intent / 对应我们 SKU)
2. **Top 5 SERP 竞品** (标题 / meta / H1 / 核心内链)
3. **PAA (People Also Ask)** 列表
4. **百度下拉 + 相关搜索** (只 baidu 模式)
5. **3 个内容 angle** (我们的差异化切入)
6. **Cluster 定位** (4 pillar 中的哪个) + 内链建议

## 数据源调用顺序

1. **5118 API** (主, 国内长尾词 + 百度指数): `https://apis.5118.com/keyword/longtail`
2. **百度站长平台 API** (官方, 若已备案): `https://ziyuan.baidu.com/linksubmit/`
3. **百度指数爬虫** (合规范围, 降级方案)
4. **DataForSEO** (仅 `--platform=google|both` 时调用, 海外对标)
5. **Ahrefs API** (可选, 预算允许时)

## 反模式

- ❌ 不生成未验证的数字 (标 "待 5118 / DataForSEO 验证")
- ❌ 不抄 SERP 前 10 的标题 (侵权 + 雷同)
- ❌ 不用百度推广竞价 SV 代替自然搜索 SV
- ❌ 不把 "ChatGPT 教程" 这种泛 AI 流量词计入 (非跨境电商主题)

## 下一步

产出的 research brief 可直接喂给 `/write`:

```
/write docs/seo/research-<slug>.md
```
