/**
 * ItemList Schema.org structured data for hub/index pages
 *
 * @module schema/itemList
 */

import { SITE_URL } from "./constants.js";

/**
 * ItemList schemas keyed by URL path
 * Each schema defines a collection of items for hub pages
 */
export const itemListSchemas = {
  "/docs/learn/": {
    name: "Bitcoin Self-Custody Learning Resources",
    description:
      "Comprehensive educational content for Bitcoin self-custody including keys, wallets, transactions, privacy, and nodes.",
    items: [
      { name: "Start Here: Fundamentals", url: "/docs/learn/fundamentals/" },
      { name: "Private Keys & Seeds", url: "/docs/learn/keys/intro/" },
      { name: "Wallet Types", url: "/docs/learn/wallets/" },
      { name: "Understanding Transactions", url: "/docs/learn/transactions/" },
      {
        name: "Bitcoin Privacy",
        url: "/docs/learn/privacy/why-privacy-matters/",
      },
      { name: "Running a Node", url: "/docs/learn/nodes/what-is-node/" },
    ],
  },
  "/docs/wallet-setup/": {
    name: "Bitcoin Wallet Setup Guides",
    description:
      "Step-by-step guides for setting up secure Bitcoin wallets including hardware wallet configuration and backup verification.",
    items: [
      {
        name: "Hardware Wallet Setup",
        url: "/docs/wallet-setup/hardware-wallet/",
      },
      {
        name: "Backup Verification",
        url: "/docs/wallet-setup/backup-verification/",
      },
    ],
  },
  "/docs/security/": {
    name: "Bitcoin Security Guides",
    description:
      "Advanced security guides for Bitcoin self-custody including DIY seed generation, passphrases, and operational security.",
    items: [
      { name: "DIY Seed Generation", url: "/docs/security/seed-generation/" },
      { name: "Passphrase Guide", url: "/docs/security/passphrase/" },
      {
        name: "Operational Security",
        url: "/docs/security/operational-security/",
      },
    ],
  },
  "/docs/advanced/": {
    name: "Advanced Bitcoin Self-Custody",
    description:
      "Advanced techniques for Bitcoin security including multisig setups, air-gapped computers, and inheritance planning.",
    items: [
      { name: "Multisig Setup", url: "/docs/advanced/multisig/" },
      {
        name: "Air-Gapped Computer",
        url: "/docs/advanced/air-gapped-computer/",
      },
      { name: "Bitcoin Computer", url: "/docs/advanced/bitcoin-computer/" },
      {
        name: "Inheritance Planning",
        url: "/docs/advanced/inheritance-planning/",
      },
    ],
  },
  "/docs/reference/": {
    name: "Bitcoin Reference Materials",
    description:
      "Quick reference materials for Bitcoin including glossary, address types, hardware wallet comparison, and FAQ.",
    items: [
      { name: "Bitcoin Glossary", url: "/docs/reference/glossary/" },
      { name: "Address Types", url: "/docs/reference/address-types/" },
      {
        name: "Hardware Wallet Comparison",
        url: "/docs/reference/hardware-wallet-comparison/",
      },
      { name: "FAQ", url: "/docs/reference/faq/" },
    ],
  },
};

/**
 * Generate ItemList schema JSON-LD for hub/index pages
 *
 * @param {string} path - URL path to generate schema for
 * @returns {Object|null} JSON-LD ItemList schema or null if not found
 */
export function generateItemListSchema(path) {
  const schema = itemListSchemas[path];
  if (!schema) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: schema.name,
    description: schema.description,
    numberOfItems: schema.items.length,
    itemListElement: schema.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
    })),
  };
}
