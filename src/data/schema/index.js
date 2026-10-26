/**
 * Schema.org structured data that is still kept by hand.
 *
 * HowTo, FAQ (for pages with a Common questions section), Article and
 * BreadcrumbList are derived from each doc in src/theme/DocItem/Layout, with
 * HowTo steps and FAQ entries read off the page by plugins/structured-data.
 * What remains here: FAQ pairs for pages that do not yet show their questions
 * on the page, and the ItemLists of hub pages.
 *
 * @module schema
 */

export {
  SITE_URL,
  SITE_NAME,
  LOGO_URL,
  DEFAULT_ORGANIZATION,
  DEFAULT_PUBLISHER,
} from "./constants.js";

export { faqSchemas, generateFAQSchema } from "./faq.js";

export { itemListSchemas, generateItemListSchema } from "./itemList.js";
