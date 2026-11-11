import React from "react";
import CodeBlock from "@theme/CodeBlock";
import useBaseUrl from "@docusaurus/useBaseUrl";

import donation from "@site/src/data/donation.json";
import styles from "./DonationAddress.module.css";

/**
 * The donation address on /donate/: the address as a code block (for the
 * theme's copy button) and its facts, with the QR code beside it.
 *
 * The address comes only from src/data/donation.json. The QR is a committed
 * file generated from the same JSON by scripts/generate-donate-qr.py, and
 * `npm run check` fails if the QR or the signed statement names another one.
 */
export default function DonationAddress() {
  const fpr = donation.pgpFingerprint.match(/.{4}/g).join(" ");
  return (
    <div className={styles.donation}>
      <div className={styles.words}>
        <p className={styles.label}>Bitcoin address</p>
        <CodeBlock language="text">{donation.address}</CodeBlock>
        <dl className={styles.facts}>
          <div className={styles.fact}>
            <dt>Network</dt>
            <dd>Bitcoin, on-chain only</dd>
          </div>
          <div className={styles.fact}>
            <dt>Signed statement</dt>
            <dd>
              <a href={useBaseUrl("/donate.txt.asc")}>donate.txt.asc</a>
            </dd>
          </div>
          <div className={styles.fact}>
            <dt>Key</dt>
            <dd className={styles.mono}>{fpr}</dd>
          </div>
        </dl>
      </div>
      <img
        className={styles.qr}
        src={useBaseUrl("/img/donate-qr.svg")}
        width="246"
        height="246"
        alt={`QR code for the payment link bitcoin:${donation.address}.`}
      />
    </div>
  );
}
