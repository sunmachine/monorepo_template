/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
    tsconfigRootDir: import.meta.dirname,
  },
  plugins: ["@typescript-eslint"],
  root: true,
};
