import MDXComponents from "@theme-original/MDXComponents";

import GuideFacts from "@site/src/components/GuideFacts";

/**
 * Components available in every doc without an import. Keep this list short:
 * each entry needs matching handling in plugins/llms-txt (rendered as text,
 * unwrapped, or dropped), or assertClean() fails the build.
 */
export default {
  ...MDXComponents,
  GuideFacts,
};
