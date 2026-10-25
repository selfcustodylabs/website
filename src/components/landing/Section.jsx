import React from "react";

import styles from "./landing.module.css";

/**
 * A titled block of a landing page: a mono caps heading on a rule, with an
 * optional link or note at the right end of the rule.
 *
 * @param {object} props
 * @param {string} props.id - anchor id for the heading
 * @param {React.ReactNode} props.title
 * @param {React.ReactNode} [props.aside]
 * @param {React.ReactNode} props.children
 */
export default function Section({ id, title, aside, children }) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={styles.sectionHead}>
        <h2 id={id} className={styles.sectionTitle}>
          {title}
        </h2>
        {aside ? <div className={styles.sectionAside}>{aside}</div> : null}
      </div>
      {children}
    </section>
  );
}
