import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: [
    "**/node_modules/**",
    "**/.turbo/**",
    "**/.next/**",
    "**/dist/**",
    "**/build/**",
    "**/out/**",
    "**/.cache/**",
  ],
  plugins: ["typescript", "unicorn", "oxc"],
});
