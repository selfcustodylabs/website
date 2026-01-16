/**
 * Shared constants for Schema.org structured data
 *
 * @module schema/constants
 */

/** Base URL for the site */
export const SITE_URL = "https://selfcustodylabs.com";

/** Site name used in schemas */
export const SITE_NAME = "Self Custody Labs";

/** Logo URL for publisher schemas */
export const LOGO_URL = `${SITE_URL}/img/logo.svg`;

/**
 * Default author/publisher organization schema fragment
 * Used across Article and other schemas
 */
export const DEFAULT_ORGANIZATION = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
};

/**
 * Default publisher schema fragment with logo
 * Used in Article schemas
 */
export const DEFAULT_PUBLISHER = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};
