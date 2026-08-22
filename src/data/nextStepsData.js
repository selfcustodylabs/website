/**
 * Next Steps recommendations for each page
 * Maps URL paths to recommended follow-up content
 */

const NEXT_STEPS = {
  // ===========================================
  // LEARN - FUNDAMENTALS
  // ===========================================
  "/docs/learn/fundamentals/what-is-bitcoin/": [
    {
      label: "Next",
      title: "What is Self-Custody?",
      href: "/docs/learn/fundamentals/what-is-self-custody/",
      description: "Learn why holding your own keys matters",
    },
    {
      label: "Deep Dive",
      title: "Private Keys Explained",
      href: "/docs/learn/keys/intro/",
      description: "Understand the technical foundation",
    },
  ],
  "/docs/learn/fundamentals/what-is-self-custody/": [
    {
      label: "Next",
      title: "Choose Your Setup",
      href: "/docs/learn/fundamentals/choosing-your-path/",
      description: "Find the right approach for you",
    },
    {
      label: "Action",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Start self-custodying today",
    },
  ],
  "/docs/learn/fundamentals/holding-bitcoin/": [
    {
      label: "Next",
      title: "Choose Your Setup",
      href: "/docs/learn/fundamentals/choosing-your-path/",
      description: "Find the right self-custody approach",
    },
    {
      label: "Learn More",
      title: "Private Keys",
      href: "/docs/learn/keys/intro/",
      description: "Understand how ownership works",
    },
  ],
  "/docs/learn/fundamentals/choosing-your-path/": [
    {
      label: "Action",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Set up your first secure wallet",
    },
    {
      label: "Learn More",
      title: "Threat Models",
      href: "/docs/learn/fundamentals/threat-models/",
      description: "Assess your security needs",
    },
  ],
  "/docs/learn/fundamentals/threat-models/": [
    {
      label: "Next",
      title: "Before You Deposit",
      href: "/docs/wallet-setup/before-you-deposit/",
      description: "Critical checklist before funding",
    },
    {
      label: "Action",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Get started with self-custody",
    },
  ],
  "/docs/wallet-setup/before-you-deposit/": [
    {
      label: "Next",
      title: "Run Your Own Node",
      href: "/docs/bitcoin-node/",
      description: "The next step in sovereignty",
    },
    {
      label: "Learn",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Optimize your wallet",
    },
  ],

  // ===========================================
  // LEARN - KEYS
  // ===========================================
  "/docs/learn/keys/intro/": [
    {
      label: "Next",
      title: "Seed Phrases",
      href: "/docs/learn/keys/seed/",
      description: "How keys become words",
    },
    {
      label: "Action",
      title: "DIY Seed Generation",
      href: "/docs/learn/keys/random/",
      description: "Create your own seed securely",
    },
  ],
  "/docs/learn/keys/seed/": [
    {
      label: "Next",
      title: "Passphrases",
      href: "/docs/learn/keys/passphrase/",
      description: "Add an extra security layer",
    },
    {
      label: "Action",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Put your knowledge into practice",
    },
  ],
  "/docs/learn/keys/passphrase/": [
    {
      label: "Action",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Import your seed and start using your passphrase",
    },
    {
      label: "Learn",
      title: "Extended Keys",
      href: "/docs/learn/keys/xpub/",
      description: "Understand xpub and xprv",
    },
  ],

  // ===========================================
  // LEARN - WALLETS
  // ===========================================
  "/docs/learn/wallets/hardware-wallets/": [
    {
      label: "Action",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Set up your device",
    },
    {
      label: "Security",
      title: "The Coldcard Entropy Incident",
      href: "/docs/learn/wallets/coldcard-entropy-incident/",
      description: "What 2026's biggest wallet exploit teaches",
    },
    {
      label: "Compare",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Every device we cover, ranked by verifiability",
    },
    {
      label: "Favourite",
      title: "Build a SeedSigner",
      href: "/docs/seedsigner/",
      description: "Our favourite signing solution, for DIY-minded users",
    },
  ],
  "/docs/learn/wallets/software-wallets/": [
    {
      label: "Upgrade",
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
      description: "Better security for larger amounts",
    },
    {
      label: "Action",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Get proper security",
    },
  ],
  "/docs/learn/wallets/air-gapped-wallets/": [
    {
      label: "Favourite",
      title: "Build a SeedSigner",
      href: "/docs/seedsigner/",
      description: "Our favourite purpose-built signing device",
    },
    {
      label: "Compare",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Air-gapped and conventional devices side by side",
    },
    {
      label: "Action",
      title: "DIY Seed Generation",
      href: "/docs/learn/keys/random/",
      description: "Put the air-gapped computer to work",
    },
  ],
  "/docs/learn/wallets/multisig/": [
    {
      label: "Action",
      title: "Hardware Setup",
      href: "/docs/learn/wallets/multisig/hardware-setup/",
      description: "Start the step-by-step setup",
    },
    {
      label: "Learn",
      title: "Threat Models",
      href: "/docs/learn/fundamentals/threat-models/",
      description: "Do you need multisig?",
    },
  ],

  // ===========================================
  // LEARN - PRIVACY
  // ===========================================
  "/docs/learn/privacy/why-privacy-matters/": [
    {
      label: "Next",
      title: "Chain Analysis",
      href: "/docs/learn/privacy/chain-analysis/",
      description: "Understand the threats",
    },
    {
      label: "Action",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Start protecting your privacy",
    },
  ],
  "/docs/learn/privacy/chain-analysis/": [
    {
      label: "Next",
      title: "Protecting Privacy",
      href: "/docs/learn/privacy/protecting-privacy/",
      description: "Practical protection techniques",
    },
    {
      label: "Action",
      title: "CoinJoin Guide",
      href: "/docs/learn/privacy/coinjoin/",
      description: "Break transaction links",
    },
  ],
  "/docs/learn/privacy/utxo-management/": [
    {
      label: "Next",
      title: "CoinJoin Guide",
      href: "/docs/learn/privacy/coinjoin/",
      description: "Break transaction links with mixing",
    },
    {
      label: "Related",
      title: "PayJoin Guide",
      href: "/docs/learn/privacy/payjoin/",
      description: "Stealth privacy for payments",
    },
  ],
  "/docs/learn/privacy/coinjoin/": [
    {
      label: "Action",
      title: "CoinJoin Tutorial",
      href: "/docs/learn/privacy/coinjoin-tutorial/",
      description: "Run real coinjoins with JoinMarket NG and Jam",
    },
    {
      label: "Foundation",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Handle mixed coins correctly",
    },
    {
      label: "Related",
      title: "PayJoin Guide",
      href: "/docs/learn/privacy/payjoin/",
      description: "Stealth privacy for payments",
    },
  ],
  "/docs/learn/privacy/coinjoin-tutorial/": [
    {
      label: "Foundation",
      title: "CoinJoin Theory",
      href: "/docs/learn/privacy/coinjoin/",
      description: "How mixing works and the post-mix rules",
    },
    {
      label: "Post-Mix",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Coin control for your mixed coins",
    },
    {
      label: "Infrastructure",
      title: "Run Your Own Bitcoin Node",
      href: "/docs/bitcoin-node/",
      description: "The backend your privacy depends on",
    },
  ],
  "/docs/learn/privacy/payjoin/": [
    {
      label: "Related",
      title: "CoinJoin Guide",
      href: "/docs/learn/privacy/coinjoin/",
      description: "Break transaction history with mixing",
    },
    {
      label: "Foundation",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Coin control and consolidation",
    },
  ],

  // ===========================================
  // LEARN - NODES
  // ===========================================
  "/docs/learn/nodes/what-is-node/": [
    {
      label: "Next",
      title: "Why Run a Node",
      href: "/docs/learn/nodes/why-run-node/",
      description: "Benefits of running your own",
    },
    {
      label: "Action",
      title: "Node Setup Guide",
      href: "/docs/bitcoin-node/",
      description: "Start running your node",
    },
  ],
  "/docs/learn/nodes/why-run-node/": [
    {
      label: "Action",
      title: "Node Setup Guide",
      href: "/docs/bitcoin-node/",
      description: "Set up your own node",
    },
    {
      label: "Learn",
      title: "Tor Setup",
      href: "/docs/bitcoin-node/tor/",
      description: "Add privacy to your node",
    },
  ],

  // ===========================================
  // WALLET SETUP
  // ===========================================
  "/docs/wallet-setup/hardware-wallet/": [
    {
      label: "Next",
      title: "Backup Verification",
      href: "/docs/wallet-setup/backup-verification/",
      description: "Test your backup before trusting it",
    },
    {
      label: "Learn",
      title: "Private Keys",
      href: "/docs/learn/keys/intro/",
      description: "Understand what you're protecting",
    },
    {
      label: "Compare",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Still choosing a device? Start here",
    },
    {
      label: "Favourite",
      title: "Build a SeedSigner",
      href: "/docs/seedsigner/",
      description: "Our favourite signing solution, for DIY-minded users",
    },
  ],
  "/docs/wallet-setup/backup-verification/": [
    {
      label: "Next",
      title: "Before You Deposit",
      href: "/docs/wallet-setup/before-you-deposit/",
      description: "Final checklist",
    },
    {
      label: "Enhance",
      title: "Add a Passphrase",
      href: "/docs/learn/keys/passphrase/",
      description: "Extra security layer",
    },
  ],

  // ===========================================
  // SECURITY GUIDES
  // ===========================================
  "/docs/learn/keys/random/": [
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Import your freshly generated seed",
    },
    {
      label: "Learn",
      title: "Passphrases (25th Word)",
      href: "/docs/learn/keys/passphrase/",
      description: "Add an extra security layer",
    },
  ],
  // ===========================================
  // BITCOIN NODE
  // ===========================================
  "/docs/bitcoin-node/": [
    {
      label: "Start",
      title: "Software Options",
      href: "/docs/bitcoin-node/node-software-options/",
      description: "Choose your node software",
    },
  ],
  "/docs/bitcoin-node/connect-sparrow-wallet/": [
    {
      label: "Done!",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Optimize your wallet",
    },
    {
      label: "Learn",
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
      description: "Understand your new privacy",
    },
  ],

  // ===========================================
  // MULTISIG SUB-PAGES
  // ===========================================
  "/docs/learn/wallets/multisig/backup-recovery/": [
    {
      label: "Done!",
      title: "Test Your Setup",
      href: "/docs/wallet-setup/before-you-deposit/",
      description: "Verify everything works",
    },
    {
      label: "Learn",
      title: "Inheritance Planning",
      href: "/docs/advanced/inheritance-planning/",
      description: "Plan for the future",
    },
  ],
};

/**
 * Get next steps for a given path
 */
export function getNextSteps(path) {
  return NEXT_STEPS[path] || null;
}

export default {
  NEXT_STEPS,
  getNextSteps,
};
