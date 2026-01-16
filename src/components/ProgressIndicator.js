import React from "react";
import PropTypes from "prop-types";

/**
 * Progress indicator for multi-step guides
 *
 * Displays a visual progress bar showing the user's position within
 * a multi-step guide. Includes step count, percentage, and clickable
 * step indicators.
 *
 * @param {Object} props - Component props
 * @param {number} props.current - Current step number (1-indexed)
 * @param {number} props.total - Total number of steps in the guide
 * @param {string} props.title - Title of the guide/series
 * @returns {React.ReactElement} Progress indicator component
 *
 * @example
 * // Shows "Step 2 of 6 — 33% complete"
 * <ProgressIndicator
 *   current={2}
 *   total={6}
 *   title="Hardware Wallet Setup Guide"
 * />
 */
export default function ProgressIndicator({ current, total, title }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="progress-indicator">
      <div className="progress-indicator__header">
        <span className="progress-indicator__title">{title}</span>
        <span className="progress-indicator__count">
          Step {current} of {total} — {percentage}% complete
        </span>
      </div>
      <div className="progress-indicator__bar">
        <div className="progress-indicator__fill" style={{ width: `${percentage}%` }} />
      </div>
      <div className="progress-indicator__steps">
        {Array.from({ length: total }, (_, i) => {
          const stepNum = i + 1;
          let className = "progress-indicator__step";
          if (stepNum < current) className += " progress-indicator__step--complete";
          if (stepNum === current) className += " progress-indicator__step--current";
          return <div key={i} className={className} />;
        })}
      </div>
    </div>
  );
}

ProgressIndicator.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
