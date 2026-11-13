import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

import Cover, { CoverMosaic } from "@site/src/components/landing/Cover";
import Section from "@site/src/components/landing/Section";
import GuideGrid from "@site/src/components/landing/GuideGrid";
import { Arrow } from "@site/src/components/landing/Bento";
import { allGuides, getDoc, absolute, lastChange } from "@site/src/components/landing/siteIndex";
import { formatDate } from "@site/src/data/guideFacts";
import styles from "@site/src/components/landing/landing.module.css";

const TITLE = "Bitcoin Self-Custody Guides: Setup, Security & Privacy";
const DESCRIPTION =
  "Step-by-step Bitcoin guides: hardware wallet setup, seed generation, multisig configuration, node setup, privacy tools, and security best practices.";

/**
 * Every doc with a `guide:` facts block is listed here, grouped by the first
 * prefix it matches. A guide that matches none fails the build: add it to a
 * group rather than letting it fall off the page.
 */
const GROUPS = [
  {
    id: "keys",
    label: "Keys, wallets and backups",
    description: "Make the seed, put it on a device, and prove the backup restores before any bitcoin goes on it.",
    prefixes: ["/docs/learn/keys/", "/docs/wallet-setup/", "/docs/learn/wallets/"],
  },
  {
    id: "privacy",
    label: "Privacy",
    description: "Coin control, CoinJoin and PayJoin: keeping your payment history your own.",
    prefixes: ["/docs/learn/privacy/"],
  },
  {
    id: "hardware",
    label: "Hardware and firmware",
    description:
      "Build a signing device, set up a computer that does nothing but bitcoin, and replace a laptop's BIOS.",
    prefixes: ["/docs/seedsigner/", "/docs/advanced/", "/docs/libreboot/", "/docs/coreboot/"],
  },
  {
    id: "node",
    label: "Your own node",
    description: "Bitcoin Core, an Electrum server and Tor, on a Raspberry Pi or an old PC.",
    prefixes: ["/docs/bitcoin-node/"],
  },
  {
    id: "projects",
    label: "Side projects",
    description: "A Nostr signing device built from a $10-15 board.",
    prefixes: ["/docs/nostr-signing-device/"],
  },
];

/** The five levels LevelGauge knows, easiest first. */
const LEVELS = ["beginner", "beginner to intermediate", "intermediate", "intermediate to advanced", "advanced"];

/** "Beginner to advanced", or the one level when every guide in the group shares it. */
function levelRange(guides) {
  const steps = guides.map((g) => LEVELS.indexOf(String(g.guide.level).toLowerCase())).filter((i) => i >= 0);
  if (steps.length === 0) return null;
  const low = LEVELS[Math.min(...steps)].split(" ")[0];
  const high = LEVELS[Math.max(...steps)].split(" ").at(-1);
  const range = low === high ? LEVELS[Math.min(...steps)] : `${low} to ${high}`;
  return range[0].toUpperCase() + range.slice(1);
}

/**
 * The cover's band: one guide from each kind of work, so the mosaic shows the
 * range (photographs and drawn motifs) rather than three dice in a row.
 */
const MOSAIC = [
  "/docs/learn/keys/random/",
  "/docs/learn/wallets/multisig/",
  "/docs/seedsigner/",
  "/docs/wallet-setup/hardware-wallet/",
  "/docs/libreboot/",
  "/docs/bitcoin-node/",
  "/docs/learn/privacy/coinjoin/",
  "/docs/wallet-setup/backup-verification/",
  "/docs/nostr-signing-device/",
];

function groupGuides(guides) {
  const groups = GROUPS.map((g) => ({ ...g, guides: [] }));
  for (const guide of guides) {
    const group = groups.find((g) => g.prefixes.some((p) => guide.permalink.startsWith(p)));
    if (!group) {
      throw new Error(`[guides] ${guide.permalink} has guide facts but no group in src/pages/guides.js`);
    }
    group.guides.push(guide);
  }
  return groups.filter((g) => g.guides.length > 0);
}

export default function GuidesPage() {
  const guides = allGuides();
  const groups = groupGuides(guides);
  const listed = groups.flatMap((g) => g.guides);
  const reviewed = guides.filter((g) => g.guide.reviewed || g.guide.verified).length;
  const updated = formatDate(lastChange());

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bitcoin Self-Custody Guides",
    description: DESCRIPTION,
    url: absolute("/guides/"),
    isPartOf: { "@id": "https://selfcustodylabs.com/#website" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: listed.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title,
        url: absolute(g.permalink),
      })),
    },
  };

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <main className={styles.landing}>
        <Cover
          eyebrow="Guides"
          title={
            <>
              <span className={styles.nowrap}>Self-custody</span> guides
            </>
          }
          facts={[
            { label: "Guides", value: guides.length },
            { label: "Groups", value: groups.length },
            { label: "Reviewed", value: `${reviewed} of ${guides.length}` },
            ...(updated ? [{ label: "Last change", value: updated }] : []),
          ]}
          band={<CoverMosaic bands={MOSAIC.map((p) => getDoc(p).band)} />}
        >
          <p className={styles.lede}>
            {guides.length} hands-on guides, each with the time and skill it takes. Several run
            over more than one page, and every guide shows the date it last changed. If a term is new
            to you, the <Link to="/learn/">Learn</Link> pages explain it first.
          </p>
          <div className={styles.actions}>
            <Link to="/docs/learn/keys/random/" className={styles.primary}>
              Start with a dice seed
              <Arrow />
            </Link>
            <Link to="/learn/" className={styles.secondary}>
              Learn the terms first
            </Link>
            <Link to="/worksheets/" className={styles.secondary}>
              Worksheets
            </Link>
          </div>
        </Cover>

        <div className={styles.wide}>
          {groups.map((group) => {
            const range = levelRange(group.guides);
            const count = `${group.guides.length} guide${group.guides.length === 1 ? "" : "s"}`;
            return (
              <Section
                key={group.id}
                id={group.id}
                eyebrow={range ? `${count} · ${range}` : count}
                title={group.label}
                description={group.description}
              >
                <GuideGrid guides={group.guides} />
              </Section>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
