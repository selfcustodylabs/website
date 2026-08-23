import React from 'react';
import Layout from '@theme-original/Layout';

import ScrollProgress from '@site/src/components/ScrollProgress';

/**
 * Wraps the stock Layout to add a site-wide reading-progress bar.
 *
 * The bar reports its own position: it hides itself on any page short enough
 * not to scroll, so 404, search and the shorter standalone pages are unaffected.
 *
 * @param {object} props - forwarded verbatim to the original Layout
 */
export default function LayoutWrapper(props) {
  return (
    <>
      <ScrollProgress />
      <Layout {...props} />
    </>
  );
}
