import React from "react";
import Layout from "@theme/Layout";

import NotFound from "@site/src/components/NotFound";

/**
 * /404/ and build/404.html. The body (and its noindex meta) is shared with
 * src/theme/NotFound/Content so the static file and the hydrated page match.
 */
export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found" description="The page you're looking for doesn't exist or has been moved.">
      <NotFound />
    </Layout>
  );
}
