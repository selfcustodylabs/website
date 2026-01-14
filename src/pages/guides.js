import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Head from "@docusaurus/Head";

import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import LaptopMacRoundedIcon from "@mui/icons-material/LaptopMacRounded";
import FlightRoundedIcon from "@mui/icons-material/FlightRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import MemoryRoundedIcon from "@mui/icons-material/MemoryRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";

import styles from "./styles.module.css";

// CollectionPage schema for the guides listing page
const guidesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Bitcoin Self-Custody Guides",
  "description": "Step-by-step tutorials for securing your Bitcoin. From beginner seed generation to advanced air-gapped setups.",
  "url": "https://selfcustodylabs.com/guides/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "DIY Seed Generation",
        "url": "https://selfcustodylabs.com/docs/seed/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "DIY Passphrase",
        "url": "https://selfcustodylabs.com/docs/passphrase/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Hardware Wallet Setup",
        "url": "https://selfcustodylabs.com/docs/hardware-wallet-setup/"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Backup Verification",
        "url": "https://selfcustodylabs.com/docs/backup-verification/"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Bitcoin Node",
        "url": "https://selfcustodylabs.com/docs/bitcoin-node/"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Bitcoin Computer",
        "url": "https://selfcustodylabs.com/docs/bitcoin-computer/"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Air-Gapped Computer",
        "url": "https://selfcustodylabs.com/docs/air-gapped-computer/"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Libreboot Installation",
        "url": "https://selfcustodylabs.com/docs/libreboot/"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "Coreboot Installation",
        "url": "https://selfcustodylabs.com/docs/coreboot/"
      },
      {
        "@type": "ListItem",
        "position": 10,
        "name": "Nostr Signing Device",
        "url": "https://selfcustodylabs.com/docs/nostr-signing-device/"
      },
      {
        "@type": "ListItem",
        "position": 11,
        "name": "CoinJoin Privacy Guide",
        "url": "https://selfcustodylabs.com/docs/coinjoin/"
      },
      {
        "@type": "ListItem",
        "position": 12,
        "name": "UTXO Management Guide",
        "url": "https://selfcustodylabs.com/docs/utxo-management/"
      },
      {
        "@type": "ListItem",
        "position": 13,
        "name": "Multisig Setup Guide",
        "url": "https://selfcustodylabs.com/docs/multisig/"
      }
    ]
  }
};

function Card({ icon: Icon, title, description, href, badge, footerLeft, footerRight, cost }) {
  const content = (
    <div className={styles.cardInner}>
      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          <Icon fontSize="inherit" />
        </div>
        {badge ? <div className={styles.cardBadge}>{badge}</div> : null}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {cost && <p className={styles.cardCost}>{cost}</p>}
      {(footerLeft || footerRight) && (
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterLeft}>{footerLeft}</div>
          <div className={styles.cardFooterRight}>{footerRight}</div>
        </div>
      )}
    </div>
  );

  if (!href) return <div className={styles.card}>{content}</div>;

  return (
    <Link className={styles.cardLink} to={href}>
      <div className={styles.card}>{content}</div>
    </Link>
  );
}

function DifficultyTag({ level }) {
  const cls =
    level === "Beginner"
      ? styles.tagBeginner
      : level === "Intermediate"
        ? styles.tagIntermediate
        : styles.tagAdvanced;
  return <span className={`${styles.tag} ${cls}`}>{level}</span>;
}

function CategorySection({ title, description, guides }) {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <p className={styles.categoryDescription}>{description}</p>
      </div>
      <div className={styles.grid3}>
        {guides.map((g) => (
          <Card
            key={g.title}
            icon={g.icon}
            title={g.title}
            description={g.description}
            href={g.href}
            badge={g.badge}
            cost={g.cost}
            footerLeft={<DifficultyTag level={g.level} />}
            footerRight={<span className={styles.arrow}>→</span>}
          />
        ))}
      </div>
    </section>
  );
}

