import React from "react";
import Link from "@docusaurus/Link";

import styles from "./doc/SetupChooser.module.css";

/** The four tiers of /docs/learn/fundamentals/choosing-your-path/, in order. */
const TIERS = [
  {
    name: "Starter",
    holdings: "Under $1,000",
    setup: "A wallet app on your phone and a paper copy of its seed phrase.",
    section: "#what-is-the-starter-setup-for-under-1000",
    first: ["/docs/learn/wallets/software-wallets/", "Software wallets"],
  },
  {
    name: "Standard",
    holdings: "$1,000 to $10,000",
    setup: "A hardware wallet, a metal backup of its seed phrase, and Sparrow on your computer.",
    section: "#what-is-the-standard-setup-for-1000-to-10000",
    first: ["/docs/wallet-setup/hardware-wallet/", "Hardware wallet setup"],
  },
  {
    name: "Enhanced",
    holdings: "$10,000 to $100,000",
    setup: "The standard setup with a seed made from dice, a passphrase and your own node.",
    section: "#what-is-the-enhanced-setup-for-10000-to-100000",
    first: ["/docs/learn/keys/random/", "Dice seed guide"],
  },
  {
    name: "Maximum",
    holdings: "Over $100,000",
    setup: "A 2-of-3 multisig on devices from different makers, kept in different places.",
    section: "#what-is-the-maximum-setup-for-over-100000",
    first: ["/docs/learn/wallets/multisig/", "Multisig explained"],
  },
];

/**
 * Two questions that pick a tier: how much you hold, and whether a factor
 * from the threat-model page applies, which moves you one tier up.
 *
 * Works without JavaScript: the answers are plain radio buttons and the
 * matching result is shown by CSS (:has), so there is no state to hydrate and
 * nothing breaks with scripts off. Marked data-pagefind-ignore, which also
 * keeps it off paper (src/css/print.css), and dropped from the llms-txt
 * mirror: the page's own table says the same thing in text.
 */
export default function SetupChooser() {
  return (
    <form className={styles.chooser} data-pagefind-ignore="all" aria-label="Find your setup">
      <fieldset className={styles.question}>
        <legend>How much bitcoin do you hold, or expect to in the next year or two?</legend>
        <div className={styles.options}>
          {TIERS.map((t, i) => (
            <span key={t.name}>
              <input type="radio" name="amount" id={`chooser-amount-${i}`} className={styles[`a${i}`]} />
              <label htmlFor={`chooser-amount-${i}`}>{t.holdings}</label>
            </span>
          ))}
        </div>
      </fieldset>
      <fieldset className={styles.question}>
        <legend>
          Are you known to hold bitcoin, living under capital controls or an unstable government, or
          facing someone who has singled you out?
        </legend>
        <div className={styles.options}>
          <span>
            <input type="radio" name="risk" id="chooser-risk-no" className={styles.rNo} defaultChecked />
            <label htmlFor="chooser-risk-no">No</label>
          </span>
          <span>
            <input type="radio" name="risk" id="chooser-risk-yes" className={styles.rYes} />
            <label htmlFor="chooser-risk-yes">Yes, one tier up</label>
          </span>
        </div>
      </fieldset>
      <div className={styles.results} aria-live="polite">
        <p className={styles.prompt}>Pick an amount to see the setup.</p>
        {TIERS.map((t, i) => (
          <div key={t.name} className={`${styles.result} ${styles[`t${i}`]}`}>
            <p className={styles.tier}>{t.name} setup</p>
            <p className={styles.setup}>{t.setup}</p>
            <p className={styles.links}>
              <Link to={t.section}>What it involves</Link>
              <Link to={t.first[0]}>Start with: {t.first[1]}</Link>
            </p>
          </div>
        ))}
      </div>
    </form>
  );
}
