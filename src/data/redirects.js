/**
 * Redirects for every URL the site has retired or renamed.
 *
 * One source of truth for two consumers:
 * - `@docusaurus/plugin-client-redirects` (docusaurus.config.js), which writes a
 *   meta-refresh page at each old path. That is all GitHub Pages can do.
 * - `plugins/cloudflare`, which turns the same list into a `_redirects` file of real
 *   301s for Cloudflare Pages, where a redirect rule wins over a static file.
 *
 * The history is long and mostly deliberate: check here before "fixing" a redirect.
 */

/** Explicit old-path to new-path redirects. `to` may omit the trailing slash. */
export const redirects = [
  // =============================================
  // GETTING-STARTED → LEARN/FUNDAMENTALS migration
  // =============================================
  {
    from: "/docs/getting-started",
    to: "/docs/learn/fundamentals",
  },
  {
    from: "/docs/getting-started/what-is-bitcoin",
    to: "/docs/learn/fundamentals/what-is-bitcoin",
  },
  {
    from: "/docs/getting-started/what-is-self-custody",
    to: "/docs/learn/fundamentals/what-is-self-custody",
  },
  {
    from: "/docs/getting-started/holding-bitcoin",
    to: "/docs/learn/fundamentals/holding-bitcoin",
  },
  {
    from: "/docs/getting-started/choosing-your-path",
    to: "/docs/learn/fundamentals/choosing-your-path",
  },
  {
    from: "/docs/getting-started/threat-models",
    to: "/docs/learn/fundamentals/threat-models",
  },
  {
    from: "/docs/getting-started/before-you-deposit",
    to: "/docs/wallet-setup/before-you-deposit",
  },
  // =============================================
  // LEARN/FUNDAMENTALS → WALLET-SETUP migration
  // =============================================
  {
    from: "/docs/learn/fundamentals/before-you-deposit",
    to: "/docs/wallet-setup/before-you-deposit",
  },
  // =============================================
  // CONTENT MERGES - Phase 3
  // =============================================
  {
    from: "/docs/learn/transactions/lifecycle",
    to: "/docs/learn/transactions/understanding",
  },
  // Legacy /docs/basics/ redirects
  {
    from: "/docs/basics/what-is-bitcoin",
    to: "/docs/learn/fundamentals/what-is-bitcoin",
  },
  {
    from: "/docs/basics/holding",
    to: "/docs/learn/fundamentals/holding-bitcoin",
  },
  // Top-level legacy path (no docs prefix) → closest topic
  {
    from: "/bitcoin-devices",
    to: "/docs/reference/hardware-wallet-comparison",
  },
  // =============================================
  // CATEGORY ROUTES → DOC-BACKED INDEX PAGES (Phase 4b)
  // Generated-index category pages were replaced with
  // real index.md files so the sitemap can carry lastmod.
  // =============================================
  {
    from: "/docs/category/internal-flashing",
    to: "/docs/coreboot/internal",
  },
  {
    from: "/docs/category/nodes",
    to: "/docs/learn/nodes",
  },
  {
    from: "/docs/category/privacy",
    to: "/docs/learn/privacy",
  },
  {
    from: "/docs/category/transactions",
    to: "/docs/learn/transactions",
  },
  {
    from: "/docs/category/wallets",
    to: "/docs/learn/wallets",
  },
  {
    from: "/docs/category/raspberry-pico",
    to: "/docs/libreboot/raspberry-pico",
  },
  // =============================================
  // SEED GENERATION MERGE → /docs/learn/keys/random
  // The old /docs/security/seed-generation/* tree and its
  // bare /docs/seed/* aliases were merged into a single
  // canonical page at /docs/learn/keys/random/.
  // =============================================
  {
    from: "/docs/security/seed-generation",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/security/seed-generation/requirements",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/security/seed-generation/dice-roll",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/security/seed-generation/binary-decimal",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/security/seed-generation/checksum",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/security/seed-generation/bip39",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/security/seed-generation/backup",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/seed",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/seed/requirements",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/seed/dice-roll",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/seed/binary-decimal",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/seed/checksum",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/seed/bip39",
    to: "/docs/learn/keys/random",
  },
  {
    from: "/docs/seed/backup",
    to: "/docs/learn/keys/random",
  },
  // =============================================
  // PASSPHRASE MERGE → /docs/learn/keys/passphrase
  // The old /docs/security/passphrase/* tree and its
  // bare /docs/passphrase/* aliases were merged into
  // a single canonical page at /docs/learn/keys/passphrase/.
  // =============================================
  {
    from: "/docs/security/passphrase",
    to: "/docs/learn/keys/passphrase",
  },
  {
    from: "/docs/security/passphrase/word-lists",
    to: "/docs/learn/keys/passphrase",
  },
  {
    from: "/docs/security/passphrase/dice-roll",
    to: "/docs/learn/keys/passphrase",
  },
  {
    from: "/docs/security/passphrase/backup",
    to: "/docs/learn/keys/passphrase",
  },
  {
    from: "/docs/passphrase",
    to: "/docs/learn/keys/passphrase",
  },
  {
    from: "/docs/passphrase/word-lists",
    to: "/docs/learn/keys/passphrase",
  },
  {
    from: "/docs/passphrase/dice-roll",
    to: "/docs/learn/keys/passphrase",
  },
  {
    from: "/docs/passphrase/backup",
    to: "/docs/learn/keys/passphrase",
  },
  // =============================================
  // PRIVACY TRIO MERGE → /docs/learn/privacy/*
  // The old /docs/privacy/* tree and its bare
  // /docs/{coinjoin,payjoin,utxo-management}/*
  // aliases were merged into three canonical pages:
  //   /docs/learn/privacy/coinjoin
  //   /docs/learn/privacy/payjoin
  //   /docs/learn/privacy/utxo-management
  // =============================================
  // Old /docs/privacy/* hub
  {
    from: "/docs/privacy",
    to: "/docs/learn/privacy",
  },
  // CoinJoin
  {
    from: "/docs/privacy/coinjoin",
    to: "/docs/learn/privacy/coinjoin",
  },
  {
    from: "/docs/privacy/coinjoin/how-it-works",
    to: "/docs/learn/privacy/coinjoin",
  },
  {
    from: "/docs/privacy/coinjoin/services",
    to: "/docs/learn/privacy/coinjoin",
  },
  {
    from: "/docs/privacy/coinjoin/best-practices",
    to: "/docs/learn/privacy/coinjoin",
  },
  {
    from: "/docs/coinjoin",
    to: "/docs/learn/privacy/coinjoin",
  },
  {
    from: "/docs/coinjoin/how-it-works",
    to: "/docs/learn/privacy/coinjoin",
  },
  {
    from: "/docs/coinjoin/services",
    to: "/docs/learn/privacy/coinjoin",
  },
  {
    from: "/docs/coinjoin/best-practices",
    to: "/docs/learn/privacy/coinjoin",
  },
  // PayJoin
  {
    from: "/docs/privacy/payjoin",
    to: "/docs/learn/privacy/payjoin",
  },
  {
    from: "/docs/payjoin",
    to: "/docs/learn/privacy/payjoin",
  },
  // UTXO Management
  {
    from: "/docs/privacy/utxo-management",
    to: "/docs/learn/privacy/utxo-management",
  },
  {
    from: "/docs/privacy/utxo-management/coin-control",
    to: "/docs/learn/privacy/utxo-management",
  },
  {
    from: "/docs/privacy/utxo-management/consolidation",
    to: "/docs/learn/privacy/utxo-management",
  },
  {
    from: "/docs/utxo-management",
    to: "/docs/learn/privacy/utxo-management",
  },
  {
    from: "/docs/utxo-management/coin-control",
    to: "/docs/learn/privacy/utxo-management",
  },
  {
    from: "/docs/utxo-management/consolidation",
    to: "/docs/learn/privacy/utxo-management",
  },
  // ---------------------------------------------------
  // Topic 4: Multisig (merged into learn/wallets/multisig)
  // ---------------------------------------------------
  {
    from: "/docs/advanced/multisig",
    to: "/docs/learn/wallets/multisig",
  },
  {
    from: "/docs/advanced/multisig/hardware-setup",
    to: "/docs/learn/wallets/multisig/hardware-setup",
  },
  {
    from: "/docs/advanced/multisig/sparrow-setup",
    to: "/docs/learn/wallets/multisig/sparrow-setup",
  },
  {
    from: "/docs/advanced/multisig/backup-recovery",
    to: "/docs/learn/wallets/multisig/backup-recovery",
  },
  {
    from: "/docs/multisig",
    to: "/docs/learn/wallets/multisig",
  },
  {
    from: "/docs/multisig/hardware-setup",
    to: "/docs/learn/wallets/multisig/hardware-setup",
  },
  {
    from: "/docs/multisig/sparrow-setup",
    to: "/docs/learn/wallets/multisig/sparrow-setup",
  },
  {
    from: "/docs/multisig/backup-recovery",
    to: "/docs/learn/wallets/multisig/backup-recovery",
  },
  // ---------------------------------------------------
  // Topic 5: Air-gapped computer (merged into learn/wallets/air-gapped-wallets)
  // ---------------------------------------------------
  {
    from: "/docs/advanced/air-gapped-computer",
    to: "/docs/learn/wallets/air-gapped-wallets",
  },
  {
    from: "/docs/advanced/air-gapped-computer/types",
    to: "/docs/learn/wallets/air-gapped-wallets",
  },
  {
    from: "/docs/advanced/air-gapped-computer/setup",
    to: "/docs/learn/wallets/air-gapped-wallets",
  },
  {
    from: "/docs/air-gapped-computer",
    to: "/docs/learn/wallets/air-gapped-wallets",
  },
  {
    from: "/docs/air-gapped-computer/types",
    to: "/docs/learn/wallets/air-gapped-wallets",
  },
  {
    from: "/docs/air-gapped-computer/setup",
    to: "/docs/learn/wallets/air-gapped-wallets",
  },
  // =============================================
  // RENAMED PAGES → current slugs (GSC "Not found (404)")
  // Old URLs Google still remembers that were renamed,
  // not merged. Redirect to preserve their link equity.
  // =============================================
  {
    from: "/docs/libreboot/build-libreboot",
    to: "/docs/libreboot/build",
  },
  {
    from: "/docs/libreboot/update",
    to: "/docs/libreboot/update-bios",
  },
  {
    from: "/docs/bitcoin-node/node-setup",
    to: "/docs/bitcoin-node",
  },
  {
    from: "/docs/category/keys-and-seeds",
    to: "/docs/learn/keys",
  },
];

