import React from "react";
import DocItemContent from "@theme-original/DocItem/Content";
import { useLocation } from "@docusaurus/router";

import { getProgressData } from "@site/src/data/progressData";
import ProgressIndicator from "@site/src/components/ProgressIndicator";
import { normalizePath } from "@site/src/utils/pathUtils";

/**
 * Adds the step indicator above the H1 of every page that belongs to a
 * multi-step guide (src/data/progressData.js). The section eyebrow comes from
 * the breadcrumbs (src/theme/DocBreadcrumbs), so nothing else goes here: rule 7
 * keeps the space between the H1 and the answer empty.
 */
export default function DocItemContentWrapper(props) {
  const location = useLocation();
  const progress = getProgressData(normalizePath(location.pathname));

  return (
    <>
      {progress ? (
        <ProgressIndicator
          current={progress.current}
          title={progress.guideName}
          steps={progress.steps}
        />
      ) : null}
      <DocItemContent {...props} />
    </>
  );
}
