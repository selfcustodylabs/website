import React from "react";
import DocItemFooter from "@theme-original/DocItem/Footer";
import { useLocation } from "@docusaurus/router";
import { getNextSteps } from "@site/src/data/nextStepsData";
import { NextSteps } from "@site/src/components";
import { normalizePath } from "@site/src/utils/pathUtils";

export default function DocItemFooterWrapper(props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);

  // Get next steps for this page
  const nextSteps = getNextSteps(path);

  return (
    <>
      {/* Show Next Steps before the standard footer */}
      {nextSteps && <NextSteps items={nextSteps} />}
      <DocItemFooter {...props} />
    </>
  );
}
