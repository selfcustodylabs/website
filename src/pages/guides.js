import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

import Cover, { CoverMosaic } from "@site/src/components/landing/Cover";
import Section from "@site/src/components/landing/Section";
import PageRows from "@site/src/components/landing/PageRows";
import { allGuides, getDoc, plates, absolute } from "@site/src/components/landing/siteIndex";
import styles from "@site/src/components/landing/landing.module.css";

const TITLE = "Bitcoin Self-Custody Guides: Setup, Security & Privacy";
const DESCRIPTION =
  "Step-by-step Bitcoin guides: hardware wallet setup, seed generation, multisig configuration, node setup, privacy tools, and security best practices.";

/**
 * Every doc with a `guide:` facts block is listed here, grouped by the first
 * prefix it matches. A guide that matches none fails the build: add it to a
 * group rather than letting it fall off the page.
 *
 * Within a group guides follow sidebar reading order, except the ones named in
 * `first`, which lead in the order given (a stale entry fails the build).
 */
const GROUPS = [
  {
    id: "keys",
    label: "Keys, wallets and backups",
    prefixes: ["/docs/learn/keys/", "/docs/wallet-setup/", "/docs/learn/wallets/"],
    // You make the seed before you protect it with a passphrase; the keys
    // sidebar lists the passphrase page first.
    first: ["/docs/learn/keys/random/"],
  },
  { id: "privacy", label: "Privacy", prefixes: ["/docs/learn/privacy/"] },
  {
    id: "hardware",
    label: "Hardware and firmware",
    prefixes: ["/docs/seedsigner/", "/docs/advanced/", "/docs/libreboot/", "/docs/coreboot/"],
  },
  { id: "node", label: "Your own node", prefixes: ["/docs/bitcoin-node/"] },
  { id: "projects", label: "Side projects", prefixes: ["/docs/nostr-signing-device/"] },
];

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
  for (const group of groups) {
    const first = group.first ?? [];
    for (const permalink of first) {
      if (!group.guides.some((g) => g.permalink === permalink)) {
        throw new Error(`[guides] ${permalink} is in "first" for ${group.id} but is not a guide in that group`);
      }
    }
    const rank = (g) => (first.includes(g.permalink) ? first.indexOf(g.permalink) : first.length);
    // Array.prototype.sort is stable, so the rest keep their sidebar order.
    group.guides.sort((a, b) => rank(a) - rank(b));
  }
  return groups.filter((g) => g.guides.length > 0);
}

export default function GuidesPage() {
  const guides = allGuides();
  const groups = groupGuides(guides);
  const listed = groups.flatMap((g) => g.guides);

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
          plate={plates["/guides/"]}
          foot={
            <>
              <span>{guides.length} guides</span>
              <span>{groups.length} groups</span>
            </>
          }
          band={<CoverMosaic bands={MOSAIC.map((p) => getDoc(p).band)} />}
        >
          <p className={styles.lede}>
            {guides.length} hands-on guides, each with the time, cost and skill it takes. Several run
            over more than one page, and every guide shows the date it last changed. If a term is new
            to you, the <Link to="/learn/">Learn</Link> pages explain it first.
          </p>
        </Cover>

        <div className={styles.wide}>
          {groups.map((group) => (
            <Section key={group.id} id={group.id} title={group.label}>
              <PageRows pages={group.guides} guides />
            </Section>
          ))}
        </div>
      </main>
    </Layout>
  );
}
