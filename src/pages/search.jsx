import React, { useEffect, useId, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { useHistory, useLocation } from "@docusaurus/router";

import usePagefind from "@site/src/components/search/usePagefind";
import SearchResults from "@site/src/components/search/SearchResults";
import styles from "./search.module.css";

/**
 * Full search results at /search/?q=...
 *
 * noindex, follow: a results page is thin, query-driven content. This is one
 * of the noindex emitters that must stay in sync with sitemap.ignorePatterns
 * (see CLAUDE.md, SEO invariants). It is a real <meta name="robots">, not the
 * inert property="robots" the old search plugin emitted.
 */
export default function SearchPage() {
  const location = useLocation();
  const history = useHistory();
  const listId = useId().replace(/:/g, "");
  const [query, setQuery] = useState("");

  // Read ?q= after hydration, so the server-rendered and first client render
  // agree (the server has no query string).
  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get("q") ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const q = query.trim();
    history.replace({ search: q ? `?q=${encodeURIComponent(q)}` : "" });
  }, [query, history]);

  const { status, results, total } = usePagefind(query, { limit: 40 });

  let line = null;
  if (status === "loading" && results.length === 0) line = "Searching";
  else if (status === "done")
    line = total === 0 ? "Nothing matches that." : `${total} page${total === 1 ? "" : "s"}`;
  else if (status === "unavailable")
    line = "The search index is built with the site and is not available in the dev server.";

  return (
    <Layout
      title="Search"
      description="Search every Self Custody Labs guide. The search runs in your browser and the query is not sent anywhere."
    >
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <main className={styles.page}>
        <p className="scl-label">Search</p>
        <h1 className={styles.title}>Search the guides</h1>
        <input
          type="search"
          className={styles.input}
          aria-label="Search the guides"
          placeholder="seed phrase, passphrase, libreboot"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-controls={listId}
          autoComplete="off"
          spellCheck="false"
        />
        {line ? <p className={styles.status}>{line}</p> : null}
        {results.length > 0 ? <SearchResults id={listId} results={results} /> : null}
      </main>
    </Layout>
  );
}
