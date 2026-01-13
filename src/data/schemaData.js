/**
 * Schema.org structured data for Self Custody Labs guides
 * This file contains HowTo schema definitions for each guide page
 */

const SITE_URL = 'https://selfcustodylabs.com';

// HowTo schema definitions for guide pages
export const howToSchemas = {
  '/docs/seed/': {
    name: 'How to Generate Your Own Bitcoin Seed Phrase',
    description: 'Create a cryptographically secure Bitcoin seed phrase using dice rolls for true randomness. This DIY method ensures no third party has access to your private keys.',
    totalTime: 'PT2H',
    estimatedCost: {
      currency: 'USD',
      value: '20'
    },
    supply: [
      'Casino-grade dice (5 dice recommended)',
      'Pen and paper',
      'Metal seed storage plate',
      'BIP39 word list'
    ],
    tool: [
      'Air-gapped computer or Raspberry Pi Zero',
      'Electrum wallet (offline)',
      'Calculator (optional)'
    ],
    steps: [
      {
        name: 'Gather Requirements',
        text: 'Obtain casino-grade dice, an air-gapped computer, and a metal backup plate for secure seed storage.',
        url: `${SITE_URL}/docs/seed/requirements/`
      },
      {
        name: 'Roll Dice for Entropy',
        text: 'Roll dice 99 times to generate 256 bits of true random entropy. Record each roll as binary (1-3 = 0, 4-6 = 1).',
        url: `${SITE_URL}/docs/seed/dice-roll/`
      },
      {
        name: 'Convert Binary to Decimal',
        text: 'Split your binary string into 11-bit chunks and convert each chunk to a decimal number (0-2047).',
        url: `${SITE_URL}/docs/seed/binary-decimal/`
      },
      {
        name: 'Calculate Checksum',
        text: 'Use SHA256 to calculate the checksum bits that complete your 24th word.',
        url: `${SITE_URL}/docs/seed/checksum/`
      },
      {
        name: 'Look Up BIP39 Words',
        text: 'Convert each decimal number to its corresponding BIP39 word to create your 24-word seed phrase.',
        url: `${SITE_URL}/docs/seed/bip39/`
      },
      {
        name: 'Backup Your Seed',
        text: 'Stamp or engrave your seed phrase onto a metal plate for fireproof, waterproof storage.',
        url: `${SITE_URL}/docs/seed/backup/`
      }
    ]
  },

  '/docs/passphrase/': {
    name: 'How to Create a Secure Bitcoin Passphrase',
    description: 'Generate a cryptographically strong passphrase using dice rolls and the EFF word list. Add an extra layer of protection to your Bitcoin seed phrase.',
    totalTime: 'PT30M',
    estimatedCost: {
      currency: 'USD',
      value: '5'
    },
    supply: [
      'Five six-sided dice',
      'Pen and paper',
      'EFF long word list'
    ],
    tool: [],
    steps: [
      {
        name: 'Understand Word Lists',
        text: 'Learn why the EFF word list is preferred over the original Diceware list for better memorability and security.',
        url: `${SITE_URL}/docs/passphrase/word-lists/`
      },
      {
        name: 'Roll Dice for Each Word',
        text: 'Roll 5 dice for each word you want in your passphrase. Look up the resulting 5-digit number in the EFF word list.',
        url: `${SITE_URL}/docs/passphrase/dice-roll/`
      },
      {
        name: 'Backup Your Passphrase',
        text: 'Store your passphrase separately from your seed phrase in a secure location.',
        url: `${SITE_URL}/docs/passphrase/backup/`
      }
    ]
  },

  '/docs/bitcoin-node/': {
    name: 'How to Set Up Your Own Bitcoin Node',
    description: 'Run your own Bitcoin node to independently verify transactions and enhance your privacy. Connect your wallet to your own node for true self-sovereignty.',
    totalTime: 'PT4H',
    estimatedCost: {
      currency: 'USD',
      value: '200'
    },
    supply: [
      'Raspberry Pi 4 (4GB+ RAM) or dedicated computer',
      '1TB+ SSD storage',
      'Ethernet cable',
      'Power supply'
    ],
    tool: [
      'Umbrel, RaspiBlitz, Start9, or RoninDojo software',
      'Sparrow Wallet'
    ],
    steps: [
      {
        name: 'Understand Why You Need a Node',
        text: 'Learn why running your own node matters for privacy, security, and true Bitcoin self-custody.',
        url: `${SITE_URL}/docs/basics/nodes/why-run-node/`
      },
      {
        name: 'Choose and Set Up Node Software',
        text: 'Select a node software package (Umbrel, RaspiBlitz, Start9, or RoninDojo) and install it on your hardware.',
        url: `${SITE_URL}/docs/bitcoin-node/node-setup/`
      },
      {
        name: 'Install Electrum Server',
        text: 'Set up an Electrum server to index the blockchain and enable wallet connections.',
        url: `${SITE_URL}/docs/bitcoin-node/electrum-server/`
      },
      {
        name: 'Configure Tor Connection',
        text: 'Route your node traffic through Tor for enhanced privacy and to hide your IP address.',
        url: `${SITE_URL}/docs/bitcoin-node/tor/`
      },
      {
        name: 'Connect Sparrow Wallet',
        text: 'Connect your Sparrow Wallet to your own node for private, self-sovereign transactions.',
        url: `${SITE_URL}/docs/bitcoin-node/connect-sparrow-wallet/`
      }
    ]
  },

  '/docs/air-gapped-computer/': {
    name: 'How to Build an Air-Gapped Computer for Bitcoin',
    description: 'Set up an offline computer for maximum security. Use it for seed generation, transaction signing, and verifying hardware wallets.',
    totalTime: 'PT3H',
    estimatedCost: {
      currency: 'USD',
      value: '150'
    },
    supply: [
      'Used laptop (ThinkPad recommended)',
      'USB drive for OS installation',
      'Screwdriver set'
    ],
    tool: [
      'Linux Mint or Tails OS',
      'Electrum wallet',
      'Ian Coleman BIP39 tool'
    ],
    steps: [
      {
        name: 'Choose Your Hardware',
        text: 'Select an appropriate laptop or device for your air-gapped computer. ThinkPads are recommended for their Libreboot compatibility.',
        url: `${SITE_URL}/docs/air-gapped-computer/types/`
      },
      {
        name: 'Set Up the System',
        text: 'Install a secure operating system, disable networking hardware, and configure encryption.',
        url: `${SITE_URL}/docs/air-gapped-computer/setup/`
      }
    ]
  },

  '/docs/bitcoin-computer/': {
    name: 'How to Build a Dedicated Bitcoin Computer',
    description: 'Build a dedicated computer for Bitcoin transactions, isolated from your everyday computing to protect against malware.',
    totalTime: 'PT2H',
    estimatedCost: {
      currency: 'USD',
      value: '100'
    },
    supply: [
      'Dedicated laptop',
      'USB drive for OS installation'
    ],
    tool: [
      'Linux Mint',
      'LUKS encryption',
      'Sparrow Wallet'
    ],
    steps: [
      {
        name: 'Choose Your Hardware',
        text: 'Select a laptop dedicated solely to Bitcoin transactions. Consider privacy and security features.',
        url: `${SITE_URL}/docs/bitcoin-computer/choice/`
      },
      {
        name: 'Set Up the System',
        text: 'Install Linux Mint with full disk encryption and configure it for Bitcoin use.',
        url: `${SITE_URL}/docs/bitcoin-computer/setup/`
      }
    ]
  },

  '/docs/libreboot/': {
    name: 'How to Install Libreboot on Your Laptop',
    description: 'Replace your proprietary BIOS with Libreboot open-source firmware. Remove Intel ME backdoors and take full control of your hardware.',
    totalTime: 'PT5H',
    estimatedCost: {
      currency: 'USD',
      value: '50'
    },
    supply: [
      'Supported laptop (ThinkPad X200, T400, T480s, etc.)',
      'Raspberry Pi Pico',
      'SOIC8 clip or Pomona clip',
      'Dupont jumper wires'
    ],
    tool: [
      'Linux computer for building',
      'flashprog utility',
      'lbmk (Libreboot build system)'
    ],
    steps: [
      {
        name: 'Gather Requirements',
        text: 'Obtain the necessary hardware including a Raspberry Pi Pico, SOIC8 clip, and jumper wires.',
        url: `${SITE_URL}/docs/libreboot/requirements/`
      },
      {
        name: 'Build Libreboot',
        text: 'Clone the Libreboot repository and build the firmware for your specific laptop model.',
        url: `${SITE_URL}/docs/libreboot/build/`
      },
      {
        name: 'Build Flashprog',
        text: 'Compile the flashprog utility needed to read and write BIOS chips.',
        url: `${SITE_URL}/docs/libreboot/build-flashprog/`
      },
      {
        name: 'Generate ROM Images',
        text: 'Use lbmk to generate the correct ROM image for your laptop.',
        url: `${SITE_URL}/docs/libreboot/roms/`
      },
      {
        name: 'Set Up Raspberry Pi Pico',
        text: 'Flash serprog firmware to your Raspberry Pi Pico and connect it to the BIOS chip.',
        url: `${SITE_URL}/docs/libreboot/raspberry-pico/`
      },
      {
        name: 'Flash the BIOS',
        text: 'Back up your original BIOS and flash Libreboot to your laptop.',
        url: `${SITE_URL}/docs/libreboot/flashing-bios/`
      }
    ]
  },

  '/docs/coreboot/': {
    name: 'How to Install Coreboot on Your Laptop',
    description: 'Replace your proprietary BIOS with Coreboot open-source firmware for faster boot times and improved security.',
    totalTime: 'PT4H',
    estimatedCost: {
      currency: 'USD',
      value: '30'
    },
    supply: [
      'Supported laptop',
      'External programmer (for external flashing)',
      'SOIC8 clip'
    ],
    tool: [
      'Linux computer for building',
      'Coreboot build system'
    ],
    steps: [
      {
        name: 'Gather Requirements',
        text: 'Check if your laptop is supported and gather the necessary flashing hardware.',
        url: `${SITE_URL}/docs/coreboot/requirements/`
      },
      {
        name: 'Build Coreboot',
        text: 'Clone the Coreboot repository and configure/build the firmware for your laptop.',
        url: `${SITE_URL}/docs/coreboot/build/`
      },
      {
        name: 'Flash the BIOS',
        text: 'Use either internal or external flashing method to install Coreboot.',
        url: `${SITE_URL}/docs/coreboot/external-flashing/`
      }
    ]
  },

  '/docs/nostr-signing-device/': {
    name: 'How to Build a Nostr Signing Device',
    description: 'Build a hardware signing device for Nostr using a LILYGO T-Display. Keep your Nostr private key secure and offline.',
    totalTime: 'PT2H',
    estimatedCost: {
      currency: 'USD',
      value: '15'
    },
    supply: [
      'LILYGO TTGO T-Display 1.14',
      'USB-C cable'
    ],
    tool: [
      'Arduino IDE',
      'Horse browser extension',
      'Chrome-based browser'
    ],
    steps: [
      {
        name: 'Set Up Arduino IDE',
        text: 'Install Arduino IDE and configure it for ESP32 development.',
        url: `${SITE_URL}/docs/nostr-signing-device/arduino-ide/`
      },
      {
        name: 'Configure ESP32 Module',
        text: 'Set up the LILYGO T-Display board in Arduino IDE.',
        url: `${SITE_URL}/docs/nostr-signing-device/esp32-module/`
      },
      {
        name: 'Flash the Firmware',
        text: 'Clone the NSD repository and upload the firmware to your device.',
        url: `${SITE_URL}/docs/nostr-signing-device/setup/`
      },
      {
        name: 'Install Horse Extension',
        text: 'Install the Horse browser extension to connect your NSD to Nostr clients.',
        url: `${SITE_URL}/docs/nostr-signing-device/horse-extension/`
      },
      {
        name: 'Connect to Nostr Client',
        text: 'Connect your NSD to a Nostr client like Coracle or NoStrudel.',
        url: `${SITE_URL}/docs/nostr-signing-device/client-connect/`
      }
    ]
  },

  '/docs/coinjoin/': {
    name: 'How to Use CoinJoin for Bitcoin Privacy',
    description: 'Learn how to use CoinJoin to break the link between your transaction history and your coins. Improve your Bitcoin privacy with mixing techniques.',
    totalTime: 'PT1H',
    estimatedCost: {
      currency: 'USD',
      value: '0'
    },
    supply: [
      'Bitcoin to mix',
      'Mixing wallet (Wasabi, Sparrow, or JoinMarket)'
    ],
    tool: [
      'Bitcoin node (essential for privacy)',
      'Sparrow Wallet or Wasabi Wallet',
      'Tor (recommended)'
    ],
    steps: [
      {
        name: 'Understand How CoinJoin Works',
        text: 'Learn the fundamentals of CoinJoin: how equal outputs create privacy and what anonymity sets mean.',
        url: `${SITE_URL}/docs/coinjoin/how-it-works/`
      },
      {
        name: 'Choose a CoinJoin Service',
        text: 'Compare Wasabi, Whirlpool (Sparrow), and JoinMarket to find the right mixing solution for your needs.',
        url: `${SITE_URL}/docs/coinjoin/services/`
      },
      {
        name: 'Follow Best Practices',
        text: 'Learn how to maintain privacy after mixing: avoid merging coins, use coin control, and handle change properly.',
        url: `${SITE_URL}/docs/coinjoin/best-practices/`
      }
    ]
  },

  '/docs/utxo-management/': {
    name: 'How to Manage Bitcoin UTXOs for Lower Fees and Better Privacy',
    description: 'Master UTXO management to reduce transaction fees and protect your privacy. Learn coin control, consolidation strategies, and labeling best practices.',
    totalTime: 'PT45M',
    estimatedCost: {
      currency: 'USD',
      value: '0'
    },
    supply: [
      'Bitcoin wallet with coin control (Sparrow recommended)',
      'Existing Bitcoin UTXOs to manage'
    ],
    tool: [
      'Sparrow Wallet or Electrum',
      'mempool.space for fee monitoring'
    ],
    steps: [
      {
        name: 'Understand UTXOs and Their Impact',
        text: 'Learn what UTXOs are and why their management affects both fees and privacy.',
        url: `${SITE_URL}/docs/utxo-management/`
      },
      {
        name: 'Master Coin Control',
        text: 'Learn to select specific UTXOs for transactions instead of letting your wallet choose automatically.',
        url: `${SITE_URL}/docs/utxo-management/coin-control/`
      },
      {
        name: 'Implement Consolidation Strategies',
        text: 'Consolidate small UTXOs during low-fee periods while maintaining source separation for privacy.',
        url: `${SITE_URL}/docs/utxo-management/consolidation/`
      }
    ]
  },

  '/docs/multisig/': {
    name: 'How to Set Up a Bitcoin Multisig Wallet for Maximum Security',
    description: 'Complete guide to creating a 2-of-3 multisig wallet. Eliminate single points of failure and protect your bitcoin with multi-signature security.',
    totalTime: 'PT2H',
    estimatedCost: {
      currency: 'USD',
      value: '300'
    },
    supply: [
      'Three hardware wallets (different manufacturers recommended)',
      'Metal seed backup plates (3)',
      'Computer with Sparrow Wallet installed'
    ],
    tool: [
      'Sparrow Wallet',
      'Hardware wallets (Coldcard, Trezor, Keystone, etc.)',
      'MicroSD cards for air-gapped devices'
    ],
    steps: [
      {
        name: 'Understand Multisig Fundamentals',
        text: 'Learn what multisig is, how it eliminates single points of failure, and determine if it is right for your situation.',
        url: `${SITE_URL}/docs/multisig/`
      },
      {
        name: 'Set Up Hardware Wallets',
        text: 'Initialize three hardware wallets with unique seed phrases. Use different manufacturers for maximum security.',
        url: `${SITE_URL}/docs/multisig/hardware-setup/`
      },
      {
        name: 'Create Multisig in Sparrow',
        text: 'Create your 2-of-3 multisig wallet using Sparrow Wallet as the coordinator software.',
        url: `${SITE_URL}/docs/multisig/sparrow-setup/`
      },
      {
        name: 'Backup and Test Recovery',
        text: 'Properly backup seed phrases and wallet descriptor. Test recovery procedures before depositing significant funds.',
        url: `${SITE_URL}/docs/multisig/backup-recovery/`
      }
    ]
  }
};

