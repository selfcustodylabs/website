import React from "react";
import PropTypes from "prop-types";
import styles from "@site/src/css/components/difficulty-tag.module.css";

/**
 * Difficulty level tag for guide cards
 *
 * Displays a colored badge indicating the difficulty level of a guide:
 * - Beginner: Green badge
 * - Intermediate: Amber/Yellow badge
 * - Advanced: Red badge
 *
 * @param {Object} props - Component props
 * @param {"Beginner" | "Intermediate" | "Advanced"} props.level - The difficulty level to display
 * @returns {React.ReactElement} A styled span element with the difficulty level
 *
 * @example
 * <DifficultyTag level="Beginner" />
 * <DifficultyTag level="Intermediate" />
 * <DifficultyTag level="Advanced" />
 */
export default function DifficultyTag({ level }) {
  const levelClass =
    level === "Beginner"
      ? styles.tagBeginner
      : level === "Intermediate"
        ? styles.tagIntermediate
        : styles.tagAdvanced;

  return <span className={`${styles.tag} ${levelClass}`}>{level}</span>;
}

DifficultyTag.propTypes = {
  /** The difficulty level to display */
  level: PropTypes.oneOf(["Beginner", "Intermediate", "Advanced"]).isRequired,
};
