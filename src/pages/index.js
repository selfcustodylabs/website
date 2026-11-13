import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import Cover from "@site/src/components/landing/Cover";
import CoverPath from "@site/src/components/landing/CoverPath";
import Section from "@site/src/components/landing/Section";
import RouteFlow from "@site/src/components/landing/RouteFlow";
import HomeBento from "@site/src/components/landing/HomeBento";
import { Arrow } from "@site/src/components/landing/Bento";
import { getDoc, allGuides, lastChange } from "@site/src/components/landing/siteIndex";
import { currentAdvisory } from "@site/src/data/advisories";
import { formatDate } from "@site/src/data/guideFacts";
import styles from "@site/src/components/landing/landing.module.css";

/** The cover's band: the share card's three things, in the order you do them, each with its page. */
const PATH = [
  { label: "Dice-rolled seed", motif: "dice", to: "/docs/learn/keys/random/" },
  { label: "Air-gapped signing", motif: "airgap", to: "/docs/learn/wallets/air-gapped-wallets/" },
  { label: "Your own node", motif: "node", to: "/docs/bitcoin-node/" },
];

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
        <li>
          <Link to="/docs/reference/advisories/">All incidents since 2013</Link>
        </li>
      </ul>
    </aside>
  );
}

export default function Home() {
  const guides = allGuides();
  const updated = formatDate(lastChange());

  return (
    <Layout
      title="Bitcoin Self-Custody Guides & Tutorials"
      description="Learn Bitcoin self-custody: hardware wallet setup, seed phrase security, multisig configurations, privacy best practices, and running your own node. Free step-by-step guides."
    >
      <main className={styles.landing}>
        {currentAdvisory ? (
          <div className={`${styles.wide} ${styles.bulletinWrap}`}>
            <Bulletin advisory={currentAdvisory} />
          </div>
        ) : null}

        <Cover
          eyebrow="Bitcoin self-custody guides"
          title={
            <>
              Hold your own <span className={styles.nowrap}>Bitcoin keys.</span>
            </>
          }
          facts={[
            { label: "Affiliate links", value: "None" },
            { label: "Sponsors", value: "None" },
            {
              label: "Source",
              value: (
                <>
                  Public on <a href="https://github.com/selfcustodylabs/website">GitHub</a>
                </>
              ),
            },
            ...(updated ? [{ label: "Last change", value: updated }] : []),
          ]}
          band={<CoverPath steps={PATH.map((s) => ({ ...s, name: getDoc(s.to).name }))} />}
        >
          <p className={styles.lede}>
            How to do it, step by step: making a seed with dice, setting up a hardware wallet, multisig,
            running your own node, and flashing Libreboot onto a ThinkPad. Every guide states how long
            it takes and the skill it needs.
          </p>
          <div className={styles.actions}>
            <Link to="/docs/learn/fundamentals/" className={styles.primary}>
              Start here
              <Arrow />
            </Link>
            <Link to="/guides/" className={styles.secondary}>
              All {guides.length} guides
            </Link>
            <Link to="/learn/" className={styles.secondary}>
              Learn the concepts
            </Link>
            <Link to="/worksheets/" className={styles.secondary}>
              Worksheets
            </Link>
          </div>
        </Cover>

        <div className={styles.wide}>
          <Section
            id="start"
            eyebrow={`Start · ${ROUTES.length} situations`}
            title="Where are you starting from?"
            description="Pick the line that describes you. Each names the page to read first and the one after it."
          >
            <RouteFlow routes={ROUTES} />
          </Section>

          <HomeBento />

          <p className={styles.closing}>
            Self Custody Labs is published under a pseudonym, with the full source and history of every
            page <a href="https://github.com/selfcustodylabs/website">on GitHub</a>. Mistakes get
            corrected in public: <Link to="/about/">how to reach us and check who we are</Link>.
          </p>
        </div>
      </main>
    </Layout>
  );
}
