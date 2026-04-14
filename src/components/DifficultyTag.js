import React from "react";
import PropTypes from "prop-types";

const base =
  "inline-flex items-center rounded-full px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] ring-1 ring-inset";

const variants = {
  Beginner: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  Intermediate: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
  Advanced: "bg-rose-500/15 text-rose-300 ring-rose-400/30",
};

/**
 * Difficulty level tag for guide cards.
 * Beginner → emerald, Intermediate → amber, Advanced → rose.
 */
export default function DifficultyTag({ level }) {
  return <span className={`${base} ${variants[level] ?? variants.Beginner}`}>{level}</span>;
}

DifficultyTag.propTypes = {
  level: PropTypes.oneOf(["Beginner", "Intermediate", "Advanced"]).isRequired,
};
