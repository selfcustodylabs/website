import React from 'react';
import Head from '@docusaurus/Head';
import SearchPage from '@theme-original/SearchPage';

/**
 * Wraps the search-local SearchPage to emit a *valid* noindex.
 *
 * The upstream component emits <meta property="robots" content="noindex, follow">
 * (SearchPage.jsx:81). Google only honours the `name` attribute — `property` is
 * Open Graph — so that directive is inert. Without this wrapper the search page
 * relies entirely on a robots.txt Disallow, which is the pattern that stranded
 * the tag pages in GSC "Blocked by robots.txt".
 */
export default function SearchPageWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SearchPage {...props} />
    </>
  );
}
