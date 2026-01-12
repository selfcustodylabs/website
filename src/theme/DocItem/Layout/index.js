import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';
import { generateHowToSchema, generateBreadcrumbSchema, generateArticleSchema } from '@site/src/data/schemaData';

export default function DocItemLayoutWrapper(props) {
  const location = useLocation();
  
  // Normalize path to always end with /
  let path = location.pathname;
  if (!path.endsWith('/')) {
    path = path + '/';
  }

  // Generate schemas for this page
  const howToSchema = generateHowToSchema(path);
  const breadcrumbSchema = generateBreadcrumbSchema(path);
  const articleSchema = generateArticleSchema(path);

  return (
    <>
      <Head>
        {/* Inject HowTo schema if available (for guide pages) */}
        {howToSchema && (
          <script type="application/ld+json">
            {JSON.stringify(howToSchema, null, 0)}
          </script>
        )}
        {/* Inject Article schema if available (for learn/educational pages) */}
        {articleSchema && (
          <script type="application/ld+json">
            {JSON.stringify(articleSchema, null, 0)}
          </script>
        )}
        {/* Inject Breadcrumb schema if available */}
        {breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema, null, 0)}
          </script>
        )}
      </Head>
      <DocItemLayout {...props} />
    </>
  );
}
