/**
 * Progress tracking data for multi-step guides
 *
 * REFACTORED: Steps are defined once per guide, and path mappings
 * are generated automatically. This eliminates ~300 lines of repetition.
 */

// ===========================================
// GUIDE DEFINITIONS (single source of truth)
// ===========================================

/**
 * All multi-step guides with their steps defined once
 */
const GUIDES = {
  "hardware-wallet": {
    name: "Hardware Wallet Setup",
    steps: [
      {
        title: "Hardware Wallet Setup",
        path: "/docs/wallet-setup/hardware-wallet/",
      },
      {
        title: "Backup Verification",
        path: "/docs/wallet-setup/backup-verification/",
      },
      {
        title: "Before You Deposit",
        path: "/docs/wallet-setup/before-you-deposit/",
      },
    ],
  },

  "seed-generation": {
    name: "DIY Seed Generation",
    steps: [
      { title: "Overview", path: "/docs/security/seed-generation/" },
      {
        title: "Requirements",
        path: "/docs/security/seed-generation/requirements/",
      },
      {
        title: "Dice Rolling",
        path: "/docs/security/seed-generation/dice-roll/",
      },
      {
        title: "Binary to Decimal",
        path: "/docs/security/seed-generation/binary-decimal/",
      },
      { title: "Checksum", path: "/docs/security/seed-generation/checksum/" },
      { title: "BIP39 Words", path: "/docs/security/seed-generation/bip39/" },
    ],
  },

  passphrase: {
    name: "DIY Passphrase",
    steps: [
      { title: "Overview", path: "/docs/security/passphrase/" },
      { title: "Word Lists", path: "/docs/security/passphrase/word-lists/" },
      { title: "Dice Rolling", path: "/docs/security/passphrase/dice-roll/" },
      { title: "Backup", path: "/docs/security/passphrase/backup/" },
    ],
  },

  multisig: {
    name: "Multisig Setup",
    steps: [
      { title: "Overview", path: "/docs/advanced/multisig/" },
      {
        title: "Hardware Setup",
        path: "/docs/advanced/multisig/hardware-setup/",
      },
      {
        title: "Sparrow Setup",
        path: "/docs/advanced/multisig/sparrow-setup/",
      },
      {
        title: "Backup & Recovery",
        path: "/docs/advanced/multisig/backup-recovery/",
      },
    ],
  },

  "bitcoin-node": {
    name: "Bitcoin Node Setup",
    steps: [
      { title: "Overview", path: "/docs/bitcoin-node/" },
      {
        title: "Software Options",
        path: "/docs/bitcoin-node/node-software-options/",
      },
      { title: "Electrum Server", path: "/docs/bitcoin-node/electrum-server/" },
      { title: "Tor Setup", path: "/docs/bitcoin-node/tor/" },
      {
        title: "Connect Sparrow",
        path: "/docs/bitcoin-node/connect-sparrow-wallet/",
      },
    ],
  },

  libreboot: {
    name: "Libreboot Installation",
    steps: [
      { title: "Overview", path: "/docs/libreboot/" },
      { title: "Requirements", path: "/docs/libreboot/requirements/" },
      { title: "Build ROM", path: "/docs/libreboot/build/" },
      { title: "Build flashprog", path: "/docs/libreboot/build-flashprog/" },
      {
        title: "Pico Setup",
        path: "/docs/libreboot/raspberry-pico/build-serprog/",
      },
      { title: "Flash BIOS", path: "/docs/libreboot/flashing-bios/" },
    ],
  },

  coinjoin: {
    name: "CoinJoin Guide",
    steps: [
      { title: "Overview", path: "/docs/privacy/coinjoin/" },
      { title: "How It Works", path: "/docs/privacy/coinjoin/how-it-works/" },
      { title: "Services", path: "/docs/privacy/coinjoin/services/" },
      {
        title: "Best Practices",
        path: "/docs/privacy/coinjoin/best-practices/",
      },
    ],
  },
};

// ===========================================
// AUTO-GENERATED PATH MAPPINGS
// ===========================================

/**
 * Generate progress data for all paths from guide definitions
 * This replaces ~300 lines of manual path mappings
 */
function buildGuideProgress() {
  const progress = {};

  Object.entries(GUIDES).forEach(([guideSlug, guide]) => {
    const { name, steps } = guide;
    const total = steps.length;

    steps.forEach((step, index) => {
      progress[step.path] = {
        guideName: name,
        guideSlug,
        current: index + 1,
        total,
        steps: [...steps], // Copy to prevent mutation
      };
    });
  });

  return progress;
}

// Build the progress mapping once at module load
export const guideProgress = buildGuideProgress();

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Section mapping based on URL path
 */
export function getSectionFromPath(path) {
  if (path.includes("/learn/fundamentals")) return "fundamentals";
  if (path.includes("/learn/keys")) return "keys";
  if (path.includes("/learn/wallets")) return "wallets";
  if (path.includes("/learn/transactions")) return "transactions";
  if (path.includes("/learn/privacy")) return "privacy";
  if (path.includes("/learn/nodes")) return "nodes";
  if (path.includes("/security/")) return "security";
  if (path.includes("/advanced/")) return "advanced";
  if (path.includes("/privacy/")) return "privacy";
  if (path.includes("/reference/")) return "reference";
  if (path.includes("/wallet-setup/")) return "wallets";
  if (path.includes("/bitcoin-node/")) return "nodes";
  return null;
}

/**
 * Get progress data for a given path
 */
export function getProgressData(path) {
  return guideProgress[path] || null;
}

/**
 * Get all guides (useful for generating sitemaps, etc.)
 */
export function getAllGuides() {
  return GUIDES;
}

/**
 * Get a specific guide by slug
 */
export function getGuideBySlug(slug) {
  return GUIDES[slug] || null;
}

/**
 * Get all paths for a specific guide
 */
export function getGuidePaths(slug) {
  const guide = GUIDES[slug];
  if (!guide) return [];
  return guide.steps.map((step) => step.path);
}

// ===========================================
// EXPORTS
// ===========================================

export default {
  guideProgress,
  getSectionFromPath,
  getProgressData,
  getAllGuides,
  getGuideBySlug,
  getGuidePaths,
  GUIDES,
};
