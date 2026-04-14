import React from "react";
import PropTypes from "prop-types";

export default function FeaturedImage({ src, alt, caption }) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_24px_80px_rgba(245,158,11,0.08)]">
        <img src={src} alt={alt} className="block h-auto w-full object-cover" loading="lazy" />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm italic text-white/55">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

FeaturedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
};
