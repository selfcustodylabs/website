import React from "react";
import Head from "@docusaurus/Head";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import ogManifest from "@site/src/data/ogManifest.json";
import { DEFAULT_ORGANIZATION, DEFAULT_PUBLISHER, SITE_URL } from "@site/src/data/schema/constants";

/** Git timestamp (ms) as ISO 8601, or null outside 2020-2100 (the dev server's placeholder). */
function toIsoDate(timestamp) {
  if (typeof timestamp !== "number" || !Number.isFinite(timestamp)) return null;
  const date = new Date(timestamp);
  const year = date.getUTCFullYear();
  return year < 2020 || year > 2100 ? null : date.toISOString();
}

/**
 * BlogPosting JSON-LD and the OG card for a field note.
 *
 * Replaces the stock component, which types every author as a Person: a note
 * is bylined to Self Custody Labs, so author and publisher are the one
 * Organization, by the same @id every doc's Article uses. The OG card comes
 * from src/data/ogManifest.json like a doc's, keyed on the permalink.
 */
export default function BlogPostStructuredData() {
  const { metadata } = useBlogPost();
  const { permalink, title, description, date, lastUpdatedAt, frontMatter } = metadata;
  // The blog plugin's permalinks have no trailing slash; the built URL, the
  // canonical and the manifest keys all do.
  const path = permalink.endsWith("/") ? permalink : `${permalink}/`;
  const url = `${SITE_URL}${path}`;
  const og = ogManifest[path];
  const image = og ? `${SITE_URL}${og}` : null;
  const modified = toIsoDate(lastUpdatedAt);
  const keywords = frontMatter?.keywords;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: url,
    url,
    headline: title,
    description,
    datePublished: new Date(date).toISOString(),
    ...(modified && { dateModified: modified }),
    author: DEFAULT_ORGANIZATION,
    publisher: DEFAULT_PUBLISHER,
    ...(image && { image }),
    ...(Array.isArray(keywords) && keywords.length > 0 && { keywords: keywords.join(", ") }),
    isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/notes/`, name: "Field notes" },
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };

  return (
    <Head>
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image" content={image} />}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
}
