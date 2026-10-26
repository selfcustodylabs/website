import React from "react";

import Worksheet from "@site/src/components/worksheet/Worksheet";
import { Block, Checklist, Field, Fields } from "@site/src/components/worksheet/parts";
import styles from "@site/src/components/worksheet/worksheet.module.css";

/** The checks on /docs/wallet-setup/before-you-deposit/, in the same order. */
const CHECKS = [
  [
    "The seed phrase",
    [
      "You know how the seed was made: your own dice rolls, or the device on current firmware (not a Coldcard on 2021 to 2026 firmware).",
      "It is written down on paper or metal, every word spelled as in the BIP39 list, numbered and in order.",
      "It has never been photographed, typed into a computer or phone, stored online, spoken aloud or shown to anyone.",
    ],
  ],
  [
    "The backup is tested",
    [
      "You restored the wallet from the written backup alone, by wiping the device or on a second device.",
      "The restored wallet's first receive address matches the original's.",
    ],
  ],
  [
    "The passphrase, if you use one",
    [
      "You know it creates a different wallet, and that forgetting it loses the bitcoin.",
      "It is backed up separately from the seed phrase.",
      "You restored with seed and passphrase together and saw different addresses from the seed-only wallet.",
    ],
  ],
  [
    "The receive address",
    [
      "The address in the wallet software matches the one the hardware wallet shows on its own screen, first and last eight characters at least.",
    ],
  ],
  [
    "The device and software",
    [
      "Bought from the manufacturer, packaging intact, authenticity check passed where the device has one.",
      "Firmware is the latest version, checked on the manufacturer's website.",
      "The PIN is not a birthday, sequence or repeated digit.",
      "Wallet software from its official site, on your own up-to-date computer.",
    ],
  ],
  [
    "A test transaction",
    [
      "A small amount has arrived in the wallet.",
      "You have sent a transaction out of it successfully, and know how to choose a fee.",
    ],
  ],
  [
    "You",
    [
      "You can explain what a seed phrase is, and that nobody can help if it is lost.",
      "You know where the backup will be stored, and have thought about fire, flood, theft and your heirs.",
      "You are not rushing: at least a day between setup and a significant deposit.",
    ],
  ],
];

export default function BeforeYouDepositWorksheet() {
  return (
    <Worksheet slug="before-you-deposit">
      <Block>
        <Fields>
          <Field label="Date" />
          <Field label="Wallet and device" />
        </Fields>
      </Block>
      {CHECKS.map(([title, items]) => (
        <Block key={title} title={title}>
          <Checklist items={items} />
        </Block>
      ))}
      <p className={styles.note}>
        Any box left empty means do not deposit yet. The same goes if anyone has seen the seed
        phrase, if the computer is not one you trust, or if something about the setup feels wrong:
        waiting costs nothing.
      </p>
    </Worksheet>
  );
}
