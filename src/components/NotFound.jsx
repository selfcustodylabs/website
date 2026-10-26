import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import { useLocation } from "@docusaurus/router";

import styles from "@site/src/components/landing/landing.module.css";
import own from "./NotFound.module.css";

const LINKS = [
  ["/", "Home"],
  ["/docs/learn/fundamentals/", "Start here"],
  ["/guides/", "All guides"],
  ["/docs/reference/faq/", "Common questions"],
];

/**
 * The not-found page body, rendered in two places that must match:
 * src/pages/404.js (which the build writes out as /404/ and build/404.html,
 * the file the host serves for every unknown path) and
 * src/theme/NotFound/Content (what React renders once that file hydrates on
 * an unknown path). With two different bodies, hydration threw React #418
 * and swapped in Docusaurus's stock page.
 *
 * noindex, follow: one of the noindex emitters that must stay in sync with
 * sitemap.ignorePatterns (CLAUDE.md, SEO invariants).
 */
export default function NotFound() {
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  // Suggest the last part of the missing address as a search, after hydration
  // (the static 404.html is the same file for every path).
  useEffect(() => {
    const last = pathname.replace(/\/+$/, "").split("/").pop() ?? "";
    const words = decodeURIComponent(last).replace(/\.\w+$/, "").replace(/[-_]+/g, " ").trim();
    if (words && words !== "404") setQuery(words);
  }, [pathname]);

  return (
    <main className={styles.page}>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <p className={`scl-label ${styles.eyebrow}`}>404 · Not found</p>
      <h1 className={styles.title}>Nothing at this address</h1>
      <p className={styles.lede}>
        Pages that moved when the site was reorganised redirect to their new address. This one does
        not, so the link is probably mistyped or points at something we removed. Search for it, or
        start from one of these.
      </p>
      <form className={own.search} action="/search/" method="get" role="search">
        <input
          type="search"
          name="q"
          aria-label="Search the guides"
          className={own.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="seed phrase, passphrase, libreboot"
        />
        <button type="submit" className={styles.primary}>
          Search
        </button>
      </form>
      <ul className={own.links}>
        {LINKS.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
