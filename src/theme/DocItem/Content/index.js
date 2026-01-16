import React from "react";
import DocItemContent from "@theme-original/DocItem/Content";
import { useLocation } from "@docusaurus/router";
import { getSectionFromPath, getProgressData } from "@site/src/data/progressData";
import { SectionBadge, ProgressIndicator } from "@site/src/components";
import { normalizePath, matchesAnyPattern } from "@site/src/utils/pathUtils";

/** Pages that have their own headers and shouldn't show auto-generated badges */
const INDEX_PAGES = [
  "/docs/learn/",
  "/docs/security/",
  "/docs/advanced/",
  "/docs/privacy/",
  "/docs/reference/",
  "/docs/wallet-setup/",
];

export default function DocItemContentWrapper(props) {
  const location = useLocation();
  const path = normalizePath(location.pathname);

  // Get section and progress data
  const section = getSectionFromPath(path);
  const progressData = getProgressData(path);

  // Don't show on index/overview pages (they have their own headers)
  const isIndexPage = matchesAnyPattern(path, INDEX_PAGES);

  return (
    <>
      {/* Section badge and progress indicator */}
      {!isIndexPage && (section || progressData) && (
        <div style={{ marginBottom: "16px" }}>
          {section && <SectionBadge section={section} />}
          {progressData && (
            <ProgressIndicator
              current={progressData.current}
              total={progressData.total}
              title={progressData.guideName}
              steps={progressData.steps}
            />
          )}
        </div>
      )}
      <DocItemContent {...props} />
    </>
  );
}
