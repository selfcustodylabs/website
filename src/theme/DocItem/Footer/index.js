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

  return (
    <>
      <AuthorByline />
      {nextSteps && <NextSteps items={nextSteps} />}
      <DocItemFooter {...props} />
    </>
  );
}
