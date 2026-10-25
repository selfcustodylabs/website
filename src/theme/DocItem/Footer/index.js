import React from "react";
import DocItemFooter from "@theme-original/DocItem/Footer";
import { useLocation } from "@docusaurus/router";
import { getNextSteps } from "@site/src/data/nextStepsData";
import { NextSteps, AuthorByline } from "@site/src/components";
import { normalizePath } from "@site/src/utils/pathUtils";

export default function DocItemFooterWrapper(props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);

  const nextSteps = getNextSteps(path);

  // Order: where to go next, then the colophon, then Docusaurus's own footer
  // (last updated, tags).
  return (
    <>
      {nextSteps && <NextSteps items={nextSteps} />}
      <AuthorByline />
      <DocItemFooter {...props} />
    </>
  );
}
