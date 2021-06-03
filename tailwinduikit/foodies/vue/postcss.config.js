const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
    purge: [
        // './src/**/*.html',
        // './src/**/*.vue',
        // './src/**/*.jsx',
    ],
    theme: {},
    variants: {},
    plugins: [tailwindcss, autoprefixer],
};
