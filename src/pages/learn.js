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

// Shared components
import { Card, DifficultyTag } from "@site/src/components";

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
        "url": "https://selfcustodylabs.com/docs/learn/fundamentals/what-is-bitcoin"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "What is Self-Custody?",
        "url": "https://selfcustodylabs.com/docs/learn/fundamentals/what-is-self-custody"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Private Keys",
        "url": "https://selfcustodylabs.com/docs/learn/keys/intro"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Wallets",
        "url": "https://selfcustodylabs.com/docs/learn/wallets/software-wallets"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Transactions",
        "url": "https://selfcustodylabs.com/docs/learn/transactions/understanding"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Privacy",
        "url": "https://selfcustodylabs.com/docs/learn/privacy/why-privacy-matters"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Bitcoin Nodes",
        "url": "https://selfcustodylabs.com/docs/learn/nodes/what-is-node"
      }
    ]
  }
};

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
            footerLeft={<DifficultyTag level={t.level} styles={styles} />}
            footerRight={<span className={styles.arrow}>→</span>}
            styles={styles}
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
      href: "/docs/learn/fundamentals/what-is-bitcoin",
      badge: "START HERE",
      level: "Beginner",
    },
    {
      icon: ShieldRoundedIcon,
      title: "What is Self-Custody?",
      description: "Learn what it means to truly own your Bitcoin. No banks, no exchanges—just you and your keys.",
      href: "/docs/learn/fundamentals/what-is-self-custody",
      level: "Beginner",
    },
    {
      icon: MenuBookRoundedIcon,
      title: "Holding Bitcoin",
      description: "Why custody matters and the spectrum from exchanges to full self-sovereignty.",
      href: "/docs/learn/fundamentals/holding-bitcoin",
      level: "Beginner",
    },
    {
      icon: MenuBookRoundedIcon,
      title: "Choose Your Setup",
      description: "Find the right self-custody approach for your situation, from beginner to advanced.",
      href: "/docs/learn/fundamentals/choosing-your-path",
      badge: "NEW",
      level: "Beginner",
    },
  ];

  // Keys and seeds
  const keysAndSeeds = [
    {
      icon: VpnKeyRoundedIcon,
      title: "Private Keys",
      description: "The foundation of Bitcoin ownership. Understand how cryptographic keys give you control.",
      href: "/docs/learn/keys/intro",
      level: "Beginner",
    },
    {
      icon: LockRoundedIcon,
      title: "Seed Phrases",
      description: "How complex keys become memorable words. The BIP39 standard explained step by step.",
      href: "/docs/learn/keys/seed",
      level: "Intermediate",
    },
    {
      icon: VpnKeyRoundedIcon,
      title: "Address Types",
      description: "Legacy, SegWit, Taproot — understand the different Bitcoin address formats and which to use.",
      href: "/docs/reference/address-types",
      badge: "NEW",
      level: "Beginner",
    },
    {
      icon: VpnKeyRoundedIcon,
      title: "Passphrases",
      description: "Add an extra layer of security to your seed. The 25th word and how it works.",
      href: "/docs/learn/keys/passphrase",
      level: "Intermediate",
    },
  ];

  // Wallets
  const wallets = [
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Software Wallets",
      description: "Apps that manage your keys. Understand hot wallets, recommended options, and when to use them.",
      href: "/docs/learn/wallets/software-wallets",
      level: "Beginner",
    },
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Hardware Wallets",
      description: "Dedicated devices that keep your keys offline. Compare popular options and choose the right one.",
      href: "/docs/learn/wallets/hardware-wallets",
      level: "Beginner",
    },
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Hardware Wallet Setup",
      description: "Step-by-step guide to setting up your first hardware wallet securely.",
      href: "/docs/wallet-setup/hardware-wallet",
      badge: "GUIDE",
      level: "Beginner",
    },
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Multisig Wallets",
      description: "Multiple keys required to spend. Eliminate single points of failure.",
      href: "/docs/learn/wallets/multisig",
      level: "Advanced",
    },
  ];

  // Transactions
  const transactions = [
    {
      icon: SwapHorizRoundedIcon,
      title: "Understanding Transactions",
      description: "How Bitcoin moves from one address to another. Inputs, outputs, and fees.",
      href: "/docs/learn/transactions/understanding",
      level: "Beginner",
    },
    {
      icon: SwapHorizRoundedIcon,
      title: "UTXOs Explained",
      description: "The building blocks of Bitcoin. Understanding unspent transaction outputs is essential.",
      href: "/docs/learn/transactions/utxos",
      badge: "ESSENTIAL",
      level: "Intermediate",
    },
    {
      icon: SwapHorizRoundedIcon,
      title: "Transaction Lifecycle",
      description: "From creation to confirmation. Follow a transaction through the network.",
      href: "/docs/learn/transactions/lifecycle",
      level: "Intermediate",
    },
  ];

  // Privacy
  const privacy = [
    {
      icon: VisibilityOffRoundedIcon,
      title: "Why Privacy Matters",
      description: "Bitcoin is not anonymous. Understand what's exposed and why it matters for your security.",
      href: "/docs/learn/privacy/why-privacy-matters",
      badge: "IMPORTANT",
      level: "Beginner",
    },
    {
      icon: VisibilityOffRoundedIcon,
      title: "Chain Analysis",
      description: "How surveillance companies track Bitcoin. Know your adversary to protect yourself.",
      href: "/docs/learn/privacy/chain-analysis",
      level: "Intermediate",
    },
    {
      icon: VisibilityOffRoundedIcon,
      title: "Protecting Your Privacy",
      description: "Practical techniques to maintain financial privacy on a transparent blockchain.",
      href: "/docs/learn/privacy/protecting-privacy",
      level: "Intermediate",
    },
  ];

  // Nodes
  const nodes = [
    {
      icon: StorageRoundedIcon,
      title: "What is a Bitcoin Node?",
      description: "Software that verifies every transaction. The backbone of Bitcoin's trustless nature.",
      href: "/docs/learn/nodes/what-is-node",
      level: "Beginner",
    },
    {
      icon: StorageRoundedIcon,
      title: "Why Run Your Own Node",
      description: "Privacy, verification, and sovereignty. The case for running your own infrastructure.",
      href: "/docs/learn/nodes/why-run-node",
      level: "Intermediate",
    },
  ];

  // Reference
  const reference = [
    {
      icon: MenuBookRoundedIcon,
      title: "Bitcoin Glossary",
      description: "100+ terms defined. From UTXO to Taproot — every Bitcoin term you need to know.",
      href: "/docs/reference/glossary",
      badge: "NEW",
      level: "Beginner",
    },
  ];

  return (
    <Layout title="Browse Topics" description="Browse all Bitcoin self-custody learning topics. Find guides on keys, wallets, transactions, privacy, and nodes.">
      <Head>
        {/* Page-specific meta tags */}
        <meta name="robots" content="index, follow" />
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
