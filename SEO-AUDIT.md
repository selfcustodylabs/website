You are a senior SEO engineer with deep expertise in Docusaurus, technical SEO, and Google Search Console diagnostics. I need you to perform a **full SEO audit** of this Docusaurus project and then produce a **concrete, prioritized improvement plan** to get my pages ranking in the top 5 Google results for their target queries.

## Current Situation

- **Indexed pages:** 89
- **Not indexed pages:** 56 (stuck for months — this is the critical problem)
- **Framework:** Docusaurus (React-based SSG)
- **Goal:** Fix all indexing blockers, then optimize for top-5 positioning

---

## PHASE 1 — TECHNICAL SEO AUDIT (do this first)

Scan the entire project and produce a report covering every item below. For each issue found, state the **file path, line number, current value, and recommended fix.**

### 1.1 Crawlability & Indexing Blockers

- [ ] Read `static/robots.txt` — check for accidental `Disallow` rules blocking important paths (e.g., `/docs/`, `/blog/`, tag pages, paginated pages)
- [ ] Read and parse the generated `sitemap.xml` (check `docusaurus.config.js` for the sitemap plugin config). Count the URLs. Compare against the 145 total pages (89+56). Flag any missing URLs or URLs that shouldn't be there
- [ ] Search all `.md`, `.mdx`, and page components for any `noindex` meta tags — check for `<meta name="robots" content="noindex">` or Docusaurus front matter like `unlisted: true`, `draft: true`, or `sidebar_class_name` hacks that hide pages
- [ ] Check `docusaurus.config.js` for `noIndex: true` at the site level or in any plugin config
- [ ] Check if there's a custom `<Head>` component or theme wrapper injecting noindex tags
- [ ] Look for canonical URL issues — check `docusaurus.config.js` `url` and `baseUrl` fields. Verify canonical tags aren't pointing to wrong domains or trailing-slash variants
- [ ] Check for trailing slash consistency — does the config use `trailingSlash: true`, `false`, or `undefined`? Inconsistency here causes duplicate URLs and split indexing
- [ ] Look for orphan pages — pages that exist but have ZERO internal links pointing to them. Cross-reference the sidebar config, navbar, and all markdown internal links against every page in the project
- [ ] Check for redirect loops or chains in any client-side redirects (`@docusaurus/plugin-client-redirects` config or custom redirects)
- [ ] Check if `<link rel="alternate" hreflang="x">` tags exist if the site is multilingual — misconfigured hreflang is a common indexing killer

### 1.2 Docusaurus-Specific Configuration Audit

- [ ] Review the full `docusaurus.config.js` and flag anything SEO-relevant:
  - `title`, `tagline` — are they keyword-optimized?
  - `url` — must be the canonical production URL (no trailing slash)
  - `baseUrl` — must match deployment path
  - `organizationName`, `projectName` — verify correctness
  - `themeConfig.metadata` — check global meta tags
  - `themeConfig.navbar` — verify all important pages are linked
  - `themeConfig.footer` — verify links (footer links = strong internal signals)
- [ ] Check if `@docusaurus/plugin-sitemap` is explicitly configured or using defaults. Check `changefreq`, `priority` values, and `ignorePatterns`
- [ ] Check if `@docusaurus/plugin-google-gtag` or `@docusaurus/plugin-google-tag-manager` is configured (needed for analytics)
- [ ] Check for `headTags` config in `docusaurus.config.js` — this is where structured data and verification meta tags should live
- [ ] Verify the site builds with `npm run build` and check the `/build` output for any pages that fail to render (SSR errors = blank pages to Google)

### 1.3 On-Page SEO Audit (scan ALL .md/.mdx files)

For every content page, check:

