import React from "react";
import Footer from "@theme-original/BlogPostItem/Footer";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";

import AuthorByline from "@site/src/components/AuthorByline";
import RevisionHistory from "@site/src/components/RevisionHistory";

/**
 * The stock footer (last updated date), then the same colophon every doc
 * carries (who publishes the note and where corrections go), then the note's
 * recent changes.
 *
 * @param {object} props - passed through to the stock footer
 */
export default function BlogPostItemFooter(props) {
  const { isBlogPostPage, metadata } = useBlogPost();
  return (
    <>
      <Footer {...props} />
      {isBlogPostPage ? <AuthorByline /> : null}
      {isBlogPostPage ? (
        <RevisionHistory
          revisions={metadata.frontMatter.revisions}
          source={metadata.source.replace(/^@site\//, "")}
        />
      ) : null}
    </>
  );
}
