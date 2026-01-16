/**
 * Schema.org structured data for Self Custody Labs guides
 * This file contains HowTo, Article, FAQ, and Breadcrumb schema definitions
 */

const SITE_URL = "https://selfcustodylabs.com";

// ===========================================
// HOWTO SCHEMAS - For procedural guides
// ===========================================
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
    tool: [
      "Computer with Sparrow Wallet installed",
      "USB cable (for non-air-gapped devices)",
    ],
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
    supply: [
      "Your written seed phrase backup",
      "Hardware wallet (same or second device)",
    ],
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
    tool: [
      "Umbrel, RaspiBlitz, Start9, or RoninDojo software",
      "Sparrow Wallet",
    ],
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
    tool: [
      "Linux Mint or Tails OS",
      "Electrum wallet",
      "Ian Coleman BIP39 tool",
    ],
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
    tool: [
      "Linux computer for building",
      "flashprog utility",
      "lbmk (Libreboot build system)",
    ],
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
    supply: [
      "ESP32-S3 development board",
      "USB-C cable",
      "Enclosure (optional)",
    ],
    tool: [
      "Arduino IDE",
      "Horse browser extension",
      "Computer for programming",
    ],
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

// ===========================================
// FAQ SCHEMAS - For FAQ pages
// ===========================================
export const faqSchemas = {
  "/docs/reference/faq/": {
    questions: [
      {
        question: "What happens if I lose my seed phrase?",
        answer:
          "If you lose your seed phrase and your hardware wallet breaks, your Bitcoin is lost forever. There is no recovery mechanism. This is why proper backup verification is critical before depositing funds.",
      },
      {
        question:
          "Can someone steal my Bitcoin if they know my public address?",
        answer:
          "No. Your public address is safe to share—it only allows people to send you Bitcoin. To spend Bitcoin, you need the private key, which is derived from your seed phrase.",
      },
      {
        question: "Do I need to run my own Bitcoin node?",
        answer:
          "Not required, but recommended for privacy. Without your own node, you must trust a third-party server to provide accurate blockchain data. Running a node lets you verify everything yourself.",
      },
      {
        question: "What is a passphrase (25th word)?",
        answer:
          "A passphrase is an optional extra word you add to your 24-word seed phrase. It creates a completely different wallet, providing plausible deniability and an extra layer of security. If you forget it, funds in the passphrase-protected wallet are unrecoverable.",
      },
      {
        question: "Which hardware wallet should I buy?",
        answer:
          "For beginners, we recommend Trezor Safe 3 or BitBox02 for their ease of use. For maximum security, Coldcard is preferred by serious Bitcoiners. All reputable hardware wallets are significantly safer than keeping Bitcoin on an exchange.",
      },
      {
        question: "Is it safe to buy a hardware wallet from Amazon?",
        answer:
          "We recommend buying directly from the manufacturer to avoid tampered devices. If you must buy elsewhere, verify the device authenticity using the manufacturer tools and check for signs of tampering before use.",
      },
      {
        question: "How much Bitcoin do I need before self-custody makes sense?",
        answer:
          "Any amount you would be upset to lose deserves proper self-custody. A hardware wallet costs around $80-150, which is worthwhile protection for holdings above $500-1000. For smaller amounts, a mobile software wallet is acceptable while learning.",
      },
      {
        question: "What is multisig and do I need it?",
        answer:
          "Multisig requires multiple keys to spend Bitcoin (e.g., 2-of-3 keys). It eliminates single points of failure but adds complexity. Recommended for holdings over $100,000 or users with elevated security concerns.",
      },
    ],
  },
};

