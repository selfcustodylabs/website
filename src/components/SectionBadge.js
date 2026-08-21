import React from "react";
import PropTypes from "prop-types";
import { getSectionConfig } from "@site/src/data/sectionConfig";

export default function SectionBadge({ section, icon = null, label = null }) {
  const sectionData = getSectionConfig(section) || { label: section, icon: "📄" };
  const displayIcon = icon || sectionData.icon;
  const displayLabel = label || sectionData.label;

  return (
    <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-amber-300">
      <span aria-hidden="true">{displayIcon}</span>
      <span>{displayLabel}</span>
    </span>
  );
}

SectionBadge.propTypes = {
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
    "seedsigner",
  ]).isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
};
