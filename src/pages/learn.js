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
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

// Shared components
import { CategorySection } from "@site/src/components";
import PageHeader from "@site/src/components/homepage/PageHeader";

// Schema for SEO
const learnCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Learn Bitcoin Self-Custody",
  description:
    "Comprehensive educational content about Bitcoin self-custody. Understand keys, wallets, transactions, privacy, and nodes.",
  url: "https://selfcustodylabs.com/learn/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "What is Bitcoin?",
        url: "https://selfcustodylabs.com/docs/learn/fundamentals/what-is-bitcoin",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "What is Self-Custody?",
        url: "https://selfcustodylabs.com/docs/learn/fundamentals/what-is-self-custody",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Private Keys",
        url: "https://selfcustodylabs.com/docs/learn/keys/intro",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Wallets",
        url: "https://selfcustodylabs.com/docs/learn/wallets/software-wallets",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Transactions",
        url: "https://selfcustodylabs.com/docs/learn/transactions/understanding",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Privacy",
        url: "https://selfcustodylabs.com/docs/learn/privacy/why-privacy-matters",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Bitcoin Nodes",
        url: "https://selfcustodylabs.com/docs/learn/nodes/what-is-node",
      },
    ],
  },
};

export default function LearnPage() {
  // Foundational concepts
  const fundamentals = [
    {
      icon: CurrencyBitcoinRoundedIcon,
      title: "What is Bitcoin?",
      description:
        "Understand digital money that no one controls. The basics of blockchain, mining, and why Bitcoin matters.",
      href: "/docs/learn/fundamentals/what-is-bitcoin",
      badge: "START HERE",
      level: "Beginner",
    },
    {
      icon: ShieldRoundedIcon,
      title: "What is Self-Custody?",
      description:
        "Learn what it means to truly own your Bitcoin. No banks, no exchanges, just you and your keys.",
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
      description:
        "Find the right self-custody approach for your situation, from beginner to advanced.",
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
      description:
        "The foundation of Bitcoin ownership. Understand how cryptographic keys give you control.",
      href: "/docs/learn/keys/intro",
      level: "Beginner",
    },
    {
      icon: LockRoundedIcon,
      title: "Seed Phrases",
      description:
        "How complex keys become memorable words. The BIP39 standard explained step by step.",
      href: "/docs/learn/keys/seed",
      level: "Intermediate",
    },
    {
      icon: VpnKeyRoundedIcon,
      title: "Address Types",
      description:
        "Legacy, SegWit, Taproot: understand the different Bitcoin address formats and which to use.",
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
      description:
        "Apps that manage your keys. Understand hot wallets, recommended options, and when to use them.",
      href: "/docs/learn/wallets/software-wallets",
      level: "Beginner",
    },
    {
      icon: AccountBalanceWalletRoundedIcon,
      title: "Hardware Wallets",
      description:
        "Dedicated devices that keep your keys offline. Compare popular options and choose the right one.",
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
      title: "How Transactions Work",
      description:
        "How Bitcoin moves: inputs, outputs, fees, and the complete lifecycle from creation to confirmation.",
      href: "/docs/learn/transactions/understanding",
      level: "Beginner",
    },
    {
      icon: SwapHorizRoundedIcon,
      title: "UTXOs Explained",
      description:
        "The building blocks of Bitcoin. Understanding unspent transaction outputs is essential.",
      href: "/docs/learn/transactions/utxos",
      badge: "ESSENTIAL",
      level: "Intermediate",
    },
  ];

  // Privacy
  const privacy = [
    {
      icon: VisibilityOffRoundedIcon,
      title: "Why Privacy Matters",
      description:
        "Bitcoin is not anonymous. Understand what's exposed and why it matters for your security.",
      href: "/docs/learn/privacy/why-privacy-matters",
      badge: "IMPORTANT",
      level: "Beginner",
    },
    {
      icon: VisibilityOffRoundedIcon,
      title: "Chain Analysis",
      description:
        "How surveillance companies track Bitcoin. Know your adversary to protect yourself.",
      href: "/docs/learn/privacy/chain-analysis",
      level: "Intermediate",
    },
    {
      icon: VisibilityOffRoundedIcon,
      title: "Protecting Your Privacy",
      description:
        "Practical techniques to maintain financial privacy on a transparent blockchain.",
      href: "/docs/learn/privacy/protecting-privacy",
      level: "Intermediate",
    },
  ];

  // Nodes
  const nodes = [
    {
      icon: StorageRoundedIcon,
      title: "What is a Bitcoin Node?",
      description:
        "Software that verifies every transaction. The backbone of Bitcoin's trustless nature.",
      href: "/docs/learn/nodes/what-is-node",
      level: "Beginner",
    },
    {
      icon: StorageRoundedIcon,
      title: "Why Run Your Own Node",
      description:
        "Privacy, verification, and sovereignty. The case for running your own infrastructure.",
      href: "/docs/learn/nodes/why-run-node",
      level: "Intermediate",
    },
  ];

  // Reference
  const reference = [
    {
      icon: MenuBookRoundedIcon,
      title: "Bitcoin Glossary",
      description:
        "100+ terms defined. From UTXO to Taproot: every Bitcoin term you need to know.",
      href: "/docs/reference/glossary",
      badge: "NEW",
      level: "Beginner",
    },
  ];

  return (
    <Layout
      title="Learn Bitcoin Self-Custody: Keys, Wallets, Transactions & Privacy"
      description="Free Bitcoin education: understand private keys, seed phrases, hardware wallets, transactions, UTXOs, privacy techniques, and why to run your own node."
    >
      <Head>
        {/* Page-specific meta tags */}
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(learnCollectionSchema)}</script>
      </Head>
      <main className="homepage relative bg-neutral-950 text-white">
        <PageHeader
          eyebrow="LEARN"
          title={
            <>
              Learn Bitcoin{" "}
              <span
                className="inline-block bg-gradient-to-r from-amber-300 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient-shift"
                style={{ backgroundSize: "200% 200%" }}
              >
                Self-Custody
              </span>
            </>
          }
          subtitle="Master the fundamentals of Bitcoin ownership. From understanding what Bitcoin is to running your own node, everything you need to become truly sovereign."
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:pb-32">
          <CategorySection
            title="📚 Fundamentals"
            description="Start here if you're new. Build a solid foundation before diving deeper."
            items={fundamentals}
          />

          <CategorySection
            title="🔑 Keys & Seeds"
            description="The core of Bitcoin ownership. Understand how private keys and seed phrases work."
            items={keysAndSeeds}
          />

          <CategorySection
            title="👛 Wallets"
            description="Tools for managing your Bitcoin. From simple apps to advanced security setups."
            items={wallets}
          />

          <CategorySection
            title="💸 Transactions"
            description="How Bitcoin actually moves. Essential knowledge for using and managing your coins."
            items={transactions}
          />

          <CategorySection
            title="🕵️ Privacy"
            description="Bitcoin is not anonymous. Learn what's exposed and how to protect yourself."
            items={privacy}
          />

          <CategorySection
            title="🖥️ Nodes"
            description="Verify everything yourself. The ultimate step in Bitcoin sovereignty."
            items={nodes}
          />

          <CategorySection
            title="📖 Reference"
            description="Quick lookup resources to help you on your journey."
            items={reference}
          />

          <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/guides"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-glow transition-all duration-300 hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-glow-strong"
            >
              Ready for hands-on? View guides
              <ArrowForwardRoundedIcon
                sx={{ fontSize: 18 }}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/5 px-7 py-3.5 text-sm font-semibold text-amber-100 transition-all duration-300 hover:border-amber-500/70 hover:bg-amber-500/15 hover:-translate-y-0.5"
            >
              <ArrowBackRoundedIcon
                sx={{ fontSize: 18 }}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
