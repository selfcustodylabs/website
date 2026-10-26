import React from "react";

import { formatDate } from "@site/src/data/guideFacts";
import styles from "./doc/RevisionHistory.module.css";

const REPO = "https://github.com/selfcustodylabs/website";

/**
 * The last commits that changed this page, from plugins/revision-history, each
 * linked to its diff on GitHub, then a link to the page's full log. Commit
 * subjects are shown as written: they are the public record of what changed.
 *
 * @param {object} props
 * @param {{ hash: string, date: string, subject: string }[]} [props.revisions]
 * @param {string} [props.source] - repo-relative source path, e.g. "docs/learn/keys/seed.md"
 */
export default function RevisionHistory({ revisions, source }) {
  if (!revisions || revisions.length === 0) return null;
  return (
    <section className={styles.history} aria-labelledby="page-history" data-pagefind-ignore="all">
      <h2 id="page-history" className={styles.label}>
        Changes to this page
      </h2>
      <ol className={styles.list}>
        {revisions.map((r) => (
          <li key={r.hash}>
            <time dateTime={r.date}>{formatDate(r.date)}</time>
            <a href={`${REPO}/commit/${r.hash}`}>{r.subject}</a>
          </li>
        ))}
      </ol>
      {source ? (
        <p className={styles.all}>
          <a href={`${REPO}/commits/main/${source}`}>Full history on GitHub</a>
        </p>
      ) : null}
    </section>
  );
}
