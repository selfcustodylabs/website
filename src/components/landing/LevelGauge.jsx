import React from "react";

import styles from "./lists.module.css";

/** The five levels the guides use, easiest first. */
const STEPS = {
  beginner: 1,
  "beginner to intermediate": 2,
  intermediate: 3,
  "intermediate to advanced": 4,
  advanced: 5,
};

/**
 * A guide's level as text with a five-segment gauge in front of it, so levels
 * compare at a glance down a list. The gauge is decoration (the words carry the
 * meaning) and is left out for a level outside the five.
 *
 * @param {object} props
 * @param {string} props.level - the guide's `guide.level`
 */
export default function LevelGauge({ level }) {
  const steps = STEPS[level.toLowerCase()];
  return (
    <span className={styles.level}>
      {steps ? (
        <span className={styles.gauge} aria-hidden="true">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={i <= steps ? styles.on : undefined} />
          ))}
        </span>
      ) : null}
      {level}
    </span>
  );
}
