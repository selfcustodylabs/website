import React from "react";
import Link from "@docusaurus/Link";
import styles from "@site/src/pages/styles.module.css";

/**
 * Reusable Card component for landing pages
 * Used on homepage, /learn, and /guides pages
 *
 * @param {Object} props
 * @param {React.ComponentType} props.icon - Material UI icon component
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description text
 * @param {string} [props.href] - Optional link destination
 * @param {string} [props.badge] - Optional badge text (e.g., "POPULAR", "NEW")
 * @param {string} [props.cost] - Optional cost text (used on guides page)
 * @param {React.ReactNode} [props.footerLeft] - Optional left footer content
 * @param {React.ReactNode} [props.footerRight] - Optional right footer content
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
