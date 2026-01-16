import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";

/**
 * @typedef {Object} Article
 * @property {string} title - Article title
 * @property {string} href - Article URL
 * @property {string} [tag] - Optional tag like "Learn", "Guide", "Reference"
 */

/**
 * Related Articles component for cross-linking content
 *
 * Displays a grid of links to related documentation pages. Can use either
 * a predefined collection (by name) or a custom array of articles.
 *
 * @param {Object} props - Component props
 * @param {Article[]} [props.articles=[]] - Custom array of articles to display
 * @param {string} [props.collection] - Name of a predefined collection from articleCollections
 * @param {string} [props.title="Related Articles"] - Section title
 * @param {1|2|3} [props.columns=2] - Number of columns in the grid
 * @returns {React.ReactElement|null} Related articles component or null if no articles
 *
 * @example
 * // Using a predefined collection
 * <RelatedArticles collection="keys" />
 *
 * @example
 * // Using custom articles
 * <RelatedArticles
 *   title="See Also"
 *   columns={3}
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
  const displayArticles = collection ? articleCollections[collection] || [] : articles;

  if (!displayArticles.length) return null;

  return (
    <div className="related-articles">
      <h3 className="related-articles__title">{title}</h3>
      <div className={`related-articles__grid related-articles__grid--cols-${columns}`}>
        {displayArticles.map((article, index) => (
          <Link key={index} to={article.href} className="related-articles__item">
            {article.tag && <span className="related-articles__tag">{article.tag}</span>}
            <span className="related-articles__item-title">{article.title}</span>
          </Link>
        ))}
      </div>
    </div>
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

RelatedArticles.defaultProps = {
  articles: [],
  collection: null,
  title: "Related Articles",
  columns: 2,
};
