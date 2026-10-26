import React from "react";
import DocItemFooter from "@theme-original/DocItem/Footer";
import { useLocation } from "@docusaurus/router";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { getNextSteps } from "@site/src/data/nextStepsData";
import { NextSteps, AuthorByline } from "@site/src/components";
import RevisionHistory from "@site/src/components/RevisionHistory";
import { normalizePath } from "@site/src/utils/pathUtils";

export default function DocItemFooterWrapper(props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);

  const nextSteps = getNextSteps(path);
  const { metadata, frontMatter } = useDoc();

  // Order: where to go next, the colophon, Docusaurus's own footer (last
  // updated, tags), then the page's recent changes.
  return (
    <>
      {nextSteps && <NextSteps items={nextSteps} />}
      <AuthorByline />
      <DocItemFooter {...props} />
      <RevisionHistory
        revisions={frontMatter.revisions}
        source={metadata.source.replace(/^@site\//, "")}
      />
    </>
  );
}
