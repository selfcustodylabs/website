import React from 'react';
import DocItemFooter from '@theme-original/DocItem/Footer';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { getNextSteps } from '@site/src/data/nextStepsData';

function NextSteps({ items }) {
  if (!items || !items.length) return null;
  
  return (
    <div className="next-steps">
      <div className="next-steps__title">Next Steps</div>
      <div className="next-steps__grid">
        {items.map((item, index) => (
          <Link 
            key={index} 
            to={item.href} 
            className="next-steps__card"
          >
            {item.label && (
              <span className="next-steps__card-label">{item.label}</span>
            )}
            <span className="next-steps__card-title">{item.title}</span>
            {item.description && (
              <p className="next-steps__card-desc">{item.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function DocItemFooterWrapper(props) {
  const location = useLocation();
  
  // Normalize path
  let path = location.pathname;
  if (!path.endsWith('/')) {
    path = path + '/';
  }
  
  // Get next steps for this page
  const nextSteps = getNextSteps(path);
  
  return (
    <>
      {/* Show Next Steps before the standard footer */}
      {nextSteps && <NextSteps items={nextSteps} />}
      <DocItemFooter {...props} />
    </>
  );
}
