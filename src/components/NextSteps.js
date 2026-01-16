import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";

/**
 * @typedef {Object} NextStepItem
 * @property {string} [label] - Optional label like "Next" or "Learn More"
 * @property {string} title - The title of the linked page
 * @property {string} href - The URL to navigate to
 * @property {string} [description] - Optional description text
 */

/**
 * Next Steps CTA component for guiding users to related content
 *
 * Displays a styled box at the end of documentation pages with
 * links to recommended next pages. Used to improve navigation flow.
 *
 * @param {Object} props - Component props
 * @param {string} [props.title="Next Steps"] - Section title
 * @param {NextStepItem[]} [props.items=[]] - Array of navigation items
 * @returns {React.ReactElement|null} Next steps component or null if no items
 *
 * @example
 * <NextSteps
 *   title="Continue Learning"
 *   items={[
 *     {
 *       label: "Next",
 *       title: "Hardware Wallet Setup",
 *       href: "/docs/wallet-setup/hardware-wallet/",
 *       description: "Set up your first hardware wallet"
 *     },
 *     {
 *       label: "Related",
 *       title: "Private Keys",
 *       href: "/docs/learn/keys/intro/"
 *     }
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
          <Link key={index} to={item.href} className="next-steps__card">
            {item.label && <span className="next-steps__card-label">{item.label}</span>}
            <span className="next-steps__card-title">{item.title}</span>
            {item.description && <p className="next-steps__card-desc">{item.description}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}

NextSteps.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ),
};

NextSteps.defaultProps = {
  title: "Next Steps",
  items: [],
};
