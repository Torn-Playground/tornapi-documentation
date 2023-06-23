module.exports = {
    parserOptions: {
        project: ["./tsconfig.json"],
    },
    extends: [
        "next/core-web-vitals",
        "airbnb",
        "airbnb-typescript",
        "prettier",
    ],
    rules: {
        "no-underscore-dangle": 0,
        "import/order": [
            1,
            {
                "groups": [
                    "external",
                    "builtin",
                    "internal",
                    "sibling",
                    "parent",
                    "index",
                ],
                "pathGroups": [
                    {
                        "pattern": "components",
                        "group": "internal"
                    },
                    {
                        "pattern": "common",
                        "group": "internal"
                    },
                    {
                        "pattern": "routes/ **",
                        "group": "internal"
                    },
                    {
                        "pattern": "assets/**",
                        "group": "internal",
                        "position": "after"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["internal"],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true,
                }
            },
        ],
    },
};