// Breadcrumb definitions for all doc sections
export const breadcrumbMappings = {
  // Basics section
  '/docs/basics/': ['Learn'],
  '/docs/basics/holding/': ['Learn', 'Holding Bitcoin'],
  '/docs/basics/keys/': ['Learn', 'Private Keys'],
  '/docs/basics/keys/intro/': ['Learn', 'Private Keys', 'Introduction'],
  '/docs/basics/keys/seed/': ['Learn', 'Private Keys', 'Seed Phrases'],
  '/docs/basics/keys/passphrase/': ['Learn', 'Private Keys', 'Passphrase'],
  '/docs/basics/keys/random/': ['Learn', 'Private Keys', 'Randomness'],
  '/docs/basics/keys/number-systems/': ['Learn', 'Private Keys', 'Number Systems'],
  '/docs/basics/keys/xpub/': ['Learn', 'Private Keys', 'Extended Public Key'],
  '/docs/basics/keys/xprv/': ['Learn', 'Private Keys', 'Extended Private Key'],
  '/docs/basics/keys/derivation-path/': ['Learn', 'Private Keys', 'Derivation Path'],
  '/docs/basics/wallets/': ['Learn', 'Wallets'],
  '/docs/basics/wallets/software-wallets/': ['Learn', 'Wallets', 'Software Wallets'],
  '/docs/basics/wallets/hardware-wallets/': ['Learn', 'Wallets', 'Hardware Wallets'],
  '/docs/basics/wallets/air-gapped-wallets/': ['Learn', 'Wallets', 'Air-Gapped Wallets'],
  '/docs/basics/transactions/': ['Learn', 'Transactions'],
  '/docs/basics/transactions/understanding/': ['Learn', 'Transactions', 'Understanding'],
  '/docs/basics/transactions/create/': ['Learn', 'Transactions', 'Create'],
  '/docs/basics/transactions/sign/': ['Learn', 'Transactions', 'Sign'],
  '/docs/basics/transactions/broadcast/': ['Learn', 'Transactions', 'Broadcast'],
  '/docs/basics/transactions/lifecycle/': ['Learn', 'Transactions', 'Lifecycle'],
  '/docs/basics/transactions/types/': ['Learn', 'Transactions', 'Types'],
  '/docs/basics/transactions/utxos/': ['Learn', 'Transactions', 'UTXOs'],
  '/docs/basics/privacy/': ['Learn', 'Privacy'],
  '/docs/basics/privacy/why-privacy-matters/': ['Learn', 'Privacy', 'Why Privacy Matters'],
  '/docs/basics/privacy/chain-analysis/': ['Learn', 'Privacy', 'Chain Analysis'],
  '/docs/basics/privacy/protecting-privacy/': ['Learn', 'Privacy', 'Protecting Privacy'],
  '/docs/basics/nodes/': ['Learn', 'Bitcoin Nodes'],
  '/docs/basics/nodes/what-is-node/': ['Learn', 'Bitcoin Nodes', 'What is a Node'],
  '/docs/basics/nodes/why-run-node/': ['Learn', 'Bitcoin Nodes', 'Why Run Your Own'],
  '/docs/basics/wallets/multisig/': ['Learn', 'Wallets', 'Multisig'],

  // Guide sections
  '/docs/seed/': ['Guides', 'DIY Seed'],
  '/docs/seed/requirements/': ['Guides', 'DIY Seed', 'Requirements'],
  '/docs/seed/dice-roll/': ['Guides', 'DIY Seed', 'Dice Roll'],
  '/docs/seed/binary-decimal/': ['Guides', 'DIY Seed', 'Binary to Decimal'],
  '/docs/seed/checksum/': ['Guides', 'DIY Seed', 'Checksum'],
  '/docs/seed/bip39/': ['Guides', 'DIY Seed', 'BIP39 Words'],
  '/docs/seed/backup/': ['Guides', 'DIY Seed', 'Backup'],

  '/docs/passphrase/': ['Guides', 'DIY Passphrase'],
  '/docs/passphrase/word-lists/': ['Guides', 'DIY Passphrase', 'Word Lists'],
  '/docs/passphrase/dice-roll/': ['Guides', 'DIY Passphrase', 'Dice Roll'],
  '/docs/passphrase/backup/': ['Guides', 'DIY Passphrase', 'Backup'],

  '/docs/bitcoin-node/': ['Guides', 'Bitcoin Node'],
  '/docs/bitcoin-node/node-setup/': ['Guides', 'Bitcoin Node', 'Node Setup'],
  '/docs/bitcoin-node/electrum-server/': ['Guides', 'Bitcoin Node', 'Electrum Server'],
  '/docs/bitcoin-node/tor/': ['Guides', 'Bitcoin Node', 'Tor Setup'],
  '/docs/bitcoin-node/connect-sparrow-wallet/': ['Guides', 'Bitcoin Node', 'Connect Wallet'],

  '/docs/air-gapped-computer/': ['Guides', 'Air-Gapped Computer'],
  '/docs/air-gapped-computer/types/': ['Guides', 'Air-Gapped Computer', 'Types'],
  '/docs/air-gapped-computer/setup/': ['Guides', 'Air-Gapped Computer', 'Setup'],

  '/docs/bitcoin-computer/': ['Guides', 'Bitcoin Computer'],
  '/docs/bitcoin-computer/choice/': ['Guides', 'Bitcoin Computer', 'Choosing Hardware'],
  '/docs/bitcoin-computer/setup/': ['Guides', 'Bitcoin Computer', 'Setup'],

  '/docs/libreboot/': ['Guides', 'Libreboot'],
  '/docs/libreboot/requirements/': ['Guides', 'Libreboot', 'Requirements'],
  '/docs/libreboot/build/': ['Guides', 'Libreboot', 'Build'],
  '/docs/libreboot/build-flashprog/': ['Guides', 'Libreboot', 'Build Flashprog'],
  '/docs/libreboot/roms/': ['Guides', 'Libreboot', 'ROM Images'],
  '/docs/libreboot/flashing-bios/': ['Guides', 'Libreboot', 'Flash BIOS'],
  '/docs/libreboot/update-bios/': ['Guides', 'Libreboot', 'Update BIOS'],

  '/docs/coreboot/': ['Guides', 'Coreboot'],
  '/docs/coreboot/requirements/': ['Guides', 'Coreboot', 'Requirements'],
  '/docs/coreboot/build/': ['Guides', 'Coreboot', 'Build'],
  '/docs/coreboot/external-flashing/': ['Guides', 'Coreboot', 'External Flashing'],

  '/docs/nostr-signing-device/': ['Guides', 'Nostr Signing Device'],
  '/docs/nostr-signing-device/arduino-ide/': ['Guides', 'Nostr Signing Device', 'Arduino IDE'],
  '/docs/nostr-signing-device/esp32-module/': ['Guides', 'Nostr Signing Device', 'ESP32 Module'],
  '/docs/nostr-signing-device/setup/': ['Guides', 'Nostr Signing Device', 'Setup'],
  '/docs/nostr-signing-device/horse-extension/': ['Guides', 'Nostr Signing Device', 'Horse Extension'],
  '/docs/nostr-signing-device/client-connect/': ['Guides', 'Nostr Signing Device', 'Client Connect'],

  '/docs/coinjoin/': ['Guides', 'CoinJoin'],
  '/docs/coinjoin/how-it-works/': ['Guides', 'CoinJoin', 'How It Works'],
  '/docs/coinjoin/services/': ['Guides', 'CoinJoin', 'Services'],
  '/docs/coinjoin/best-practices/': ['Guides', 'CoinJoin', 'Best Practices'],

  '/docs/utxo-management/': ['Guides', 'UTXO Management'],
  '/docs/utxo-management/coin-control/': ['Guides', 'UTXO Management', 'Coin Control'],
  '/docs/utxo-management/consolidation/': ['Guides', 'UTXO Management', 'Consolidation'],

  '/docs/multisig/': ['Guides', 'Multisig'],
  '/docs/multisig/hardware-setup/': ['Guides', 'Multisig', 'Hardware Setup'],
  '/docs/multisig/sparrow-setup/': ['Guides', 'Multisig', 'Sparrow Setup'],
  '/docs/multisig/backup-recovery/': ['Guides', 'Multisig', 'Backup & Recovery'],
};

