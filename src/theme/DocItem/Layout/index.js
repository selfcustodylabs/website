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
