import React from "react";
import PropTypes from "prop-types";

/**
 * Featured image component for documentation pages
 *
 * Displays an image in a styled card with optional caption.
 * Perfect for hero images, product photos, or key visuals.
 *
 * @param {Object} props - Component props
 * @param {string} props.src - Image source path
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.caption] - Optional caption below the image
 * @returns {React.ReactElement} Featured image component
 *
 * @example
 * <FeaturedImage
 *   src="/img/libreboot/t480s.webp"
 *   alt="ThinkPad T480s with Libreboot"
 *   caption="ThinkPad T480s running Libreboot firmware"
 * />
 */
export default function FeaturedImage({ src, alt, caption }) {
  return (
    <figure className="featured-image">
      <div className="featured-image__wrapper">
        <img src={src} alt={alt} className="featured-image__img" loading="lazy" />
      </div>
      {caption && <figcaption className="featured-image__caption">{caption}</figcaption>}
    </figure>
  );
}

FeaturedImage.propTypes = {
  /** Image source path */
  src: PropTypes.string.isRequired,
  /** Alt text for accessibility */
  alt: PropTypes.string.isRequired,
  /** Optional caption below the image */
  caption: PropTypes.string,
};
