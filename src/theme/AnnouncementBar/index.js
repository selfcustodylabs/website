import React from "react";
import AnnouncementBar from "@theme-original/AnnouncementBar";
import { useLocation } from "@docusaurus/router";

/**
 * The homepage opens with the full advisory bulletin (src/data/advisories.js),
 * so the one-line bar above it would say the same thing twice.
 */
export default function AnnouncementBarWrapper(props) {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return <AnnouncementBar {...props} />;
}
