/**
 * Next Steps recommendations for each page
 * Maps URL paths to recommended follow-up content
 */

const NEXT_STEPS = {
  // ===========================================
  // LEARN - FUNDAMENTALS
  // ===========================================
  '/docs/learn/fundamentals/what-is-bitcoin/': [
    { label: 'Next', title: 'What is Self-Custody?', href: '/docs/learn/fundamentals/what-is-self-custody/', description: 'Learn why holding your own keys matters' },
    { label: 'Deep Dive', title: 'Private Keys Explained', href: '/docs/learn/keys/intro/', description: 'Understand the technical foundation' },
  ],
  '/docs/learn/fundamentals/what-is-self-custody/': [
    { label: 'Next', title: 'Choose Your Setup', href: '/docs/learn/fundamentals/choosing-your-path/', description: 'Find the right approach for you' },
    { label: 'Action', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Start self-custodying today' },
  ],
  '/docs/learn/fundamentals/holding-bitcoin/': [
    { label: 'Next', title: 'Choose Your Setup', href: '/docs/learn/fundamentals/choosing-your-path/', description: 'Find the right self-custody approach' },
    { label: 'Learn More', title: 'Private Keys', href: '/docs/learn/keys/intro/', description: 'Understand how ownership works' },
  ],
  '/docs/learn/fundamentals/choosing-your-path/': [
    { label: 'Action', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Set up your first secure wallet' },
    { label: 'Learn More', title: 'Threat Models', href: '/docs/learn/fundamentals/threat-models/', description: 'Assess your security needs' },
  ],
  '/docs/learn/fundamentals/threat-models/': [
    { label: 'Next', title: 'Before You Deposit', href: '/docs/learn/fundamentals/before-you-deposit/', description: 'Critical checklist before funding' },
    { label: 'Action', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Get started with self-custody' },
  ],
  '/docs/learn/fundamentals/before-you-deposit/': [
    { label: 'Next', title: 'Run Your Own Node', href: '/docs/bitcoin-node/', description: 'The next step in sovereignty' },
    { label: 'Learn', title: 'UTXO Management', href: '/docs/privacy/utxo-management/', description: 'Optimize your wallet' },
  ],

  // ===========================================
  // LEARN - KEYS
  // ===========================================
  '/docs/learn/keys/intro/': [
    { label: 'Next', title: 'Seed Phrases', href: '/docs/learn/keys/seed/', description: 'How keys become words' },
    { label: 'Action', title: 'DIY Seed Generation', href: '/docs/security/seed-generation/', description: 'Create your own seed securely' },
  ],
  '/docs/learn/keys/seed/': [
    { label: 'Next', title: 'Passphrases', href: '/docs/learn/keys/passphrase/', description: 'Add an extra security layer' },
    { label: 'Action', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Put your knowledge into practice' },
  ],
  '/docs/learn/keys/passphrase/': [
    { label: 'Action', title: 'DIY Passphrase', href: '/docs/security/passphrase/', description: 'Create a secure passphrase' },
    { label: 'Learn', title: 'Extended Keys', href: '/docs/learn/keys/xpub/', description: 'Understand xpub and xprv' },
  ],

  // ===========================================
  // LEARN - WALLETS
  // ===========================================
  '/docs/learn/wallets/hardware-wallets/': [
    { label: 'Action', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Set up your device' },
    { label: 'Learn', title: 'Air-Gapped Wallets', href: '/docs/learn/wallets/air-gapped-wallets/', description: 'Maximum security setups' },
  ],
  '/docs/learn/wallets/software-wallets/': [
    { label: 'Upgrade', title: 'Hardware Wallets', href: '/docs/learn/wallets/hardware-wallets/', description: 'Better security for larger amounts' },
    { label: 'Action', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Get proper security' },
  ],
  '/docs/learn/wallets/multisig/': [
    { label: 'Action', title: 'Multisig Setup Guide', href: '/docs/advanced/multisig/', description: 'Implement multisig step by step' },
    { label: 'Learn', title: 'Threat Models', href: '/docs/learn/fundamentals/threat-models/', description: 'Do you need multisig?' },
  ],

  // ===========================================
  // LEARN - PRIVACY
  // ===========================================
  '/docs/learn/privacy/why-privacy-matters/': [
    { label: 'Next', title: 'Chain Analysis', href: '/docs/learn/privacy/chain-analysis/', description: 'Understand the threats' },
    { label: 'Action', title: 'UTXO Management', href: '/docs/privacy/utxo-management/', description: 'Start protecting your privacy' },
  ],
  '/docs/learn/privacy/chain-analysis/': [
    { label: 'Next', title: 'Protecting Privacy', href: '/docs/learn/privacy/protecting-privacy/', description: 'Practical protection techniques' },
    { label: 'Action', title: 'CoinJoin Guide', href: '/docs/privacy/coinjoin/', description: 'Break transaction links' },
  ],

  // ===========================================
  // LEARN - NODES
  // ===========================================
  '/docs/learn/nodes/what-is-node/': [
    { label: 'Next', title: 'Why Run a Node', href: '/docs/learn/nodes/why-run-node/', description: 'Benefits of running your own' },
    { label: 'Action', title: 'Node Setup Guide', href: '/docs/bitcoin-node/', description: 'Start running your node' },
  ],
  '/docs/learn/nodes/why-run-node/': [
    { label: 'Action', title: 'Node Setup Guide', href: '/docs/bitcoin-node/', description: 'Set up your own node' },
    { label: 'Learn', title: 'Tor Setup', href: '/docs/bitcoin-node/tor/', description: 'Add privacy to your node' },
  ],

  // ===========================================
  // WALLET SETUP
  // ===========================================
  '/docs/wallet-setup/hardware-wallet/': [
    { label: 'Next', title: 'Backup Verification', href: '/docs/wallet-setup/backup-verification/', description: 'Test your backup before trusting it' },
    { label: 'Learn', title: 'Private Keys', href: '/docs/learn/keys/intro/', description: 'Understand what you\'re protecting' },
  ],
  '/docs/wallet-setup/backup-verification/': [
    { label: 'Next', title: 'Before You Deposit', href: '/docs/learn/fundamentals/before-you-deposit/', description: 'Final checklist' },
    { label: 'Enhance', title: 'Add a Passphrase', href: '/docs/security/passphrase/', description: 'Extra security layer' },
  ],

  // ===========================================
  // SECURITY GUIDES
  // ===========================================
  '/docs/security/seed-generation/': [
    { label: 'Start', title: 'Requirements', href: '/docs/security/seed-generation/requirements/', description: 'What you\'ll need' },
  ],
  '/docs/security/seed-generation/bip39/': [
    { label: 'Next', title: 'Metal Backup', href: '/docs/security/seed-generation/backup/', description: 'Protect your seed physically' },
    { label: 'Continue', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Import your seed' },
  ],
  '/docs/security/passphrase/': [
    { label: 'Start', title: 'Word Lists', href: '/docs/security/passphrase/word-lists/', description: 'Choose the right word list' },
  ],
  '/docs/security/passphrase/backup/': [
    { label: 'Next', title: 'Hardware Wallet Setup', href: '/docs/wallet-setup/hardware-wallet/', description: 'Use your passphrase' },
    { label: 'Learn', title: 'Threat Models', href: '/docs/learn/fundamentals/threat-models/', description: 'Is passphrase right for you?' },
  ],

  // ===========================================
  // BITCOIN NODE
  // ===========================================
  '/docs/bitcoin-node/': [
    { label: 'Start', title: 'Software Options', href: '/docs/bitcoin-node/node-software-options/', description: 'Choose your node software' },
  ],
  '/docs/bitcoin-node/connect-sparrow-wallet/': [
    { label: 'Done!', title: 'UTXO Management', href: '/docs/privacy/utxo-management/', description: 'Optimize your wallet' },
    { label: 'Learn', title: 'Why Privacy Matters', href: '/docs/learn/privacy/why-privacy-matters/', description: 'Understand your new privacy' },
  ],

  // ===========================================
  // ADVANCED
  // ===========================================
  '/docs/advanced/multisig/': [
    { label: 'Start', title: 'Hardware Setup', href: '/docs/advanced/multisig/hardware-setup/', description: 'Set up your devices' },
  ],
  '/docs/advanced/multisig/backup-recovery/': [
    { label: 'Done!', title: 'Test Your Setup', href: '/docs/learn/fundamentals/before-you-deposit/', description: 'Verify everything works' },
    { label: 'Learn', title: 'Inheritance Planning', href: '/docs/advanced/inheritance-planning/', description: 'Plan for the future' },
  ],

  // ===========================================
  // PRIVACY GUIDES
  // ===========================================
  '/docs/privacy/coinjoin/': [
    { label: 'Start', title: 'How It Works', href: '/docs/privacy/coinjoin/how-it-works/', description: 'Understand CoinJoin mechanics' },
  ],
  '/docs/privacy/coinjoin/best-practices/': [
    { label: 'Done!', title: 'UTXO Management', href: '/docs/privacy/utxo-management/', description: 'Manage your mixed coins' },
    { label: 'Learn', title: 'Chain Analysis', href: '/docs/learn/privacy/chain-analysis/', description: 'Understand the threats' },
  ],
  '/docs/privacy/utxo-management/': [
    { label: 'Learn', title: 'Coin Control', href: '/docs/privacy/utxo-management/coin-control/', description: 'Select specific UTXOs' },
    { label: 'Action', title: 'CoinJoin', href: '/docs/privacy/coinjoin/', description: 'Break transaction links' },
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
  getNextSteps
};
