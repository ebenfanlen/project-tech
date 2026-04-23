#!/usr/binin/env python3
"""
/optimize-baidu · Shipwright seomachine-cn
输入: src/content/blog/<slug>.mdx
输出: docs/seo/optimize-reports/<slug>-<ts>.md · 10 条百度专属 check

Phase 1.5: 本地 static check · 不推送百度 API
Phase 2: 加真推送 (BAIDU_PUSH_TOKEN)
"""

from __future__ import annotations
import argparse
import datetime as dt
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
REPORTS = ROOT / "docs" / "seo" / "optimize-reports"


def parse_mdx(path: Path) -> tuple[dict, str]:
    raw = path.read_text(encoding="utf-8")
    fm: dict = {}
    body = raw

    if raw.startswith("---"):
        parts = raw.split("---", 2)
        if len(parts) >= 3:
            for line in parts[1].strip().split("\n"):
                if ":" in line:
                    k, v = line.split(":", 1)
                    fm[k.strip()] = v.strip().strip('"').strip("'")
            body = parts[2]
    return fm, body


def count_chinese_chars(s: str) -> int:
    return sum(1 for c in s if "一" <= c <= "鿿")


def check_frontmatter(fm: dict) -> list[dict]:
    out: list[dict] = []

    title = fm.get("title", "")
    title_len = count_chinese_chars(title)
    out.append({
        "rule": "1.1 Title ≤ 30 汉字 (百度 SERP 截断)",
        "ok": title_len <= 30 and title_len > 0,
        "detail": f"当前 {title_len} 汉字 · title = '{title[:40]}'",
    })

    desc = fm.get("description", "")
    desc_len = count_chinese_chars(desc)
    out.append({
        "rule": "1.2 Description ≤ 78 汉字 (百度 meta description)",
        "ok": desc_len <= 78 and desc_len > 0,
        "detail": f"当前 {desc_len} 汉字 · first 40 = '{desc[:40]}'",
    })

    kws_raw = fm.get("keywords", "")
    pub = fm.get("pubDate", "")
    status = fm.get("status", "")
    out.append({
        "rule": "1.4 pubDate + status 已设置",
        "ok": bool(pub) and status in ("draft", "review", "published"),
        "detail": f"pubDate={pub} · status={status}",
    })

    return out


def check_body(body: str) -> list[dict]:
    out: list[dict] = []

    # 2. H1 uniqueness
    h1_count = len(re.findall(r"^# (?!#)", body, re.MULTILINE))
    out.append({
        "rule": "2.1 H1 唯一 (通常 title 承担 · body 应该 0 个 H1)",
        "ok": h1_count <= 1,
        "detail": f"body 里有 {h1_count} 个 H1 (# 行)",
    })

    # 2.2 H2/H3 层级不跳级
    headings = re.findall(r"^(#+) ", body, re.MULTILINE)
    skips: list[str] = []
    for i in range(1, len(headings)):
        cur = len(headings[i])
        prev = len(headings[i - 1])
        if cur - prev > 1:
            skips.append(f"{'#'*prev} → {'#'*cur}")
    out.append({
        "rule": "2.2 H 层级不跳级 (h1→h2→h3 · 不 h1→h3)",
        "ok": not skips,
        "detail": "跳级: " + ", ".join(skips) if skips else "所有层级合法",
    })

    # 4. 内链
    cluster_links = len(re.findall(r"\]\(/blog/", body))
    sku_links = len(re.findall(r"\]\(/(pilot-pod|vibecoding-pod|fleet-integration|crew-retainer|pricing|how|scenes)", body))
    out.append({
        "rule": "4.1 内链 ≥ 3 条同 cluster blog",
        "ok": cluster_links >= 3,
        "detail": f"找到 {cluster_links} 条 /blog/ 内链",
    })
    out.append({
        "rule": "4.2 内链 ≥ 1 条 SKU/scene/pricing/how 页",
        "ok": sku_links >= 1,
        "detail": f"找到 {sku_links} 条 SKU 相关内链",
    })

    # 5. 外链到权威源
    ext_links = re.findall(r"\]\((https?://[^\)]+)\)", body)
    whitelist = ("shopify.com", "amazon.com", "amazon.", "meta.com", "google.com",
                 "docs.", "gartner", "idc", "aliyun.com", "huawei")
    ext_ok = any(any(w in url for w in whitelist) for url in ext_links)
    out.append({
        "rule": "5.1 外链 ≥ 1 条权威源 (Shopify/Amazon/Meta/大厂 docs)",
        "ok": ext_ok,
        "detail": f"外链 {len(ext_links)} 条 · 权威源 {'有' if ext_ok else '缺'}",
    })

    # 6. 图片 alt
    images = re.findall(r"!\[([^\]]*)\]\(([^\)]+)\)", body)
    no_alt = [url for alt, url in images if not alt.strip()]
    out.append({
        "rule": "6.1 所有 <img> 填 alt",
        "ok": not no_alt,
        "detail": f"图 {len(images)} 张 · 缺 alt {len(no_alt)} 张",
    })

    # 9. 表格 · 是否有对比数据 (Shipwright style)
    tables = len(re.findall(r"^\|.*\|.*\|\s*$", body, re.MULTILINE))
    out.append({
        "rule": "9.1 至少 1 张对比表格 (Shipwright 品牌要求)",
        "ok": tables >= 2,
        "detail": f"表格行数 {tables} (含 header + data)",
    })

    # 10. AI slop 清单 (brand voice)
    slop = ["赋能", "颠覆", "一站式", "专业现代", "云原生", "全方位", "next-gen", "elevate"]
    slop_hits = [w for w in slop if w in body]
    out.append({
        "rule": "10.1 禁用 AI slop 词 (赋能/颠覆/一站式/专业现代等)",
        "ok": not slop_hits,
        "detail": f"命中: {', '.join(slop_hits)}" if slop_hits else "清洁",
    })

    return out


