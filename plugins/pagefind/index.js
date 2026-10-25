/**
 * pagefind: static, chunked full-text search built from the production HTML.
 *
 * Replaces @easyops-cn/docusaurus-search-local, which shipped one 3.4 MB index
 * to every visitor who touched the search box. Pagefind splits the index into
 * small fragments and the browser fetches only the ones a query needs, so a
 * search costs tens of kilobytes. Everything is served from this domain and the
 * query never leaves the browser.
 *
 * What gets indexed: every doc page except tag listings, plus the editorial
 * standalone pages. Only the page's <article> is read, minus breadcrumbs, the
 * mobile table of contents, the doc footer and anything marked
 * data-pagefind-ignore (navigation components). Redirect pages, the homepage,
 * landing pages, 404 and the search page are left out on purpose: they would
 * only ever duplicate a real result.
 *
 * The indexing itself happens in build-index.mjs, run as a child process.
 *
 * Output: build/pagefind/ (loaded at runtime by src/theme/SearchBar and
 * src/pages/search.jsx). Pagefind runs WebAssembly in the browser, which is why
 * the CSP carries 'wasm-unsafe-eval' (src/data/securityHeaders.js).
 *
 * @module plugins/pagefind
 */

import { execFileSync } from "node:child_process";
import { join } from "node:path";

const STANDALONE = new Set(["/about/", "/books/", "/podcasts/", "/privacy/"]);

/** @param {string} route */
export function isSearchable(route) {
  if (STANDALONE.has(route)) return true;
  return route.startsWith("/docs/") && !route.startsWith("/docs/tags/");
}

export default function pagefindPlugin() {
  return {
    name: "pagefind-search",

    async postBuild({ routesPaths, outDir }) {
      // The indexer runs as a native ES module in its own process: see the
      // header of build-index.mjs for why it cannot be imported here.
      const routes = routesPaths.filter(isSearchable).sort();
      execFileSync(process.execPath, [join(__dirname, "build-index.mjs")], {
        input: JSON.stringify({ outDir, routes }),
        stdio: ["pipe", "inherit", "inherit"],
      });
    },
  };
}