/**
 * Generate HowTo schema JSON-LD for a given path
 */
export function generateHowToSchema(path) {
  const schema = howToSchemas[path];
  if (!schema) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': schema.name,
    'description': schema.description,
    'totalTime': schema.totalTime,
    'estimatedCost': schema.estimatedCost ? {
      '@type': 'MonetaryAmount',
      'currency': schema.estimatedCost.currency,
      'value': schema.estimatedCost.value
    } : undefined,
    'supply': schema.supply?.map(item => ({
      '@type': 'HowToSupply',
      'name': item
    })),
    'tool': schema.tool?.length > 0 ? schema.tool.map(item => ({
      '@type': 'HowToTool',
      'name': item
    })) : undefined,
    'step': schema.steps.map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'name': step.name,
      'text': step.text,
      'url': step.url
    }))
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
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': SITE_URL
    }
  ];

  let currentPath = '';
  breadcrumbs.forEach((name, index) => {
    // Build the path based on breadcrumb position
    if (index === 0) {
      if (name === 'Learn') {
        currentPath = '/docs/basics/';
      } else if (name === 'Guides') {
        currentPath = '/guides/';
      }
    } else {
      // For nested items, use the actual path
      currentPath = path;
    }

    items.push({
      '@type': 'ListItem',
      'position': index + 2,
      'name': name,
      'item': `${SITE_URL}${currentPath}`
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items
  };
}

export default {
  howToSchemas,
  breadcrumbMappings,
  generateHowToSchema,
  generateBreadcrumbSchema
};

// Article schema for educational/learn content
export const articleSchemas = {
  '/docs/basics/': {
    headline: 'What is Bitcoin Self-Custody?',
    description: 'Learn what Bitcoin self-custody means: controlling your own private keys, seed phrases, and taking full ownership of your Bitcoin without third parties.',
    articleSection: 'Bitcoin Fundamentals'
  },
  '/docs/basics/holding/': {
    headline: 'Why Hold Your Own Bitcoin',
    description: 'Understand why self-custody matters and the risks of keeping Bitcoin on exchanges.',
    articleSection: 'Bitcoin Fundamentals'
  },
  '/docs/basics/keys/intro/': {
    headline: 'Understanding Bitcoin Private Keys',
    description: 'Learn how private keys work and why they are essential for Bitcoin ownership.',
    articleSection: 'Private Keys'
  },
  '/docs/basics/keys/seed/': {
    headline: 'Bitcoin Seed Phrases Explained (BIP39)',
    description: 'Understand how seed phrases work, the BIP39 standard, and how 24 words protect your Bitcoin.',
    articleSection: 'Private Keys'
  },
  '/docs/basics/keys/passphrase/': {
    headline: 'Bitcoin Passphrase (25th Word) Explained',
    description: 'Learn how passphrases add extra security to your seed phrase and create hidden wallets.',
    articleSection: 'Private Keys'
  },
  '/docs/basics/wallets/software-wallets/': {
    headline: 'Bitcoin Software Wallets Guide',
    description: 'Learn about different types of software wallets and how to choose the right one.',
    articleSection: 'Wallets'
  },
  '/docs/basics/wallets/hardware-wallets/': {
    headline: 'Bitcoin Hardware Wallets Guide',
    description: 'Understand how hardware wallets work and why they provide better security.',
    articleSection: 'Wallets'
  },
  '/docs/basics/wallets/air-gapped-wallets/': {
    headline: 'Air-Gapped Bitcoin Wallets Explained',
    description: 'Learn about air-gapped wallets and why they offer the highest level of security.',
    articleSection: 'Wallets'
  },
  '/docs/basics/transactions/utxos/': {
    headline: 'UTXOs Explained: How Bitcoin Actually Works',
    description: 'Understand Bitcoin UTXOs (Unspent Transaction Outputs). Learn why Bitcoin uses discrete chunks instead of account balances.',
    articleSection: 'Transactions'
  },
  '/docs/basics/privacy/why-privacy-matters/': {
    headline: 'Why Bitcoin Privacy Matters',
    description: 'Understand why financial privacy is essential for Bitcoin users and what information is exposed on the public blockchain.',
    articleSection: 'Privacy'
  },
  '/docs/basics/privacy/chain-analysis/': {
    headline: 'Chain Analysis Explained',
    description: 'Learn how blockchain surveillance works and the heuristics used to track Bitcoin transactions.',
    articleSection: 'Privacy'
  },
  '/docs/basics/privacy/protecting-privacy/': {
    headline: 'Protecting Your Bitcoin Privacy',
    description: 'Overview of Bitcoin privacy techniques including running your own node, UTXO management, and CoinJoin.',
    articleSection: 'Privacy'
  },
  '/docs/basics/transactions/utxos/': {
    headline: 'UTXOs Explained: How Bitcoin Actually Works',
    description: 'Understand Bitcoin UTXO model. Learn how Unspent Transaction Outputs work and why they matter for fees and privacy.',
    articleSection: 'Transactions'
  },
  '/docs/basics/nodes/what-is-node/': {
    headline: 'What is a Bitcoin Node',
    description: 'Understand what a Bitcoin node does, how it differs from a wallet, and its role in the network.',
    articleSection: 'Bitcoin Nodes'
  },
  '/docs/basics/nodes/why-run-node/': {
    headline: 'Why Run Your Own Bitcoin Node',
    description: 'Understand why running your own Bitcoin node matters for privacy, security, and true self-custody.',
    articleSection: 'Bitcoin Nodes'
  },
  '/docs/basics/wallets/multisig/': {
    headline: 'Multisig Wallets Explained',
    description: 'Understand how Bitcoin multisig wallets work and why they eliminate single points of failure.',
    articleSection: 'Wallets'
  }
};

/**
 * Generate Article schema JSON-LD for educational content
 */
export function generateArticleSchema(path) {
  const schema = articleSchemas[path];
  if (!schema) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': schema.headline,
    'description': schema.description,
    'articleSection': schema.articleSection,
    'author': {
      '@type': 'Organization',
      'name': 'Self Custody Labs',
      'url': 'https://selfcustodylabs.com'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Self Custody Labs',
      'url': 'https://selfcustodylabs.com',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://selfcustodylabs.com/img/logo.svg'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://selfcustodylabs.com${path}`
    }
  };
}
