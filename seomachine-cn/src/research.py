#!/usr/bin/env python3
"""
/research · Shipwright seomachine-cn
输入: seed keyword
输出: docs/seo/research-<slug>.md · research brief 供 /write 使用

Phase 1.5: mock adapters · 无 API key 能跑
Phase 2: 切真 5118 + 百度站长 API
"""

from __future__ import annotations
import argparse
import datetime as dt
import os
import re
import sys
from pathlib import Path

# 项目根 (seomachine-cn/src/.. → project root)
ROOT = Path(__file__).resolve().parents[2]
DOCS_SEO = ROOT / "docs" / "seo"


def slugify(text: str) -> str:
    text = text.strip().lower()
    text = re.sub(r"\s+", "-", text)
    text = re.sub(r"[^\w一-鿿\-]", "", text)
    return text[:80]


def mock_keywords(seed: str) -> list[dict]:
    """Mock 5118 API · Phase 2 切真 API"""
    # 根据 seed 产出 50 个相关词 (模拟 5118 长尾词库 return)
    base = [
        (seed, "info", 4200, 7),
        (f"{seed} 怎么做", "info", 2600, 5),
        (f"{seed} 方法", "info", 1900, 5),
        (f"{seed} 工具推荐", "info", 3100, 6),
        (f"{seed} 案例", "info", 1400, 4),
        (f"{seed} 教程", "info", 2800, 6),
        (f"{seed} 定制", "comm", 1200, 5),
        (f"{seed} 外包", "comm", 1800, 6),
        (f"{seed} 团队", "trans", 900, 4),
        (f"{seed} 服务商", "trans", 1100, 5),
    ]
    # 扩展到 50 个 (mock 变体)
    variants = ["2026", "最新", "Shopify", "Amazon", "TikTok", "独立站", "跨境",
                "AI", "Claude", "工作流", "自动化", "BYOK", "14 天"]
    out = []
    for kw, intent, sv, kd in base:
        out.append({"keyword": kw, "intent": intent, "sv_baidu": sv, "kd": kd, "source": "5118-mock"})
        for v in variants[:4]:
            out.append({
                "keyword": f"{kw} {v}", "intent": intent,
                "sv_baidu": max(100, sv // 3), "kd": max(1, kd - 1),
                "source": "5118-mock"
            })
        if len(out) >= 50:
            break
    return out[:50]


def mock_serp_top5(seed: str) -> list[dict]:
    """Mock 百度 SERP Top 5 · Phase 2 抓真 SERP"""
    return [
        {"rank": 1, "title": f"{seed}完整指南 - 某大厂博客", "domain": "bigcompany.com",
         "meta": f"2026 年最全的 {seed} 解决方案..."},
        {"rank": 2, "title": f"2025 {seed}最佳实践 - 知乎", "domain": "zhihu.com",
         "meta": f"回答 · 如何理解 {seed}..."},
        {"rank": 3, "title": f"{seed} 实战手册 - 公众号", "domain": "qq.com",
         "meta": f"带你一步步实现 {seed}..."},
        {"rank": 4, "title": f"如何做好 {seed}", "domain": "zhihu.com",
         "meta": "分享一些个人经验..."},
        {"rank": 5, "title": f"{seed} 百科 - 百度百科", "domain": "baike.baidu.com",
         "meta": f"{seed}是指..."},
    ]


def mock_paa(seed: str) -> list[str]:
    """Mock People Also Ask"""
    return [
        f"{seed} 要花多少钱?",
        f"{seed} 适合初创公司吗?",
        f"{seed} 和 RPA 有什么区别?",
        f"怎么选 {seed} 服务商?",
        f"{seed} 有哪些成功案例?",
    ]


def detect_cluster(seed: str) -> str:
    """根据 seed 判断归属 cluster"""
    s = seed.lower()
    if "shopify" in s or "独立站" in s:
        return "pillar-shopify-custom"
    if "tiktok" in s or "抖音" in s:
        return "pillar-tiktok-shop"
    if "claude" in s or "code" in s or "方法论" in s or "vibecoding" in s:
        return "pillar-claude-code-method"
    if "跨境" in s or "ai" in s:
        return "pillar-cross-border-ai"
    return "supporting"


def build_brief(seed: str, intent: str = "top", target: str = "baidu") -> str:
    ts = dt.datetime.now().isoformat(timespec="seconds")
    kws = mock_keywords(seed)
    serp = mock_serp_top5(seed)
    paa = mock_paa(seed)
    cluster = detect_cluster(seed)

    lines: list[str] = []
    lines.append("---")
    lines.append(f'seedKeyword: "{seed}"')
    lines.append(f"intent: {intent}")
    lines.append(f"targetSERP: {target}")
    lines.append(f"generatedAt: {ts}")
    lines.append(f"suggestedCluster: {cluster}")
    lines.append("source: seomachine-cn-mock · Phase 2 真 API")
    lines.append("---")
    lines.append("")
    lines.append(f"# Research Brief · {seed}")
    lines.append("")
    lines.append(f"Generated {ts} by seomachine-cn (local mock mode)")
    lines.append("")
    lines.append("## 1. 50 相关关键词 (Top 20 示例)")
    lines.append("")
    lines.append("| # | 关键词 | Intent | 百度月 SV | KD | 建议 |")
    lines.append("|---|---|---|---|---|---|")
    for i, kw in enumerate(kws[:20], 1):
        lines.append(
            f"| {i} | {kw['keyword']} | {kw['intent']} | {kw['sv_baidu']:,} | {kw['kd']} | "
            f"{'🎯 主 KW' if i == 1 else '长尾'} |"
        )
    lines.append("")
    lines.append(f"_完整 50 个 KW 在 full brief 里 · 此处为节选._")
    lines.append("")

    lines.append("## 2. 百度 SERP Top 5 (竞争分析)")
    lines.append("")
    for s in serp:
        lines.append(f"### {s['rank']}. {s['title']}")
        lines.append(f"- Domain: `{s['domain']}`")
        lines.append(f"- Meta: {s['meta']}")
        lines.append("")

    lines.append("## 3. People Also Ask")
    lines.append("")
    for q in paa:
        lines.append(f"- {q}")
    lines.append("")

    lines.append("## 4. 3 个内容 Angle 建议")
    lines.append("")
    lines.append(f"1. **深度方法论** · 2500-3500 字 supporting · 目标 KW '{seed}' + 前 5 长尾")
    lines.append(f"2. **对比 + 案例** · 引用 /work/ 1-2 个真案例 + 3 个路径对比表")
    lines.append(f"3. **数字驱动** · Before/After KPI 表格 + 成本测算 + 决策矩阵")
    lines.append("")

    lines.append("## 5. Cluster 定位 + 内链建议")
    lines.append("")
    lines.append(f"- 建议 cluster: **{cluster}**")
    lines.append(f"- 需内链至少 3 条 supporting 同 cluster · 1 条对应 pillar · 1 条 SKU")
    lines.append("")

    lines.append("## 6. 下一步")
    lines.append("")
    lines.append("```bash")
    lines.append(f"python seomachine-cn/src/write.py docs/seo/research-{slugify(seed)}.md")
    lines.append("```")
    lines.append("")

    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description="seomachine-cn · /research")
    parser.add_argument("seed", help="Seed keyword (Chinese or English)")
    parser.add_argument("--intent", default="top", choices=["top", "mid", "bottom"])
    parser.add_argument("--platform", default="baidu", choices=["baidu", "google", "both"])
    parser.add_argument("--dry-run", action="store_true", help="只打印不写文件")
    args = parser.parse_args()

    brief = build_brief(args.seed, args.intent, args.platform)

    if args.dry_run:
        print(brief)
        return 0

    DOCS_SEO.mkdir(parents=True, exist_ok=True)
    out_path = DOCS_SEO / f"research-{slugify(args.seed)}.md"
    out_path.write_text(brief, encoding="utf-8")
    print(f"✓ Research brief saved: {out_path.relative_to(ROOT)}")
    print(f"  Next: python seomachine-cn/src/write.py {out_path.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
