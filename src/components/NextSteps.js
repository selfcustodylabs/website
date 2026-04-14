import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

export default function NextSteps({ title = "Next Steps", items = [] }) {
  if (!items.length) return null;

  return (
    <section className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold text-white">
        <ArrowForwardRoundedIcon sx={{ fontSize: 20 }} className="text-amber-400" />
        {title}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-500/35 hover:bg-white/[0.04]"
          >
            {item.label ? (
              <span className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-amber-400">
                {item.label}
              </span>
            ) : null}
            <span className="font-display font-semibold text-white">{item.title}</span>
            {item.description ? (
              <p className="mt-1 text-sm leading-relaxed text-white/65">{item.description}</p>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
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
