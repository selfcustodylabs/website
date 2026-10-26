import React from "react";
import Link from "@docusaurus/Link";

import styles from "./lists.module.css";

/**
 * "Where are you starting from", drawn as a flow like the site's diagrams: the
 * situation, an amber wire to the page to start with (the subject), a grey
 * wire to the page after it.
 *
 * @param {object} props
 * @param {Array<{ situation: string, start: [string, string], then: [string, string] }>} props.routes
 *   each link is [permalink, label]
 */
export default function RouteFlow({ routes }) {
  return (
    <div className={styles.flow}>
      <div className={styles.flowHead} aria-hidden="true">
        <span>Situation</span>
        <span />
        <span>Start with</span>
        <span />
        <span>Then</span>
      </div>
      <ul>
        {routes.map((r) => (
          <li key={r.situation} className={styles.route}>
            <span className={styles.situation}>{r.situation}</span>
            <span className={`${styles.wire} ${styles.hot}`} aria-hidden="true" />
            <Link to={r.start[0]} className={`${styles.box} ${styles.hot}`}>
              <span className={styles.srOnly}>Start with </span>
              {r.start[1]}
            </Link>
            <span className={styles.wire} aria-hidden="true" />
            <Link to={r.then[0]} className={styles.box}>
              <span className={styles.srOnly}>then </span>
              {r.then[1]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
