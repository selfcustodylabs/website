import React from 'react';
import DocItemContent from '@theme-original/DocItem/Content';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { getSectionFromPath, getProgressData } from '@site/src/data/progressData';

// Section badge configuration
const sectionConfig = {
  fundamentals: { label: 'Start Here', icon: '🌱', color: 'fundamentals' },
  keys: { label: 'Keys & Seeds', icon: '🔑', color: 'keys' },
  wallets: { label: 'Wallets', icon: '👛', color: 'wallets' },
  transactions: { label: 'Transactions', icon: '💸', color: 'transactions' },
  privacy: { label: 'Privacy', icon: '🕵️', color: 'privacy' },
  nodes: { label: 'Nodes', icon: '🖥️', color: 'nodes' },
  security: { label: 'Security', icon: '🛡️', color: 'security' },
  advanced: { label: 'Advanced', icon: '🏰', color: 'advanced' },
  reference: { label: 'Reference', icon: '📖', color: 'reference' },
};

function SectionBadge({ section }) {
  const config = sectionConfig[section];
  if (!config) return null;
  
  return (
    <span className={`section-badge section-badge--${config.color}`}>
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}

function ProgressIndicator({ data }) {
  if (!data) return null;
  
  const { guideName, current, total, steps } = data;
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="progress-indicator">
      <div className="progress-indicator__header">
        <span className="progress-indicator__title">{guideName}</span>
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
        {steps.map((step, i) => {
          const stepNum = i + 1;
          let className = 'progress-indicator__step';
          if (stepNum < current) className += ' progress-indicator__step--complete';
          if (stepNum === current) className += ' progress-indicator__step--current';
          return (
            <Link
              key={i}
              to={step.path}
              className={className}
              title={step.title}
              style={{ cursor: 'pointer' }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function DocItemContentWrapper(props) {
  const location = useLocation();
  
  // Normalize path
  let path = location.pathname;
  if (!path.endsWith('/')) {
    path = path + '/';
  }
  
  // Get section and progress data
  const section = getSectionFromPath(path);
  const progressData = getProgressData(path);
  
  // Don't show on index/overview pages (they have their own headers)
  const isIndexPage = path.endsWith('/docs/learn/') || 
                      path.endsWith('/docs/security/') ||
                      path.endsWith('/docs/advanced/') ||
                      path.endsWith('/docs/privacy/') ||
                      path.endsWith('/docs/reference/') ||
                      path.endsWith('/docs/wallet-setup/');
  
  return (
    <>
      {/* Section badge and progress indicator */}
      {!isIndexPage && (section || progressData) && (
        <div style={{ marginBottom: '16px' }}>
          {section && <SectionBadge section={section} />}
          {progressData && <ProgressIndicator data={progressData} />}
        </div>
      )}
      <DocItemContent {...props} />
    </>
  );
}
