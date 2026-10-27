import React from "react";
import Footer from "@theme-original/BlogPostItem/Footer";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import AuthorByline from "@site/src/components/AuthorByline";

/**
 * The stock footer (last updated date), then the same colophon every doc
 * carries: who publishes the note and where corrections go.
 *
 * @param {object} props - passed through to the stock footer
 */
export default function BlogPostItemFooter(props) {
  const { isBlogPostPage } = useBlogPost();
  return (
    <>
      <Footer {...props} />
      {isBlogPostPage ? <AuthorByline /> : null}
    </>
  );
}
