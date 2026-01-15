import React from 'react';
import Link from '@docusaurus/Link';

/**
 * Next Steps CTA box for end of pages
 * Provides consistent navigation to related content
 * 
 * Usage:
 * <NextSteps
 *   title="Ready to continue?"
 *   items={[
 *     { label: "Next", title: "Hardware Wallet Setup", href: "/docs/wallet-setup/hardware-wallet/", description: "Set up your first hardware wallet" },
 *     { label: "Learn More", title: "Private Keys", href: "/docs/learn/keys/intro/", description: "Understand how keys work" }
 *   ]}
 * />
 */
export default function NextSteps({ title = "Next Steps", items = [] }) {
  if (!items.length) return null;
  
  return (
    <div className="next-steps">
      <div className="next-steps__title">{title}</div>
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
