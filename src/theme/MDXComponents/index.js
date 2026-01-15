import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

// Import our custom navigation components
import ProgressIndicator from '@site/src/components/ProgressIndicator';
import NextSteps from '@site/src/components/NextSteps';
import SectionBadge from '@site/src/components/SectionBadge';
import RelatedArticles from '@site/src/components/RelatedArticles';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  
  // Add our custom components (available in all MDX files)
  ProgressIndicator,
  NextSteps,
  SectionBadge,
  RelatedArticles,
};
