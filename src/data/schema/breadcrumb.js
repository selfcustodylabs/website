/**
 * Breadcrumb Schema.org structured data for navigation
 *
 * @module schema/breadcrumb
 */

import { SITE_URL } from "./constants.js";

/**
 * Breadcrumb mappings keyed by URL path
 * Each mapping is an array of breadcrumb names (path is inferred)
 */
export const breadcrumbMappings = {
  // Learn section - Fundamentals
  "/docs/learn/": ["Learn"],
  "/docs/learn/fundamentals/": ["Learn", "Start Here"],
  "/docs/learn/fundamentals/what-is-bitcoin/": ["Learn", "Start Here", "What is Bitcoin"],
  "/docs/learn/fundamentals/what-is-self-custody/": ["Learn", "Start Here", "What is Self-Custody"],
  "/docs/learn/fundamentals/holding-bitcoin/": ["Learn", "Start Here", "Holding Bitcoin"],
  "/docs/learn/fundamentals/choosing-your-path/": ["Learn", "Start Here", "Choose Your Setup"],
  "/docs/learn/fundamentals/threat-models/": ["Learn", "Start Here", "Threat Models"],
  "/docs/wallet-setup/before-you-deposit/": ["Guides", "Wallet Setup", "Before You Deposit"],

  // Learn section - Keys
  "/docs/learn/keys/intro/": ["Learn", "Keys", "Introduction"],
  "/docs/learn/keys/seed/": ["Learn", "Keys", "Seed Phrases"],
  "/docs/learn/keys/passphrase/": ["Learn", "Keys", "Passphrase"],
  "/docs/learn/keys/xpub/": ["Learn", "Keys", "Extended Public Keys"],
  "/docs/learn/keys/xprv/": ["Learn", "Keys", "Extended Private Keys"],
  "/docs/learn/keys/derivation-path/": ["Learn", "Keys", "Derivation Paths"],
  "/docs/learn/keys/random/": ["Learn", "Keys", "Randomness"],
  "/docs/learn/keys/number-systems/": ["Learn", "Keys", "Number Systems"],

  // Learn section - Wallets
  "/docs/learn/wallets/software-wallets/": ["Learn", "Wallets", "Software Wallets"],
  "/docs/learn/wallets/hardware-wallets/": ["Learn", "Wallets", "Hardware Wallets"],
  "/docs/learn/wallets/air-gapped-wallets/": ["Learn", "Wallets", "Air-Gapped Wallets"],
  "/docs/learn/wallets/multisig/": ["Learn", "Wallets", "Multisig"],

  // Learn section - Transactions
  "/docs/learn/transactions/understanding/": ["Learn", "Transactions", "How Transactions Work"],
  "/docs/learn/transactions/utxos/": ["Learn", "Transactions", "UTXOs"],
  "/docs/learn/transactions/create/": ["Learn", "Transactions", "Creating"],
  "/docs/learn/transactions/sign/": ["Learn", "Transactions", "Signing"],
  "/docs/learn/transactions/broadcast/": ["Learn", "Transactions", "Broadcasting"],
  "/docs/learn/transactions/types/": ["Learn", "Transactions", "Types"],
  "/docs/learn/transactions/fees/": ["Learn", "Transactions", "Fees"],

  // Learn section - Privacy
  "/docs/learn/privacy/why-privacy-matters/": ["Learn", "Privacy", "Why Privacy Matters"],
  "/docs/learn/privacy/chain-analysis/": ["Learn", "Privacy", "Chain Analysis"],
  "/docs/learn/privacy/protecting-privacy/": ["Learn", "Privacy", "Protecting Privacy"],

  // Learn section - Nodes
  "/docs/learn/nodes/what-is-node/": ["Learn", "Nodes", "What is a Node"],
  "/docs/learn/nodes/why-run-node/": ["Learn", "Nodes", "Why Run a Node"],

  // Wallet Setup guides
  "/docs/wallet-setup/": ["Guides", "Wallet Setup"],
  "/docs/wallet-setup/hardware-wallet/": ["Guides", "Wallet Setup", "Hardware Wallet"],
  "/docs/wallet-setup/backup-verification/": ["Guides", "Wallet Setup", "Backup Verification"],

  // Security guides
  "/docs/security/": ["Guides", "Security"],
  "/docs/security/seed-generation/": ["Guides", "Security", "Seed Generation"],
  "/docs/security/seed-generation/requirements/": ["Guides", "Seed Generation", "Requirements"],
  "/docs/security/seed-generation/dice-roll/": ["Guides", "Seed Generation", "Dice Rolling"],
  "/docs/security/seed-generation/binary-decimal/": [
    "Guides",
    "Seed Generation",
    "Binary to Decimal",
  ],
  "/docs/security/seed-generation/checksum/": ["Guides", "Seed Generation", "Checksum"],
  "/docs/security/seed-generation/bip39/": ["Guides", "Seed Generation", "BIP39 Words"],
  "/docs/security/seed-generation/backup/": ["Guides", "Seed Generation", "Backup"],

  "/docs/security/passphrase/": ["Guides", "Security", "Passphrase"],
  "/docs/security/passphrase/word-lists/": ["Guides", "Passphrase", "Word Lists"],
  "/docs/security/passphrase/dice-roll/": ["Guides", "Passphrase", "Dice Rolling"],
  "/docs/security/passphrase/backup/": ["Guides", "Passphrase", "Backup"],

  "/docs/security/operational-security/": ["Guides", "Security", "Operational Security"],
  "/docs/security/physical-security/": ["Guides", "Security", "Physical Security"],

  // Bitcoin Node guides
  "/docs/bitcoin-node/": ["Guides", "Bitcoin Node"],
  "/docs/bitcoin-node/node-software-options/": ["Guides", "Bitcoin Node", "Software Options"],
  "/docs/bitcoin-node/parmanode-setup/": ["Guides", "Bitcoin Node", "Parmanode Setup"],
  "/docs/bitcoin-node/electrum-server/": ["Guides", "Bitcoin Node", "Electrum Server"],
  "/docs/bitcoin-node/tor/": ["Guides", "Bitcoin Node", "Tor Setup"],
  "/docs/bitcoin-node/connect-sparrow-wallet/": ["Guides", "Bitcoin Node", "Connect Sparrow"],

  // Advanced guides
  "/docs/advanced/": ["Guides", "Advanced"],
  "/docs/advanced/multisig/": ["Guides", "Advanced", "Multisig"],
  "/docs/advanced/multisig/hardware-setup/": ["Guides", "Multisig", "Hardware Setup"],
  "/docs/advanced/multisig/sparrow-setup/": ["Guides", "Multisig", "Sparrow Setup"],
  "/docs/advanced/multisig/backup-recovery/": ["Guides", "Multisig", "Backup & Recovery"],

  "/docs/advanced/air-gapped-computer/": ["Guides", "Advanced", "Air-Gapped Computer"],
  "/docs/advanced/air-gapped-computer/types/": ["Guides", "Air-Gapped Computer", "Types"],
  "/docs/advanced/air-gapped-computer/setup/": ["Guides", "Air-Gapped Computer", "Setup"],

  "/docs/advanced/bitcoin-computer/": ["Guides", "Advanced", "Bitcoin Computer"],
  "/docs/advanced/bitcoin-computer/choice/": ["Guides", "Bitcoin Computer", "Choosing Hardware"],
  "/docs/advanced/bitcoin-computer/setup/": ["Guides", "Bitcoin Computer", "Setup"],

  "/docs/advanced/inheritance-planning/": ["Guides", "Advanced", "Inheritance Planning"],

  // Privacy guides
  "/docs/privacy/": ["Guides", "Privacy"],
  "/docs/privacy/coinjoin/": ["Guides", "Privacy", "CoinJoin"],
  "/docs/privacy/coinjoin/how-it-works/": ["Guides", "CoinJoin", "How It Works"],
  "/docs/privacy/coinjoin/services/": ["Guides", "CoinJoin", "Services"],
  "/docs/privacy/coinjoin/best-practices/": ["Guides", "CoinJoin", "Best Practices"],

  "/docs/privacy/utxo-management/": ["Guides", "Privacy", "UTXO Management"],
  "/docs/privacy/utxo-management/coin-control/": ["Guides", "UTXO Management", "Coin Control"],
  "/docs/privacy/utxo-management/consolidation/": ["Guides", "UTXO Management", "Consolidation"],

  "/docs/privacy/payjoin/": ["Guides", "Privacy", "PayJoin"],

  // Firmware guides
  "/docs/libreboot/": ["Guides", "Libreboot"],
  "/docs/libreboot/requirements/": ["Guides", "Libreboot", "Requirements"],
  "/docs/libreboot/build/": ["Guides", "Libreboot", "Build ROM"],
  "/docs/libreboot/build-flashprog/": ["Guides", "Libreboot", "Build flashprog"],
  "/docs/libreboot/flashing-bios/": ["Guides", "Libreboot", "Flash BIOS"],
  "/docs/libreboot/update-bios/": ["Guides", "Libreboot", "Update BIOS"],
  "/docs/libreboot/roms/": ["Guides", "Libreboot", "ROM Options"],
  "/docs/libreboot/raspberry-pico/": ["Guides", "Libreboot", "Raspberry Pi Pico"],
  "/docs/libreboot/raspberry-pico/build-serprog/": ["Guides", "Libreboot", "Pico", "Build Serprog"],
  "/docs/libreboot/raspberry-pico/connection/": ["Guides", "Libreboot", "Pico", "Connection"],

  "/docs/coreboot/": ["Guides", "Coreboot"],
  "/docs/coreboot/requirements/": ["Guides", "Coreboot", "Requirements"],
  "/docs/coreboot/build/": ["Guides", "Coreboot", "Build ROM"],
  "/docs/coreboot/external-flashing/": ["Guides", "Coreboot", "External Flashing"],

  // Nostr Signing Device
  "/docs/nostr-signing-device/": ["Guides", "Nostr Signing Device"],
  "/docs/nostr-signing-device/esp32-module/": ["Guides", "Nostr Signing Device", "ESP32 Module"],
  "/docs/nostr-signing-device/arduino-ide/": ["Guides", "Nostr Signing Device", "Arduino IDE"],
  "/docs/nostr-signing-device/setup/": ["Guides", "Nostr Signing Device", "Setup"],
  "/docs/nostr-signing-device/horse-extension/": [
    "Guides",
    "Nostr Signing Device",
    "Horse Extension",
  ],
  "/docs/nostr-signing-device/client-connect/": [
    "Guides",
    "Nostr Signing Device",
    "Client Connect",
  ],

  // Reference
  "/docs/reference/": ["Reference"],
  "/docs/reference/glossary/": ["Reference", "Glossary"],
  "/docs/reference/address-types/": ["Reference", "Address Types"],
  "/docs/reference/hardware-wallet-comparison/": ["Reference", "Hardware Wallet Comparison"],
  "/docs/reference/faq/": ["Reference", "FAQ"],
  "/docs/reference/faq/lost-seed/": ["Reference", "FAQ", "Lost Seed"],
  "/docs/reference/faq/recovery-scams/": ["Reference", "FAQ", "Recovery Scams"],
  "/docs/reference/faq/recovery-troubleshooting/": ["Reference", "FAQ", "Recovery Troubleshooting"],
};

/**
 * Generate BreadcrumbList schema JSON-LD for a given path
 *
 * @param {string} path - URL path to generate schema for
 * @returns {Object|null} JSON-LD BreadcrumbList schema or null if not found
 */
export function generateBreadcrumbSchema(path) {
  const breadcrumbs = breadcrumbMappings[path];
  if (!breadcrumbs) return null;

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];

  let currentPath = "";
  breadcrumbs.forEach((name, index) => {
    // Build the path based on breadcrumb position
    if (index === 0) {
      if (name === "Learn") {
        currentPath = "/docs/learn/";
      } else if (name === "Guides") {
        currentPath = "/guides/";
      } else if (name === "Reference") {
        currentPath = "/docs/reference/";
      }
    } else {
      // For nested items, use the actual path
      currentPath = path;
    }

    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: `${SITE_URL}${currentPath}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
