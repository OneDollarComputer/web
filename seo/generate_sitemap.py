#!/usr/bin/env python3
"""Generate sitemap.xml from seo/sitemap.entries.json."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENTRIES = Path(__file__).resolve().parent / "sitemap.entries.json"
OUT = ROOT / "sitemap.xml"


def main() -> None:
    data = json.loads(ENTRIES.read_text(encoding="utf-8"))
    base = data["base"].rstrip("/")
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for e in data["entries"]:
        loc = base + e["path"]
        lines.append("  <url>")
        lines.append(f"    <loc>{loc}</loc>")
        if e.get("lastmod"):
            lines.append(f"    <lastmod>{e['lastmod']}</lastmod>")
        if e.get("changefreq"):
            lines.append(f"    <changefreq>{e['changefreq']}</changefreq>")
        if e.get("priority") is not None:
            lines.append(f"    <priority>{e['priority']}</priority>")
        lines.append("  </url>")
    lines.append("</urlset>")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT} ({len(data['entries'])} URLs)")


if __name__ == "__main__":
    main()
