import React from "react";
import useBaseUrl, { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

import styles from "./Cover.module.css";

/**
 * The top of a landing page, set like the page's own OG card: the words on the
 * left (brand rule, amber eyebrow, H1, a short amber rule, the lede), the
 * evidence band running to the right edge of the screen, and a footer line
 * ending in the plate mark.
 *
 * @param {object} props
 * @param {string} props.eyebrow - section trail, as on the card ("Learn")
 * @param {React.ReactNode} props.title - the page's H1
 * @param {React.ReactNode} props.children - lede and actions
 * @param {React.ReactNode} [props.foot] - facts for the footer line
 * @param {string} props.plate - six hex digits of SHA-256 of the page path
 * @param {React.ReactNode} props.band - CoverMark or CoverMosaic
 */
export default function Cover({ eyebrow, title, children, foot, plate, band }) {
  return (
    <header className={styles.cover}>
      <div className={styles.words}>
        <p className={styles.brand}>Self Custody Labs</p>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.rule} aria-hidden="true" />
        {children}
        <div className={styles.foot}>
          <span className={styles.facts}>{foot}</span>
          <span
            className={styles.plate}
            title="Plate mark: the first six hex digits of SHA-256 of this page's path, as on every share card"
          >
            {plate}
          </span>
        </div>
      </div>
      <div className={styles.band}>{band}</div>
    </header>
  );
}

/**
 * The homepage band: the toned dice of the site's share card with the mark
 * over them, and the three things the site is about.
 *
 * @param {object} props
 * @param {string} props.photo - imported image URL
 * @param {string[]} props.lines
 */
export function CoverMark({ photo, lines }) {
  return (
    <>
      <img className={styles.photo} src={photo} alt="" width="900" height="1000" decoding="async" />
      <div className={styles.mark}>
        <img src={useBaseUrl("/img/logo.svg")} alt="" width="210" height="212" />
        <p>
          {lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
    </>
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
