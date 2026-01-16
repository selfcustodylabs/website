import React from "react";
import PropTypes from "prop-types";
import { getSectionConfig } from "@site/src/data/sectionConfig";

/**
 * Section badge to show which section the current page belongs to
 *
 * @param {Object} props
 * @param {string} props.section - Section key (e.g., "fundamentals", "keys")
 * @param {string} [props.icon] - Override icon (optional)
 * @param {string} [props.label] - Override label (optional)
 *
 * @example
 * <SectionBadge section="fundamentals" />
 * <SectionBadge section="keys" icon="🔑" />
 *
 * Available sections:
 * - fundamentals (green)
 * - keys (amber)
 * - wallets (purple)
 * - transactions (blue)
 * - privacy (pink)
 * - nodes (cyan)
 * - security (red)
 * - advanced (orange)
 * - reference (gray)
 */
export default function SectionBadge({ section, icon = null, label = null }) {
  const sectionData = getSectionConfig(section) || { label: section, icon: "📄", color: section };
  const displayIcon = icon || sectionData.icon;
  const displayLabel = label || sectionData.label;

  return (
    <span className={`section-badge section-badge--${section}`}>
      <span>{displayIcon}</span>
      <span>{displayLabel}</span>
    </span>
  );
}

SectionBadge.propTypes = {
  /** Section key (e.g., "fundamentals", "keys") */
  section: PropTypes.oneOf([
    "fundamentals",
    "keys",
    "wallets",
    "transactions",
    "privacy",
    "nodes",
    "security",
    "advanced",
    "reference",
  ]).isRequired,
  /** Override icon (optional) */
  icon: PropTypes.string,
  /** Override label (optional) */
  label: PropTypes.string,
};
