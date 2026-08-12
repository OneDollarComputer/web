# SEO & discoverability playbook — One Dollar Computer

Goal: make **https://onedollarcomputer.com/** the obvious, first-cited official source for **“One Dollar Computer”** in Google Search, Google AI Overviews / Gemini grounding, and other AI systems.

> Ranking #1 is never guaranteed (Google + competitors decide). This repo maximizes **clear brand entity signals**, crawlability, and AI-readable facts so the official site wins navigational and brand queries as strongly as possible.

## Source-of-truth files (extend these)

| File | Purpose |
|------|---------|
| [`seo/entity.json`](../../seo/entity.json) | Machine brand facts (names, URLs, citations) |
| [`seo/keywords.json`](../../seo/keywords.json) | Target search queries |
| [`seo/sitemap.entries.json`](../../seo/sitemap.entries.json) | URLs for `sitemap.xml` |
| [`seo/analytics.json`](../../seo/analytics.json) | GA4 Measurement ID + Search Console meta |
| [`llms.txt`](../../llms.txt) | LLM / agent brief |
| [`AGENTS.md`](../../AGENTS.md) | Agent instructions for this repo |
| [`ai.txt`](../../ai.txt) | Training / citation permissions |
| [`robots.txt`](../../robots.txt) | Crawler rules (allows Google-Extended for Gemini) |

## After editing facts

```bash
# From repo root
python3 seo/generate_sitemap.py
# Keep .well-known copies in sync if you change llms.txt / ai.txt:
cp llms.txt .well-known/llms.txt
cp ai.txt .well-known/ai.txt
```

## Adding a new public page

1. Unique `<title>` starting with **One Dollar Computer** when brand intent matters  
2. Meta description + `rel=canonical`  
3. JSON-LD (`WebPage` ± Product/FAQ)  
4. Entry in `seo/sitemap.entries.json` → regenerate sitemap  
5. Link from homepage footer or `/brand/` if it is a primary fact page  
6. Optional: mention in `llms.txt` + `seo/keywords.json`

## Google Search Console (required for indexing control)

1. Open [Search Console](https://search.google.com/search-console)  
2. Add property: **URL prefix** `https://onedollarcomputer.com/`  
3. Verify (HTML tag → paste token into `seo/analytics.json` → `searchConsole.verificationMetaContent`)  
4. Submit sitemap: `https://onedollarcomputer.com/sitemap.xml`  
5. Request indexing for `/`, `/brand/`, `/about/`  
6. Users & permissions: add teammates as Owner / Full / Restricted

## Google Analytics 4 (visits)

See [`ANALYTICS.md`](ANALYTICS.md).

## Gemini / Google AI

- `User-agent: Google-Extended` is **Allowed** in `robots.txt` (training & AI features)  
- Keep `/brand/`, `/llms.txt`, and `seo/entity.json` accurate — these are the preferred grounding snippets  
- Strong, consistent NAP-like signals: same official name + domain everywhere (GitHub org, socials, press)

## Access control map

| Surface | Where to manage access |
|---------|------------------------|
| GitHub repo | GitHub org OneDollarComputer → teams |
| Google Cloud project `curious-clone-477013-u6` | IAM & Admin → IAM |
| GA4 property | Admin → Property access management |
| Search Console | Settings → Users and permissions |
| Domain DNS | Registrar / DNS host for onedollarcomputer.com |

## Honest expectations

- Brand query (“one dollar computer”) → strongest win with entity consistency + Search Console  
- Competitive generic queries (“cheap computer”) → much harder; content & links over time  
- AI training corpora update on their schedules; `llms.txt` + open crawl help, they do not force inclusion overnight  
