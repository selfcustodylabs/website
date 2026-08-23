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
 * Stable node id for the publisher.
 *
 * Must match the @id on the Organization block in docusaurus.config.js. Without
 * it, every Article inlines its own anonymous "Self Custody Labs", so the graph
 * describes ~97 unrelated organizations that happen to share a name instead of
 * one entity cited 97 times. Entity resolution reads the latter.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/**
 * Default author/publisher organization schema fragment
 * Used across Article and other schemas
 */
export const DEFAULT_ORGANIZATION = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
};

/**
 * Default publisher schema fragment with logo
 * Used in Article schemas
 */
export const DEFAULT_PUBLISHER = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};
