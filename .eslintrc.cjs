module.exports = {
    parserOptions: { project: true, tsconfigRootDir: __dirname },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "next/core-web-vitals",
        "prettier",
    ],
    rules: {
        "import/order": [
            "error",
            {
                groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
                pathGroups: [
                    { pattern: "components", group: "internal" },
                    { pattern: "common", group: "internal" },
                    { pattern: "routes/ **", group: "internal" },
                    { pattern: "assets/**", group: "internal", position: "after" },
                ],
                pathGroupsExcludedImportTypes: ["internal"],
                alphabetize: { order: "asc", caseInsensitive: true },
            },
        ],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: false,
            },
        ],
        "no-console": [
            "error",
            {
                allow: ["warn", "error"],
            },
        ],
    },
    overrides: [
        {
            files: ["src/app/api/**/*"],
            rules: {
                // Next.js API Routes require async functions, even without await.
                "@typescript-eslint/require-await": "off",
            },
        },
    ],
};
