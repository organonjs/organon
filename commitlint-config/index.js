// References:
// https://commitlint.js.org/#/reference-configuration
// https://commitlint.js.org/#/reference-rules

const bodyRules = {
  // "body-full-stop": [2, "always", "."], doc out of sync with @commitlint/cli@11.0.0
  "body-leading-blank": [2, "always"],
  "body-max-length": [2, "always", Infinity],
  "body-max-line-length": [2, "always", 72],
  "body-min-length": [2, "always", 0],
};

const footerRules = {
  "footer-leading-blank": bodyRules["body-leading-blank"],
  "footer-max-length": bodyRules["body-max-length"],
  "footer-max-line-length": bodyRules["body-max-line-length"],
  "footer-min-length": [2, "always", 0],
};

const headerRules = {
  "header-case": [2, "always", "lower-case"],
  "header-full-stop": [2, "never", "."],
  "header-max-length": bodyRules["body-max-line-length"],
  "header-min-length": [2, "always", 0],
};

const scopeRules = {
  "scope-enum": [2, "always", []],
  "scope-case": [2, "always", "lower-case"],
  "scope-empty": [2, "never"],
  "scope-max-length": headerRules["header-max-length"],
  "scope-min-length": [2, "always", 0],
};

const subjectRules = {
  "subject-case": [2, "always", "lower-case"],
  "subject-empty": [2, "never"],
  "subject-full-stop": headerRules["header-full-stop"],
  "subject-max-length": headerRules["header-max-length"],
  "subject-min-length": [2, "always", 1],
};

let types = [
  "👷 build",
  "💚 ci",
  "📝 docs",
  "✨ feat",
  "🐛 fix",
  "⚡️ perf",
  "♻️ refactor",
  "⏪ revert",
  "🎨 style",
  "✅ test",
];

const typeRules = {
  "type-enum": [2, "always", types],
  "type-case": [2, "always", "lower-case"],
  "type-empty": [2, "never"],
  "type-max-length": headerRules["header-max-length"],
  "type-min-length": [2, "always", 2],
};

/* Unused rules - the only 2 according to doc; keep them for reference
const miscRules = {
  "references-empty": [2, "never"],
  "signed-off-by": [2, "always", "Signed-off-by:"]
} */

const rules = {
  ...bodyRules,
  ...footerRules,
  ...headerRules,
  ...scopeRules,
  ...subjectRules,
  ...typeRules,
};

module.exports = {
  parserPreset: "conventional-changelog-organon",
  rules,
};
