# Phase 3 — Structured-Data Backfill + Phase 1 Cleanup

**Date:** 2026-04-15
**Status:** Approved design, implementation plan locked

## Pre-implementation corrections

A validation pass against the Docusaurus type definitions and Google's Search Central docs found three inaccuracies in the original architecture. They are corrected below and the relevant component sections have been updated:

1. **`breadcrumbs` is NOT on `props.content.metadata`.** Docusaurus exposes the breadcrumb chain via the `useSidebarBreadcrumbs()` hook from `@docusaurus/plugin-content-docs/client`, not via metadata. The `breadcrumbs: true` config flag is already enabled at [docusaurus.config.js:233](../../../docusaurus.config.js#L233).
2. **Google deprecated the sitelinks search box on 2024-10-21** (effective 2024-11-21). `SearchAction` in WebSite schema is dead code. The WebSite schema itself still ships for general site-identity signal, but without `potentialAction`.
3. **Auto-deriving `articleSection` from `frontMatter.tags[0]` won't match manual labels.** Sampled tags (e.g., `"getting started"`, `"bitcoin"`, `"glossary"`) don't correspond to the manual semantic labels (e.g., `"Bitcoin Fundamentals"`, `"Wallets"`, `"Reference"`). Auto-derived Article schemas omit `articleSection` entirely (Schema.org optional). Manual overrides keep theirs.

## Context

Phase 2 (duplicate-content consolidation) shipped on 2026-04-15. The post-Phase-2 SEO audit surfaced two unrelated gaps:

1. **Dead Phase 1 code.** The `<link rel="canonical">` workaround introduced in Phase 1 is no longer needed — every duplicate URL is now a 301 to its canonical via `@docusaurus/plugin-client-redirects`. The swizzled `DocItem/Layout` wrapper still imports `getCanonicalUrl` from a now-empty `canonical.js`, and that map is still maintained by the same wrapper. It's pure dead weight that adds confusion.

2. **Structured-data coverage gaps.** Article schema is hand-maintained in `src/data/schema/article.js` and BreadcrumbList in `src/data/schema/breadcrumb.js`. Both are per-path maps that drift the moment a new doc lands. The audit found 31 docs missing Article and 12 index pages missing BreadcrumbList. Plus: there's currently no `Organization` or `WebSite/SearchAction` schema on the homepage at all, no FAQPage on the 3 individual FAQ pages, and no HowTo for inheritance-planning.

The fix isn't a one-time backfill — that just resets the drift counter. The fix is to **derive schema from the metadata Docusaurus already computes** (frontmatter title/description, `metadata.breadcrumbs`) and keep the manual maps as overrides for special cases. After Phase 3, adding a new doc auto-emits Article + Breadcrumb without touching any map.

## Goal

Backfill the missing structured data, retire dead Phase 1 code, and convert Article + Breadcrumb from hand-maintained maps to derive-with-overrides so future docs get coverage automatically.

## Architecture

All schema injection continues through the existing swizzled `DocItem/Layout` wrapper at [src/theme/DocItem/Layout/index.js](../../../src/theme/DocItem/Layout/index.js). The wrapper's logic shifts from "look up in map, return null if absent" to "look up in map, fall back to derived schema if absent."

The homepage gets its own `<Head>` block in [src/pages/index.js](../../../src/pages/index.js) since it's not a doc and doesn't go through the DocItem wrapper.

```
Doc page renders
  → DocItem/Layout wrapper
  → reads props.content.metadata { title, description, frontMatter, breadcrumbs }
  → for each schema type:
      1. check manual map for path
      2. if found → use override
      3. else → derive from metadata
  → emit JSON-LD <script> tags in <Head>

Homepage renders
  → src/pages/index.js
  → emits Organization + WebSite/SearchAction schemas via <Head>
```

## Components

### C1 — Delete dead Phase 1 canonical code

**Files modified:**
- [src/theme/DocItem/Layout/index.js](../../../src/theme/DocItem/Layout/index.js): remove `getCanonicalUrl` import and the `{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}` line
- [src/data/canonical.js](../../../src/data/canonical.js): delete

**Verification:** `npm run build` clean. Grep `build/docs/advanced/multisig/index.html` for `canonical` — should still emit one (Docusaurus's default), pointing at `/docs/learn/wallets/multisig/` via the redirect plugin's shim. Phase 2 redirects still functional.

---

### C2 — Add Organization + WebSite generators, wire homepage

**Files created:**
- [src/data/schema/organization.js](../../../src/data/schema/organization.js): exports `generateOrganizationSchema()` and `generateWebSiteSchema()`. The WebSite schema includes `name`, `url`, `description`, and `publisher` — but **no** `potentialAction` (Google deprecated the sitelinks search box on 2024-11-21).

**Files modified:**
- [src/data/schema/index.js](../../../src/data/schema/index.js): re-export the two new generators
- [src/pages/index.js](../../../src/pages/index.js): import `Head` and the two generators; emit both as JSON-LD `<script>` tags inside a `<Head>` block

**Verification:** Grep `build/index.html` for `"@type":"Organization"` and `"@type":"WebSite"` — both present. Validate via Google's Rich Results Test on the deployed homepage.

---

### C3 — Auto-derive Article schema, fix duplicate

**Files modified:**
- [src/theme/DocItem/Layout/index.js](../../../src/theme/DocItem/Layout/index.js): build a `deriveArticleSchema(metadata, path)` helper that returns an Article schema using `metadata.title` for `headline` and `metadata.description` for `description`. **`articleSection` is omitted from auto-derived schemas** (Schema.org optional, manual overrides keep theirs). Always sets `author`, `publisher`, and `mainEntityOfPage` from the existing `DEFAULT_ORGANIZATION`/`DEFAULT_PUBLISHER`/`SITE_URL` constants. The wrapper calls `generateArticleSchema(path) ?? deriveArticleSchema(props.content.metadata, path)`.
- [src/data/schema/article.js](../../../src/data/schema/article.js): keep `generateArticleSchema(path)` for compatibility but treat it as override-only. Remove the duplicate `/docs/learn/wallets/multisig/` entry — keep the second one ("Bitcoin Multisig Setup Guide", articleSection "Learn") since it's the more accurate label for the canonical URL post-Phase-2.

**Verification:** Pick 3 docs that previously had no Article schema (e.g., `/docs/reference/faq/lost-seed/`, `/docs/learn/keys/random/`, `/docs/wallet-setup/hardware-wallet/`). Grep their built HTML for `"@type":"Article"` — present. Spot-check the derived `headline`, `description`, and `articleSection` look reasonable.

---

### C4 — Auto-derive BreadcrumbList

**Files modified:**
- [src/theme/DocItem/Layout/index.js](../../../src/theme/DocItem/Layout/index.js): import `useSidebarBreadcrumbs` from `@docusaurus/plugin-content-docs/client` and call it inside the wrapper component body. Build a `deriveBreadcrumbSchema(breadcrumbsFromHook, path)` helper that converts the chain into a `BreadcrumbList` JSON-LD with one `ListItem` per parent (using `breadcrumb.href` for `item` and `breadcrumb.label` for `name`). The wrapper calls `generateBreadcrumbSchema(path) ?? deriveBreadcrumbSchema(sidebarBreadcrumbs, path)`. Falls back to `null` if the hook returns null (no sidebar).
- [src/data/schema/breadcrumb.js](../../../src/data/schema/breadcrumb.js): no shape changes; the existing map continues to work as override storage.
- [docusaurus.config.js](../../../docusaurus.config.js): `breadcrumbs: true` already enabled at line 233 — no change needed.

**Verification:** Pick 3 index pages that previously had no Breadcrumb (any of the 12 from the audit). Grep their built HTML for `"@type":"BreadcrumbList"` — present. Validate one via the Rich Results Test.

---

### C5 — Add HowTo + FAQPage manual entries

**Files modified:**
- [src/data/schema/howTo.js](../../../src/data/schema/howTo.js): add a hand-curated entry for `/docs/advanced/inheritance-planning/` following the same pattern as the existing Multisig entry. Step URLs use heading anchors on the page.
- [src/data/schema/faq.js](../../../src/data/schema/faq.js): add 3 FAQPage entries — one per individual FAQ page (the FAQ hub already has one). Each entry hand-curates Q&A pairs from the page content.

These stay manual because each requires curated step/Q&A content that can't be derived from frontmatter.

**Verification:** Build, then grep the 4 built HTML files for `"@type":"HowTo"` / `"@type":"FAQPage"` — present. Validate via Rich Results Test.

---

## Out of scope (deferred)

- Title length sweep (6 titles > 60 chars): content edit, separate fast-follow PR
- Description length sweep (4 short, 2 long): same
- `lastmod` on 6 category pages: docusaurus.config.js sitemap config tweak
- Per-page OG images
- Author bylines for E-E-A-T
- Hero.jsx image-dimension audit
- Host-level trailing-slash verification on production

These are all valid SEO improvements but they're content/config nitpicks that don't share files or risk profile with the schema changes. Bundling them would inflate the review surface for no benefit.

## Verification (end-to-end)

After all 5 commits land:

1. `npm run build` clean
2. **Spot-check homepage:** `build/index.html` contains both `Organization` and `WebSite` JSON-LD blocks
3. **Spot-check 3 docs that previously had no Article schema:** built HTML now contains `Article` + `BreadcrumbList` blocks
4. **Spot-check 3 docs that already had manual Article entries:** the override still wins (compare the headline)
5. **Spot-check inheritance-planning:** built HTML contains a `HowTo` block
6. **Spot-check the 3 individual FAQ pages:** each contains a `FAQPage` block
7. **No regressions on Phase 2:** `build/docs/advanced/multisig/index.html` still emits a redirect shim pointing at `/docs/learn/wallets/multisig/`
8. **Live validation:** after deploy, run 3 representative URLs through Google's Rich Results Test

## Critical files

- [src/theme/DocItem/Layout/index.js](../../../src/theme/DocItem/Layout/index.js) — modified in C1, C3, C4
- [src/data/canonical.js](../../../src/data/canonical.js) — deleted in C1
- [src/data/schema/organization.js](../../../src/data/schema/organization.js) — created in C2
- [src/data/schema/index.js](../../../src/data/schema/index.js) — modified in C2
- [src/pages/index.js](../../../src/pages/index.js) — modified in C2
- [src/data/schema/article.js](../../../src/data/schema/article.js) — modified in C3
- [src/data/schema/breadcrumb.js](../../../src/data/schema/breadcrumb.js) — referenced in C4 (no changes needed)
- [src/data/schema/howTo.js](../../../src/data/schema/howTo.js) — modified in C5
- [src/data/schema/faq.js](../../../src/data/schema/faq.js) — modified in C5

## Commit sequence

1. `seo(phase3-c1): delete dead Phase 1 canonical injection`
2. `seo(phase3-c2): add Organization + WebSite schemas to homepage`
3. `seo(phase3-c3): auto-derive Article schema from doc metadata`
4. `seo(phase3-c4): auto-derive BreadcrumbList from doc metadata`
5. `seo(phase3-c5): add HowTo + FAQPage manual schema entries`

Each commit is independently revertable. C1 ships first to prove the redirect plugin alone is sufficient before any new schema work layers on top.