- [ ] **Title tags** — Does each page have a front matter `title`? Is it under 60 characters? Does it contain a primary keyword? Flag duplicates
- [ ] **Meta descriptions** — Does each page have a front matter `description`? Is it 120-160 characters? Is it compelling? Flag missing and duplicate descriptions
- [ ] **H1 tags** — Does each page have exactly one H1? (In Docusaurus, the `# Heading` or `title` front matter becomes H1.) Flag pages with 0 or 2+ H1s
- [ ] **Heading hierarchy** — Check that headings follow logical order (H1 > H2 > H3). Flag any that skip levels (H1 directly to H3)
- [ ] **Image alt text** — Find all images (`![](...)`, `<img>`, imported images). Flag any missing `alt` attributes
- [ ] **Internal links** — Count internal links per page. Flag pages with fewer than 3 internal links. Check for broken internal links (links to paths that don't exist)
- [ ] **External links** — Check that external links use `rel="noopener"` (Docusaurus does this by default, but verify custom components)
- [ ] **Content length** — Flag any pages with fewer than 300 words (thin content = indexing signal to Google that page isn't worth indexing)
- [ ] **Keyword in URL slug** — Check `slug` front matter or filename-derived URLs. Flag overly generic or meaningless slugs
- [ ] **Front matter `keywords` field** — Check if used. While not a ranking factor directly, Docusaurus uses these for `<meta name="keywords">`
- [ ] **`last_updated` / `date`** — Check if blog posts and docs have dates. Freshness signals matter

### 1.4 Performance & Core Web Vitals

- [ ] Check if images are optimized — look for large PNGs/JPGs that should be WebP/AVIF. Check if `@docusaurus/plugin-ideal-image` is used
- [ ] Check for heavy client-side JS — look at custom components, third-party scripts, or theme customizations that add bundle weight
- [ ] Check if the site uses `@docusaurus/faster` (Rspack-based build) for faster builds and smaller bundles
- [ ] Look for render-blocking resources in custom CSS/JS imports
- [ ] Check for lazy loading on images (`loading="lazy"`)

### 1.5 Structured Data / Rich Snippets

- [ ] Check if JSON-LD structured data exists anywhere (global head tags, custom components, blog posts)
- [ ] Check blog posts for `Article` or `BlogPosting` schema
- [ ] Check docs for `TechArticle` or `HowTo` schema if applicable
- [ ] Check if `BreadcrumbList` schema is generated (Docusaurus doesn't do this by default — it should be added)
- [ ] Check for `Organization` or `WebSite` schema on the homepage
- [ ] Check if FAQ pages have `FAQPage` schema

---

## PHASE 2 — INDEXING RECOVERY PLAN

Based on Phase 1 findings, produce a **specific, step-by-step plan** to get the 56 non-indexed pages indexed. Structure it as:

### 2.1 Root Cause Analysis

Categorize the likely non-indexed pages into buckets:
- **Blocked by robots/noindex** — pages explicitly told not to index
- **Thin content** — pages with < 300 words that Google deems low-value
- **Duplicate/canonical issues** — pages Google sees as duplicates of other pages
- **Orphan pages** — pages with no internal links (Google can't discover or doesn't trust them)
- **Crawl budget waste** — low-value pages (tag pages, empty categories, paginated archives) consuming crawl budget
- **Soft 404s** — pages that render but have no meaningful content

### 2.2 Concrete Fixes

For each bucket, write the **exact code changes** needed. Examples of what I expect:

```js
// docusaurus.config.js — fix trailing slash inconsistency
module.exports = {
  trailingSlash: false, // or true — pick one, be consistent
  // ...
};
```

```yaml
# Front matter fix for thin pages — example
---
title: "Primary Keyword — Secondary Context | Brand"
description: "A 140-character compelling description with target keyword naturally included."
keywords: [primary-keyword, secondary-keyword, long-tail-phrase]
---
```

```js
// Add BreadcrumbList structured data
// Show the exact Docusaurus swizzle or plugin approach
```

### 2.3 Internal Linking Overhaul

- Produce a specific internal linking map: which pages should link to which, and from where
- Identify the 10 most important pages ("money pages") and ensure each has 10+ internal links pointing to it
- Add contextual links within content bodies, not just sidebar/navbar

---

## PHASE 3 — TOP-5 POSITIONING STRATEGY

### 3.1 Content Gap Analysis

- Based on the existing content, identify topic clusters and their pillar pages
- Flag content gaps — topics the site SHOULD cover but doesn't
- Suggest 10 new pages/posts that would strengthen topical authority

### 3.2 On-Page Optimization Playbook

For the **20 most important pages**, produce a per-page optimization card:

```
PAGE: /docs/getting-started
CURRENT TITLE: "Getting Started"
OPTIMIZED TITLE: "Getting Started with [Product] — Quick Setup Guide (2025)"
CURRENT DESC: (missing)
OPTIMIZED DESC: "Learn how to set up [Product] in 5 minutes. Step-by-step installation, configuration, and your first [action]. Free and open source."
TARGET KEYWORD: "[product] getting started"
SECONDARY KEYWORDS: "[product] setup", "[product] installation guide", "how to install [product]"
INTERNAL LINKS TO ADD: link from /docs/intro, /blog/announcement, /docs/faq
CONTENT IMPROVEMENTS: Add a TL;DR section, add code examples, expand to 800+ words, add FAQ section at bottom with schema markup
```

### 3.3 Technical Quick Wins

List the 10 highest-impact, lowest-effort changes that can be shipped TODAY. Format:

| Priority | Fix | File(s) | Impact | Effort |
|----------|-----|---------|--------|--------|
| P0 | ... | ... | ... | ... |

---

## PHASE 4 — IMPLEMENTATION

After the audit and plan are complete, **implement all P0 and P1 fixes directly**. Make the code changes. Don't just report — fix.

For each change:
1. State what you're changing and why
2. Make the change
3. Verify it doesn't break the build (`npm run build`)

---

## OUTPUT FORMAT

Structure your entire response as:

1. **Audit Summary** — Executive summary of all findings, with severity ratings (🔴 Critical / 🟡 Warning / 🟢 Good)
2. **Detailed Findings** — Full audit results organized by the sections above
3. **Prioritized Fix List** — Every fix ranked by impact × effort, with exact code
4. **Indexing Recovery Checklist** — Step-by-step to recover the 56 pages
5. **Positioning Playbook** — Per-page optimization cards for top 20 pages
6. **Implementation Log** — What you changed, where, and verification results

**Be ruthlessly specific. No generic advice. Every recommendation must include the exact file path, the exact code change, and the expected SEO impact.**
