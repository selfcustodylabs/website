/**
 * Canonical URL map for duplicate-content consolidation.
 *
 * Two parallel documentation trees cover overlapping topics: the curated
 * `/docs/learn/*` tree (promoted by the homepage and main nav) and several
 * older trees that still live under `/docs/security/*`, `/docs/privacy/*`,
 * and `/docs/advanced/*`. Google treats these as duplicates and leaves them
 * in "Crawled - currently not indexed". This map tells search engines which
 * version is authoritative via `<link rel="canonical">` so indexing signal
 * consolidates on the `/docs/learn/*` pages.
 *
 * Phase 1 of the duplicate-content plan. Once topics are fully merged into
 * the learn tree and the old pages are deleted, the corresponding entries
 * here should be removed.
 *
 * Keys are the duplicate URL paths (with trailing slash). Values are the
 * canonical URL paths on the same host (also trailing slash).
 *
 * @module data/canonical
 */

import { SITE_URL } from "./schema/constants.js";

export const canonicalMap = {
  // =============================================
  // PRIVACY
  // Old detailed trees → learn/privacy/protecting-privacy
  // =============================================
  "/docs/privacy/coinjoin/": "/docs/learn/privacy/protecting-privacy/",
  "/docs/privacy/coinjoin/how-it-works/": "/docs/learn/privacy/protecting-privacy/",
  "/docs/privacy/coinjoin/services/": "/docs/learn/privacy/protecting-privacy/",
  "/docs/privacy/coinjoin/best-practices/": "/docs/learn/privacy/protecting-privacy/",
  "/docs/privacy/utxo-management/": "/docs/learn/privacy/protecting-privacy/",
  "/docs/privacy/utxo-management/coin-control/": "/docs/learn/privacy/protecting-privacy/",
  "/docs/privacy/utxo-management/consolidation/": "/docs/learn/privacy/protecting-privacy/",
  "/docs/privacy/payjoin/": "/docs/learn/privacy/protecting-privacy/",

  // =============================================
  // MULTISIG
  // Old detailed tree → learn/wallets/multisig
  // =============================================
  "/docs/advanced/multisig/": "/docs/learn/wallets/multisig/",
  "/docs/advanced/multisig/backup-recovery/": "/docs/learn/wallets/multisig/",
  "/docs/advanced/multisig/hardware-setup/": "/docs/learn/wallets/multisig/",
  "/docs/advanced/multisig/sparrow-setup/": "/docs/learn/wallets/multisig/",

  // =============================================
  // AIR-GAPPED COMPUTER
  // Old detailed tree → learn/wallets/air-gapped-wallets
  // =============================================
  "/docs/advanced/air-gapped-computer/": "/docs/learn/wallets/air-gapped-wallets/",
  "/docs/advanced/air-gapped-computer/setup/": "/docs/learn/wallets/air-gapped-wallets/",
  "/docs/advanced/air-gapped-computer/types/": "/docs/learn/wallets/air-gapped-wallets/",
};

/**
 * Look up the canonical URL for a given path.
 *
 * @param {string} path - URL path (should be normalized with trailing slash)
 * @returns {string|null} Absolute canonical URL, or null if this path is not a duplicate
 */
export function getCanonicalUrl(path) {
  const canonicalPath = canonicalMap[path];
  if (!canonicalPath) return null;
  return `${SITE_URL}${canonicalPath}`;
}
