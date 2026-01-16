import React from "react";

/**
 * Progress indicator for multi-step guides
 * Shows current step and overall progress
 *
 * Usage:
 * <ProgressIndicator
 *   current={2}
 *   total={6}
 *   title="Hardware Wallet Setup"
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
        <div
          className="progress-indicator__fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="progress-indicator__steps">
        {Array.from({ length: total }, (_, i) => {
          const stepNum = i + 1;
          let className = "progress-indicator__step";
          if (stepNum < current)
            className += " progress-indicator__step--complete";
          if (stepNum === current)
            className += " progress-indicator__step--current";
          return <div key={i} className={className} />;
        })}
      </div>
    </div>
  );
}
