import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  ssr: true,
  modules: ["@nuxtjs/i18n"],
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    locales: [
      { code: "en", language: "en", name: "English", file: "en.json" },
      { code: "id", language: "id", name: "Bahasa Indonesia", file: "id.json" },
    ],
  },
  prerender: {
    routes: ["/en", "/id"],
  },
  nitro: {
    prerender: {
      ignore: [/^\/$/],
      failOnError: true,
    },
  },
});
