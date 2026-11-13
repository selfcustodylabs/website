import React from "react";

import styles from "./landing.module.css";

/**
 * A titled block of a landing page, headed as in the Feryx docs: a mono caps
 * eyebrow and the H2 on the left, a one-line description on the right, over a
 * rule. `number` is for sections that are a real sequence (the homepage's
 * four steps, /learn/'s reading order); leave it out everywhere else.
 *
 * @param {object} props
 * @param {string} props.id - anchor id for the heading
 * @param {string} [props.number] - "01", "02", ...
 * @param {React.ReactNode} props.eyebrow
 * @param {React.ReactNode} props.title
 * @param {React.ReactNode} [props.description]
 * @param {React.ReactNode} props.children
 */
export default function Section({ id, number, eyebrow, title, description, children }) {
  return (
    <section className={styles.block} aria-labelledby={id}>
      <div className={styles.blockHead}>
        <div className={styles.blockHeading}>
          <p className={styles.blockEyebrow}>
            {number ? (
              <>
                <span className={styles.blockNumber}>{number}</span>
                <span aria-hidden="true">·</span>
              </>
            ) : null}
            {eyebrow}
          </p>
          <h2 id={id} className={styles.blockTitle}>
            {title}
          </h2>
        </div>
        {description ? <p className={styles.blockDescription}>{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
