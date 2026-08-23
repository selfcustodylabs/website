import React from "react";
import DocItemLayout from "@theme-original/DocItem/Layout";
import Head from "@docusaurus/Head";
import { useLocation } from "@docusaurus/router";
import { useDoc, useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateItemListSchema,
} from "@site/src/data/schema";
import {
  SITE_URL,
  DEFAULT_ORGANIZATION,
  DEFAULT_PUBLISHER,
} from "@site/src/data/schema/constants";
import { normalizePath } from "@site/src/utils/pathUtils";
import ogManifest from "@site/src/data/ogManifest.json";

function deriveBreadcrumbSchema(sidebarBreadcrumbs) {
  if (!sidebarBreadcrumbs || sidebarBreadcrumbs.length === 0) return null;

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];

  sidebarBreadcrumbs.forEach((crumb, index) => {
    if (!crumb.label) return;
    const item = {
      "@type": "ListItem",
      position: index + 2,
      name: crumb.label,
    };
    if (crumb.href) {
      item.item = `${SITE_URL}${crumb.href}`;
    }
    items.push(item);
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

/**
 * Convert Docusaurus's last-updated stamp to an ISO 8601 date.
 *
 * `lastUpdatedAt` is milliseconds in Docusaurus 3, and it comes from git, so it
 * is only correct in a production build: the dev server leaves a placeholder
 * behind in .docusaurus. Anything that does not land in a plausible year is
 * dropped rather than published, since a wrong date is worse than no date.
 *
 * @param {number|undefined} timestamp - milliseconds since epoch
 * @returns {string|null} ISO 8601 string, or null if unusable
 */
function toIsoDate(timestamp) {
  if (typeof timestamp !== "number" || !Number.isFinite(timestamp)) return null;
  const date = new Date(timestamp);
  const year = date.getUTCFullYear();
  if (year < 2020 || year > 2100) return null;
  return date.toISOString();
}

/**
 * Add the fields every Article shares, whichever generator produced it.
 *
 * Freshness is a primary input to how AI assistants rank sources, and this site
 * covers a fast-moving subject: an answer about the 2026 Coldcard entropy
 * incident should be able to tell how recently the page was revised.
 *
 * `datePublished` is only emitted when a doc declares a `date` in frontmatter.
 * Docusaurus exposes no creation date, and claiming last-modified as the
 * publication date would be a fabricated fact in structured data.
 *
 * @param {Object|null} schema - Article schema from either generator
 * @param {Object} metadata - doc metadata from useDoc()
 * @returns {Object|null} enriched schema
 */
function enrichArticleSchema(schema, metadata) {
  if (!schema) return null;

  const enriched = {
    ...schema,
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  const modified = toIsoDate(metadata?.lastUpdatedAt);
  if (modified) enriched.dateModified = modified;

  const published = metadata?.frontMatter?.date;
  if (published) enriched.datePublished = new Date(published).toISOString();

  const keywords = metadata?.frontMatter?.keywords;
  if (Array.isArray(keywords) && keywords.length > 0) {
    enriched.keywords = keywords.join(", ");
  }

  return enriched;
}

function deriveArticleSchema(metadata, path) {
  if (!metadata?.title || !metadata?.description) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    author: DEFAULT_ORGANIZATION,
    publisher: DEFAULT_PUBLISHER,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };
}

export default function DocItemLayoutWrapper(props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);
  const { metadata } = useDoc();
  const sidebarBreadcrumbs = useSidebarBreadcrumbs();

  const howToSchema = generateHowToSchema(path);
  const breadcrumbSchema =
    generateBreadcrumbSchema(path) ?? deriveBreadcrumbSchema(sidebarBreadcrumbs);
  const articleSchema = enrichArticleSchema(
    generateArticleSchema(path) ?? deriveArticleSchema(metadata, path),
    metadata,
  );
  const faqSchema = generateFAQSchema(path);
  const itemListSchema = generateItemListSchema(path);
  const ogImagePath = ogManifest[path];
  const ogImageUrl = ogImagePath ? `${SITE_URL}${ogImagePath}` : null;

  return (
    <>
      <Head>
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        {ogImageUrl && <meta name="twitter:image" content={ogImageUrl} />}
        {howToSchema && (
          <script type="application/ld+json">{JSON.stringify(howToSchema, null, 0)}</script>
        )}
        {articleSchema && (
          <script type="application/ld+json">{JSON.stringify(articleSchema, null, 0)}</script>
        )}
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema, null, 0)}</script>
        )}
        {itemListSchema && (
          <script type="application/ld+json">{JSON.stringify(itemListSchema, null, 0)}</script>
        )}
        {breadcrumbSchema && (
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema, null, 0)}</script>
        )}
      </Head>
      <DocItemLayout {...props} />
    </>
  );
}
