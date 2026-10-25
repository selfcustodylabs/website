import React from "react";
import Link from "@docusaurus/Link";

import styles from "./doc/ProgressIndicator.module.css";

/**
 * Where this page sits in a multi-step guide: "STEP 2 / 5 · BITCOIN NODE SETUP",
 * one segment per step (each a link to that step), and the name of the next
 * step. Rendered above the H1 by src/theme/DocItem/Content from
 * src/data/progressData.js; not meant to be placed by hand in MDX.
 *
 * @param {object} props
 * @param {number} props.current - 1-based index of this page
 * @param {string} props.title - guide name
 * @param {Array<{path: string, title: string}>} props.steps - every step in order
 */
export default function ProgressIndicator({ current, title, steps = [] }) {
  if (steps.length === 0) return null;
  const next = steps[current];

  return (
    <nav
      className={styles.wrap}
      aria-label={`${title}: step ${current} of ${steps.length}`}
      data-pagefind-ignore="all"
    >
      <p className={styles.label}>
        Step {current} / {steps.length} <span className={styles.dot}>·</span> {title}
      </p>
      <ol className={styles.steps}>
        {steps.map((step, i) => {
          const n = i + 1;
          const state = n < current ? styles.done : n === current ? styles.here : styles.todo;
          return (
            <li key={step.path} className={styles.step}>
              <Link
                to={step.path}
                className={`${styles.segment} ${state}`}
                aria-current={n === current ? "step" : undefined}
                title={`${n}. ${step.title}`}
              >
                <span className={styles.srOnly}>
                  Step {n}: {step.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      {next ? (
        <p className={styles.next}>
          Next: <Link to={next.path}>{next.title}</Link>
        </p>
      ) : null}
    </nav>
  );
}
