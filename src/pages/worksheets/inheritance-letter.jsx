import React from "react";

import Worksheet from "@site/src/components/worksheet/Worksheet";
import { Block, Field, Fields, Lines } from "@site/src/components/worksheet/parts";
import styles from "@site/src/components/worksheet/worksheet.module.css";

/** Step 6 of /docs/advanced/inheritance-planning/, with the answers left blank. */
const WHERE = [
  "Key 1 device",
  "Key 1 seed",
  "Key 2 device",
  "Key 2 seed",
  "Key 3 device",
  "Key 3 seed",
  "Wallet descriptor",
  "These instructions",
];

export default function InheritanceLetterWorksheet() {
  return (
    <Worksheet slug="inheritance-letter">
      <Block title="What you are inheriting">
        <p className={styles.note}>
          A ____ of ____ multisig bitcoin wallet. Any ____ of its ____ keys can move the funds.
        </p>
        <Lines count={1} />
      </Block>
      <Block title="What you need">
        <ol className={styles.note}>
          <li>Two of the hardware wallets, or their seed phrases.</li>
          <li>The wallet descriptor, kept at: ______________________________</li>
          <li>Sparrow Wallet, from sparrowwallet.com.</li>
        </ol>
      </Block>
      <Block title="How to reach the funds">
        <ol className={styles.note}>
          <li>Download Sparrow Wallet and check its signature.</li>
          <li>Choose File, Import Wallet, and load the wallet descriptor.</li>
          <li>Connect the first hardware wallet and check Sparrow recognises it.</li>
          <li>Connect the second hardware wallet.</li>
          <li>You can now see the balance and send transactions.</li>
        </ol>
      </Block>
      <Block title="Contacts">
        <Fields>
          <Field label="Lawyer: name and phone" />
          <Field label="Technical helper: name and phone" />
          <Field label="Where key 3 is" wide />
        </Fields>
      </Block>
      <Block title="If something goes wrong">
        <ul className={styles.note}>
          <li>Never give seed phrases to a "recovery service": they are scams.</li>
          <li>Contact the technical helper above before doing anything.</li>
          <li>Bitcoin cannot be "hacked": if the seeds are safe, the funds are safe.</li>
        </ul>
      </Block>
      <Block title="Where everything is">
        <table className={`${styles.grid} ${styles.compact}`}>
          <thead>
            <tr>
              <th scope="col" className={styles.left}>
                Item
              </th>
              <th scope="col" className={styles.left}>
                Where
              </th>
              <th scope="col" className={styles.left}>
                Who knows
              </th>
            </tr>
          </thead>
          <tbody>
            {WHERE.map((item) => (
              <tr key={item}>
                <th scope="row" className={styles.left}>
                  {item}
                </th>
                <td />
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </Block>
      <Block>
        <Fields>
          <Field label="Written on" />
          <Field label="Signed" />
        </Fields>
      </Block>
    </Worksheet>
  );
}
