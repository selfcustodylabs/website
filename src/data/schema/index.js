/**
 * Schema.org Structured Data Module
 *
 * Unified exports for all schema types used across the site.
 * This module provides both the raw schema data and generator functions.
 *
 * @module schema
 *
 * @example
 * // Import specific schemas
 * import { howToSchemas, generateHowToSchema } from '@site/src/data/schema';
 *
 * @example
 * // Import everything
 * import * as schema from '@site/src/data/schema';
 */

// Constants
export {
  SITE_URL,
  SITE_NAME,
  LOGO_URL,
  DEFAULT_ORGANIZATION,
  DEFAULT_PUBLISHER,
} from "./constants.js";

// HowTo schemas (procedural guides)
export { howToSchemas, generateHowToSchema } from "./howTo.js";

// FAQ schemas
export { faqSchemas, generateFAQSchema } from "./faq.js";

// Breadcrumb schemas (navigation)
export { breadcrumbMappings, generateBreadcrumbSchema } from "./breadcrumb.js";

// Article schemas (educational content)
export { articleSchemas, generateArticleSchema } from "./article.js";

// ItemList schemas (hub/index pages)
export { itemListSchemas, generateItemListSchema } from "./itemList.js";

/**
 * Get all available schemas for a given path
 *
 * @param {string} path - URL path to check
 * @returns {Object} Object containing available schema types for the path
 */
export function getSchemasForPath(path) {
  // Import dynamically to avoid circular dependencies
  const { howToSchemas } = require("./howTo.js");
  const { faqSchemas } = require("./faq.js");
  const { breadcrumbMappings } = require("./breadcrumb.js");
  const { articleSchemas } = require("./article.js");
  const { itemListSchemas } = require("./itemList.js");

  return {
    hasHowTo: path in howToSchemas,
    hasFAQ: path in faqSchemas,
    hasBreadcrumb: path in breadcrumbMappings,
    hasArticle: path in articleSchemas,
    hasItemList: path in itemListSchemas,
  };
}

/**
 * Generate all applicable schemas for a given path
 *
 * @param {string} path - URL path to generate schemas for
 * @returns {Object[]} Array of JSON-LD schema objects
 */
export function generateAllSchemas(path) {
  const schemas = [];

  // Import generators
  const { generateHowToSchema } = require("./howTo.js");
  const { generateFAQSchema } = require("./faq.js");
  const { generateBreadcrumbSchema } = require("./breadcrumb.js");
  const { generateArticleSchema } = require("./article.js");
  const { generateItemListSchema } = require("./itemList.js");

  const howTo = generateHowToSchema(path);
  if (howTo) schemas.push(howTo);

  const faq = generateFAQSchema(path);
  if (faq) schemas.push(faq);

  const breadcrumb = generateBreadcrumbSchema(path);
  if (breadcrumb) schemas.push(breadcrumb);

  const article = generateArticleSchema(path);
  if (article) schemas.push(article);

  const itemList = generateItemListSchema(path);
  if (itemList) schemas.push(itemList);

  return schemas;
}