/**
 * Pattern redirects computed for each existing route.
 *
 * trailingSlash: true means existingPath arrives WITH a trailing slash
 * (e.g. '/docs/reference/glossary/'). Normalize it away so the exact '==='
 * matches below fire. Without this, those redirects are silently never
 * generated and the old URLs 404.
 *
 * @param {string} existingPath - a route of the built site
 * @returns {string[]|undefined} old paths that should redirect to it
 */
export function createRedirects(existingPath) {
  const path = existingPath.replace(/\/$/, "");
  // Catch-all for any /docs/learn/ path - create redirect from /docs/basics/
  if (path.includes("/docs/learn/") && !path.includes("/docs/learn/fundamentals/")) {
    return [path.replace("/docs/learn/", "/docs/basics/")];
  }
  // Catch-all for reference paths (glossary and address-types moved from learn)
  if (path === "/docs/reference/glossary") {
    return ["/docs/learn/glossary", "/docs/basics/glossary"];
  }
  if (path === "/docs/reference/address-types") {
    return ["/docs/learn/address-types", "/docs/basics/address-types"];
  }
  // Catch-all for wallet-setup paths
  if (path.includes("/docs/wallet-setup/hardware-wallet")) {
    return [path.replace("/docs/wallet-setup/hardware-wallet", "/docs/hardware-wallet-setup")];
  }
  if (path.includes("/docs/wallet-setup/backup-verification")) {
    return [path.replace("/docs/wallet-setup/backup-verification", "/docs/backup-verification")];
  }
  // Catch-all for advanced paths
  if (path.includes("/docs/advanced/bitcoin-computer")) {
    return [path.replace("/docs/advanced/bitcoin-computer", "/docs/bitcoin-computer")];
  }
  return undefined;
}