export default function GuidesPage() {
  const logoSrc = useBaseUrl("/img/logo.svg");

  // Security & Keys - Seed and passphrase generation
  const securityGuides = [
    {
      icon: CasinoRoundedIcon,
      title: "DIY Seed Generation",
      description: "Create your own cryptographically secure seed using dice. True randomness, fully offline.",
      href: "/docs/seed",
      badge: "POPULAR",
      level: "Intermediate",
      cost: "💰 $30-80 (dice + metal backup)",
    },
    {
      icon: KeyRoundedIcon,
      title: "DIY Passphrase",
      description: "Add a strong passphrase layer and learn best practices for creating and managing it.",
      href: "/docs/passphrase",
      badge: "POPULAR",
      level: "Beginner",
      cost: "💰 $0-10 (dice optional)",
    },
    {
      icon: PasswordRoundedIcon,
      title: "Hardware Wallet Setup",
      description: "Step-by-step guide to setting up your first hardware wallet securely.",
      href: "/docs/hardware-wallet-setup",
      badge: "NEW",
      level: "Beginner",
      cost: "💰 $70-250 (hardware wallet)",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Backup Verification",
      description: "Test that your seed backup actually works before trusting it with significant funds.",
      href: "/docs/backup-verification",
      badge: "NEW",
      level: "Beginner",
      cost: "💰 Free",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Multisig Setup",
      description: "Eliminate single points of failure with multi-signature wallets. The ultimate security for significant holdings.",
      href: "/docs/multisig",
      level: "Advanced",
      cost: "💰 $230-510 (3 HWWs + backups)",
    },
  ];

  // Hardware & Firmware - Dedicated computers and BIOS
  const hardwareGuides = [
    {
      icon: ComputerRoundedIcon,
      title: "Bitcoin Computer",
      description: "Build a dedicated Bitcoin workstation designed for strong security and privacy.",
      href: "/docs/bitcoin-computer",
      level: "Intermediate",
      cost: "💰 $50-150 or free (repurpose)",
    },
    {
      icon: FlightRoundedIcon,
      title: "Air-Gapped Computer",
      description: "Set up an offline computer for maximum security: seed generation, verification, and signing.",
      href: "/docs/air-gapped-computer",
      level: "Advanced",
      cost: "💰 $50-200 or free (repurpose)",
    },
    {
      icon: SecurityRoundedIcon,
      title: "Libreboot",
      description: "Install Libreboot to replace your BIOS with fully open-source firmware and remove Intel ME.",
      href: "/docs/libreboot",
      level: "Advanced",
      cost: "💰 $15-30 (flashing hardware)",
    },
    {
      icon: MemoryRoundedIcon,
      title: "Coreboot",
      description: "Learn Coreboot fundamentals and why open firmware matters for security-minded setups.",
      href: "/docs/coreboot",
      level: "Advanced",
      cost: "💰 $0-30 (depends on method)",
    },
  ];

  // Network & Nodes
  const nodeGuides = [
    {
      icon: StorageRoundedIcon,
      title: "Bitcoin Node",
      description: "Run your own Bitcoin node to independently verify transactions and enhance your privacy.",
      href: "/docs/bitcoin-node",
      badge: "POPULAR",
      level: "Intermediate",
      cost: "💰 $100-300 (Pi + SSD) or $50-100 (old PC)",
    },
  ];

  // Privacy
  const privacyGuides = [
    {
      icon: SecurityRoundedIcon,
      title: "CoinJoin",
      description: "Break the link between your transaction history and your coins using CoinJoin mixing.",
      href: "/docs/coinjoin",
      level: "Intermediate",
      cost: "💰 Variable (mixing fees)",
    },
    {
      icon: SecurityRoundedIcon,
      title: "PayJoin",
      description: "Stealth privacy that breaks blockchain analysis assumptions. Both sender and receiver contribute inputs.",
      href: "/docs/payjoin",
      badge: "NEW",
      level: "Intermediate",
      cost: "💰 Free (normal tx fees)",
    },
    {
      icon: KeyRoundedIcon,
      title: "UTXO Management",
      description: "Master coin control, consolidation, and labeling to minimize fees and protect privacy.",
      href: "/docs/utxo-management",
      level: "Intermediate",
      cost: "💰 Free (knowledge only)",
    },
  ];

  // Bonus Projects
  const bonusGuides = [
    {
      icon: HubRoundedIcon,
      title: "Nostr Signing Device",
      description: "Use a dedicated signing device to keep your Nostr private key off your computer.",
      href: "/docs/nostr-signing-device",
      level: "Intermediate",
      cost: "💰 $10-15 (LILYGO T-Display)",
    },
  ];

  return (
    <Layout title="Guides" description="Browse all Self Custody Labs guides - security, hardware, nodes, and more.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(guidesCollectionSchema)}
        </script>
      </Head>
      <main className={styles.page}>
        <header className={`${styles.hero} guidesHero`}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className="guides-header">
                <h1 className={styles.heroTitle}>Self-Custody Guides</h1>
                <p className={styles.heroSubtitle}>
                  Step-by-step tutorials for securing your Bitcoin. From beginner seed generation to advanced air-gapped setups.
                </p>
              </div>

              <CategorySection
                title="🔐 Security & Keys"
                description="Generate and protect your Bitcoin keys with verifiable randomness"
                guides={securityGuides}
              />


              <CategorySection
                title="🕵️ Privacy"
                description="Techniques to enhance your financial privacy on Bitcoin"
                guides={privacyGuides}
              />

              <CategorySection
                title="💻 Hardware & Firmware"
                description="Build dedicated devices with open-source firmware for maximum security"
                guides={hardwareGuides}
              />

              <CategorySection
                title="🌐 Nodes & Network"
                description="Run your own infrastructure to verify transactions privately"
                guides={nodeGuides}
              />


              <CategorySection
                title="🎁 Bonus Projects"
                description="Additional projects using the same security principles"
                guides={bonusGuides}
              />

              <div className={styles.heroCtas} style={{ marginTop: 32 }}>
                <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/learn">
                  New to Bitcoin? Start with the Basics →
                </Link>
                <Link className={`${styles.button} ${styles.buttonSecondary}`} to="/">
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