def build_report(fm: dict, body: str, mdx_path: Path) -> tuple[str, int]:
    checks = check_frontmatter(fm) + check_body(body)
    passed = sum(1 for c in checks if c["ok"])
    total = len(checks)

    lines: list[str] = []
    ts = dt.datetime.now().isoformat(timespec="seconds")
    lines.append("---")
    lines.append(f"type: optimize-baidu-report")
    lines.append(f"generatedAt: {ts}")
    lines.append(f"target: {mdx_path.name}")
    lines.append(f"pass: {passed}/{total}")
    lines.append("---")
    lines.append("")
    lines.append(f"# /optimize-baidu Report · {mdx_path.stem}")
    lines.append("")
    lines.append(f"**Generated**: {ts}")
    lines.append(f"**Target**: `{mdx_path}`")
    lines.append(f"**Result**: **{passed}/{total}** 通过")
    lines.append("")

    for c in checks:
        mark = "✓" if c["ok"] else "✗"
        lines.append(f"## {mark} {c['rule']}")
        lines.append(f"{c['detail']}")
        lines.append("")

    lines.append("---")
    lines.append("")
    lines.append("## 下一步")
    lines.append("")
    if passed == total:
        lines.append("全通过 · 可以把 frontmatter `status: draft` 改为 `published` · commit + push.")
        lines.append("")
        lines.append("Phase 2: 提交百度主动推送 API (`BAIDU_PUSH_TOKEN`).")
    else:
        lines.append(f"有 {total - passed} 条未通过 · 逐条修正后重跑:")
        lines.append("")
        lines.append(f"```bash")
        lines.append(f"python seomachine-cn/src/optimize_baidu.py {mdx_path}")
        lines.append(f"```")
    lines.append("")

    return "\n".join(lines), passed


def main() -> int:
    parser = argparse.ArgumentParser(description="seomachine-cn · /optimize-baidu")
    parser.add_argument("mdx", help="Path to MDX (e.g. src/content/blog/xxx.mdx)")
    parser.add_argument("--push-baidu", action="store_true", help="Phase 2: POST 百度主动推送")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    mdx_path = Path(args.mdx)
    if not mdx_path.exists():
        mdx_path = ROOT / args.mdx
    if not mdx_path.exists():
        print(f"✗ MDX not found: {args.mdx}", file=sys.stderr)
        return 1

    fm, body = parse_mdx(mdx_path)
    report, passed = build_report(fm, body, mdx_path)

    if args.dry_run:
        print(report)
        return 0

    REPORTS.mkdir(parents=True, exist_ok=True)
    ts = dt.datetime.now().strftime("%Y%m%d-%H%M%S")
    out_path = REPORTS / f"{mdx_path.stem}-{ts}.md"
    out_path.write_text(report, encoding="utf-8")

    print(f"✓ Report saved: {out_path.relative_to(ROOT)}")
    print(f"  Result: {passed}/{len(check_frontmatter(fm) + check_body(body))} 通过")

    if args.push_baidu:
        print("⚠ --push-baidu Phase 2 待接 · 需要 BAIDU_PUSH_TOKEN")

    return 0


if __name__ == "__main__":
    sys.exit(main())