// ===========================================
// BREADCRUMB MAPPINGS
// ===========================================
export const breadcrumbMappings = {
  // Learn section - Fundamentals (NEW)
  "/docs/learn/": ["Learn"],
  "/docs/learn/fundamentals/": ["Learn", "Start Here"],
  "/docs/learn/fundamentals/what-is-bitcoin/": [
    "Learn",
    "Start Here",
    "What is Bitcoin",
  ],
  "/docs/learn/fundamentals/what-is-self-custody/": [
    "Learn",
    "Start Here",
    "What is Self-Custody",
  ],
  "/docs/learn/fundamentals/holding-bitcoin/": [
    "Learn",
    "Start Here",
    "Holding Bitcoin",
  ],
  "/docs/learn/fundamentals/choosing-your-path/": [
    "Learn",
    "Start Here",
    "Choose Your Setup",
  ],
  "/docs/learn/fundamentals/threat-models/": [
    "Learn",
    "Start Here",
    "Threat Models",
  ],
  "/docs/learn/fundamentals/before-you-deposit/": [
    "Learn",
    "Start Here",
    "Before You Deposit",
  ],

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
  "/docs/learn/wallets/software-wallets/": [
    "Learn",
    "Wallets",
    "Software Wallets",
  ],
  "/docs/learn/wallets/hardware-wallets/": [
    "Learn",
    "Wallets",
    "Hardware Wallets",
  ],
  "/docs/learn/wallets/air-gapped-wallets/": [
    "Learn",
    "Wallets",
    "Air-Gapped Wallets",
  ],
  "/docs/learn/wallets/multisig/": ["Learn", "Wallets", "Multisig"],

  // Learn section - Transactions
  "/docs/learn/transactions/understanding/": [
    "Learn",
    "Transactions",
    "Understanding",
  ],
  "/docs/learn/transactions/utxos/": ["Learn", "Transactions", "UTXOs"],
  "/docs/learn/transactions/create/": ["Learn", "Transactions", "Creating"],
  "/docs/learn/transactions/sign/": ["Learn", "Transactions", "Signing"],
  "/docs/learn/transactions/broadcast/": [
    "Learn",
    "Transactions",
    "Broadcasting",
  ],
  "/docs/learn/transactions/types/": ["Learn", "Transactions", "Types"],
  "/docs/learn/transactions/lifecycle/": ["Learn", "Transactions", "Lifecycle"],

  // Learn section - Privacy
  "/docs/learn/privacy/why-privacy-matters/": [
    "Learn",
    "Privacy",
    "Why Privacy Matters",
  ],
  "/docs/learn/privacy/chain-analysis/": ["Learn", "Privacy", "Chain Analysis"],
  "/docs/learn/privacy/protecting-privacy/": [
    "Learn",
    "Privacy",
    "Protecting Privacy",
  ],

  // Learn section - Nodes
  "/docs/learn/nodes/what-is-node/": ["Learn", "Nodes", "What is a Node"],
  "/docs/learn/nodes/why-run-node/": ["Learn", "Nodes", "Why Run a Node"],

  // Wallet Setup guides
  "/docs/wallet-setup/": ["Guides", "Wallet Setup"],
  "/docs/wallet-setup/hardware-wallet/": [
    "Guides",
    "Wallet Setup",
    "Hardware Wallet",
  ],
  "/docs/wallet-setup/backup-verification/": [
    "Guides",
    "Wallet Setup",
    "Backup Verification",
  ],

  // Security guides
  "/docs/security/": ["Guides", "Security"],
  "/docs/security/seed-generation/": ["Guides", "Security", "Seed Generation"],
  "/docs/security/seed-generation/requirements/": [
    "Guides",
    "Seed Generation",
    "Requirements",
  ],
  "/docs/security/seed-generation/dice-roll/": [
    "Guides",
    "Seed Generation",
    "Dice Rolling",
  ],
  "/docs/security/seed-generation/binary-decimal/": [
    "Guides",
    "Seed Generation",
    "Binary to Decimal",
  ],
  "/docs/security/seed-generation/checksum/": [
    "Guides",
    "Seed Generation",
    "Checksum",
  ],
  "/docs/security/seed-generation/bip39/": [
    "Guides",
    "Seed Generation",
    "BIP39 Words",
  ],
  "/docs/security/seed-generation/backup/": [
    "Guides",
    "Seed Generation",
    "Backup",
  ],

  "/docs/security/passphrase/": ["Guides", "Security", "Passphrase"],
  "/docs/security/passphrase/word-lists/": [
    "Guides",
    "Passphrase",
    "Word Lists",
  ],
  "/docs/security/passphrase/dice-roll/": [
    "Guides",
    "Passphrase",
    "Dice Rolling",
  ],
  "/docs/security/passphrase/backup/": ["Guides", "Passphrase", "Backup"],

  "/docs/security/operational-security/": [
    "Guides",
    "Security",
    "Operational Security",
  ],
  "/docs/security/physical-security/": [
    "Guides",
    "Security",
    "Physical Security",
  ],

  // Bitcoin Node guides
  "/docs/bitcoin-node/": ["Guides", "Bitcoin Node"],
  "/docs/bitcoin-node/node-software-options/": [
    "Guides",
    "Bitcoin Node",
    "Software Options",
  ],
  "/docs/bitcoin-node/parmanode-setup/": [
    "Guides",
    "Bitcoin Node",
    "Parmanode Setup",
  ],
  "/docs/bitcoin-node/electrum-server/": [
    "Guides",
    "Bitcoin Node",
    "Electrum Server",
  ],
  "/docs/bitcoin-node/tor/": ["Guides", "Bitcoin Node", "Tor Setup"],
  "/docs/bitcoin-node/connect-sparrow-wallet/": [
    "Guides",
    "Bitcoin Node",
    "Connect Sparrow",
  ],

  // Advanced guides
  "/docs/advanced/": ["Guides", "Advanced"],
  "/docs/advanced/multisig/": ["Guides", "Advanced", "Multisig"],
  "/docs/advanced/multisig/hardware-setup/": [
    "Guides",
    "Multisig",
    "Hardware Setup",
  ],
  "/docs/advanced/multisig/sparrow-setup/": [
    "Guides",
    "Multisig",
    "Sparrow Setup",
  ],
  "/docs/advanced/multisig/backup-recovery/": [
    "Guides",
    "Multisig",
    "Backup & Recovery",
  ],

  "/docs/advanced/air-gapped-computer/": [
    "Guides",
    "Advanced",
    "Air-Gapped Computer",
  ],
  "/docs/advanced/air-gapped-computer/types/": [
    "Guides",
    "Air-Gapped Computer",
    "Types",
  ],
  "/docs/advanced/air-gapped-computer/setup/": [
    "Guides",
    "Air-Gapped Computer",
    "Setup",
  ],

  "/docs/advanced/bitcoin-computer/": [
    "Guides",
    "Advanced",
    "Bitcoin Computer",
  ],
  "/docs/advanced/bitcoin-computer/choice/": [
    "Guides",
    "Bitcoin Computer",
    "Choosing Hardware",
  ],
  "/docs/advanced/bitcoin-computer/setup/": [
    "Guides",
    "Bitcoin Computer",
    "Setup",
  ],

  "/docs/advanced/inheritance-planning/": [
    "Guides",
    "Advanced",
    "Inheritance Planning",
  ],

  // Privacy guides
  "/docs/privacy/": ["Guides", "Privacy"],
  "/docs/privacy/coinjoin/": ["Guides", "Privacy", "CoinJoin"],
  "/docs/privacy/coinjoin/how-it-works/": [
    "Guides",
    "CoinJoin",
    "How It Works",
  ],
  "/docs/privacy/coinjoin/services/": ["Guides", "CoinJoin", "Services"],
  "/docs/privacy/coinjoin/best-practices/": [
    "Guides",
    "CoinJoin",
    "Best Practices",
  ],

  "/docs/privacy/utxo-management/": ["Guides", "Privacy", "UTXO Management"],
  "/docs/privacy/utxo-management/coin-control/": [
    "Guides",
    "UTXO Management",
    "Coin Control",
  ],
  "/docs/privacy/utxo-management/consolidation/": [
    "Guides",
    "UTXO Management",
    "Consolidation",
  ],

  "/docs/privacy/payjoin/": ["Guides", "Privacy", "PayJoin"],

  // Firmware guides
  "/docs/libreboot/": ["Guides", "Libreboot"],
  "/docs/libreboot/requirements/": ["Guides", "Libreboot", "Requirements"],
  "/docs/libreboot/build/": ["Guides", "Libreboot", "Build ROM"],
  "/docs/libreboot/build-flashprog/": [
    "Guides",
    "Libreboot",
    "Build flashprog",
  ],
  "/docs/libreboot/flashing-bios/": ["Guides", "Libreboot", "Flash BIOS"],
  "/docs/libreboot/update-bios/": ["Guides", "Libreboot", "Update BIOS"],
  "/docs/libreboot/roms/": ["Guides", "Libreboot", "ROM Options"],
  "/docs/libreboot/raspberry-pico/": [
    "Guides",
    "Libreboot",
    "Raspberry Pi Pico",
  ],
  "/docs/libreboot/raspberry-pico/build-serprog/": [
    "Guides",
    "Libreboot",
    "Pico",
    "Build Serprog",
  ],
  "/docs/libreboot/raspberry-pico/connection/": [
    "Guides",
    "Libreboot",
    "Pico",
    "Connection",
  ],

  "/docs/coreboot/": ["Guides", "Coreboot"],
  "/docs/coreboot/requirements/": ["Guides", "Coreboot", "Requirements"],
  "/docs/coreboot/build/": ["Guides", "Coreboot", "Build ROM"],
  "/docs/coreboot/external-flashing/": [
    "Guides",
    "Coreboot",
    "External Flashing",
  ],

  // Nostr Signing Device
  "/docs/nostr-signing-device/": ["Guides", "Nostr Signing Device"],
  "/docs/nostr-signing-device/esp32-module/": [
    "Guides",
    "Nostr Signing Device",
    "ESP32 Module",
  ],
  "/docs/nostr-signing-device/arduino-ide/": [
    "Guides",
    "Nostr Signing Device",
    "Arduino IDE",
  ],
  "/docs/nostr-signing-device/setup/": [
    "Guides",
    "Nostr Signing Device",
    "Setup",
  ],
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
  "/docs/reference/hardware-wallet-comparison/": [
    "Reference",
    "Hardware Wallet Comparison",
  ],
  "/docs/reference/faq/": ["Reference", "FAQ"],
  "/docs/reference/faq/lost-seed/": ["Reference", "FAQ", "Lost Seed"],
  "/docs/reference/faq/recovery-scams/": ["Reference", "FAQ", "Recovery Scams"],
  "/docs/reference/faq/recovery-troubleshooting/": [
    "Reference",
    "FAQ",
    "Recovery Troubleshooting",
  ],

  // Transactions - fees
  "/docs/learn/transactions/fees/": ["Learn", "Transactions", "Fees"],
};

