import React from "react";

import Worksheet from "@site/src/components/worksheet/Worksheet";
import { Block, Boxes, Fields } from "@site/src/components/worksheet/parts";
import styles from "@site/src/components/worksheet/worksheet.module.css";

/** Column values for step 2's paper method, left to right. */
const POWERS = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
const ROWS = Array.from({ length: 24 }, (_, i) => i + 1);

/** Bits are grouped 4, 4 and 3, as in the guide. */
const bitClass = (row, col) =>
  [
    styles.bit,
    col === 4 || col === 8 ? styles.groupStart : "",
    row === 24 && col >= 3 ? styles.checksum : "",
  ]
    .filter(Boolean)
    .join(" ");

export default function DiceSeedWorksheet() {
  return (
    <Worksheet slug="dice-seed">
      <p className={styles.note}>
        One die per box: 1, 2 or 3 is a 0; 4, 5 or 6 is a 1. Fill each row left to right. Rows 1
        to 23 take 11 bits, row 24 takes 3, for 256 in all. Do not roll for the hatched boxes: they
        are the checksum from step 3. Number is the sum of the column values above each 1; the
        GitHub word list numbers its lines from 1, so the line is the number plus 1.
      </p>
      <table className={`${styles.grid} ${styles.diceGrid}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            {POWERS.map((p, col) => (
              <th key={p} scope="col" className={bitClass(0, col)}>
                {p}
              </th>
            ))}
            <th scope="col" className={styles.dec}>
              Number
            </th>
            <th scope="col" className={styles.lineNo}>
              Line
            </th>
            <th scope="col">Word</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row}>
              <th scope="row">{row}</th>
              {POWERS.map((p, col) => (
                <td key={p} className={bitClass(row, col)} />
              ))}
              <td />
              <td />
              <td />
            </tr>
          ))}
        </tbody>
      </table>
      <Block title="Step 3: the checksum for row 24">
        <Fields>
          <Boxes label="First two hex characters of the SHA-256 hash" count={2} />
          <Boxes label="Those two characters as 8 bits, copied into row 24" count={8} />
        </Fields>
      </Block>
    </Worksheet>
  );
}
