/**
 * Progress tracking data for multi-step guides
 * Maps URL paths to their position in a guide sequence
 */

export const guideProgress = {
  // ===========================================
  // HARDWARE WALLET SETUP GUIDE
  // ===========================================
  '/docs/wallet-setup/hardware-wallet/': {
    guideName: 'Hardware Wallet Setup',
    guideSlug: 'hardware-wallet',
    current: 1,
    total: 3,
    steps: [
      { title: 'Hardware Wallet Setup', path: '/docs/wallet-setup/hardware-wallet/' },
      { title: 'Backup Verification', path: '/docs/wallet-setup/backup-verification/' },
      { title: 'Before You Deposit', path: '/docs/learn/fundamentals/before-you-deposit/' },
    ]
  },
  '/docs/wallet-setup/backup-verification/': {
    guideName: 'Hardware Wallet Setup',
    guideSlug: 'hardware-wallet',
    current: 2,
    total: 3,
    steps: [
      { title: 'Hardware Wallet Setup', path: '/docs/wallet-setup/hardware-wallet/' },
      { title: 'Backup Verification', path: '/docs/wallet-setup/backup-verification/' },
      { title: 'Before You Deposit', path: '/docs/learn/fundamentals/before-you-deposit/' },
    ]
  },

  // ===========================================
  // DIY SEED GENERATION GUIDE
  // ===========================================
  '/docs/security/seed-generation/': {
    guideName: 'DIY Seed Generation',
    guideSlug: 'seed-generation',
    current: 1,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/security/seed-generation/' },
      { title: 'Requirements', path: '/docs/security/seed-generation/requirements/' },
      { title: 'Dice Rolling', path: '/docs/security/seed-generation/dice-roll/' },
      { title: 'Binary to Decimal', path: '/docs/security/seed-generation/binary-decimal/' },
      { title: 'Checksum', path: '/docs/security/seed-generation/checksum/' },
      { title: 'BIP39 Words', path: '/docs/security/seed-generation/bip39/' },
    ]
  },
  '/docs/security/seed-generation/requirements/': {
    guideName: 'DIY Seed Generation',
    guideSlug: 'seed-generation',
    current: 2,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/security/seed-generation/' },
      { title: 'Requirements', path: '/docs/security/seed-generation/requirements/' },
      { title: 'Dice Rolling', path: '/docs/security/seed-generation/dice-roll/' },
      { title: 'Binary to Decimal', path: '/docs/security/seed-generation/binary-decimal/' },
      { title: 'Checksum', path: '/docs/security/seed-generation/checksum/' },
      { title: 'BIP39 Words', path: '/docs/security/seed-generation/bip39/' },
    ]
  },
  '/docs/security/seed-generation/dice-roll/': {
    guideName: 'DIY Seed Generation',
    guideSlug: 'seed-generation',
    current: 3,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/security/seed-generation/' },
      { title: 'Requirements', path: '/docs/security/seed-generation/requirements/' },
      { title: 'Dice Rolling', path: '/docs/security/seed-generation/dice-roll/' },
      { title: 'Binary to Decimal', path: '/docs/security/seed-generation/binary-decimal/' },
      { title: 'Checksum', path: '/docs/security/seed-generation/checksum/' },
      { title: 'BIP39 Words', path: '/docs/security/seed-generation/bip39/' },
    ]
  },
  '/docs/security/seed-generation/binary-decimal/': {
    guideName: 'DIY Seed Generation',
    guideSlug: 'seed-generation',
    current: 4,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/security/seed-generation/' },
      { title: 'Requirements', path: '/docs/security/seed-generation/requirements/' },
      { title: 'Dice Rolling', path: '/docs/security/seed-generation/dice-roll/' },
      { title: 'Binary to Decimal', path: '/docs/security/seed-generation/binary-decimal/' },
      { title: 'Checksum', path: '/docs/security/seed-generation/checksum/' },
      { title: 'BIP39 Words', path: '/docs/security/seed-generation/bip39/' },
    ]
  },
  '/docs/security/seed-generation/checksum/': {
    guideName: 'DIY Seed Generation',
    guideSlug: 'seed-generation',
    current: 5,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/security/seed-generation/' },
      { title: 'Requirements', path: '/docs/security/seed-generation/requirements/' },
      { title: 'Dice Rolling', path: '/docs/security/seed-generation/dice-roll/' },
      { title: 'Binary to Decimal', path: '/docs/security/seed-generation/binary-decimal/' },
      { title: 'Checksum', path: '/docs/security/seed-generation/checksum/' },
      { title: 'BIP39 Words', path: '/docs/security/seed-generation/bip39/' },
    ]
  },
  '/docs/security/seed-generation/bip39/': {
    guideName: 'DIY Seed Generation',
    guideSlug: 'seed-generation',
    current: 6,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/security/seed-generation/' },
      { title: 'Requirements', path: '/docs/security/seed-generation/requirements/' },
      { title: 'Dice Rolling', path: '/docs/security/seed-generation/dice-roll/' },
      { title: 'Binary to Decimal', path: '/docs/security/seed-generation/binary-decimal/' },
      { title: 'Checksum', path: '/docs/security/seed-generation/checksum/' },
      { title: 'BIP39 Words', path: '/docs/security/seed-generation/bip39/' },
    ]
  },

  // ===========================================
  // PASSPHRASE GUIDE
  // ===========================================
  '/docs/security/passphrase/': {
    guideName: 'DIY Passphrase',
    guideSlug: 'passphrase',
    current: 1,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/security/passphrase/' },
      { title: 'Word Lists', path: '/docs/security/passphrase/word-lists/' },
      { title: 'Dice Rolling', path: '/docs/security/passphrase/dice-roll/' },
      { title: 'Backup', path: '/docs/security/passphrase/backup/' },
    ]
  },
  '/docs/security/passphrase/word-lists/': {
    guideName: 'DIY Passphrase',
    guideSlug: 'passphrase',
    current: 2,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/security/passphrase/' },
      { title: 'Word Lists', path: '/docs/security/passphrase/word-lists/' },
      { title: 'Dice Rolling', path: '/docs/security/passphrase/dice-roll/' },
      { title: 'Backup', path: '/docs/security/passphrase/backup/' },
    ]
  },
  '/docs/security/passphrase/dice-roll/': {
    guideName: 'DIY Passphrase',
    guideSlug: 'passphrase',
    current: 3,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/security/passphrase/' },
      { title: 'Word Lists', path: '/docs/security/passphrase/word-lists/' },
      { title: 'Dice Rolling', path: '/docs/security/passphrase/dice-roll/' },
      { title: 'Backup', path: '/docs/security/passphrase/backup/' },
    ]
  },
  '/docs/security/passphrase/backup/': {
    guideName: 'DIY Passphrase',
    guideSlug: 'passphrase',
    current: 4,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/security/passphrase/' },
      { title: 'Word Lists', path: '/docs/security/passphrase/word-lists/' },
      { title: 'Dice Rolling', path: '/docs/security/passphrase/dice-roll/' },
      { title: 'Backup', path: '/docs/security/passphrase/backup/' },
    ]
  },

  // ===========================================
  // MULTISIG GUIDE
  // ===========================================
  '/docs/advanced/multisig/': {
    guideName: 'Multisig Setup',
    guideSlug: 'multisig',
    current: 1,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/advanced/multisig/' },
      { title: 'Hardware Setup', path: '/docs/advanced/multisig/hardware-setup/' },
      { title: 'Sparrow Setup', path: '/docs/advanced/multisig/sparrow-setup/' },
      { title: 'Backup & Recovery', path: '/docs/advanced/multisig/backup-recovery/' },
    ]
  },
  '/docs/advanced/multisig/hardware-setup/': {
    guideName: 'Multisig Setup',
    guideSlug: 'multisig',
    current: 2,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/advanced/multisig/' },
      { title: 'Hardware Setup', path: '/docs/advanced/multisig/hardware-setup/' },
      { title: 'Sparrow Setup', path: '/docs/advanced/multisig/sparrow-setup/' },
      { title: 'Backup & Recovery', path: '/docs/advanced/multisig/backup-recovery/' },
    ]
  },
  '/docs/advanced/multisig/sparrow-setup/': {
    guideName: 'Multisig Setup',
    guideSlug: 'multisig',
    current: 3,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/advanced/multisig/' },
      { title: 'Hardware Setup', path: '/docs/advanced/multisig/hardware-setup/' },
      { title: 'Sparrow Setup', path: '/docs/advanced/multisig/sparrow-setup/' },
      { title: 'Backup & Recovery', path: '/docs/advanced/multisig/backup-recovery/' },
    ]
  },
  '/docs/advanced/multisig/backup-recovery/': {
    guideName: 'Multisig Setup',
    guideSlug: 'multisig',
    current: 4,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/advanced/multisig/' },
      { title: 'Hardware Setup', path: '/docs/advanced/multisig/hardware-setup/' },
      { title: 'Sparrow Setup', path: '/docs/advanced/multisig/sparrow-setup/' },
      { title: 'Backup & Recovery', path: '/docs/advanced/multisig/backup-recovery/' },
    ]
  },

  // ===========================================
  // BITCOIN NODE GUIDE
  // ===========================================
  '/docs/bitcoin-node/': {
    guideName: 'Bitcoin Node Setup',
    guideSlug: 'bitcoin-node',
    current: 1,
    total: 5,
    steps: [
      { title: 'Overview', path: '/docs/bitcoin-node/' },
      { title: 'Software Options', path: '/docs/bitcoin-node/node-software-options/' },
      { title: 'Electrum Server', path: '/docs/bitcoin-node/electrum-server/' },
      { title: 'Tor Setup', path: '/docs/bitcoin-node/tor/' },
      { title: 'Connect Sparrow', path: '/docs/bitcoin-node/connect-sparrow-wallet/' },
    ]
  },
  '/docs/bitcoin-node/node-software-options/': {
    guideName: 'Bitcoin Node Setup',
    guideSlug: 'bitcoin-node',
    current: 2,
    total: 5,
    steps: [
      { title: 'Overview', path: '/docs/bitcoin-node/' },
      { title: 'Software Options', path: '/docs/bitcoin-node/node-software-options/' },
      { title: 'Electrum Server', path: '/docs/bitcoin-node/electrum-server/' },
      { title: 'Tor Setup', path: '/docs/bitcoin-node/tor/' },
      { title: 'Connect Sparrow', path: '/docs/bitcoin-node/connect-sparrow-wallet/' },
    ]
  },
  '/docs/bitcoin-node/electrum-server/': {
    guideName: 'Bitcoin Node Setup',
    guideSlug: 'bitcoin-node',
    current: 3,
    total: 5,
    steps: [
      { title: 'Overview', path: '/docs/bitcoin-node/' },
      { title: 'Software Options', path: '/docs/bitcoin-node/node-software-options/' },
      { title: 'Electrum Server', path: '/docs/bitcoin-node/electrum-server/' },
      { title: 'Tor Setup', path: '/docs/bitcoin-node/tor/' },
      { title: 'Connect Sparrow', path: '/docs/bitcoin-node/connect-sparrow-wallet/' },
    ]
  },
  '/docs/bitcoin-node/tor/': {
    guideName: 'Bitcoin Node Setup',
    guideSlug: 'bitcoin-node',
    current: 4,
    total: 5,
    steps: [
      { title: 'Overview', path: '/docs/bitcoin-node/' },
      { title: 'Software Options', path: '/docs/bitcoin-node/node-software-options/' },
      { title: 'Electrum Server', path: '/docs/bitcoin-node/electrum-server/' },
      { title: 'Tor Setup', path: '/docs/bitcoin-node/tor/' },
      { title: 'Connect Sparrow', path: '/docs/bitcoin-node/connect-sparrow-wallet/' },
    ]
  },
  '/docs/bitcoin-node/connect-sparrow-wallet/': {
    guideName: 'Bitcoin Node Setup',
    guideSlug: 'bitcoin-node',
    current: 5,
    total: 5,
    steps: [
      { title: 'Overview', path: '/docs/bitcoin-node/' },
      { title: 'Software Options', path: '/docs/bitcoin-node/node-software-options/' },
      { title: 'Electrum Server', path: '/docs/bitcoin-node/electrum-server/' },
      { title: 'Tor Setup', path: '/docs/bitcoin-node/tor/' },
      { title: 'Connect Sparrow', path: '/docs/bitcoin-node/connect-sparrow-wallet/' },
    ]
  },

  // ===========================================
  // LIBREBOOT GUIDE
  // ===========================================
  '/docs/libreboot/': {
    guideName: 'Libreboot Installation',
    guideSlug: 'libreboot',
    current: 1,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/libreboot/' },
      { title: 'Requirements', path: '/docs/libreboot/requirements/' },
      { title: 'Build ROM', path: '/docs/libreboot/build/' },
      { title: 'Build flashprog', path: '/docs/libreboot/build-flashprog/' },
      { title: 'Pico Setup', path: '/docs/libreboot/raspberry-pico/build-serprog/' },
      { title: 'Flash BIOS', path: '/docs/libreboot/flashing-bios/' },
    ]
  },
  '/docs/libreboot/requirements/': {
    guideName: 'Libreboot Installation',
    guideSlug: 'libreboot',
    current: 2,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/libreboot/' },
      { title: 'Requirements', path: '/docs/libreboot/requirements/' },
      { title: 'Build ROM', path: '/docs/libreboot/build/' },
      { title: 'Build flashprog', path: '/docs/libreboot/build-flashprog/' },
      { title: 'Pico Setup', path: '/docs/libreboot/raspberry-pico/build-serprog/' },
      { title: 'Flash BIOS', path: '/docs/libreboot/flashing-bios/' },
    ]
  },
  '/docs/libreboot/build/': {
    guideName: 'Libreboot Installation',
    guideSlug: 'libreboot',
    current: 3,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/libreboot/' },
      { title: 'Requirements', path: '/docs/libreboot/requirements/' },
      { title: 'Build ROM', path: '/docs/libreboot/build/' },
      { title: 'Build flashprog', path: '/docs/libreboot/build-flashprog/' },
      { title: 'Pico Setup', path: '/docs/libreboot/raspberry-pico/build-serprog/' },
      { title: 'Flash BIOS', path: '/docs/libreboot/flashing-bios/' },
    ]
  },
  '/docs/libreboot/build-flashprog/': {
    guideName: 'Libreboot Installation',
    guideSlug: 'libreboot',
    current: 4,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/libreboot/' },
      { title: 'Requirements', path: '/docs/libreboot/requirements/' },
      { title: 'Build ROM', path: '/docs/libreboot/build/' },
      { title: 'Build flashprog', path: '/docs/libreboot/build-flashprog/' },
      { title: 'Pico Setup', path: '/docs/libreboot/raspberry-pico/build-serprog/' },
      { title: 'Flash BIOS', path: '/docs/libreboot/flashing-bios/' },
    ]
  },
  '/docs/libreboot/raspberry-pico/build-serprog/': {
    guideName: 'Libreboot Installation',
    guideSlug: 'libreboot',
    current: 5,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/libreboot/' },
      { title: 'Requirements', path: '/docs/libreboot/requirements/' },
      { title: 'Build ROM', path: '/docs/libreboot/build/' },
      { title: 'Build flashprog', path: '/docs/libreboot/build-flashprog/' },
      { title: 'Pico Setup', path: '/docs/libreboot/raspberry-pico/build-serprog/' },
      { title: 'Flash BIOS', path: '/docs/libreboot/flashing-bios/' },
    ]
  },
  '/docs/libreboot/flashing-bios/': {
    guideName: 'Libreboot Installation',
    guideSlug: 'libreboot',
    current: 6,
    total: 6,
    steps: [
      { title: 'Overview', path: '/docs/libreboot/' },
      { title: 'Requirements', path: '/docs/libreboot/requirements/' },
      { title: 'Build ROM', path: '/docs/libreboot/build/' },
      { title: 'Build flashprog', path: '/docs/libreboot/build-flashprog/' },
      { title: 'Pico Setup', path: '/docs/libreboot/raspberry-pico/build-serprog/' },
      { title: 'Flash BIOS', path: '/docs/libreboot/flashing-bios/' },
    ]
  },

  // ===========================================
  // COINJOIN GUIDE
  // ===========================================
  '/docs/privacy/coinjoin/': {
    guideName: 'CoinJoin Guide',
    guideSlug: 'coinjoin',
    current: 1,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/privacy/coinjoin/' },
      { title: 'How It Works', path: '/docs/privacy/coinjoin/how-it-works/' },
      { title: 'Services', path: '/docs/privacy/coinjoin/services/' },
      { title: 'Best Practices', path: '/docs/privacy/coinjoin/best-practices/' },
    ]
  },
  '/docs/privacy/coinjoin/how-it-works/': {
    guideName: 'CoinJoin Guide',
    guideSlug: 'coinjoin',
    current: 2,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/privacy/coinjoin/' },
      { title: 'How It Works', path: '/docs/privacy/coinjoin/how-it-works/' },
      { title: 'Services', path: '/docs/privacy/coinjoin/services/' },
      { title: 'Best Practices', path: '/docs/privacy/coinjoin/best-practices/' },
    ]
  },
  '/docs/privacy/coinjoin/services/': {
    guideName: 'CoinJoin Guide',
    guideSlug: 'coinjoin',
    current: 3,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/privacy/coinjoin/' },
      { title: 'How It Works', path: '/docs/privacy/coinjoin/how-it-works/' },
      { title: 'Services', path: '/docs/privacy/coinjoin/services/' },
      { title: 'Best Practices', path: '/docs/privacy/coinjoin/best-practices/' },
    ]
  },
  '/docs/privacy/coinjoin/best-practices/': {
    guideName: 'CoinJoin Guide',
    guideSlug: 'coinjoin',
    current: 4,
    total: 4,
    steps: [
      { title: 'Overview', path: '/docs/privacy/coinjoin/' },
      { title: 'How It Works', path: '/docs/privacy/coinjoin/how-it-works/' },
      { title: 'Services', path: '/docs/privacy/coinjoin/services/' },
      { title: 'Best Practices', path: '/docs/privacy/coinjoin/best-practices/' },
    ]
  },
};


/**
 * Section mapping based on URL path
 */
export function getSectionFromPath(path) {
  if (path.includes('/learn/fundamentals')) return 'fundamentals';
  if (path.includes('/learn/keys')) return 'keys';
  if (path.includes('/learn/wallets')) return 'wallets';
  if (path.includes('/learn/transactions')) return 'transactions';
  if (path.includes('/learn/privacy')) return 'privacy';
  if (path.includes('/learn/nodes')) return 'nodes';
  if (path.includes('/security/')) return 'security';
  if (path.includes('/advanced/')) return 'advanced';
  if (path.includes('/privacy/')) return 'privacy';
  if (path.includes('/reference/')) return 'reference';
  if (path.includes('/wallet-setup/')) return 'wallets';
  if (path.includes('/bitcoin-node/')) return 'nodes';
  return null;
}


/**
 * Get progress data for a given path
 */
export function getProgressData(path) {
  return guideProgress[path] || null;
}


export default {
  guideProgress,
  getSectionFromPath,
  getProgressData
};
