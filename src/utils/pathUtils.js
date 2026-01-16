/**
 * Path Utility Functions
 *
 * Shared utilities for working with URL paths across the site.
 * Used by theme overrides and components that need to normalize or manipulate paths.
 *
 * @module utils/pathUtils
 */

/**
 * Normalize a URL path to always end with a trailing slash.
 * This ensures consistent path matching since the site uses trailingSlash: true.
 *
 * @param {string} path - The URL path to normalize
 * @returns {string} The normalized path with trailing slash
 *
 * @example
 * normalizePath('/docs/learn')      // '/docs/learn/'
 * normalizePath('/docs/learn/')     // '/docs/learn/'
 * normalizePath('/')                // '/'
 */
export function normalizePath(path) {
  if (!path) return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

/**
 * Check if a path matches any of the provided patterns.
 * Useful for determining which pages should show/hide certain elements.
 *
 * @param {string} path - The URL path to check
 * @param {string[]} patterns - Array of path patterns to match against
 * @returns {boolean} True if path matches any pattern
 *
 * @example
 * const indexPages = ['/docs/learn/', '/docs/security/'];
 * isIndexPage('/docs/learn/', indexPages)     // true
 * isIndexPage('/docs/learn/keys/', indexPages) // false
 */
export function matchesAnyPattern(path, patterns) {
  const normalized = normalizePath(path);
  return patterns.some((pattern) => normalized === normalizePath(pattern));
}

/**
 * Extract the section from a documentation path.
 * Returns the first segment after /docs/ for section-based styling.
 *
 * @param {string} path - The URL path
 * @returns {string|null} The section name or null if not in docs
 *
 * @example
 * getDocSection('/docs/learn/keys/intro/')  // 'learn'
 * getDocSection('/docs/security/')          // 'security'
 * getDocSection('/guides/')                 // null
 */
export function getDocSection(path) {
  const normalized = normalizePath(path);
  const match = normalized.match(/^\/docs\/([^/]+)/);
  return match ? match[1] : null;
}

export default {
  normalizePath,
  matchesAnyPattern,
  getDocSection,
};
