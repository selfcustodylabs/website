/**
 * Root component wrapper for Docusaurus
 *
 * Adds accessibility enhancements including skip-to-content link
 */

import React from 'react';

export default function Root({ children }) {
  return (
    <>
      <a href="#__docusaurus_skipToContent_fallback" className="skip-to-content">
        Skip to main content
      </a>
      {children}
    </>
  );
}
