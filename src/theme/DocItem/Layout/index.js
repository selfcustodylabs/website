import React from "react";
import DocItemLayout from "@theme-original/DocItem/Layout";
import Head from "@docusaurus/Head";
import { useLocation } from "@docusaurus/router";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
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

  const howToSchema = generateHowToSchema(path);
  const breadcrumbSchema = generateBreadcrumbSchema(path);
  const articleSchema =
    generateArticleSchema(path) ?? deriveArticleSchema(metadata, path);
  const faqSchema = generateFAQSchema(path);
  const itemListSchema = generateItemListSchema(path);

  return (
    <>
      <Head>
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
