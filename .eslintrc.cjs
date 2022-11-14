/* eslint-env node */
/* eslint-disable @typescript-eslint/naming-convention */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
    "vue/attribute-hyphenation": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multi-word-component-names": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/v-on-event-hyphenation": "off",
    "id-length": "off",
    "vue/html-indent": [
      "warn",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: ["VAttribute"],
      },
    ],
    "quote-props": ["error", "as-needed"],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "default", format: ["camelCase"] },
      { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
      { selector: "parameter", format: ["camelCase"], leadingUnderscore: "allow" },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      { selector: "typeLike", format: ["PascalCase"] },
      { selector: ["classMethod", "classProperty"], format: ["camelCase"] },
      { selector: "enumMember", format: ["PascalCase"] },
      { selector: "objectLiteralProperty", format: ["PascalCase", "camelCase", "UPPER_CASE", "snake_case"] },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
