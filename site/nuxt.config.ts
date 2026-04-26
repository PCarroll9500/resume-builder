import { pwa } from "./configs/pwa";
import { i18n } from "./configs/i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",

  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "nuxt-simple-sitemap",
    "radix-vue/nuxt",
    "shadcn-nuxt"
  ],

  css: [
    "@unocss/reset/tailwind.css",
    "katex/dist/katex.min.css",
    "~/assets/css/index.css"
  ],

  i18n,

  shadcn: {
    prefix: "Ui",
    componentDir: "./src/components/ui"
  },

  runtimeConfig: {
    public: {
      googleFontsKey: ""
    }
  },

  colorMode: {
    classSuffix: ""
  },

  app: {
    baseURL: "/resume-builder/",
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "apple-touch-icon", href: "/resume-builder/apple-touch-icon.png" },
        { rel: "mask-icon", href: "/resume-builder/safari-pinned-tab.svg", color: "#222" }
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "application-name", content: "Resume Builder" },
        { name: "apple-mobile-web-app-title", content: "Resume Builder" },
        { name: "msapplication-TileColor", content: "#fff" },
        { property: "og:url", content: "https://pcarroll9500.github.io/resume-builder/" },
        { property: "og:type", content: "website" }
      ]
    }
  },

  site: {
    url: "https://pcarroll9500.github.io/resume-builder"
  },

  pwa,
  compatibilityDate: "2026-04-24"
});