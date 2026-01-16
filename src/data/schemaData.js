/**
 * Schema.org structured data for Self Custody Labs
 *
 * @deprecated Import from '@site/src/data/schema' instead
 *
 * This file re-exports from the modular schema directory for backward compatibility.
 * New code should import directly from '@site/src/data/schema'.
 *
 * @example
 * // Old way (still works)
 * import { howToSchemas, generateHowToSchema } from '@site/src/data/schemaData';
 *
 * // New way (preferred)
 * import { howToSchemas, generateHowToSchema } from '@site/src/data/schema';
 */

// Re-export everything from the modular schema
export {
  // Constants
  SITE_URL,
  SITE_NAME,
  LOGO_URL,
  DEFAULT_ORGANIZATION,
  DEFAULT_PUBLISHER,
  // HowTo
  howToSchemas,
  generateHowToSchema,
  // FAQ
  faqSchemas,
  generateFAQSchema,
  // Breadcrumb
  breadcrumbMappings,
  generateBreadcrumbSchema,
  // Article
  articleSchemas,
  generateArticleSchema,
  // ItemList
  itemListSchemas,
  generateItemListSchema,
  // Utility functions
  getSchemasForPath,
  generateAllSchemas,
} from "./schema/index.js";

// Default export for backward compatibility
import {
  howToSchemas,
  faqSchemas,
  breadcrumbMappings,
  articleSchemas,
  itemListSchemas,
  generateHowToSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateItemListSchema,
} from "./schema/index.js";

export default {
  howToSchemas,
  faqSchemas,
  breadcrumbMappings,
  articleSchemas,
  itemListSchemas,
  generateHowToSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateArticleSchema,
  generateItemListSchema,
};
