import React from "react";

import { formatDate } from "@site/src/data/guideFacts";
import { getProgressData } from "@site/src/data/progressData";
import LevelGauge from "./LevelGauge";
import styles from "./lists.module.css";

// A field the guide does not state. Never fill in a guess (a missing cost is
// not "Free").
const NONE = <span className={styles.none}>–</span>;

/** Page count of a guide that runs over several pages, on its first page; else null. */
export function pageCount(permalink) {
  const progress = getProgressData(permalink);
  return progress?.current === 1 ? progress.total : null;
}

/**
 * Time, cost and level from a guide's `guide:` frontmatter, as a labelled list.
 * Shared by the guide cards and the /guides/ rows, so the two cannot disagree.
 *
 * @param {object} props
 * @param {object} props.guide - the `guide` block of a siteIndex entry
 * @param {string} [props.className]
 * @param {React.ReactNode} [props.children] - further dt/dd pairs, each in a div
 */
export function FactList({ guide, className, children }) {
  return (
    <dl className={`${styles.facts} ${className ?? ""}`}>
      <div>
        <dt>Time</dt>
        <dd>{guide.time ?? NONE}</dd>
      </div>
      <div>
        <dt>Cost</dt>
        <dd>{guide.cost ?? NONE}</dd>
      </div>
      <div>
        <dt>Level</dt>
        <dd>{guide.level ? <LevelGauge level={guide.level} /> : NONE}</dd>
      </div>
      {children}
    </dl>
  );
}

/**
 * The date the page last changed (git), and the verified or reviewed date when
 * the guide has one. Verified means done on real hardware; reviewed means the
 * sources were re-checked.
 *
 * @param {object} props
 * @param {object} props.page - a siteIndex entry with a `guide` block
 */
export function Dates({ page }) {
  const verified = page.guide.verified && formatDate(page.guide.verified.date);
  const reviewed = formatDate(page.guide.reviewed);
  return (
    <>
      {formatDate(page.updated) ?? NONE}
      {verified ? <span className={styles.check}>Verified {verified}</span> : null}
      {!verified && reviewed ? <span className={styles.check}>Reviewed {reviewed}</span> : null}
    </>
  );
}
