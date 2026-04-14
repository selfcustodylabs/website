import React from "react";
import DocItemLayout from "@theme-original/DocItem/Layout";
import Head from "@docusaurus/Head";
import { useLocation } from "@docusaurus/router";
import {
  generateHowToSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateItemListSchema,
} from "@site/src/data/schema";
import { getCanonicalUrl } from "@site/src/data/canonical";
import { normalizePath } from "@site/src/utils/pathUtils";

export default function DocItemLayoutWrapper(props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);

  // Generate schemas for this page
  const howToSchema = generateHowToSchema(path);
  const breadcrumbSchema = generateBreadcrumbSchema(path);
  const articleSchema = generateArticleSchema(path);
  const faqSchema = generateFAQSchema(path);
  const itemListSchema = generateItemListSchema(path);

  // Override the default canonical on known duplicate pages so indexing
  // signal consolidates on the /docs/learn/* tree.
  const canonicalUrl = getCanonicalUrl(path);

  return (
    <>
      <Head>
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
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
