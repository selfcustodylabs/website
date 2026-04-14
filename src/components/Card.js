import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

/**
 * Reusable Card component for landing pages.
 *
 * Tailwind-based card used by CategorySection on /learn and /guides.
 * Supports optional linking, badges, cost display, and footer content.
 */
export default function Card({
  icon: Icon,
  title,
  description,
  href = null,
  badge = null,
  footerLeft = null,
}) {
  const showFooter = Boolean(footerLeft || href);

  const content = (
    <>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-500/25 bg-amber-500/[0.08] text-amber-400 transition-colors duration-500 group-hover:border-amber-500/50 group-hover:bg-amber-500/15">
          <Icon fontSize="inherit" sx={{ fontSize: 22 }} />
        </div>
        {badge ? (
          <span className="inline-flex shrink-0 items-center rounded-full bg-amber-500 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-neutral-950">
            {badge}
          </span>
        ) : null}
      </div>

      <h3 className="font-display text-lg font-bold tracking-tight text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>

      {showFooter ? (
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="flex items-center">{footerLeft}</div>
          {href ? (
            <span className="inline-flex items-center text-amber-400/85 transition-colors duration-300 group-hover:text-amber-300">
              <ArrowForwardRoundedIcon
                sx={{ fontSize: 18 }}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );

  const baseClass =
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-amber-500/35 hover:bg-white/[0.04] hover:-translate-y-1";

  if (!href) return <div className={baseClass}>{content}</div>;

  return (
    <Link className={baseClass} to={href}>
      {content}
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 opacity-0 transition-opacity duration-500 group-hover:from-amber-500/5 group-hover:via-transparent group-hover:to-orange-500/5 group-hover:opacity-100" />
    </Link>
  );
}

Card.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string,
  badge: PropTypes.string,
  footerLeft: PropTypes.node,
};
