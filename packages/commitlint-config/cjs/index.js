"use strict";
// References:
// https://commitlint.js.org/#/reference-configuration
// https://commitlint.js.org/#/reference-rules
const types = [
  "👷 build",
  "💚 ci",
  "📝 docs",
  "✨ feat",
  "🐛 fix",
  "⚡ perf",
  "♻️ refactor",
  "⏪ revert",
  "🎨 style",
  "✅ test",
];
const rules = {
  // Spacing
  "body-leading-blank": [2, "always"],
  "footer-leading-blank": [2, "always"],
  // Max height
  "body-max-length": [2, "always", Infinity],
  "footer-max-length": [2, "always", Infinity],
  // Min height
  "body-min-length": [2, "always", 0],
  "footer-min-length": [2, "always", 0],
  // Max width
  "header-max-length": [2, "always", 72],
  "type-max-length": [2, "always", 72],
  "scope-max-length": [2, "always", 72],
  "subject-max-length": [2, "always", 72],
  "body-max-line-length": [2, "always", 72],
  "footer-max-line-length": [2, "always", 72],
  // Min width
  "header-min-length": [2, "always", 0],
  "type-min-length": [2, "always", 2],
  "scope-min-length": [2, "always", 0],
  "subject-min-length": [2, "always", 1],
  // Case
  "header-case": [2, "always", "lower-case"],
  "type-case": [2, "always", "lower-case"],
  "scope-case": [2, "always", "lower-case"],
  "subject-case": [2, "always", "lower-case"],
  "body-case": [0, "always", "lower-case"],
  // Full stop
  "header-full-stop": [2, "never"],
  "subject-full-stop": [2, "never"],
  // "body-full-stop": [2, "always"], doc out of sync with @commitlint/cli@11.0.0
  // Empty
  "type-empty": [2, "never"],
  "scope-empty": [2, "never"],
  "subject-empty": [2, "never"],
  "body-empty": [0, "never"],
  "footer-empty": [0, "never"],
  "references-empty": [0, "never"],
  // Enum
  "type-enum": [2, "always", types],
  "scope-enum": [2, "always", []],
  // Misc
  "signed-off-by": [0, "always" /* , "Signed-off-by:" */],
};
const config = {
  parserPreset: "conventional-changelog-organon",
  rules,
};
module.exports = config;
