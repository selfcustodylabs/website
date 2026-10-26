/**
 * Schema.org structured data that is still kept by hand.
 *
 * HowTo, FAQPage, Article and BreadcrumbList are derived from each doc in
 * src/theme/DocItem/Layout, with HowTo steps and FAQ entries read off the page
 * by plugins/structured-data. What remains here: the ItemLists of hub pages.
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

export { itemListSchemas, generateItemListSchema } from "./itemList.js";
