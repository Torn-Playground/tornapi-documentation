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
        "@typescript-eslint/no-use-before-define": "off",
        "no-underscore-dangle": "off",
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
        "react/react-in-jsx-scope": "off",
        "react/no-array-index-key": "off",
        "react/require-default-props": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
    },
};
