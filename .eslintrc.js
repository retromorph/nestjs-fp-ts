module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    // important language properties
    "@typescript-eslint/consistent-type-assertions": ["error", {
      assertionStyle: "as",
      objectLiteralTypeAssertions: "allow-as-parameter", // TODO: may be never
    }],
    // TODO: "@typescript-eslint/consistent-type-definitions":
    // TODO: "@typescript-eslint/consistent-type-imports":
    "@typescript-eslint/explicit-function-return-type": ["error", {
      allowExpressions: false,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: false,
      allowConciseArrowFunctionExpressionsStartingWithVoid: false,
    }],
    "@typescript-eslint/explicit-module-boundary-types": ["error", {
      allowArgumentsExplicitlyTypedAsAny: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowedNames: [],
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true,
    }],

    // visual language properties
    // TODO: "@typescript-eslint/array-type": ["error", {
    //   default: "array",
    // }],
    "@typescript-eslint/await-thenable": ["error"],
    "@typescript-eslint/ban-ts-comment": ["error", {
      "ts-expect-error": "allow-with-description",
      "ts-ignore": true,
      "ts-nocheck": true,
      "ts-check": false,
      minimumDescriptionLength: 3,
    }],
    // TODO: "@typescript-eslint/consistent-indexed-object-style": "record",
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      accessibility: "explicit",
    }],

    // recommendations
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    // TODO: "@typescript-eslint/default-param-last"
  },
};
