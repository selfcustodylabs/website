/**
 * Article Schema.org structured data for educational content
 *
 * @module schema/article
 */

import { SITE_URL, DEFAULT_ORGANIZATION, DEFAULT_PUBLISHER } from "./constants.js";

/**
 * Article schemas keyed by URL path
 * Each schema defines headline, description, and article section
 */
export const articleSchemas = {
  // Fundamentals
  "/docs/learn/fundamentals/": {
    headline: "Start Here: Bitcoin Self-Custody Journey",
    description:
      "Begin your Bitcoin self-custody journey. Understand what self-custody means, assess your needs, and find the right path for your situation.",
    articleSection: "Bitcoin Fundamentals",
  },
  "/docs/learn/fundamentals/what-is-bitcoin/": {
    headline: "What is Bitcoin?",
    description:
      "Understand what Bitcoin is, how it works, and why it matters. Digital money that no one controls.",
    articleSection: "Bitcoin Fundamentals",
  },
  "/docs/learn/fundamentals/what-is-self-custody/": {
    headline: "What is Bitcoin Self-Custody?",
    description:
      "Learn what Bitcoin self-custody means: controlling your own private keys, seed phrases, and taking full ownership without third parties.",
    articleSection: "Bitcoin Fundamentals",
  },
  "/docs/learn/fundamentals/holding-bitcoin/": {
    headline: "Why Holding Your Own Bitcoin Matters",
    description:
      "Understand the difference between exchange custody and self-custody. Learn why not your keys, not your coins is essential.",
    articleSection: "Bitcoin Fundamentals",
  },
  "/docs/learn/fundamentals/choosing-your-path/": {
    headline: "Choose Your Self-Custody Setup",
    description:
      "Interactive decision tree to help you choose the right Bitcoin self-custody setup based on your holdings and security needs.",
    articleSection: "Bitcoin Fundamentals",
  },
  "/docs/learn/fundamentals/threat-models/": {
    headline: "Assess Your Threat Model",
    description:
      "Determine what level of Bitcoin security you actually need. Match your setup to your real risks.",
    articleSection: "Bitcoin Fundamentals",
  },
  "/docs/wallet-setup/before-you-deposit/": {
    headline: "Before You Deposit: Critical Checklist",
    description:
      "Essential verification steps before sending Bitcoin to any new wallet. This checklist can prevent catastrophic mistakes.",
    articleSection: "Bitcoin Fundamentals",
  },

  // Keys
  "/docs/learn/keys/intro/": {
    headline: "Understanding Bitcoin Private Keys",
    description: "Learn how private keys work and why they are essential for Bitcoin ownership.",
    articleSection: "Private Keys",
  },
  "/docs/learn/keys/seed/": {
    headline: "Bitcoin Seed Phrases Explained (BIP39)",
    description:
      "Understand how seed phrases work, the BIP39 standard, and how 24 words protect your Bitcoin.",
    articleSection: "Private Keys",
  },
  "/docs/learn/keys/passphrase/": {
    headline: "Bitcoin Passphrase (25th Word) Explained",
    description:
      "Learn how passphrases add extra security to your seed phrase and create hidden wallets.",
    articleSection: "Private Keys",
  },
  "/docs/learn/keys/xpub/": {
    headline: "Extended Public Keys (xpub) Explained",
    description:
      "Understand how extended public keys enable watch-only wallets and address generation.",
    articleSection: "Private Keys",
  },
  "/docs/learn/keys/xprv/": {
    headline: "Extended Private Keys (xprv) Explained",
    description:
      "Learn about extended private keys and hierarchical deterministic wallet derivation.",
    articleSection: "Private Keys",
  },
  "/docs/learn/keys/derivation-path/": {
    headline: "Bitcoin Derivation Paths Explained",
    description:
      "Understand BIP44/49/84 derivation paths and how they determine your wallet addresses.",
    articleSection: "Private Keys",
  },

  // Wallets
  "/docs/learn/wallets/software-wallets/": {
    headline: "Bitcoin Software Wallets Guide",
    description: "Learn about different types of software wallets and how to choose the right one.",
    articleSection: "Wallets",
  },
  "/docs/learn/wallets/hardware-wallets/": {
    headline: "Bitcoin Hardware Wallets Guide",
    description: "Understand how hardware wallets work and why they provide better security.",
    articleSection: "Wallets",
  },
  "/docs/learn/wallets/air-gapped-wallets/": {
    headline: "Air-Gapped Bitcoin Wallets Explained",
    description: "Learn about air-gapped wallets and why they offer the highest level of security.",
    articleSection: "Wallets",
  },
  "/docs/learn/wallets/multisig/": {
    headline: "Multisig Wallets Explained",
    description:
      "Understand how Bitcoin multisig wallets work and why they eliminate single points of failure.",
    articleSection: "Wallets",
  },

  // Transactions
  "/docs/learn/transactions/understanding/": {
    headline: "Understanding Bitcoin Transactions",
    description: "Learn the basics of how Bitcoin transactions work and what they contain.",
    articleSection: "Transactions",
  },
  "/docs/learn/transactions/utxos/": {
    headline: "UTXOs Explained: How Bitcoin Actually Works",
    description:
      "Understand Bitcoin UTXO model. Learn how Unspent Transaction Outputs work and why they matter.",
    articleSection: "Transactions",
  },
  "/docs/learn/transactions/fees/": {
    headline: "Bitcoin Transaction Fees Explained",
    description:
      "Understand how Bitcoin transaction fees work, why they vary, and strategies to minimize costs. Learn fee estimation, RBF, and CPFP.",
    articleSection: "Transactions",
  },

  // Privacy
  "/docs/learn/privacy/why-privacy-matters/": {
    headline: "Why Bitcoin Privacy Matters",
    description:
      "Understand why financial privacy is essential for Bitcoin users and what information is exposed on the public blockchain.",
    articleSection: "Privacy",
  },
  "/docs/learn/privacy/chain-analysis/": {
    headline: "Chain Analysis Explained",
    description:
      "Learn how blockchain surveillance works and the heuristics used to track Bitcoin transactions.",
    articleSection: "Privacy",
  },
  "/docs/learn/privacy/protecting-privacy/": {
    headline: "Protecting Your Bitcoin Privacy",
    description:
      "Overview of Bitcoin privacy techniques including running your own node, UTXO management, and CoinJoin.",
    articleSection: "Privacy",
  },

  // Nodes
  "/docs/learn/nodes/what-is-node/": {
    headline: "What is a Bitcoin Node",
    description:
      "Understand what a Bitcoin node does, how it differs from a wallet, and its role in the network.",
    articleSection: "Bitcoin Nodes",
  },
  "/docs/learn/nodes/why-run-node/": {
    headline: "Why Run Your Own Bitcoin Node",
    description:
      "Understand why running your own Bitcoin node matters for privacy, security, and true self-custody.",
    articleSection: "Bitcoin Nodes",
  },

  // Reference
  "/docs/reference/hardware-wallet-comparison/": {
    headline: "Hardware Wallet Comparison: Coldcard vs Trezor vs BitBox vs Ledger",
    description:
      "Comprehensive comparison of Bitcoin hardware wallets including Coldcard, Trezor, BitBox02, Ledger, Jade, and Keystone.",
    articleSection: "Reference",
  },
  "/docs/reference/faq/recovery-troubleshooting/": {
    headline: "Wallet Recovery Troubleshooting",
    description:
      "Common problems when recovering a Bitcoin wallet and how to solve them. Fix empty wallet issues, wrong addresses, and derivation path problems.",
    articleSection: "FAQ",
  },
  "/docs/reference/glossary/": {
    headline: "Bitcoin Glossary: 100+ Terms Explained",
    description:
      "Complete glossary of Bitcoin and self-custody terminology including UTXO, seed phrase, hardware wallet, multisig, and more.",
    articleSection: "Reference",
  },
  "/docs/reference/address-types/": {
    headline: "Bitcoin Address Types Explained",
    description:
      "Understand Legacy, SegWit, Native SegWit, and Taproot Bitcoin addresses. Learn which to use and why it matters.",
    articleSection: "Reference",
  },

  // Guides
  "/docs/bitcoin-node/": {
    headline: "Run Your Own Bitcoin Node: Complete Setup Guide",
    description:
      "Complete guide to running your own Bitcoin node with Parmanode. Learn why nodes matter, choose your hardware, and follow step-by-step setup.",
    articleSection: "Guides",
  },
  "/docs/libreboot/": {
    headline: "Libreboot Installation Guide",
    description:
      "Step-by-step guide to installing Libreboot on compatible laptops for enhanced privacy and security.",
    articleSection: "Guides",
  },
  "/docs/coreboot/": {
    headline: "Coreboot Installation Guide",
    description:
      "Guide to building and flashing Coreboot on laptops for improved security and boot performance.",
    articleSection: "Guides",
  },
};

/**
 * Generate Article schema JSON-LD for educational content
 *
 * @param {string} path - URL path to generate schema for
 * @returns {Object|null} JSON-LD Article schema or null if not found
 */
export function generateArticleSchema(path) {
  const schema = articleSchemas[path];
  if (!schema) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: schema.headline,
    description: schema.description,
    articleSection: schema.articleSection,
    author: DEFAULT_ORGANIZATION,
    publisher: DEFAULT_PUBLISHER,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };
}
