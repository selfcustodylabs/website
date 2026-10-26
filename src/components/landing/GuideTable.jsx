import React from "react";
import Link from "@docusaurus/Link";

import { formatDate } from "@site/src/data/guideFacts";
import { getProgressData } from "@site/src/data/progressData";
import styles from "./landing.module.css";

// A field the guide does not state. Never fill in a guess (a missing cost is
// not "Free").
const NONE = <span className={styles.none}>–</span>;

/**
 * Hands-on guides as a spec table: time, cost, level and the date the page
 * last changed, all read from each guide's `guide:` frontmatter and git (via
 * plugins/site-index), so the table and the guides cannot disagree.
 *
 * On a phone each row becomes a block with labelled values.
 *
 * @param {object} props
 * @param {Array<object>} props.guides - entries from siteIndex (permalink + doc fields)
 * @param {boolean} [props.detailed] - show each guide's description and page count
 */
export default function GuideTable({ guides, detailed = false }) {
  return (
    <table className={`${styles.table} ${styles.guideTable}`}>
      <thead>
        <tr>
          <th scope="col">Guide</th>
          <th scope="col">Time</th>
          <th scope="col">Cost</th>
          <th scope="col">Level</th>
          <th scope="col">Updated</th>
        </tr>
      </thead>
      <tbody>
        {guides.map((g) => {
          const progress = getProgressData(g.permalink);
          const pages = progress?.current === 1 ? progress.total : null;
          const verified = g.guide.verified && formatDate(g.guide.verified.date);
          const reviewed = formatDate(g.guide.reviewed);
          return (
            <tr key={g.permalink}>
              <th scope="row" className={styles.guideName}>
                <Link to={g.permalink} className={styles.rowLink}>
                  {g.title}
                </Link>
                {detailed ? <span className={styles.rowNote}>{g.description}</span> : null}
                {detailed && pages ? <span className={styles.rowMeta}>{pages} pages</span> : null}
              </th>
              <td data-label="Time">{g.guide.time ?? NONE}</td>
              <td data-label="Cost">{g.guide.cost ?? NONE}</td>
              <td data-label="Level">{g.guide.level ?? NONE}</td>
              <td data-label="Updated" className={styles.date}>
                {formatDate(g.updated) ?? NONE}
                {verified ? <span className={styles.check}>Verified {verified}</span> : null}
                {!verified && reviewed ? <span className={styles.check}>Reviewed {reviewed}</span> : null}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
