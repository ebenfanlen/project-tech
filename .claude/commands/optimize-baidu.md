# /optimize-baidu - 百度 SEO 专属优化

输入一篇 `src/content/blog/**.mdx`, 执行 10 条百度专属检查 + 修复 + 调主动推送 API.

## 使用

```
/optimize-baidu <mdx-file-path> [--push-baidu] [--dry-run]
```

## 10 条检查清单

### 1. Frontmatter 校验
- [ ] `title` 长度 ≤ 30 汉字 (百度 SERP 截断)
- [ ] `description` 长度 ≤ 78 汉字 (注意中文是 2 字符/汉字, 156/2=78)
- [ ] `keywords` ≤ 8 个, 每个 ≤ 10 汉字
- [ ] `pubDate` 已设置 · `status` 为 "published"

### 2. H1 唯一性
- [ ] 文章只有 1 个 H1 (即 frontmatter title)
- [ ] H1 包含主 keyword
- [ ] H2/H3 层级不跳级 (h1 → h2 → h3, 不可 h1 → h3)

### 3. 首段要求
- [ ] 正文第一段 100 字以内出现主 keyword
- [ ] 首段不用 "随着..." / "近年来..." / "在数字化转型的大背景下..." 等套话

### 4. 内链
- [ ] 至少 3 条内链指向 pillar / supporting 同 cluster 文章
- [ ] 至少 1 条指向对应 SKU 着陆页 (/pilot-pod / /vibecoding-pod 等)
- [ ] 至少 1 条指向 pillar 长文

### 5. 外链 (权威源)
- [ ] 至少 1 条外链指向:
  - Shopify 官方文档
  - Meta / Google / Amazon 官方 docs
  - 学术论文 / 政府报告 / 大厂年报 (Gartner / IDC / 阿里云研究院)

### 6. 图片 / 媒体
- [ ] 所有 `<img>` 全部填 alt
- [ ] 图片格式 WebP (file size < 100KB)
- [ ] 懒加载: `loading="lazy"` on 首屏外图片

### 7. 百度专属 meta (在 BaseLayout 已注入, 验证即可)
- [ ] `<meta name="applicable-device" content="pc,mobile">` ✓
- [ ] `<meta name="MobileOptimized" content="width">` ✓

### 8. 结构化数据 (Schema.org JSON-LD)
- [ ] Article schema (headline / author / datePublished / image / publisher)
- [ ] BreadcrumbList schema (Home > Blog > Cluster > Post)
- [ ] FAQ 段落加 FAQPage schema (如果有 Q&A)

### 9. Core Web Vitals (建议值, 新 pillar 强制跑 PSI 验证)
- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1

### 10. 百度主动推送 API
- [ ] 调 `https://data.zz.baidu.com/urls?site={domain}&token={token}` 推送新 URL
- [ ] 记录推送 response 到 `docs/seo/baidu-push-log.jsonl`

## 修复动作 (自动)

1. 生成 report.md (checklist 结果)
2. 自动修复可自动修复的 (alt / meta / frontmatter 标准化)
3. 对无法自动修复的 · 生成 TODO list 给人工

## 输出

```
docs/seo/optimize-reports/<slug>-<timestamp>.md
```

## 反模式

- ❌ 不做 URL 跳转群 / doorway page
- ❌ 不 cloaking (给百度蜘蛛看和给用户看不一样的内容)
- ❌ 不堆砌同一关键词 > 3% 密度
- ❌ 不加隐藏文字 / 隐藏链接

## 百度推送之后

1. 在百度站长平台 → 数据监控 → 索引量 查看增量 (24-48h)
2. 如一周内未索引, 用抓取诊断工具主动调用
3. 补充提交到 <https://ziyuan.baidu.com/linksubmit/url> (手动版)
