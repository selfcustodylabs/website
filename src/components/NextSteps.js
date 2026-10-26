import React from "react";
import Link from "@docusaurus/Link";

import styles from "./doc/NextSteps.module.css";

/**
 * "Where next": the links at the end of a doc, from src/data/nextStepsData.js.
 * A plain list, a mono label per row, no cards.
 *
 * @param {object} props
 * @param {Array<{label: string, title: string, href: string, description?: string}>} props.items
 */
export default function NextSteps({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <section className={styles.wrap} aria-labelledby="where-next" data-pagefind-ignore="all">
      <h2 id="where-next" className={styles.heading}>
        Where next
      </h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href} className={styles.row}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.body}>
              <Link to={item.href} className={styles.title}>
                {item.title}
              </Link>
              {item.description ? <span className={styles.desc}>{item.description}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
