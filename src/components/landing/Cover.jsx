import React from "react";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

import styles from "./Cover.module.css";

/**
 * The top of a landing page: the words on the left (amber eyebrow, H1, the
 * lede and actions, then a facts line set like a guide's), and the evidence
 * band on the right, both inside the same wrap as the content below. The
 * navbar above carries the name and the mark, so the cover repeats neither.
 *
 * @param {object} props
 * @param {string} props.eyebrow - the label above the H1 ("Learn")
 * @param {React.ReactNode} props.title - the page's H1
 * @param {React.ReactNode} props.children - lede and actions
 * @param {Array<{ label: string, value: React.ReactNode }>} [props.facts] - the facts line
 * @param {React.ReactNode} props.band - CoverPath or CoverMosaic
 */
export default function Cover({ eyebrow, title, children, facts = [], band }) {
  return (
    <header className={styles.cover}>
      <div className={styles.inner}>
        <div className={styles.words}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          {children}
          {facts.length > 0 ? (
            <div className={styles.foot}>
              <dl className={styles.facts}>
                {facts.map(({ label, value }) => (
                  <div key={label} className={styles.fact}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
        </div>
        <div className={styles.band}>{band}</div>
      </div>
    </header>
  );
}

/**
 * A landing page's band built from the bands of the pages it lists: the set,
 * three across.
 *
 * @param {object} props
 * @param {string[]} props.bands - band image paths from siteIndex
 */
export function CoverMosaic({ bands }) {
  const { withBaseUrl } = useBaseUrlUtils();
  return (
    <div
      className={styles.mosaic}
      style={{ gridTemplateRows: `repeat(${Math.ceil(bands.length / 3)}, 1fr)` }}
    >
      {bands.map((band) => (
        <img key={band} src={withBaseUrl(band)} alt="" width="451" height="630" decoding="async" />
      ))}
    </div>
  );
}
