import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";

import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

import styles from "./styles.module.css";

// Schema for SEO
const learnCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Learn Bitcoin Self-Custody",
  "description": "Comprehensive educational content about Bitcoin self-custody. Understand keys, wallets, transactions, privacy, and nodes.",
  "url": "https://selfcustodylabs.com/learn/",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "What is Bitcoin?",
        "url": "https://selfcustodylabs.com/docs/basics/what-is-bitcoin"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Private Keys",
        "url": "https://selfcustodylabs.com/docs/basics/keys/intro"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Wallets",
        "url": "https://selfcustodylabs.com/docs/basics/wallets/software-wallets"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Transactions",
        "url": "https://selfcustodylabs.com/docs/basics/transactions/understanding"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Privacy",
        "url": "https://selfcustodylabs.com/docs/basics/privacy/why-privacy-matters"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Bitcoin Nodes",
        "url": "https://selfcustodylabs.com/docs/basics/nodes/what-is-node"
      }
    ]
  }
};

function Card({ icon: Icon, title, description, href, badge, footerLeft, footerRight }) {
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

function TimeTag({ time }) {
  return (
    <span className={styles.timeTag}>
      {time}
    </span>
  );
}

function CategorySection({ title, description, topics }) {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <p className={styles.categoryDescription}>{description}</p>
      </div>
      <div className={styles.grid3}>
        {topics.map((t) => (
          <Card
            key={t.title}
            icon={t.icon}
            title={t.title}
            description={t.description}
            href={t.href}
            badge={t.badge}
            footerLeft={<DifficultyTag level={t.level} />}
            footerRight={<span className={styles.arrow}>→</span>}
          />
        ))}
      </div>
    </section>
  );
}

