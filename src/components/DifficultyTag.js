import React from 'react';
import styles from '@site/src/pages/styles.module.css';

/**
 * Difficulty level tag for guide cards
 * Shows Beginner (green), Intermediate (yellow), or Advanced (red) badge
 * 
 * @param {Object} props
 * @param {string} props.level - "Beginner" | "Intermediate" | "Advanced"
 */
export default function DifficultyTag({ level }) {
  const cls =
    level === "Beginner"
      ? styles.tagBeginner
      : level === "Intermediate"
        ? styles.tagIntermediate
        : styles.tagAdvanced;
  
  return <span className={`${styles.tag} ${cls}`}>{level}</span>;
}
