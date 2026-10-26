import React from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";

import { guideFacts } from "@site/src/data/guideFacts";
import styles from "./doc/GuideFacts.module.css";

/**
 * The facts line of a hands-on guide (time, cost, level, reviewed or verified,
 * updated), from the page's `guide:` frontmatter. See src/data/guideFacts.js
 * for the fields and the rule on `verified`.
 *
 * Place it in MDX as `<GuideFacts />` after the opening paragraph, never
 * between the H1 and the answer (CLAUDE.md rule 7).
 */
export default function GuideFacts() {
  const { frontMatter, metadata } = useDoc();
  const { facts, needs } = guideFacts(frontMatter.guide, metadata.lastUpdatedAt);
  if (facts.length === 0 && !needs) return null;

  return (
    <div className={styles.wrap}>
      <dl className={styles.facts}>
        {facts.map(([label, value]) => (
          <div key={label} className={styles.fact}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      {needs ? (
        <p className={styles.needs}>
          <span className={styles.needsLabel}>You need</span> {needs}
        </p>
      ) : null}
    </div>
  );
}
