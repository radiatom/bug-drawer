import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import react from "eslint-plugin-react";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: [
            'public',
            'package.json',
            'yarn.lock',
            'next.config.js',
            'src/app/graphql',
            'src/app/shared/validation'
        ]
    },

    ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals"),

    {
        plugins: {
            "@typescript-eslint": typescriptEslint,
            "simple-import-sort": simpleImportSort,
        react,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
    },

    rules: {
        "no-console": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "react-hooks/exhaustive-deps": "off",
        "simple-import-sort/exports": "warn",

        "simple-import-sort/imports": ["warn", {
            groups: [
                ["^next", "^@?\\w"],
                ["^next", "^./?\\w"],
                ["^react", "^./?\\w"],
                ["^react", "^@?\\w"],
                ["^\\u0000"],
                ["^(@|modules)(/.*|$)"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ["^.+\\.module\\.s?css$"],
                ["^"],
            ],
        }],

        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
}];