// ===========================================
// ARTICLE SCHEMAS - For educational content
// ===========================================
export const articleSchemas = {
  // Fundamentals (NEW)
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
  "/docs/learn/fundamentals/before-you-deposit/": {
    headline: "Before You Deposit: Critical Checklist",
    description:
      "Essential verification steps before sending Bitcoin to any new wallet. This checklist can prevent catastrophic mistakes.",
    articleSection: "Bitcoin Fundamentals",
  },

  // Keys
  "/docs/learn/keys/intro/": {
    headline: "Understanding Bitcoin Private Keys",
    description:
      "Learn how private keys work and why they are essential for Bitcoin ownership.",
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
    description:
      "Learn about different types of software wallets and how to choose the right one.",
    articleSection: "Wallets",
  },
  "/docs/learn/wallets/hardware-wallets/": {
    headline: "Bitcoin Hardware Wallets Guide",
    description:
      "Understand how hardware wallets work and why they provide better security.",
    articleSection: "Wallets",
  },
  "/docs/learn/wallets/air-gapped-wallets/": {
    headline: "Air-Gapped Bitcoin Wallets Explained",
    description:
      "Learn about air-gapped wallets and why they offer the highest level of security.",
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
    description:
      "Learn the basics of how Bitcoin transactions work and what they contain.",
    articleSection: "Transactions",
  },
  "/docs/learn/transactions/utxos/": {
    headline: "UTXOs Explained: How Bitcoin Actually Works",
    description:
      "Understand Bitcoin UTXO model. Learn how Unspent Transaction Outputs work and why they matter.",
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

  // Transactions - Fees
  "/docs/learn/transactions/fees/": {
    headline: "Bitcoin Transaction Fees Explained",
    description:
      "Understand how Bitcoin transaction fees work, why they vary, and strategies to minimize costs. Learn fee estimation, RBF, and CPFP.",
    articleSection: "Transactions",
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

  // Reference - Hardware Wallet Comparison
  "/docs/reference/hardware-wallet-comparison/": {
    headline:
      "Hardware Wallet Comparison: Coldcard vs Trezor vs BitBox vs Ledger",
    description:
      "Comprehensive comparison of Bitcoin hardware wallets including Coldcard, Trezor, BitBox02, Ledger, Jade, and Keystone.",
    articleSection: "Reference",
  },

  // Reference - FAQ - Recovery Troubleshooting
  "/docs/reference/faq/recovery-troubleshooting/": {
    headline: "Wallet Recovery Troubleshooting",
    description:
      "Common problems when recovering a Bitcoin wallet and how to solve them. Fix empty wallet issues, wrong addresses, and derivation path problems.",
    articleSection: "FAQ",
  },

  // Reference - Glossary
  "/docs/reference/glossary/": {
    headline: "Bitcoin Glossary: 100+ Terms Explained",
    description:
      "Complete glossary of Bitcoin and self-custody terminology including UTXO, seed phrase, hardware wallet, multisig, and more.",
    articleSection: "Reference",
  },

  // Reference - Address Types
  "/docs/reference/address-types/": {
    headline: "Bitcoin Address Types Explained",
    description:
      "Understand Legacy, SegWit, Native SegWit, and Taproot Bitcoin addresses. Learn which to use and why it matters.",
    articleSection: "Reference",
  },

  // Bitcoin Node Guide
  "/docs/bitcoin-node/": {
    headline: "Run Your Own Bitcoin Node: Complete Setup Guide",
    description:
      "Complete guide to running your own Bitcoin node with Parmanode. Learn why nodes matter, choose your hardware, and follow step-by-step setup.",
    articleSection: "Guides",
  },

  // Libreboot Guide
  "/docs/libreboot/": {
    headline: "Libreboot Installation Guide",
    description:
      "Step-by-step guide to installing Libreboot on compatible laptops for enhanced privacy and security.",
    articleSection: "Guides",
  },

  // Coreboot Guide
  "/docs/coreboot/": {
    headline: "Coreboot Installation Guide",
    description:
      "Guide to building and flashing Coreboot on laptops for improved security and boot performance.",
    articleSection: "Guides",
  },
};

// ===========================================
// SCHEMA GENERATORS
// ===========================================

/**
 * Generate HowTo schema JSON-LD for a given path
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

/**
 * Generate FAQPage schema JSON-LD for a given path
 */
export function generateFAQSchema(path) {
  const schema = faqSchemas[path];
  if (!schema) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schema.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema JSON-LD for a given path
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

/**
 * Generate Article schema JSON-LD for educational content
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
    author: {
      "@type": "Organization",
      name: "Self Custody Labs",
      url: "https://selfcustodylabs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Self Custody Labs",
      url: "https://selfcustodylabs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://selfcustodylabs.com/img/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://selfcustodylabs.com${path}`,
    },
  };
}

// ===========================================
// ITEMLIST SCHEMAS - For hub/index pages
// ===========================================
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

// ===========================================
// EXPORTS
// ===========================================
export default {
  howToSchemas,
  faqSchemas,
  breadcrumbMappings,
  articleSchemas,
  itemListSchemas,
  generateHowToSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateItemListSchema,
};
