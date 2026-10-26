import React from "react";

import Worksheet from "@site/src/components/worksheet/Worksheet";
import { Block, Boxes, Circle, Field, Fields } from "@site/src/components/worksheet/parts";
import styles from "@site/src/components/worksheet/worksheet.module.css";

const WORDS = [1, 2, 3, 4, 5, 6];
const DICE = [1, 2, 3, 4, 5];

export default function DicewarePassphraseWorksheet() {
  return (
    <Worksheet slug="diceware-passphrase">
      <p className={styles.note}>
        Roll five dice at once and read them left to right, one die per box. Find the five-digit
        number in the EFF long word list and write the word, in lowercase. Six words, and no
        rerolling a word you dislike.
      </p>
      <table className={styles.grid}>
        <thead>
          <tr>
            <th scope="col">#</th>
            {DICE.map((d) => (
              <th key={d} scope="col" className={styles.bit}>
                Die {d}
              </th>
            ))}
            <th scope="col">Word</th>
            <th scope="col" className={styles.lineNo}>
              Letters
            </th>
          </tr>
        </thead>
        <tbody>
          {WORDS.map((w) => (
            <tr key={w}>
              <th scope="row">{w}</th>
              {DICE.map((d) => (
                <td key={d} className={styles.bit} />
              ))}
              <td />
              <td />
            </tr>
          ))}
        </tbody>
      </table>
      <Block title="Length">
        <Fields>
          <Field label="Whole passphrase, with single spaces" hint="Characters, counting the spaces" />
          <Field label="Your device's passphrase limit" hint="Characters; check it before you rely on it" />
        </Fields>
      </Block>
      <Block title="Step 3: the test">
        <Fields>
          <Boxes label="Passphrase wallet, first receive address: first 8" count={8} />
          <Boxes label="Last 8" count={8} />
          <Circle label="Same address after typing the passphrase again from this sheet" />
          <Circle label="Test amount seen after entering it once more" />
          <Field label="Tested on" />
        </Fields>
      </Block>
    </Worksheet>
  );
}
