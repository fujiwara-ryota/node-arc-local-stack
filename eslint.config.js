import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import pluginImport from "eslint-plugin-import";

export default [
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: pluginImport,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "import/order": [
        "warn",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: { project: "./tsconfig.base.json" },
      },
    },
  },
  {
    files: ["packages/shared/src/domain/**/*.ts", "packages/shared/src/usecase/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@infra/*", "@presenter/*"],
              message: "domain/usecase から infra/presenter へ依存禁止",
            },
          ],
        },
      ],
    },
  },
  prettierConfig,
];
