import React from "react";
import clsx from "clsx";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import { HtmlClassNameProvider, PageMetadata, ThemeClassNames } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";

import NotesTable from "@site/src/components/landing/NotesTable";
import { DEFAULT_PUBLISHER, SITE_URL } from "@site/src/data/schema/constants";
import styles from "@site/src/components/landing/landing.module.css";

/**
 * /notes/ as an index, like /learn/ and /guides/: a dated table of every note
 * rather than the stock stack of full posts. With postsPerPage "ALL" there is
 * one list page and no paginator.
 *
 * Replaces the stock BlogListPage/StructuredData too, which types every author
 * as a Person: the Blog's publisher is the one Organization, by @id.
 *
 * @param {object} props - from plugin-content-blog
 */
export default function BlogListPage({ metadata, items }) {
  const { blogTitle, blogDescription, permalink } = metadata;
  const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);
  const notes = items.map(({ content }) => ({
    permalink: withSlash(content.metadata.permalink),
    title: content.metadata.title,
    description: content.metadata.description,
    date: content.metadata.date,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}${withSlash(permalink)}`,
    url: `${SITE_URL}${withSlash(permalink)}`,
    name: blogTitle,
    description: blogDescription,
    publisher: DEFAULT_PUBLISHER,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    blogPost: notes.map((n) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${n.permalink}`,
      url: `${SITE_URL}${n.permalink}`,
      headline: n.title,
      datePublished: new Date(n.date).toISOString(),
    })),
  };

  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.wrapper.blogPages, ThemeClassNames.page.blogListPage)}
    >
      <PageMetadata title={blogTitle} description={blogDescription} />
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Layout>
        <main className={styles.page}>
          <p className={`scl-label ${styles.eyebrow}`}>Self Custody Labs</p>
          <h1 className={styles.title}>{blogTitle}</h1>
          <p className={styles.lede}>
            Dated notes on what changed on this site and why: recommendations we dropped, guides we
            rewrote, and how the site is built. Each one links to the pages it changed. Follow them
            by <a href="/notes/rss.xml">RSS</a> or <a href="/notes/atom.xml">Atom</a>.
          </p>
          <div className={styles.section}>
            <NotesTable notes={notes} />
          </div>
          <p className={styles.closing}>
            Something wrong in a note? <Link to="/about/">Tell us</Link> and we will correct it in
            public.
          </p>
        </main>
      </Layout>
    </HtmlClassNameProvider>
  );
}
