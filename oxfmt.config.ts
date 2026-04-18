import { defineConfig } from "oxfmt";

export default defineConfig({
  printWidth: 120,
  singleAttributePerLine: true,
  trailingComma: "all",
  endOfLine: "lf",
  insertFinalNewline: true,
  sortTailwindcss: {
    stylesheet: "apps/example/src/app/globals.css",
    functions: ["cn", "cva", "clsx"],
  },
  sortImports: {
    customGroups: [
      {
        groupName: "react-libs",
        elementNamePattern: ["react", "react-**"],
      },
    ],
    groups: [
      "react-libs",
      "type-import",
      ["value-builtin", "value-external"],
      "type-internal",
      "value-internal",
      ["type-parent", "type-sibling", "type-index"],
      ["value-parent", "value-sibling", "value-index"],
      "unknown",
    ],
    newlinesBetween: true,
  },
  ignorePatterns: [
    "**/node_modules/**",
    "**/dist/**",
    "**/.next/**",
    "**/.turbo/**",
    "**/coverage/**",
    "**/.pnpm-store/**",
    "**/.output/**",
    "**/.tanstack/**",
    "pnpm-lock.yaml",
    "**/worker-configuration.d.ts",
    "**/routeTree.gen.ts",
  ],
});
