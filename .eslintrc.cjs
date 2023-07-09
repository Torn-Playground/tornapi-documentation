module.exports = {
    parserOptions: { project: ["./tsconfig.json"] },
    extends: ["next/core-web-vitals", "prettier"],
    rules: {
        "import/order": [
            1,
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
    },
};
