import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";

export default function ProgressIndicator({ current, total, title, steps = null }) {
  const totalCount = steps && steps.length > 0 ? steps.length : total;

  const renderSteps = () => {
    const baseClass = "h-2 flex-1 rounded-full transition-all duration-200";
    const pendingClass = `${baseClass} bg-white/10`;
    const completeClass = `${baseClass} bg-amber-500`;
    const currentClass = `${baseClass} bg-gradient-to-r from-amber-500 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.55)]`;

    if (steps && steps.length > 0) {
      return steps.map((step, i) => {
        const stepNum = i + 1;
        let cls;
        if (stepNum < current) cls = completeClass;
        else if (stepNum === current) cls = currentClass;
        else cls = pendingClass;
        return (
          <Link
            key={step.path || i}
            to={step.path}
            className={`${cls} hover:scale-y-125`}
            title={step.title}
            aria-label={`Step ${stepNum}: ${step.title}`}
          />
        );
      });
    }

    return Array.from({ length: totalCount }, (_, i) => {
      const stepNum = i + 1;
      let cls;
      if (stepNum < current) cls = completeClass;
      else if (stepNum === current) cls = currentClass;
      else cls = pendingClass;
      return <div key={i} className={cls} />;
    });
  };

  return (
    <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-display font-semibold text-amber-400">{title}</span>
        <span className="font-medium text-white/55">
          Step {current} of {totalCount}
        </span>
      </div>
      <div className="flex gap-1.5">{renderSteps()}</div>
    </div>
  );
}

ProgressIndicator.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
