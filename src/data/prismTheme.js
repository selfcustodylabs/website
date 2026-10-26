/**
 * Code highlighting in the lab-manual palette (src/css/tokens.css): amber for
 * keywords, light amber for literals, a muted green for strings, faint ink for
 * comments. Every colour clears 4.5:1 on the code background.
 */
export const prismLab = {
  plain: { color: "#cdd1d8", backgroundColor: "#0c0e12" },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#8a909d", fontStyle: "normal" },
    },
    { types: ["punctuation"], style: { color: "#a8aebb" } },
    { types: ["keyword", "atrule", "selector", "important"], style: { color: "#f59e0b" } },
    {
      types: ["number", "boolean", "constant", "symbol", "property", "tag"],
      style: { color: "#fcd34d" },
    },
    { types: ["string", "char", "attr-value", "inserted", "url"], style: { color: "#9fd4a9" } },
    { types: ["function", "class-name", "builtin", "attr-name"], style: { color: "#f3f4f6" } },
    { types: ["operator", "entity", "variable"], style: { color: "#cdd1d8" } },
    { types: ["regex", "deleted"], style: { color: "#f07a63" } },
  ],
};
