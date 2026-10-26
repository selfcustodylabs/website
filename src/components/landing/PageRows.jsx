import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { Dates, FactList, pageCount } from "./GuideSpec";
import styles from "./lists.module.css";

/**
 * Pages as rows: the OG card's band as a thumbnail, the page's H1 and the first
 * sentence of its opening answer. With `guides`, each row also carries the
 * guide's time, cost, level and dates.
 *
 * @param {object} props
 * @param {Array<object>} props.pages - siteIndex entries
 * @param {boolean} [props.guides] - rows are hands-on guides with `guide` facts
 */
export default function PageRows({ pages, guides = false }) {
  return (
    <ul className={`${styles.rows} ${guides ? styles.guideRows : ""}`}>
      {pages.map((page) => (
        <PageRow key={page.permalink} page={page} guides={guides} />
      ))}
    </ul>
  );
}

function PageRow({ page, guides }) {
  const pages = guides ? pageCount(page.permalink) : null;
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
        {pages ? <span className={styles.rowMeta}>{pages} pages</span> : null}
      </div>
      {guides ? (
        <FactList guide={page.guide} className={styles.rowFacts}>
          <div>
            <dt>Updated</dt>
            <dd className={styles.date}>
              <Dates page={page} />
            </dd>
          </div>
        </FactList>
      ) : null}
    </li>
  );
}
