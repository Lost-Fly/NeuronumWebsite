const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    mode: 'jit',

    content: [
        "./packages/material-tailwind-react/src/components/**/*.{js,ts,jsx,tsx}",
        "./packages/material-tailwind-react/src/theme/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./widgets/**/*.{js,ts,jsx,tsx}",
        "./docs-content/**/*.{js,ts,jsx,tsx}",
        "./documentation/**/*.mdx",
        "./public/material-tailwind-html-v2.js",
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ['Malgun Gothic', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                mainColor: '#0F8AFD',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
});
