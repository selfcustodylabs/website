import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";
import styles from "@site/src/css/components/card.module.css";

/**
 * Reusable Card component for landing pages
 *
 * A versatile card component used across homepage, guides, and learn pages.
 * Supports optional linking, badges, cost display, and footer content.
 *
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.icon - Material UI icon component to display
 * @param {string} props.title - Card title text
 * @param {string} props.description - Card description/body text
 * @param {string} [props.href] - Optional link destination (makes card clickable)
 * @param {string} [props.badge] - Optional badge text (e.g., "POPULAR", "NEW")
 * @param {string} [props.cost] - Optional cost text (e.g., "💰 $50-100")
 * @param {React.ReactNode} [props.footerLeft] - Optional left footer content (e.g., DifficultyTag)
 * @param {React.ReactNode} [props.footerRight] - Optional right footer content (e.g., arrow)
 * @returns {React.ReactElement} Card component
 *
 * @example
 * // Basic card without link
 * <Card
 *   icon={ShieldIcon}
 *   title="Security"
 *   description="Learn about security best practices"
 * />
 *
 * @example
 * // Linked card with badge and footer
 * <Card
 *   icon={CasinoIcon}
 *   title="DIY Seed Generation"
 *   description="Create your own secure seed"
 *   href="/docs/security/seed-generation"
 *   badge="POPULAR"
 *   cost="💰 $30-80"
 *   footerLeft={<DifficultyTag level="Intermediate" />}
 *   footerRight={<span className={styles.arrow}>→</span>}
 * />
 */
export default function Card({
  icon: Icon,
  title,
  description,
  href,
  badge,
  cost,
  footerLeft,
  footerRight,
}) {
  const content = (
    <div className={styles.cardInner}>
      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          <Icon fontSize="inherit" />
        </div>
        {badge ? <div className={styles.cardBadge}>{badge}</div> : null}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      {cost && <p className={styles.cardCost}>{cost}</p>}
      {(footerLeft || footerRight) && (
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterLeft}>{footerLeft}</div>
          <div className={styles.cardFooterRight}>{footerRight}</div>
        </div>
      )}
    </div>
  );

  if (!href) return <div className={styles.card}>{content}</div>;

  return (
    <Link className={styles.cardLink} to={href}>
      <div className={styles.card}>{content}</div>
    </Link>
  );
}

Card.propTypes = {
  /** Material UI icon component to display */
  icon: PropTypes.elementType.isRequired,
  /** Card title text */
  title: PropTypes.string.isRequired,
  /** Card description/body text */
  description: PropTypes.string.isRequired,
  /** Optional link destination (makes card clickable) */
  href: PropTypes.string,
  /** Optional badge text (e.g., "POPULAR", "NEW") */
  badge: PropTypes.string,
  /** Optional cost text (e.g., "💰 $50-100") */
  cost: PropTypes.string,
  /** Optional left footer content (e.g., DifficultyTag) */
  footerLeft: PropTypes.node,
  /** Optional right footer content (e.g., arrow) */
  footerRight: PropTypes.node,
};

Card.defaultProps = {
  href: null,
  badge: null,
  cost: null,
  footerLeft: null,
  footerRight: null,
};

/**
 * Export arrow style for use in parent components
 * This allows consistent arrow styling across the site
 */
export { styles as cardStyles };
