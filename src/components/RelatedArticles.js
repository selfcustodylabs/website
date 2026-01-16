import React from "react";
import Link from "@docusaurus/Link";

/**
 * Related Articles component for cross-linking content
 *
 * Usage:
 * <RelatedArticles
 *   articles={[
 *     { title: "Hardware Wallets", href: "/docs/learn/wallets/hardware-wallets/", tag: "Learn" },
 *     { title: "Seed Phrases", href: "/docs/learn/keys/seed/", tag: "Learn" },
 *   ]}
 * />
 */

// Predefined article collections by topic
export const articleCollections = {
  walletSetup: [
    {
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      tag: "Guide",
    },
    {
      title: "Backup Verification",
      href: "/docs/wallet-setup/backup-verification/",
      tag: "Guide",
    },
    {
      title: "Before You Deposit",
      href: "/docs/learn/fundamentals/before-you-deposit/",
      tag: "Checklist",
    },
  ],
  keys: [
    {
      title: "Private Keys Explained",
      href: "/docs/learn/keys/intro/",
      tag: "Learn",
    },
    {
      title: "Seed Phrases (BIP39)",
      href: "/docs/learn/keys/seed/",
      tag: "Learn",
    },
    {
      title: "Passphrases (25th Word)",
      href: "/docs/learn/keys/passphrase/",
      tag: "Learn",
    },
    {
      title: "DIY Seed Generation",
      href: "/docs/security/seed-generation/",
      tag: "Guide",
    },
  ],
  security: [
    {
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
      tag: "Learn",
    },
    {
      title: "Air-Gapped Wallets",
      href: "/docs/learn/wallets/air-gapped-wallets/",
      tag: "Learn",
    },
    {
      title: "Multisig Explained",
      href: "/docs/learn/wallets/multisig/",
      tag: "Learn",
    },
    {
      title: "Operational Security",
      href: "/docs/security/operational-security/",
      tag: "Guide",
    },
  ],
  privacy: [
    {
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
      tag: "Learn",
    },
    {
      title: "Chain Analysis",
      href: "/docs/learn/privacy/chain-analysis/",
      tag: "Learn",
    },
    {
      title: "UTXO Management",
      href: "/docs/privacy/utxo-management/",
      tag: "Guide",
    },
    { title: "CoinJoin", href: "/docs/privacy/coinjoin/", tag: "Guide" },
  ],
  transactions: [
    {
      title: "UTXOs Explained",
      href: "/docs/learn/transactions/utxos/",
      tag: "Learn",
    },
    {
      title: "Transaction Fees",
      href: "/docs/learn/transactions/fees/",
      tag: "Learn",
    },
    {
      title: "Transaction Lifecycle",
      href: "/docs/learn/transactions/lifecycle/",
      tag: "Learn",
    },
  ],
  nodes: [
    {
      title: "What is a Node",
      href: "/docs/learn/nodes/what-is-node/",
      tag: "Learn",
    },
    {
      title: "Why Run a Node",
      href: "/docs/learn/nodes/why-run-node/",
      tag: "Learn",
    },
    { title: "Node Setup Guide", href: "/docs/bitcoin-node/", tag: "Guide" },
  ],
  multisig: [
    {
      title: "Multisig Explained",
      href: "/docs/learn/wallets/multisig/",
      tag: "Learn",
    },
    {
      title: "Multisig Setup Guide",
      href: "/docs/advanced/multisig/",
      tag: "Guide",
    },
    {
      title: "Hardware Setup",
      href: "/docs/advanced/multisig/hardware-setup/",
      tag: "Guide",
    },
  ],
  reference: [
    { title: "Glossary", href: "/docs/reference/glossary/", tag: "Reference" },
    {
      title: "Address Types",
      href: "/docs/reference/address-types/",
      tag: "Reference",
    },
    {
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      tag: "Reference",
    },
    { title: "FAQ", href: "/docs/reference/faq/", tag: "Reference" },
  ],
};

export default function RelatedArticles({
  articles = [],
  collection,
  title = "Related Articles",
  columns = 2,
}) {
  // Use predefined collection if specified
  const displayArticles = collection
    ? articleCollections[collection] || []
    : articles;

  if (!displayArticles.length) return null;

  return (
    <div className="related-articles">
      <h3 className="related-articles__title">{title}</h3>
      <div
        className={`related-articles__grid related-articles__grid--cols-${columns}`}
      >
        {displayArticles.map((article, index) => (
          <Link
            key={index}
            to={article.href}
            className="related-articles__item"
          >
            {article.tag && (
              <span className="related-articles__tag">{article.tag}</span>
            )}
            <span className="related-articles__item-title">
              {article.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
