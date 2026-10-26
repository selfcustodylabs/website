import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import { getWorksheet } from "@site/src/data/worksheets";
import styles from "./worksheet.module.css";

/**
 * One printable worksheet page: on screen, what the sheet is for, its guide,
 * and the print and PDF links; then the sheet itself, which is all that prints.
 * The PDFs are printed from this page by scripts/build-worksheets.mjs.
 *
 * @param {object} props
 * @param {string} props.slug - key in src/data/worksheets.js
 * @param {React.ReactNode} props.children - the form
 */
export default function Worksheet({ slug, children }) {
  const sheet = getWorksheet(slug);
  const [guideHref, guideLabel] = sheet.guide;

  return (
    <Layout title={sheet.title} description={sheet.description}>
      <main className={styles.page}>
        <div className={styles.intro}>
          <p className={`scl-label ${styles.eyebrow}`}>
            <Link to="/worksheets/">Worksheets</Link>
          </p>
          <h1 className={styles.title}>{sheet.heading}</h1>
          <p className={styles.lede}>
            {sheet.use} The guide, <Link to={guideHref}>{guideLabel}</Link>, explains each step.
            This is a paper form: print it and fill it in by hand.
          </p>
          <p className={styles.actions}>
            <button type="button" className={styles.print} onClick={() => window.print()}>
              Print
            </button>
            <a href={`/worksheets/${slug}-a4.pdf`}>PDF, A4</a>
            <a href={`/worksheets/${slug}-letter.pdf`}>PDF, US Letter</a>
          </p>
        </div>

        <article className={styles.sheet} aria-label={sheet.heading}>
          <header className={styles.sheetHead}>
            <span className={styles.brand}>Self Custody Labs</span>
            <span className={styles.sheetTitle}>{sheet.heading}</span>
          </header>
          {sheet.warning ? <p className={styles.warning}>{sheet.warning}</p> : null}
          {children}
          <footer className={styles.sheetFoot}>
            <span>Instructions: selfcustodylabs.com{guideHref}</span>
            <span>selfcustodylabs.com/worksheets/{slug}/</span>
          </footer>
        </article>
      </main>
    </Layout>
  );
}
