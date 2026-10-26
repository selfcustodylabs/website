import React from "react";
import Link from "@docusaurus/Link";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import { formatDate } from "@site/src/data/guideFacts";
import styles from "./styles.module.css";

/**
 * A field note's header: the mono eyebrow a doc page has ("FIELD NOTES / date"),
 * then the title. Replaces the stock title, date and author avatars; every note
 * is published by Self Custody Labs, which the colophon under it says.
 */
export default function BlogPostItemHeader() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { title, permalink, date } = metadata;
  const Heading = isBlogPostPage ? "h1" : "h2";

  return (
    <header className={styles.header}>
      <p className={styles.eyebrow}>
        <Link to="/notes/">Field notes</Link>
        <time dateTime={date}>{formatDate(date)}</time>
      </p>
      <Heading className={styles.title}>
        {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
      </Heading>
    </header>
  );
}
