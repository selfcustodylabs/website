/**
 * Schema.org utility functions for Self Custody Labs
 *
 * Provides helpers for generating and validating structured data
 */

const SITE_URL = "https://selfcustodylabs.com";
const SITE_NAME = "Self Custody Labs";
const LOGO_URL = `${SITE_URL}/img/logo.svg`;

// ===========================================
// ORGANIZATION SCHEMA (site-wide)
// ===========================================

/**
 * Organization schema - used on homepage and about pages
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    "Educational resources for Bitcoin self-custody. Learn to secure your Bitcoin with hardware wallets, seed phrases, and advanced techniques.",
  sameAs: [
    "https://x.com/selfcustodylabs",
    "https://github.com/selfcustodylabs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "selfcustodylabs@proton.me",
    contactType: "customer support",
  },
};

// ===========================================
// WEBSITE SCHEMA (site-wide)
// ===========================================

/**
 * WebSite schema - used on homepage
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: "Master Bitcoin self-custody with simple, clear guides.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ===========================================
// SCHEMA GENERATORS
// ===========================================

/**
 * Generate a HowTo schema from a configuration object
 * @param {Object} config - HowTo configuration
 * @returns {Object} JSON-LD HowTo schema
 */
export function createHowToSchema(config) {
  const {
    name,
    description,
    totalTime,
    estimatedCost,
    supply = [],
    tool = [],
    steps = [],
    image,
  } = config;

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
  };

  if (totalTime) schema.totalTime = totalTime;
  if (image) schema.image = image;

  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency || "USD",
      value: estimatedCost.value,
    };
  }

  if (supply.length > 0) {
    schema.supply = supply.map((item) => ({
      "@type": "HowToSupply",
      name: typeof item === "string" ? item : item.name,
    }));
  }

  if (tool.length > 0) {
    schema.tool = tool.map((item) => ({
      "@type": "HowToTool",
      name: typeof item === "string" ? item : item.name,
    }));
  }

  if (steps.length > 0) {
    schema.step = steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image }),
    }));
  }

  return schema;
}

/**
 * Generate an Article schema
 * @param {Object} config - Article configuration
 * @returns {Object} JSON-LD Article schema
 */
export function createArticleSchema(config) {
  const {
    headline,
    description,
    path,
    articleSection,
    datePublished,
    dateModified,
    image,
  } = config;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    articleSection,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(image && { image }),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };
}

/**
 * Generate a FAQPage schema
 * @param {Array} questions - Array of { question, answer } objects
 * @returns {Object} JSON-LD FAQPage schema
 */
export function createFAQSchema(questions) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

/**
 * Generate a BreadcrumbList schema
 * @param {Array} items - Array of { name, url } objects
 * @returns {Object} JSON-LD BreadcrumbList schema
 */
export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
      })),
    ],
  };
}

/**
 * Generate an ItemList schema for collection/hub pages
 * @param {Object} config - ItemList configuration
 * @returns {Object} JSON-LD ItemList schema
 */
export function createItemListSchema(config) {
  const { name, description, items } = config;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

// ===========================================
// SCHEMA VALIDATION
// ===========================================

/**
 * Validate that a schema object has required fields
 * @param {Object} schema - Schema object to validate
 * @param {string} type - Expected schema type
 * @returns {Object} { valid: boolean, errors: string[] }
 */
export function validateSchema(schema, type) {
  const errors = [];

  if (!schema["@context"]) {
    errors.push("Missing @context");
  }

  if (!schema["@type"]) {
    errors.push("Missing @type");
  } else if (schema["@type"] !== type) {
    errors.push(`Expected @type "${type}", got "${schema["@type"]}"`);
  }

  // Type-specific validation
  switch (type) {
    case "HowTo":
      if (!schema.name) errors.push("HowTo: Missing name");
      if (!schema.step || schema.step.length === 0) {
        errors.push("HowTo: Missing or empty steps");
      }
      break;

    case "Article":
      if (!schema.headline) errors.push("Article: Missing headline");
      if (!schema.author) errors.push("Article: Missing author");
      break;

    case "FAQPage":
      if (!schema.mainEntity || schema.mainEntity.length === 0) {
        errors.push("FAQPage: Missing or empty mainEntity");
      }
      break;

    case "BreadcrumbList":
      if (!schema.itemListElement || schema.itemListElement.length === 0) {
        errors.push("BreadcrumbList: Missing or empty itemListElement");
      }
      break;
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Convert schema object to JSON-LD script tag content
 * @param {Object} schema - Schema object
 * @returns {string} JSON string for script tag
 */
export function schemaToJsonLd(schema) {
  return JSON.stringify(schema, null, 0);
}

// ===========================================
// EXPORTS
// ===========================================

export default {
  SITE_URL,
  SITE_NAME,
  LOGO_URL,
  organizationSchema,
  websiteSchema,
  createHowToSchema,
  createArticleSchema,
  createFAQSchema,
  createBreadcrumbSchema,
  createItemListSchema,
  validateSchema,
  schemaToJsonLd,
};
