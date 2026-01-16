/**
 * HowTo Schema.org structured data for procedural guides
 *
 * @module schema/howTo
 */

import { SITE_URL } from "./constants.js";

/**
 * HowTo schemas keyed by URL path
 * Each schema defines steps, supplies, tools, and estimated time/cost
 */
export const howToSchemas = {
  // =====================
  // WALLET SETUP
  // =====================
  "/docs/wallet-setup/hardware-wallet/": {
    name: "How to Set Up a Hardware Wallet for Bitcoin",
    description:
      "Step-by-step guide to setting up your first hardware wallet for secure Bitcoin self-custody. Learn to initialize, backup, and use your device safely.",
    totalTime: "PT2H",
    estimatedCost: {
      currency: "USD",
      value: "150",
    },
    supply: [
      "Hardware wallet (Trezor, Coldcard, BitBox02, or similar)",
      "Metal seed backup plate",
      "Pen and paper for initial seed recording",
    ],
    tool: ["Computer with Sparrow Wallet installed", "USB cable (for non-air-gapped devices)"],
    steps: [
      {
        name: "Choose Your Hardware Wallet",
        text: "Select a hardware wallet based on your security needs and budget. Popular options include Trezor, Coldcard, and BitBox02.",
        url: `${SITE_URL}/docs/wallet-setup/hardware-wallet/`,
      },
      {
        name: "Initialize the Device",
        text: "Unbox your device, verify authenticity, set a strong PIN, and generate a new seed phrase on the device.",
        url: `${SITE_URL}/docs/wallet-setup/hardware-wallet/`,
      },
      {
        name: "Record Your Seed Phrase",
        text: "Carefully write down your 12 or 24-word seed phrase on paper. Never photograph it or store it digitally.",
        url: `${SITE_URL}/docs/wallet-setup/hardware-wallet/`,
      },
      {
        name: "Connect to Sparrow Wallet",
        text: "Install Sparrow Wallet on your computer and connect your hardware wallet to create a watch-only wallet.",
        url: `${SITE_URL}/docs/wallet-setup/hardware-wallet/`,
      },
      {
        name: "Verify Your First Receive Address",
        text: "Generate a receive address and verify it matches on your hardware wallet screen before sharing it.",
        url: `${SITE_URL}/docs/wallet-setup/hardware-wallet/`,
      },
      {
        name: "Complete Backup Verification",
        text: "Test that your seed phrase backup works by performing a recovery test before depositing funds.",
        url: `${SITE_URL}/docs/wallet-setup/backup-verification/`,
      },
    ],
  },

  "/docs/wallet-setup/backup-verification/": {
    name: "How to Verify Your Bitcoin Seed Backup",
    description:
      "Test your seed phrase backup to ensure it works before trusting it with significant funds. Multiple verification methods explained.",
    totalTime: "PT1H",
    estimatedCost: {
      currency: "USD",
      value: "0",
    },
    supply: ["Your written seed phrase backup", "Hardware wallet (same or second device)"],
    tool: ["Sparrow Wallet", "Optional: Second hardware wallet for full test"],
    steps: [
      {
        name: "Understand Why Verification Matters",
        text: "A backup you have never tested is not a reliable backup. Verification ensures you can actually recover your funds.",
        url: `${SITE_URL}/docs/wallet-setup/backup-verification/`,
      },
      {
        name: "Choose Verification Method",
        text: "Select from address comparison, partial recovery check, or full recovery test based on your comfort level.",
        url: `${SITE_URL}/docs/wallet-setup/backup-verification/`,
      },
      {
        name: "Perform the Recovery Test",
        text: "Reset your device (or use a second device) and restore using only your written seed phrase.",
        url: `${SITE_URL}/docs/wallet-setup/backup-verification/`,
      },
      {
        name: "Verify Addresses Match",
        text: "Compare the first few receive addresses from your restored wallet against your original wallet.",
        url: `${SITE_URL}/docs/wallet-setup/backup-verification/`,
      },
      {
        name: "Create Metal Backup",
        text: "Once verified, stamp or engrave your seed phrase onto a metal backup plate for permanent storage.",
        url: `${SITE_URL}/docs/wallet-setup/backup-verification/`,
      },
    ],
  },

  // =====================
  // SECURITY GUIDES
  // =====================
  "/docs/security/seed-generation/": {
    name: "How to Generate Your Own Bitcoin Seed Phrase",
    description:
      "Create a cryptographically secure Bitcoin seed phrase using dice rolls for true randomness. This DIY method ensures no third party has access to your private keys.",
    totalTime: "PT2H",
    estimatedCost: {
      currency: "USD",
      value: "20",
    },
    supply: [
      "Casino-grade dice (5 dice recommended)",
      "Pen and paper",
      "Metal seed storage plate",
      "BIP39 word list",
    ],
    tool: [
      "Air-gapped computer or Raspberry Pi Zero",
      "Electrum wallet (offline)",
      "Calculator (optional)",
    ],
    steps: [
      {
        name: "Gather Requirements",
        text: "Obtain casino-grade dice, an air-gapped computer, and a metal backup plate for secure seed storage.",
        url: `${SITE_URL}/docs/security/seed-generation/requirements/`,
      },
      {
        name: "Roll Dice for Entropy",
        text: "Roll dice 99 times to generate 256 bits of true random entropy. Record each roll as binary (1-3 = 0, 4-6 = 1).",
        url: `${SITE_URL}/docs/security/seed-generation/dice-roll/`,
      },
      {
        name: "Convert Binary to Decimal",
        text: "Split your binary string into 11-bit chunks and convert each chunk to a decimal number (0-2047).",
        url: `${SITE_URL}/docs/security/seed-generation/binary-decimal/`,
      },
      {
        name: "Calculate Checksum",
        text: "Use SHA256 to calculate the checksum bits that complete your 24th word.",
        url: `${SITE_URL}/docs/security/seed-generation/checksum/`,
      },
      {
        name: "Look Up BIP39 Words",
        text: "Convert each decimal number to its corresponding BIP39 word to create your 24-word seed phrase.",
        url: `${SITE_URL}/docs/security/seed-generation/bip39/`,
      },
      {
        name: "Backup Your Seed",
        text: "Stamp or engrave your seed phrase onto a metal plate for fireproof, waterproof storage.",
        url: `${SITE_URL}/docs/security/seed-generation/backup/`,
      },
    ],
  },

  "/docs/security/passphrase/": {
    name: "How to Create a Secure Bitcoin Passphrase",
    description:
      "Generate a cryptographically strong passphrase using dice rolls and the EFF word list. Add an extra layer of protection to your Bitcoin seed phrase.",
    totalTime: "PT30M",
    estimatedCost: {
      currency: "USD",
      value: "5",
    },
    supply: ["Five six-sided dice", "Pen and paper", "EFF long word list"],
    tool: [],
    steps: [
      {
        name: "Understand Word Lists",
        text: "Learn why the EFF word list is preferred over the original Diceware list for better memorability and security.",
        url: `${SITE_URL}/docs/security/passphrase/word-lists/`,
      },
      {
        name: "Roll Dice for Each Word",
        text: "Roll 5 dice for each word you want in your passphrase. Look up the resulting 5-digit number in the EFF word list.",
        url: `${SITE_URL}/docs/security/passphrase/dice-roll/`,
      },
      {
        name: "Backup Your Passphrase",
        text: "Store your passphrase separately from your seed phrase in a secure location.",
        url: `${SITE_URL}/docs/security/passphrase/backup/`,
      },
    ],
  },

  // =====================
  // BITCOIN NODE
  // =====================
  "/docs/bitcoin-node/": {
    name: "How to Set Up Your Own Bitcoin Node",
    description:
      "Run your own Bitcoin node to independently verify transactions and enhance your privacy. Connect your wallet to your own node for true self-sovereignty.",
    totalTime: "PT4H",
    estimatedCost: {
      currency: "USD",
      value: "200",
    },
    supply: [
      "Raspberry Pi 4 (4GB+ RAM) or dedicated computer",
      "1TB+ SSD storage",
      "Ethernet cable",
      "Power supply",
    ],
    tool: ["Umbrel, RaspiBlitz, Start9, or RoninDojo software", "Sparrow Wallet"],
    steps: [
      {
        name: "Understand Why You Need a Node",
        text: "Learn why running your own node matters for privacy, security, and true Bitcoin self-custody.",
        url: `${SITE_URL}/docs/learn/nodes/why-run-node/`,
      },
      {
        name: "Choose Node Software",
        text: "Select a node software package: Umbrel for beginners, RaspiBlitz for customization, Start9 or RoninDojo for advanced features.",
        url: `${SITE_URL}/docs/bitcoin-node/node-software-options/`,
      },
      {
        name: "Install and Sync",
        text: "Install the node software and wait for initial blockchain sync (can take several days).",
        url: `${SITE_URL}/docs/bitcoin-node/parmanode-setup/`,
      },
      {
        name: "Install Electrum Server",
        text: "Set up an Electrum server to index the blockchain and enable wallet connections.",
        url: `${SITE_URL}/docs/bitcoin-node/electrum-server/`,
      },
      {
        name: "Configure Tor Connection",
        text: "Route your node traffic through Tor for enhanced privacy and to hide your IP address.",
        url: `${SITE_URL}/docs/bitcoin-node/tor/`,
      },
      {
        name: "Connect Sparrow Wallet",
        text: "Connect your Sparrow Wallet to your own node for private, self-sovereign transactions.",
        url: `${SITE_URL}/docs/bitcoin-node/connect-sparrow-wallet/`,
      },
    ],
  },

  // =====================
  // ADVANCED GUIDES
  // =====================
  "/docs/advanced/multisig/": {
    name: "How to Set Up a Bitcoin Multisig Wallet",
    description:
      "Create a multisignature wallet requiring multiple keys to spend. Eliminate single points of failure and protect against theft or loss.",
    totalTime: "PT4H",
    estimatedCost: {
      currency: "USD",
      value: "400",
    },
    supply: [
      "Multiple hardware wallets (2-3 from different manufacturers)",
      "Metal backup plates for each seed",
      "Secure storage locations",
    ],
    tool: ["Sparrow Wallet", "Printed wallet descriptor backup"],
    steps: [
      {
        name: "Understand Multisig Concepts",
        text: "Learn how multisig wallets work and why they provide better security than single-signature wallets.",
        url: `${SITE_URL}/docs/learn/wallets/multisig/`,
      },
      {
        name: "Choose Your Configuration",
        text: "Select a multisig configuration (2-of-3 recommended for most users) based on your security needs.",
        url: `${SITE_URL}/docs/advanced/multisig/`,
      },
      {
        name: "Set Up Hardware Wallets",
        text: "Initialize each hardware wallet separately and securely backup each seed phrase.",
        url: `${SITE_URL}/docs/advanced/multisig/hardware-setup/`,
      },
      {
        name: "Create Multisig in Sparrow",
        text: "Use Sparrow Wallet to combine the public keys from each device into a multisig wallet.",
        url: `${SITE_URL}/docs/advanced/multisig/sparrow-setup/`,
      },
      {
        name: "Backup Wallet Descriptor",
        text: "Export and securely store the wallet descriptor—required for recovery along with seed phrases.",
        url: `${SITE_URL}/docs/advanced/multisig/backup-recovery/`,
      },
      {
        name: "Test the Setup",
        text: "Send a small test transaction and practice the signing process with multiple devices.",
        url: `${SITE_URL}/docs/advanced/multisig/backup-recovery/`,
      },
    ],
  },

  "/docs/advanced/air-gapped-computer/": {
    name: "How to Build an Air-Gapped Computer for Bitcoin",
    description:
      "Set up an offline computer for maximum security. Use it for seed generation, transaction signing, and verifying hardware wallets.",
    totalTime: "PT3H",
    estimatedCost: {
      currency: "USD",
      value: "150",
    },
    supply: [
      "Used laptop (ThinkPad recommended)",
      "USB drive for OS installation",
      "Screwdriver set",
    ],
    tool: ["Linux Mint or Tails OS", "Electrum wallet", "Ian Coleman BIP39 tool"],
    steps: [
      {
        name: "Choose Your Hardware",
        text: "Select an appropriate laptop or device for your air-gapped computer. ThinkPads are recommended for their Libreboot compatibility.",
        url: `${SITE_URL}/docs/advanced/air-gapped-computer/types/`,
      },
      {
        name: "Set Up the System",
        text: "Install a secure operating system, disable networking hardware, and configure encryption.",
        url: `${SITE_URL}/docs/advanced/air-gapped-computer/setup/`,
      },
    ],
  },

  "/docs/advanced/bitcoin-computer/": {
    name: "How to Build a Dedicated Bitcoin Computer",
    description:
      "Build a dedicated computer for Bitcoin transactions, isolated from your everyday computing to protect against malware.",
    totalTime: "PT2H",
    estimatedCost: {
      currency: "USD",
      value: "100",
    },
    supply: ["Dedicated laptop", "USB drive for OS installation"],
    tool: ["Linux Mint", "LUKS encryption", "Sparrow Wallet"],
    steps: [
      {
        name: "Choose Your Hardware",
        text: "Select a laptop dedicated solely to Bitcoin transactions. Consider privacy and security features.",
        url: `${SITE_URL}/docs/advanced/bitcoin-computer/choice/`,
      },
      {
        name: "Set Up the System",
        text: "Install Linux Mint with full disk encryption and configure it for Bitcoin use.",
        url: `${SITE_URL}/docs/advanced/bitcoin-computer/setup/`,
      },
    ],
  },

  // =====================
  // FIRMWARE GUIDES
  // =====================
  "/docs/libreboot/": {
    name: "How to Install Libreboot on Your Laptop",
    description:
      "Replace your proprietary BIOS with Libreboot open-source firmware. Remove Intel ME backdoors and take full control of your hardware.",
    totalTime: "PT5H",
    estimatedCost: {
      currency: "USD",
      value: "50",
    },
    supply: [
      "Supported laptop (ThinkPad X200, T400, T480s, etc.)",
      "Raspberry Pi Pico",
      "SOIC8 clip or Pomona clip",
      "Dupont jumper wires",
    ],
    tool: ["Linux computer for building", "flashprog utility", "lbmk (Libreboot build system)"],
    steps: [
      {
        name: "Gather Requirements",
        text: "Obtain a compatible laptop and the necessary flashing hardware (Raspberry Pi Pico, clips, wires).",
        url: `${SITE_URL}/docs/libreboot/requirements/`,
      },
      {
        name: "Build Libreboot ROM",
        text: "Use the Libreboot build system to compile a ROM image for your specific laptop model.",
        url: `${SITE_URL}/docs/libreboot/build/`,
      },
      {
        name: "Build flashprog Utility",
        text: "Compile the flashprog utility needed to write the ROM to your laptop chip.",
        url: `${SITE_URL}/docs/libreboot/build-flashprog/`,
      },
      {
        name: "Set Up Raspberry Pi Pico",
        text: "Flash the serprog firmware to your Raspberry Pi Pico to use it as a programmer.",
        url: `${SITE_URL}/docs/libreboot/raspberry-pico/build-serprog/`,
      },
      {
        name: "Connect to BIOS Chip",
        text: "Physically connect the Pico to your laptop BIOS chip using the SOIC clip.",
        url: `${SITE_URL}/docs/libreboot/raspberry-pico/connection/`,
      },
      {
        name: "Flash the ROM",
        text: "Use flashprog to backup your original BIOS and write the Libreboot ROM.",
        url: `${SITE_URL}/docs/libreboot/flashing-bios/`,
      },
    ],
  },

  "/docs/coreboot/": {
    name: "How to Install Coreboot on Your Laptop",
    description:
      "Replace proprietary BIOS with Coreboot open-source firmware on ThinkPad T430s. Includes Intel ME neutralization.",
    totalTime: "PT4H",
    estimatedCost: {
      currency: "USD",
      value: "30",
    },
    supply: [
      "ThinkPad T430s",
      "CH341A programmer or Raspberry Pi Pico",
      "SOIC8 test clip",
      "Dupont wires",
    ],
    tool: ["Linux computer", "Coreboot build tools", "flashprog or flashrom"],
    steps: [
      {
        name: "Gather Requirements",
        text: "Get the necessary hardware including a compatible laptop and flashing equipment.",
        url: `${SITE_URL}/docs/coreboot/requirements/`,
      },
      {
        name: "Build Coreboot",
        text: "Compile a Coreboot ROM image configured for your laptop model.",
        url: `${SITE_URL}/docs/coreboot/build/`,
      },
      {
        name: "External Flashing",
        text: "For first-time installation, flash externally using a programmer connected to the BIOS chip.",
        url: `${SITE_URL}/docs/coreboot/external-flashing/`,
      },
    ],
  },

  // =====================
  // PRIVACY GUIDES
  // =====================
  "/docs/privacy/coinjoin/": {
    name: "How to Use CoinJoin for Bitcoin Privacy",
    description:
      "Break the link between your Bitcoin transactions using CoinJoin. Learn how it works and best practices for implementation.",
    totalTime: "PT2H",
    estimatedCost: {
      currency: "USD",
      value: "10",
    },
    supply: [],
    tool: ["Wasabi Wallet or JoinMarket", "Bitcoin for mixing fees"],
    steps: [
      {
        name: "Understand How CoinJoin Works",
        text: "Learn the mechanics of CoinJoin transactions and why they provide privacy.",
        url: `${SITE_URL}/docs/privacy/coinjoin/how-it-works/`,
      },
      {
        name: "Choose a Service",
        text: "Select a CoinJoin implementation: Wasabi Wallet for ease of use or JoinMarket for more control.",
        url: `${SITE_URL}/docs/privacy/coinjoin/services/`,
      },
      {
        name: "Follow Best Practices",
        text: "Implement proper post-mix behavior to maintain the privacy benefits of CoinJoin.",
        url: `${SITE_URL}/docs/privacy/coinjoin/best-practices/`,
      },
    ],
  },

  "/docs/privacy/utxo-management/": {
    name: "How to Manage Bitcoin UTXOs",
    description:
      "Learn to organize your Bitcoin UTXOs for better privacy and lower fees. Master coin control and consolidation strategies.",
    totalTime: "PT1H",
    estimatedCost: {
      currency: "USD",
      value: "0",
    },
    supply: [],
    tool: ["Sparrow Wallet (with coin control features)"],
    steps: [
      {
        name: "Understand UTXOs",
        text: "Learn what UTXOs are and why managing them matters for privacy and fees.",
        url: `${SITE_URL}/docs/learn/transactions/utxos/`,
      },
      {
        name: "Master Coin Control",
        text: "Use Sparrow Wallet coin control features to select specific UTXOs for transactions.",
        url: `${SITE_URL}/docs/privacy/utxo-management/coin-control/`,
      },
      {
        name: "Consolidate Strategically",
        text: "Combine small UTXOs during low-fee periods to reduce future transaction costs.",
        url: `${SITE_URL}/docs/privacy/utxo-management/consolidation/`,
      },
    ],
  },

  // =====================
  // PROJECTS
  // =====================
  "/docs/nostr-signing-device/": {
    name: "How to Build a Nostr Hardware Signing Device",
    description:
      "Build a hardware device for signing Nostr events securely. Uses ESP32 module to keep your private key offline.",
    totalTime: "PT2H",
    estimatedCost: {
      currency: "USD",
      value: "15",
    },
    supply: ["ESP32-S3 development board", "USB-C cable", "Enclosure (optional)"],
    tool: ["Arduino IDE", "Horse browser extension", "Computer for programming"],
    steps: [
      {
        name: "Get the Hardware",
        text: "Purchase an ESP32-S3 development board with USB support.",
        url: `${SITE_URL}/docs/nostr-signing-device/esp32-module/`,
      },
      {
        name: "Set Up Arduino IDE",
        text: "Install Arduino IDE and configure it for ESP32 development.",
        url: `${SITE_URL}/docs/nostr-signing-device/arduino-ide/`,
      },
      {
        name: "Flash the Firmware",
        text: "Upload the Nostr signing device firmware to your ESP32.",
        url: `${SITE_URL}/docs/nostr-signing-device/setup/`,
      },
      {
        name: "Install Browser Extension",
        text: "Install the Horse browser extension to connect your device to Nostr clients.",
        url: `${SITE_URL}/docs/nostr-signing-device/horse-extension/`,
      },
      {
        name: "Connect to Clients",
        text: "Configure your Nostr clients to use the hardware signing device.",
        url: `${SITE_URL}/docs/nostr-signing-device/client-connect/`,
      },
    ],
  },
};

/**
 * Generate HowTo schema JSON-LD for a given path
 *
 * @param {string} path - URL path to generate schema for
 * @returns {Object|null} JSON-LD HowTo schema or null if not found
 */
export function generateHowToSchema(path) {
  const schema = howToSchemas[path];
  if (!schema) return null;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: schema.name,
    description: schema.description,
    totalTime: schema.totalTime,
    estimatedCost: schema.estimatedCost
      ? {
          "@type": "MonetaryAmount",
          currency: schema.estimatedCost.currency,
          value: schema.estimatedCost.value,
        }
      : undefined,
    supply: schema.supply?.map((item) => ({
      "@type": "HowToSupply",
      name: item,
    })),
    tool:
      schema.tool?.length > 0
        ? schema.tool.map((item) => ({
            "@type": "HowToTool",
            name: item,
          }))
        : undefined,
    step: schema.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
    })),
  };
}