export default function LearnPage() {
  // Foundational concepts
  const fundamentals = [
    {
      icon: CurrencyBitcoinRoundedIcon,
      title: "What is Bitcoin?",
      description: "Understand digital money that no one controls. The basics of blockchain, mining, and why Bitcoin matters.",
      href: "/docs/basics/what-is-bitcoin",
      badge: "START HERE",
      level: "Beginner",
    },
    {
      icon: ShieldRoundedIcon,
      title: "What is Self-Custody?",
      description: "Learn what it means to truly own your Bitcoin. No banks, no exchanges—just you and your keys.",
      href: "/docs/basics",
      level: "Beginner",
    },
    {
      icon: MenuBookRoundedIcon,
      title: "Holding Bitcoin",
      description: "Why custody matters and the spectrum from exchanges to full self-sovereignty.",
      href: "/docs/basics/holding",
      level: "Beginner",
    },
  ];

  // Keys and seeds
  const keysAndSeeds = [
    {
      icon: VpnKeyRoundedIcon,
      title: "Private Keys",
      description: "The foundation of Bitcoin ownership. Understand how cryptographic keys give you control.",
      href: "/docs/basics/keys/intro",
      level: "Beginner",
    },
    {
      icon: LockRoundedIcon,
      title: "Seed Phrases",
      description: "How complex keys become memorable words. The BIP39 standard explained step by step.",
      href: "/docs/basics/keys/seed",
      level: "Intermediate",
    },
    {
      icon: VpnKeyRoundedIcon,
      title: "Address Types",
      description: "Legacy, SegWit, Taproot — understand the different Bitcoin address formats and which to use.",
      href: "/docs/basics/address-types",
      badge: "NEW",
      level: "Beginner",
    },
    {
      icon: VpnKeyRoundedIcon,
      title: "Passphrases",
      description: "Add an extra layer of security to your seed. The 25th word and how it works.",
      href: "/docs/basics/keys/passphrase",
      level: "Intermediate",
    },
  ];

  // Wallets
  const wallets = [
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Software Wallets",
      description: "Apps that manage your keys. Understand hot wallets, recommended options, and when to use them.",
      href: "/docs/basics/wallets/software-wallets",
      level: "Beginner",
    },
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Hardware Wallets",
      description: "Dedicated devices that keep your keys offline. Compare popular options and choose the right one.",
      href: "/docs/basics/wallets/hardware-wallets",
      level: "Beginner",
    },
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Hardware Wallet Setup",
      description: "Step-by-step guide to setting up your first hardware wallet securely.",
      href: "/docs/hardware-wallet-setup",
      badge: "GUIDE",
      level: "Beginner",
    },
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Multisig Wallets",
      description: "Multiple keys required to spend. Eliminate single points of failure.",
      href: "/docs/basics/wallets/multisig",
      level: "Advanced",
    },
  ];

  // Transactions
  const transactions = [
    {
      icon: SwapHorizRoundedIcon,
      title: "Understanding Transactions",
      description: "How Bitcoin moves from one address to another. Inputs, outputs, and fees.",
      href: "/docs/basics/transactions/understanding",
      level: "Beginner",
    },
    {
      icon: SwapHorizRoundedIcon,
      title: "UTXOs Explained",
      description: "The building blocks of Bitcoin. Understanding unspent transaction outputs is essential.",
      href: "/docs/basics/transactions/utxos",
      badge: "ESSENTIAL",
      level: "Intermediate",
    },
    {
      icon: SwapHorizRoundedIcon,
      title: "Transaction Lifecycle",
      description: "From creation to confirmation. Follow a transaction through the network.",
      href: "/docs/basics/transactions/lifecycle",
      level: "Intermediate",
    },
  ];

  // Privacy
  const privacy = [
    {
      icon: VisibilityOffRoundedIcon,
      title: "Why Privacy Matters",
      description: "Bitcoin is not anonymous. Understand what's exposed and why it matters for your security.",
      href: "/docs/basics/privacy/why-privacy-matters",
      badge: "IMPORTANT",
      level: "Beginner",
    },
    {
      icon: VisibilityOffRoundedIcon,
      title: "Chain Analysis",
      description: "How surveillance companies track Bitcoin. Know your adversary to protect yourself.",
      href: "/docs/basics/privacy/chain-analysis",
      level: "Intermediate",
    },
    {
      icon: VisibilityOffRoundedIcon,
      title: "Protecting Your Privacy",
      description: "Practical techniques to maintain financial privacy on a transparent blockchain.",
      href: "/docs/basics/privacy/protecting-privacy",
      level: "Intermediate",
    },
  ];

  // Nodes
  const nodes = [
    {
      icon: StorageRoundedIcon,
      title: "What is a Bitcoin Node?",
      description: "Software that verifies every transaction. The backbone of Bitcoin's trustless nature.",
      href: "/docs/basics/nodes/what-is-node",
      level: "Beginner",
    },
    {
      icon: StorageRoundedIcon,
      title: "Why Run Your Own Node",
      description: "Privacy, verification, and sovereignty. The case for running your own infrastructure.",
      href: "/docs/basics/nodes/why-run-node",
      level: "Intermediate",
    },
  ];

  // Reference
  const reference = [
    {
      icon: MenuBookRoundedIcon,
      title: "Bitcoin Glossary",
      description: "100+ terms defined. From UTXO to Taproot — every Bitcoin term you need to know.",
      href: "/docs/basics/glossary",
      badge: "NEW",
      level: "Beginner",
    },
  ];

  return (
    <Layout title="Learn" description="Learn Bitcoin self-custody from the ground up. Understand keys, wallets, transactions, privacy, and nodes.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(learnCollectionSchema)}
        </script>
      </Head>
      <main className={styles.page}>
        <header className={`${styles.hero} learnHero`}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className="learn-header">
                <h1 className={styles.heroTitle}>Learn Bitcoin Self-Custody</h1>
                <p className={styles.heroSubtitle}>
                  Master the fundamentals of Bitcoin ownership. From understanding what Bitcoin is to running your own node—everything you need to become truly sovereign.
                </p>
              </div>

              <CategorySection
                title="📚 Fundamentals"
                description="Start here if you're new. Build a solid foundation before diving deeper."
                topics={fundamentals}
              />

              <CategorySection
                title="🔑 Keys & Seeds"
                description="The core of Bitcoin ownership. Understand how private keys and seed phrases work."
                topics={keysAndSeeds}
              />

              <CategorySection
                title="👛 Wallets"
                description="Tools for managing your Bitcoin. From simple apps to advanced security setups."
                topics={wallets}
              />

              <CategorySection
                title="💸 Transactions"
                description="How Bitcoin actually moves. Essential knowledge for using and managing your coins."
                topics={transactions}
              />

              <CategorySection
                title="🕵️ Privacy"
                description="Bitcoin is not anonymous. Learn what's exposed and how to protect yourself."
                topics={privacy}
              />

              <CategorySection
                title="🖥️ Nodes"
                description="Verify everything yourself. The ultimate step in Bitcoin sovereignty."
                topics={nodes}
              />

              <CategorySection
                title="📖 Reference"
                description="Quick lookup resources to help you on your journey."
                topics={reference}
              />

              <div className={styles.heroCtas} style={{ marginTop: 32 }}>
                <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/guides">
                  Ready for Hands-On? View Guides →
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
