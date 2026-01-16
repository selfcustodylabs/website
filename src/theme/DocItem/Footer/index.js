import React from "react";
import DocItemFooter from "@theme-original/DocItem/Footer";
import { useLocation } from "@docusaurus/router";
import { getNextSteps } from "@site/src/data/nextStepsData";
import { NextSteps } from "@site/src/components";

export default function DocItemFooterWrapper(props) {
  const location = useLocation();

  // Normalize path
  let path = location.pathname;
  if (!path.endsWith("/")) {
    path = path + "/";
  }

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
