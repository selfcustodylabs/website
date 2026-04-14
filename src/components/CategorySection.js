import React from "react";
import PropTypes from "prop-types";
import { Card, DifficultyTag } from "@site/src/components";
import useReveal from "@site/src/hooks/useReveal";

/**
 * Reusable CategorySection component for /learn and /guides.
 *
 * Displays a titled section with a grid of Card components. Fades in on
 * scroll via useReveal, matching the homepage's section reveal behavior.
 */
export default function CategorySection({ title, description, items }) {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="reveal mt-16 first:mt-0"
    >
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
          {description}
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
            href={item.href}
            badge={item.badge}
            footerLeft={item.level ? <DifficultyTag level={item.level} /> : null}
          />
        ))}
      </div>
    </section>
  );
}

CategorySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      badge: PropTypes.string,
      level: PropTypes.string,
    })
  ).isRequired,
};
