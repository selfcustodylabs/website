import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useSidebarBreadcrumbs } from "@docusaurus/plugin-content-docs/client";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";

import styles from "./styles.module.css";

/** Top-level docs directories and their names, as on the OG cards. */
const SECTIONS = {
  learn: "Learn",
  "wallet-setup": "Wallet Setup",
  security: "Security",
  advanced: "Advanced",
  reference: "Reference",
  "bitcoin-node": "Bitcoin Node",
  seedsigner: "SeedSigner",
  "nostr-signing-device": "Nostr Signing Device",
  libreboot: "Libreboot",
  coreboot: "Coreboot",
};

/**
 * Breadcrumbs as the mono eyebrow above each doc's H1, the same trail the OG
 * cards print ("HOME / LEARN / KEYS & SEEDS").
 *
 * Replaces the stock component for two reasons:
 * - The stock one also emitted its own BreadcrumbList JSON-LD (no Home crumb,
 *   no trailing slashes), a second, worse copy of the one
 *   src/theme/DocItem/Layout already emits. Not rendering
 *   @theme/DocBreadcrumbs/StructuredData here is deliberate.
 * - The current page is left out of the visible trail: the H1 directly below
 *   names it. The trail always starts with the section (from the URL's first
 *   directory), because several sidebars have no category above their pages
 *   and the trail would otherwise be "Home" alone.
 */
export default function DocBreadcrumbs() {
  const breadcrumbs = useSidebarBreadcrumbs();
  const { pathname } = useLocation();
  if (!breadcrumbs) return null;

  const trail = breadcrumbs.slice(0, -1);
  const segment = pathname.split("/")[2];
  const sectionHref = `/docs/${segment}/`;
  const isSectionIndex = pathname === sectionHref || pathname === sectionHref.slice(0, -1);
  if (SECTIONS[segment] && !isSectionIndex && trail[0]?.href !== sectionHref) {
    trail.unshift({ type: "link", label: SECTIONS[segment], href: sectionHref });
  }

  return (
    <nav
      className={clsx(ThemeClassNames.docs.docBreadcrumbs, styles.crumbs)}
      aria-label="Breadcrumbs"
    >
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        {trail.map((item) => {
          const linkable = item.href && !(item.type === "category" && item.linkUnlisted);
          return (
            <li key={item.href ?? item.label} className={styles.item}>
              {linkable ? <Link to={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
