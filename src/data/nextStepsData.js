/**
 * "Where next" links shown at the end of a doc, keyed by its URL.
 *
 * The single source for these links: src/theme/DocItem/Footer renders them for
 * the current page. Do not also place <NextSteps> inline in a doc; until Oct
 * 2026 seven pages did both and showed two blocks back to back.
 *
 * Labels are one of: Next (the following step), Background (the concept behind
 * it), Reference (lookup material), Also (a related path). At most four items.
 */

const NEXT_STEPS = {
  "/docs/bitcoin-node/": [
    {
      label: "Next",
      title: "Software Options",
      href: "/docs/bitcoin-node/node-software-options/",
      description: "Choose your node software",
    },
  ],
  "/docs/bitcoin-node/connect-sparrow-wallet/": [
    {
      label: "Next",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Optimize your wallet",
    },
    {
      label: "Background",
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
      description: "Understand your new privacy",
    },
  ],
  "/docs/learn/fundamentals/": [
    { label: "Also", title: "What is Bitcoin?", href: "/docs/learn/fundamentals/what-is-bitcoin/" },
    { label: "Background", title: "Private Keys", href: "/docs/learn/keys/intro/" },
    {
      label: "Background",
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
    },
    { label: "Next", title: "Hardware Wallet Setup", href: "/docs/wallet-setup/hardware-wallet/" },
  ],
  "/docs/learn/fundamentals/choosing-your-path/": [
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Set up your first secure wallet",
    },
    {
      label: "Background",
      title: "Threat Models",
      href: "/docs/learn/fundamentals/threat-models/",
      description: "Assess your security needs",
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
      label: "Background",
      title: "Private Keys",
      href: "/docs/learn/keys/intro/",
      description: "Understand how ownership works",
    },
  ],
  "/docs/learn/fundamentals/threat-models/": [
    {
      label: "Next",
      title: "Before You Deposit",
      href: "/docs/wallet-setup/before-you-deposit/",
      description: "The checks to run before the first deposit",
    },
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Get started with self-custody",
    },
  ],
  "/docs/learn/fundamentals/what-is-bitcoin/": [
    {
      label: "Next",
      title: "What is Self-Custody?",
      href: "/docs/learn/fundamentals/what-is-self-custody/",
      description: "Learn why holding your own keys matters",
    },
    {
      label: "Background",
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
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Start self-custodying today",
    },
  ],
  "/docs/learn/keys/": [
    {
      label: "Background",
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
    },
    { label: "Next", title: "Hardware Wallet Setup", href: "/docs/wallet-setup/hardware-wallet/" },
    { label: "Next", title: "DIY Seed Generation", href: "/docs/learn/keys/random/" },
    { label: "Reference", title: "Glossary", href: "/docs/reference/glossary/" },
  ],
  "/docs/learn/keys/intro/": [
    {
      label: "Next",
      title: "Seed Phrases",
      href: "/docs/learn/keys/seed/",
      description: "How keys become words",
    },
    {
      label: "Next",
      title: "DIY Seed Generation",
      href: "/docs/learn/keys/random/",
      description: "Create your own seed securely",
    },
    { label: "Background", title: "Extended Private Keys", href: "/docs/learn/keys/xprv/" },
    {
      label: "Background",
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
    },
  ],
  "/docs/learn/keys/number-systems/": [
    {
      label: "Next",
      title: "Hardware Wallets Explained",
      href: "/docs/learn/wallets/hardware-wallets/",
      description: "Learn how hardware wallets protect your keys",
    },
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Set up a first hardware wallet, step by step",
    },
    {
      label: "Also",
      title: "DIY Seed Generation",
      href: "/docs/learn/keys/random/",
      description: "Generate your own seed with verifiable randomness",
    },
  ],
  "/docs/learn/keys/passphrase/": [
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Import your seed and start using your passphrase",
    },
    {
      label: "Background",
      title: "Extended Keys",
      href: "/docs/learn/keys/xpub/",
      description: "Understand xpub and xprv",
    },
  ],
  "/docs/learn/keys/random/": [
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Import your freshly generated seed",
    },
    {
      label: "Background",
      title: "Passphrases (25th Word)",
      href: "/docs/learn/keys/passphrase/",
      description: "Add an extra security layer",
    },
    { label: "Background", title: "Seed Phrases", href: "/docs/learn/keys/seed/" },
    { label: "Background", title: "Number Systems", href: "/docs/learn/keys/number-systems/" },
  ],
  "/docs/learn/keys/seed/": [
    {
      label: "Next",
      title: "Passphrases",
      href: "/docs/learn/keys/passphrase/",
      description: "Add an extra security layer",
    },
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Put your knowledge into practice",
    },
    { label: "Background", title: "Private Keys Explained", href: "/docs/learn/keys/intro/" },
    { label: "Next", title: "DIY Seed Generation", href: "/docs/learn/keys/random/" },
  ],
  "/docs/learn/keys/xprv/": [
    { label: "Also", title: "Extended Public Keys (xpub)", href: "/docs/learn/keys/xpub/" },
    { label: "Background", title: "Derivation Paths", href: "/docs/learn/keys/derivation-path/" },
    { label: "Background", title: "Seed Phrases", href: "/docs/learn/keys/seed/" },
    { label: "Background", title: "Passphrases", href: "/docs/learn/keys/passphrase/" },
  ],
  "/docs/learn/keys/xpub/": [
    { label: "Also", title: "Derivation Paths", href: "/docs/learn/keys/derivation-path/" },
    { label: "Background", title: "Extended Private Keys", href: "/docs/learn/keys/xprv/" },
    {
      label: "Also",
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
    },
    {
      label: "Background",
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
    },
  ],
  "/docs/learn/nodes/what-is-node/": [
    {
      label: "Next",
      title: "Why Run a Node",
      href: "/docs/learn/nodes/why-run-node/",
      description: "Benefits of running your own",
    },
    {
      label: "Next",
      title: "Node Setup Guide",
      href: "/docs/bitcoin-node/",
      description: "Start running your node",
    },
  ],
  "/docs/learn/nodes/why-run-node/": [
    {
      label: "Next",
      title: "Node Setup Guide",
      href: "/docs/bitcoin-node/",
      description: "Set up your own node",
    },
    {
      label: "Background",
      title: "Tor Setup",
      href: "/docs/bitcoin-node/tor/",
      description: "Add privacy to your node",
    },
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Move coins to a device you control",
    },
    {
      label: "Reference",
      title: "All Guides",
      href: "/guides/",
      description: "Explore security, privacy, and advanced setup guides",
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
      label: "Next",
      title: "CoinJoin Guide",
      href: "/docs/learn/privacy/coinjoin/",
      description: "Break transaction links",
    },
  ],
  "/docs/learn/privacy/coinjoin-tutorial/": [
    {
      label: "Also",
      title: "CoinJoin Theory",
      href: "/docs/learn/privacy/coinjoin/",
      description: "How mixing works and the post-mix rules",
    },
    {
      label: "Also",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Coin control for your mixed coins",
    },
    {
      label: "Also",
      title: "Run Your Own Bitcoin Node",
      href: "/docs/bitcoin-node/",
      description: "The backend your privacy depends on",
    },
  ],
  "/docs/learn/privacy/coinjoin/": [
    {
      label: "Next",
      title: "CoinJoin Tutorial",
      href: "/docs/learn/privacy/coinjoin-tutorial/",
      description: "Run real coinjoins with JoinMarket NG and Jam",
    },
    {
      label: "Also",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Handle mixed coins correctly",
    },
    {
      label: "Also",
      title: "PayJoin Guide",
      href: "/docs/learn/privacy/payjoin/",
      description: "Stealth privacy for payments",
    },
  ],
  "/docs/learn/privacy/payjoin/": [
    {
      label: "Also",
      title: "CoinJoin Guide",
      href: "/docs/learn/privacy/coinjoin/",
      description: "Break transaction history with mixing",
    },
    {
      label: "Also",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Coin control and consolidation",
    },
    {
      label: "Also",
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
      description: "Understand what you are defending against",
    },
  ],
  "/docs/learn/privacy/protecting-privacy/": [
    {
      label: "Next",
      title: "What is a Bitcoin Node?",
      href: "/docs/learn/nodes/what-is-node/",
      description: "Understand the infrastructure that makes Bitcoin work",
    },
    {
      label: "Next",
      title: "Run Your Own Node",
      href: "/docs/bitcoin-node/",
      description: "Stop leaking your addresses to third parties",
    },
    {
      label: "Also",
      title: "UTXO Management Guide",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Implement coin control and labeling today",
    },
    {
      label: "Also",
      title: "CoinJoin Guide",
      href: "/docs/learn/privacy/coinjoin/",
      description: "Break the chain analysis links",
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
      label: "Also",
      title: "PayJoin Guide",
      href: "/docs/learn/privacy/payjoin/",
      description: "Stealth privacy for payments",
    },
    {
      label: "Also",
      title: "Run Your Own Node",
      href: "/docs/bitcoin-node/",
      description: "Stop leaking your addresses to third parties",
    },
  ],
  "/docs/learn/privacy/why-privacy-matters/": [
    {
      label: "Next",
      title: "Chain Analysis",
      href: "/docs/learn/privacy/chain-analysis/",
      description: "Understand the threats",
    },
    {
      label: "Next",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Start protecting your privacy",
    },
    {
      label: "Background",
      title: "Protecting Your Privacy",
      href: "/docs/learn/privacy/protecting-privacy/",
    },
    { label: "Next", title: "CoinJoin", href: "/docs/learn/privacy/coinjoin/" },
  ],
  "/docs/learn/transactions/broadcast/": [
    { label: "Also", title: "Transaction Fees", href: "/docs/learn/transactions/fees/" },
    { label: "Background", title: "Signing Transactions", href: "/docs/learn/transactions/sign/" },
    { label: "Background", title: "Run Your Own Node", href: "/docs/learn/nodes/why-run-node/" },
    { label: "Next", title: "Bitcoin Node Setup", href: "/docs/bitcoin-node/" },
  ],
  "/docs/learn/transactions/create/": [
    { label: "Also", title: "Signing Transactions", href: "/docs/learn/transactions/sign/" },
    { label: "Background", title: "UTXOs Explained", href: "/docs/learn/transactions/utxos/" },
    { label: "Background", title: "Transaction Fees", href: "/docs/learn/transactions/fees/" },
    { label: "Next", title: "UTXO Management Guide", href: "/docs/learn/privacy/utxo-management/" },
  ],
  "/docs/learn/transactions/fees/": [
    {
      label: "Also",
      title: "UTXOs Explained",
      href: "/docs/learn/transactions/utxos/",
      description: "Understand how UTXOs affect your transaction fees",
    },
    {
      label: "Also",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Strategies to minimize fees and improve privacy",
    },
    {
      label: "Also",
      title: "Run Your Own Node",
      href: "/docs/bitcoin-node/",
      description: "Get accurate fee estimation from your own mempool",
    },
  ],
  "/docs/learn/transactions/sign/": [
    {
      label: "Also",
      title: "Broadcasting Transactions",
      href: "/docs/learn/transactions/broadcast/",
    },
    {
      label: "Background",
      title: "Creating Transactions",
      href: "/docs/learn/transactions/create/",
    },
    {
      label: "Background",
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
    },
    {
      label: "Also",
      title: "Air-Gapped Computers",
      href: "/docs/learn/wallets/air-gapped-wallets/",
    },
  ],
  "/docs/learn/transactions/types/": [
    {
      label: "Next",
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
      description: "Understand what's exposed on Bitcoin's public blockchain",
    },
    {
      label: "Also",
      title: "UTXO Management Guide",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Learn to manage your coins for privacy and lower fees",
    },
    {
      label: "Also",
      title: "Multisig Setup",
      href: "/docs/learn/wallets/multisig/",
      description: "PSBTs are how a 2-of-3 vault gets signed",
    },
  ],
  "/docs/learn/transactions/understanding/": [
    { label: "Background", title: "UTXOs Explained", href: "/docs/learn/transactions/utxos/" },
    { label: "Background", title: "Transaction Fees", href: "/docs/learn/transactions/fees/" },
    {
      label: "Background",
      title: "Creating Transactions",
      href: "/docs/learn/transactions/create/",
    },
    { label: "Background", title: "Broadcasting", href: "/docs/learn/transactions/broadcast/" },
  ],
  "/docs/learn/transactions/utxos/": [
    { label: "Background", title: "Transaction Fees", href: "/docs/learn/transactions/fees/" },
    {
      label: "Background",
      title: "How Transactions Work",
      href: "/docs/learn/transactions/understanding/",
    },
    { label: "Also", title: "Chain Analysis", href: "/docs/learn/privacy/chain-analysis/" },
    { label: "Next", title: "UTXO Management Guide", href: "/docs/learn/privacy/utxo-management/" },
  ],
  "/docs/learn/wallets/air-gapped-wallets/": [
    {
      label: "Also",
      title: "Build a SeedSigner",
      href: "/docs/seedsigner/",
      description: "Our favourite purpose-built signing device",
    },
    {
      label: "Also",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Air-gapped and conventional devices side by side",
    },
    {
      label: "Next",
      title: "DIY Seed Generation",
      href: "/docs/learn/keys/random/",
      description: "Put the air-gapped computer to work",
    },
  ],
  "/docs/learn/wallets/coldcard-entropy-incident/": [
    {
      label: "Also",
      title: "Generate Your Own Seed with Dice",
      href: "/docs/learn/keys/random/",
      description: "Remove the RNG trust point entirely: verifiable entropy from physical dice",
    },
    {
      label: "Also",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Our post-incident device guidance, updated for the 2026 lineup",
    },
    {
      label: "Also",
      title: "Multisig Wallets",
      href: "/docs/learn/wallets/multisig/",
      description: "The structural defense that contained this incident for those who had it",
    },
  ],
  "/docs/learn/wallets/hardware-wallets/": [
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Set up your device",
    },
    {
      label: "Also",
      title: "The Coldcard Entropy Incident",
      href: "/docs/learn/wallets/coldcard-entropy-incident/",
      description: "What 2026's biggest wallet exploit teaches",
    },
    {
      label: "Also",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Every device we cover, ranked by verifiability",
    },
    {
      label: "Also",
      title: "Build a SeedSigner",
      href: "/docs/seedsigner/",
      description: "Our favourite signing solution, for DIY-minded users",
    },
  ],
  "/docs/learn/wallets/multisig/": [
    {
      label: "Next",
      title: "Hardware Setup",
      href: "/docs/learn/wallets/multisig/hardware-setup/",
      description: "Start the step-by-step setup",
    },
    {
      label: "Background",
      title: "Threat Models",
      href: "/docs/learn/fundamentals/threat-models/",
      description: "When a 2-of-3 setup is worth the extra work",
    },
    {
      label: "Next",
      title: "Sparrow Setup",
      href: "/docs/learn/wallets/multisig/sparrow-setup/",
      description: "Create your 2-of-3 multisig wallet in Sparrow",
    },
    {
      label: "Next",
      title: "Backup & Recovery",
      href: "/docs/learn/wallets/multisig/backup-recovery/",
      description: "Properly secure your seeds and wallet descriptor",
    },
  ],
  "/docs/learn/wallets/multisig/backup-recovery/": [
    {
      label: "Next",
      title: "Test Your Setup",
      href: "/docs/wallet-setup/before-you-deposit/",
      description: "Verify everything works",
    },
    {
      label: "Background",
      title: "Inheritance Planning",
      href: "/docs/advanced/inheritance-planning/",
      description: "Plan for the future",
    },
  ],
  "/docs/learn/wallets/software-wallets/": [
    {
      label: "Also",
      title: "Hardware Wallets",
      href: "/docs/learn/wallets/hardware-wallets/",
      description: "Better security for larger amounts",
    },
    {
      label: "Next",
      title: "Hardware Wallet Setup",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Get proper security",
    },
  ],
  "/docs/reference/faq/recovery-troubleshooting/": [
    {
      label: "Next",
      title: "Backup Verification",
      href: "/docs/wallet-setup/backup-verification/",
      description: "How to properly test your backup before you need it",
    },
    {
      label: "Also",
      title: "Recovery Scams",
      href: "/docs/reference/faq/recovery-scams/",
      description: "How to avoid scammers targeting people with lost Bitcoin",
    },
    {
      label: "Reference",
      title: "Lost Seed Phrase",
      href: "/docs/reference/faq/lost-seed/",
      description: "What to do if you've actually lost your seed phrase",
    },
  ],
  "/docs/reference/advisories/": [
    {
      label: "Next",
      title: "Generate Your Own Seed with Dice",
      href: "/docs/learn/keys/random/",
      description: "The one defence against weak randomness that no update can give you",
    },
    {
      label: "Background",
      title: "The Coldcard Entropy Incident",
      href: "/docs/learn/wallets/coldcard-entropy-incident/",
      description: "The newest incident in full: timeline, cause and migration",
    },
    {
      label: "Reference",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Which devices take dice rolls and use anti-exfil signing",
    },
    {
      label: "Also",
      title: "Physical Security",
      href: "/docs/security/physical-security/",
      description: "When your name and address are on a leaked order list",
    },
  ],
  "/docs/reference/hardware-wallet-comparison/": [
    {
      label: "Next",
      title: "Hardware Wallet Setup Guide",
      href: "/docs/wallet-setup/hardware-wallet/",
      description: "Step-by-step instructions for your first hardware wallet",
    },
    {
      label: "Also",
      title: "The Coldcard Entropy Incident",
      href: "/docs/learn/wallets/coldcard-entropy-incident/",
      description: "The 2026 exploit that reshaped how this page ranks devices",
    },
    {
      label: "Also",
      title: "Multisig Setup",
      href: "/docs/learn/wallets/multisig/",
      description: "Use multiple hardware wallets for maximum security",
    },
  ],
  "/docs/seedsigner/": [
    {
      label: "Next",
      title: "Build Your Own SeedSigner",
      href: "/docs/seedsigner/build-guide/",
      description: "Parts list, software verification, flashing, and assembly",
    },
    {
      label: "Next",
      title: "Using SeedSigner",
      href: "/docs/seedsigner/using-seedsigner/",
      description: "Dice seeds, SeedQR backups, and signing with Sparrow",
    },
    {
      label: "Also",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "How SeedSigner stacks up against every device we cover",
    },
  ],
  "/docs/seedsigner/build-guide/": [
    {
      label: "Next",
      title: "Using SeedSigner",
      href: "/docs/seedsigner/using-seedsigner/",
      description: "Generate a dice seed, back up a SeedQR, sign with Sparrow",
    },
    {
      label: "Also",
      title: "Randomness & Dice Rolls",
      href: "/docs/learn/keys/random/",
      description: "Why user-supplied entropy matters and how to verify it",
    },
    {
      label: "Also",
      title: "Backup Verification",
      href: "/docs/wallet-setup/backup-verification/",
      description: "Prove your backup restores before depositing",
    },
  ],
  "/docs/seedsigner/using-seedsigner/": [
    {
      label: "Also",
      title: "Multisig Setup",
      href: "/docs/learn/wallets/multisig/",
      description: "Use your SeedSigner as one key of several",
    },
    {
      label: "Also",
      title: "Backup Verification",
      href: "/docs/wallet-setup/backup-verification/",
      description: "Drill the restore before real funds arrive",
    },
    {
      label: "Also",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Every device we cover, ranked by verifiability",
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
      label: "Also",
      title: "Add a Passphrase",
      href: "/docs/learn/keys/passphrase/",
      description: "Extra security layer",
    },
    {
      label: "Also",
      title: "Run Your Own Node",
      href: "/docs/bitcoin-node/",
      description: "Verify transactions yourself for maximum privacy and security",
    },
    {
      label: "Also",
      title: "Consider Multisig",
      href: "/docs/learn/wallets/multisig/",
      description: "Eliminate single points of failure for significant holdings",
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
      label: "Background",
      title: "UTXO Management",
      href: "/docs/learn/privacy/utxo-management/",
      description: "Optimize your wallet",
    },
    {
      label: "Also",
      title: "Multisig Setup",
      href: "/docs/learn/wallets/multisig/",
      description: "Eliminate single points of failure for significant holdings",
    },
    {
      label: "Background",
      title: "Why Privacy Matters",
      href: "/docs/learn/privacy/why-privacy-matters/",
      description: "Understand what's exposed on the blockchain and how to protect yourself",
    },
  ],
  "/docs/wallet-setup/hardware-wallet/": [
    {
      label: "Next",
      title: "Backup Verification",
      href: "/docs/wallet-setup/backup-verification/",
      description: "Test your backup before trusting it",
    },
    {
      label: "Background",
      title: "Private Keys",
      href: "/docs/learn/keys/intro/",
      description: "Understand what you're protecting",
    },
    {
      label: "Also",
      title: "Hardware Wallet Comparison",
      href: "/docs/reference/hardware-wallet-comparison/",
      description: "Every device we cover, side by side",
    },
    {
      label: "Also",
      title: "Build a SeedSigner",
      href: "/docs/seedsigner/",
      description: "Our favourite signing solution, for DIY-minded users",
    },
  ],
};

/**
 * @param {string} path - normalised URL with trailing slash
 * @returns {Array<{label: string, title: string, href: string, description?: string}>|null}
 */
export function getNextSteps(path) {
  return NEXT_STEPS[path] || null;
}

export default {
  NEXT_STEPS,
  getNextSteps,
};
