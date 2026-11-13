import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./lists.module.css";

/**
 * Pages as rows (/learn/): the OG card's band as a thumbnail, the page's H1 and
 * the first sentence of its opening answer.
 *
 * @param {object} props
 * @param {Array<object>} props.pages - siteIndex entries
 */
export default function PageRows({ pages }) {
  return (
    <ul className={styles.rows}>
      {pages.map((page) => (
        <PageRow key={page.permalink} page={page} />
      ))}
    </ul>
  );
}

function PageRow({ page }) {
  return (
    <li className={styles.row}>
      <img
        className={styles.thumb}
        src={useBaseUrl(page.band)}
        alt=""
        width="451"
        height="630"
        loading="lazy"
        decoding="async"
      />
      <div className={styles.rowText}>
        <h3 className={styles.rowName}>
          <Link to={page.permalink}>{page.name}</Link>
        </h3>
        <p className={styles.rowLead}>{page.lead}</p>
      </div>
    </li>
  );
}
