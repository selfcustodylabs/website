import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";

/**
 * Progress indicator for multi-step guides
 *
 * Displays a visual progress bar showing the user's position within
 * a multi-step guide. Includes step count, percentage, and optionally
 * clickable step indicators when steps are provided.
 *
 * @param {Object} props - Component props
 * @param {number} props.current - Current step number (1-indexed)
 * @param {number} props.total - Total number of steps in the guide
 * @param {string} props.title - Title of the guide/series
 * @param {Array} [props.steps] - Optional array of step objects for clickable navigation
 * @param {string} props.steps[].path - URL path for the step
 * @param {string} props.steps[].title - Title shown on hover
 * @returns {React.ReactElement} Progress indicator component
 *
 * @example
 * // Simple usage (non-clickable steps)
 * <ProgressIndicator
 *   current={2}
 *   total={6}
 *   title="Hardware Wallet Setup Guide"
 * />
 *
 * @example
 * // Advanced usage with clickable step navigation
 * <ProgressIndicator
 *   current={2}
 *   total={3}
 *   title="Wallet Setup Journey"
 *   steps={[
 *     { path: '/docs/wallet-setup/', title: 'Setup' },
 *     { path: '/docs/wallet-setup/verify/', title: 'Verify' },
 *     { path: '/docs/wallet-setup/deposit/', title: 'Deposit' },
 *   ]}
 * />
 */
export default function ProgressIndicator({ current, total, title, steps = null }) {
  const percentage = Math.round((current / total) * 100);

  // Render clickable steps if steps array is provided
  const renderSteps = () => {
    if (steps && steps.length > 0) {
      return steps.map((step, i) => {
        const stepNum = i + 1;
        let className = "progress-indicator__step";
        if (stepNum < current) className += " progress-indicator__step--complete";
        if (stepNum === current) className += " progress-indicator__step--current";
        return (
          <Link
            key={step.path || i}
            to={step.path}
            className={className}
            title={step.title}
            style={{ cursor: "pointer" }}
          />
        );
      });
    }

    // Fallback to non-clickable divs
    return Array.from({ length: total }, (_, i) => {
      const stepNum = i + 1;
      let className = "progress-indicator__step";
      if (stepNum < current) className += " progress-indicator__step--complete";
      if (stepNum === current) className += " progress-indicator__step--current";
      return <div key={i} className={className} />;
    });
  };

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
      <div className="progress-indicator__steps">{renderSteps()}</div>
    </div>
  );
}

ProgressIndicator.propTypes = {
  /** Current step number (1-indexed) */
  current: PropTypes.number.isRequired,
  /** Total number of steps in the guide */
  total: PropTypes.number.isRequired,
  /** Title of the guide/series */
  title: PropTypes.string.isRequired,
  /** Optional array of step objects for clickable navigation */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
