// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // transpile: ["@mariage/ui"],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
