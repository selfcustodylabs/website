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

  return (
    <>
      <Head>
        {/* Inject HowTo schema if available (for guide pages) */}
        {howToSchema && (
          <script type="application/ld+json">{JSON.stringify(howToSchema, null, 0)}</script>
        )}
        {/* Inject Article schema if available (for learn/educational pages) */}
        {articleSchema && (
          <script type="application/ld+json">{JSON.stringify(articleSchema, null, 0)}</script>
        )}
        {/* Inject FAQ schema if available (for FAQ pages) */}
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema, null, 0)}</script>
        )}
        {/* Inject ItemList schema if available (for hub/index pages) */}
        {itemListSchema && (
          <script type="application/ld+json">{JSON.stringify(itemListSchema, null, 0)}</script>
        )}
        {/* Inject Breadcrumb schema if available */}
        {breadcrumbSchema && (
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema, null, 0)}</script>
        )}
      </Head>
      <DocItemLayout {...props} />
    </>
  );
}
