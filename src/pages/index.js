import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import Section from "@site/src/components/landing/Section";
import GuideTable from "@site/src/components/landing/GuideTable";
import NotesTable from "@site/src/components/landing/NotesTable";
import InlineLinks from "@site/src/components/InlineLinks";
import { docs, notes, getDoc, allGuides, lastChange } from "@site/src/components/landing/siteIndex";
import { currentAdvisory } from "@site/src/data/advisories";
import { positions } from "@site/src/data/positions";
import { formatDate } from "@site/src/data/guideFacts";
import styles from "@site/src/components/landing/landing.module.css";

import t480s from "@site/src/components/landing/img/t480s-libreboot.webp";
import pico from "@site/src/components/landing/img/pico-clip.webp";
import dice from "@site/src/components/landing/img/casino-dice.webp";

/** Situations and where each should start: the short form of the Start Here table. */
const ROUTES = [
  {
    situation: "New to bitcoin",
    start: ["/docs/learn/fundamentals/what-is-bitcoin/", "What is Bitcoin?"],
    then: ["/docs/learn/fundamentals/what-is-self-custody/", "What self-custody means"],
  },
  {
    situation: "Your bitcoin is on an exchange",
    start: ["/docs/wallet-setup/hardware-wallet/", "Set up a hardware wallet"],
    then: ["/docs/wallet-setup/before-you-deposit/", "Checks before you deposit"],
  },
  {
    situation: "You already use a hardware wallet",
    start: ["/docs/wallet-setup/backup-verification/", "Test your backup"],
    then: ["/docs/learn/keys/passphrase/", "Add a passphrase"],
  },
  {
    situation: "You hold a life-changing amount",
    start: ["/docs/learn/wallets/multisig/", "Multisig"],
    then: ["/docs/learn/wallets/air-gapped-wallets/", "Air-gapped signing"],
  },
  {
    situation: "You need privacy, or face a higher risk",
    start: ["/docs/learn/privacy/why-privacy-matters/", "Why privacy matters"],
    then: ["/docs/learn/privacy/coinjoin/", "CoinJoin"],
  },
  {
    situation: "Not sure what you are defending against",
    start: ["/docs/learn/fundamentals/threat-models/", "Threat models"],
    then: ["/docs/learn/fundamentals/choosing-your-path/", "Choose your setup"],
  },
];

/** The guides most readers need, in the order they usually need them. */
const FEATURED = [
  "/docs/learn/keys/random/",
  "/docs/learn/keys/passphrase/",
  "/docs/wallet-setup/hardware-wallet/",
  "/docs/wallet-setup/backup-verification/",
  "/docs/learn/wallets/multisig/",
  "/docs/seedsigner/",
  "/docs/bitcoin-node/",
];

const FIGURES = [
  {
    src: t480s,
    alt: "A ThinkPad T480s on a wooden desk, showing the purple Libreboot GRUB menu with its leaping-deer logo.",
    caption: "A ThinkPad T480s at the GRUB menu of Libreboot 20241206, after flashing.",
    link: ["/docs/libreboot/", "Libreboot guide"],
  },
  {
    src: pico,
    alt: "A Raspberry Pi Pico wired with jumper leads to a blue SOIC8 clip on a ThinkPad motherboard's flash chip, with a red test hook on a second chip.",
    caption:
      "Flashing from a Raspberry Pi Pico: the clip sits on the flash chip and the red hook holds the second chip's CS# pin at 3.3V.",
    link: ["/docs/libreboot/raspberry-pico/connection/", "Wiring the Pico"],
  },
  {
    src: dice,
    alt: "Translucent blue and green casino dice with flush white pips on a grey counter.",
    caption:
      "Casino dice: precision-machined with flush, filled pips, so every face weighs the same. The entropy source for a seed you make yourself.",
    link: ["/docs/learn/keys/random/", "Dice seed guide"],
  },
];

