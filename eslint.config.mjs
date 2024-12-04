import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

export default tseslint.config(
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    { files: ["src/*"] },
    // { ignores: ["eslint.config.js", "vite.config.ts", "dist/*"] },
    // eslint
    eslint.configs.recommended,
    // typescript
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
                allowDefaultProject: ["*.js"],
            },
        },
    },
    // prettier
    eslintConfigPrettier,
    // settings and own rules
    {
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
        settings: {
            "import/resolver": {
                typescript: true,
            },
            react: {
                version: "detect",
            },
        },
    },
    {
        files: ["src/app/api/**/*"],
        rules: {
            // Next.js API Routes require async functions, even without await.
            "@typescript-eslint/require-await": "off",
        },
    },
);
