import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";

export const articleCollections = {
  walletSetup: [
    { title: "Hardware Wallet Setup", href: "/docs/wallet-setup/hardware-wallet/", tag: "Guide" },
    { title: "Backup Verification", href: "/docs/wallet-setup/backup-verification/", tag: "Guide" },
    { title: "Before You Deposit", href: "/docs/wallet-setup/before-you-deposit/", tag: "Checklist" },
  ],
  keys: [
    { title: "Private Keys Explained", href: "/docs/learn/keys/intro/", tag: "Learn" },
    { title: "Seed Phrases (BIP39)", href: "/docs/learn/keys/seed/", tag: "Learn" },
    { title: "Passphrases (25th Word)", href: "/docs/learn/keys/passphrase/", tag: "Learn" },
    { title: "DIY Seed Generation", href: "/docs/learn/keys/random/", tag: "Guide" },
  ],
  security: [
    { title: "Hardware Wallets", href: "/docs/learn/wallets/hardware-wallets/", tag: "Learn" },
    { title: "Air-Gapped Wallets", href: "/docs/learn/wallets/air-gapped-wallets/", tag: "Learn" },
    { title: "Multisig Explained", href: "/docs/learn/wallets/multisig/", tag: "Learn" },
    { title: "Operational Security", href: "/docs/security/operational-security/", tag: "Guide" },
  ],
  privacy: [
    { title: "Why Privacy Matters", href: "/docs/learn/privacy/why-privacy-matters/", tag: "Learn" },
    { title: "Chain Analysis", href: "/docs/learn/privacy/chain-analysis/", tag: "Learn" },
    { title: "UTXO Management", href: "/docs/privacy/utxo-management/", tag: "Guide" },
    { title: "CoinJoin", href: "/docs/privacy/coinjoin/", tag: "Guide" },
  ],
  transactions: [
    { title: "UTXOs Explained", href: "/docs/learn/transactions/utxos/", tag: "Learn" },
    { title: "Transaction Fees", href: "/docs/learn/transactions/fees/", tag: "Learn" },
    { title: "How Transactions Work", href: "/docs/learn/transactions/understanding/", tag: "Learn" },
  ],
  nodes: [
    { title: "What is a Node", href: "/docs/learn/nodes/what-is-node/", tag: "Learn" },
    { title: "Why Run a Node", href: "/docs/learn/nodes/why-run-node/", tag: "Learn" },
    { title: "Node Setup Guide", href: "/docs/bitcoin-node/", tag: "Guide" },
  ],
  multisig: [
    { title: "Multisig Explained", href: "/docs/learn/wallets/multisig/", tag: "Learn" },
    { title: "Multisig Setup Guide", href: "/docs/advanced/multisig/", tag: "Guide" },
    { title: "Hardware Setup", href: "/docs/advanced/multisig/hardware-setup/", tag: "Guide" },
  ],
  reference: [
    { title: "Glossary", href: "/docs/reference/glossary/", tag: "Reference" },
    { title: "Address Types", href: "/docs/reference/address-types/", tag: "Reference" },
    { title: "Hardware Wallet Comparison", href: "/docs/reference/hardware-wallet-comparison/", tag: "Reference" },
    { title: "FAQ", href: "/docs/reference/faq/", tag: "Reference" },
  ],
};

const gridColsClass = {
  1: "grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
};

export default function RelatedArticles({
  articles = [],
  collection,
  title = "Related Articles",
  columns = 2,
}) {
  const displayArticles = collection ? articleCollections[collection] || [] : articles;

  if (!displayArticles.length) return null;

  return (
    <section className="mt-12 border-t border-white/10 pt-8">
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
        {title}
      </h3>
      <div className={`grid gap-3 ${gridColsClass[columns] || gridColsClass[2]}`}>
        {displayArticles.map((article, index) => (
          <Link
            key={index}
            to={article.href}
            className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-all duration-200 hover:border-amber-500/35 hover:bg-white/[0.04]"
          >
            {article.tag ? (
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-amber-400">
                {article.tag}
              </span>
            ) : null}
            <span className="font-display text-sm font-semibold text-white">{article.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

RelatedArticles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      tag: PropTypes.string,
    })
  ),
  collection: PropTypes.oneOf([
    "walletSetup",
    "keys",
    "security",
    "privacy",
    "transactions",
    "nodes",
    "multisig",
    "reference",
  ]),
  title: PropTypes.string,
  columns: PropTypes.oneOf([1, 2, 3]),
};