function Bulletin({ advisory }) {
  return (
    <aside className={styles.bulletin} aria-label="Current advisory">
      <p className={styles.bulletinLabel}>Advisory · {formatDate(advisory.date)}</p>
      <p className={styles.bulletinTitle}>{advisory.title}</p>
      <p className={styles.bulletinText}>{advisory.summary}</p>
      <ul className={styles.bulletinLinks}>
        {advisory.links.map((l) => (
          <li key={l.to}>
            <Link to={l.to}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default function Home() {
  const guides = allGuides();
  const featured = FEATURED.map(getDoc);
  const updated = formatDate(lastChange());

  return (
    <Layout
      title="Bitcoin Self-Custody Guides & Tutorials"
      description="Learn Bitcoin self-custody: hardware wallet setup, seed phrase security, multisig configurations, privacy best practices, and running your own node. Free step-by-step guides."
    >
      <main className={styles.page}>
        {currentAdvisory ? <Bulletin advisory={currentAdvisory} /> : null}

        <p className={`scl-label ${styles.eyebrow}`}>Self Custody Labs</p>
        <h1 className={styles.title}>Bitcoin self-custody guides</h1>
        <p className={styles.lede}>
          How to hold your own bitcoin, written down step by step: making a seed with dice, setting
          up a hardware wallet, multisig, running your own node, and flashing Libreboot onto a
          ThinkPad. No affiliate links and no money from the companies we write about. Every page
          shows the date it last changed.
        </p>
        <div className={styles.actions}>
          <Link to="/docs/learn/fundamentals/" className={styles.primary}>
            Start here
          </Link>
          <Link to="/guides/" className={styles.link}>
            All {guides.length} guides
          </Link>
          <Link to="/about/" className={styles.link}>
            How we decide what to recommend
          </Link>
        </div>
        <dl className={styles.spec}>
          <div>
            <dt>Pages</dt>
            <dd>{Object.keys(docs).length}</dd>
          </div>
          <div>
            <dt>Guides</dt>
            <dd>{guides.length}</dd>
          </div>
          {updated ? (
            <div>
              <dt>Last change</dt>
              <dd>{updated}</dd>
            </div>
          ) : null}
          <div>
            <dt>Source</dt>
            <dd>
              <a href="https://github.com/selfcustodylabs/website">GitHub</a>
            </dd>
          </div>
        </dl>

        <Section id="start" title="Where are you starting from">
          <table className={`${styles.table} ${styles.routerTable}`}>
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Start with</th>
                <th scope="col">Then</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES.map((r) => (
                <tr key={r.situation}>
                  <th scope="row">{r.situation}</th>
                  <td data-label="Start">
                    <Link to={r.start[0]}>{r.start[1]}</Link>
                  </td>
                  <td data-label="Then">
                    <Link to={r.then[0]}>{r.then[1]}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section
          id="guides"
          title="The guides"
          aside={<Link to="/guides/">All {guides.length} guides</Link>}
        >
          <GuideTable guides={featured} />
        </Section>

        <Section
          id="positions"
          title="Where we stand"
          aside={<Link to="/about/">Why, and how we decide</Link>}
        >
          <dl className={styles.positions}>
            {positions.map((p) => (
              <div key={p.subject} className={styles.position}>
                <dt>
                  <span className={styles.subject}>{p.subject}</span>
                  <span className={styles.stance}>{p.stance}</span>
                </dt>
                <dd>
                  <InlineLinks text={p.text} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {notes.length > 0 ? (
          <Section
            id="notes"
            title="Field notes"
            aside={<Link to="/notes/">All {notes.length} notes</Link>}
          >
            <NotesTable notes={notes.slice(0, 3)} />
          </Section>
        ) : null}

        <Section id="hardware" title="Hardware in the guides">
          <div className={styles.figures}>
            {FIGURES.map((f, i) => (
              <figure key={f.link[0]} className={styles.figure}>
                <img src={f.src} alt={f.alt} width="800" height="600" loading="lazy" decoding="async" />
                <figcaption>
                  <span className={styles.figNo}>Fig. {i + 1}</span>
                  {f.caption} <Link to={f.link[0]}>{f.link[1]}</Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <p className={styles.closing}>
          Self Custody Labs is published under a pseudonym, with the full source and history of every
          page <a href="https://github.com/selfcustodylabs/website">on GitHub</a>. Mistakes get
          corrected in public: <Link to="/about/">how to reach us and check who we are</Link>.
        </p>
      </main>
    </Layout>
  );
}
