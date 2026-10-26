import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

import { worksheets } from "@site/src/data/worksheets";
import { absolute } from "@site/src/components/landing/siteIndex";
import styles from "@site/src/components/landing/landing.module.css";

const TITLE = "Printable Bitcoin Self-Custody Worksheets";
const DESCRIPTION =
  "Printable worksheets for the parts of self-custody done on paper: a dice seed grid, a passphrase sheet, a multisig record, backup and deposit checks.";

export default function WorksheetsIndex() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Printable worksheets",
    description: DESCRIPTION,
    url: absolute("/worksheets/"),
    isPartOf: { "@id": "https://selfcustodylabs.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: worksheets.map((w, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: w.heading,
        url: absolute(`/worksheets/${w.slug}/`),
      })),
    },
  };

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <main className={styles.page}>
        <p className={`scl-label ${styles.eyebrow}`}>Self Custody Labs</p>
        <h1 className={styles.title}>Worksheets</h1>
        <p className={styles.lede}>
          Paper forms for the parts of self-custody that happen at a desk, away from a computer:
          the dice grid for a seed you make yourself, a passphrase sheet, a multisig record, a
          backup test, the checks before a first deposit, and a letter for your heirs. Print one
          from its page, or download it as a PDF in A4 or US Letter. Nothing is typed into this
          site: every sheet is filled in by hand.
        </p>
        <div className={styles.section}>
          <table className={`${styles.table} ${styles.contentsTable}`}>
            <thead>
              <tr>
                <th scope="col">Worksheet</th>
                <th scope="col">What it is for</th>
              </tr>
            </thead>
            <tbody>
              {worksheets.map((w) => (
                <tr key={w.slug}>
                  <th scope="row">
                    <Link to={`/worksheets/${w.slug}/`} className={styles.rowLink}>
                      {w.heading}
                    </Link>
                    <span className={styles.rowMeta}>
                      <a href={`/worksheets/${w.slug}-a4.pdf`}>A4</a> ·{" "}
                      <a href={`/worksheets/${w.slug}-letter.pdf`}>Letter</a>
                    </span>
                  </th>
                  <td>
                    {w.description} Guide: <Link to={w.guide[0]}>{w.guide[1]}</Link>.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
