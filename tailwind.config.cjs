/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui")],
    daisyui: {
        themes: [
            "dark",
            {
                autumn: {
                    ...require("daisyui/src/colors/themes")["[data-theme=autumn]"],
                    primary: "#9c7647",
                },
            },
        ],
    },
};
