// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_colors.scss" as *;'
        }
      }
    }
  },
  css: [
    '~/assets/css/main.scss'
  ],
  imports: {
    dirs: [
      'composables',
      'composables/hooks/*/index.{ts,js,mjs,mts}'
    ]
  },

  modules: ["nuxt-svgo", "@hebilicious/vue-query-nuxt", "@nuxt/image"],

  vueQuery: {
    queryClientOptions: {
      defaultOptions: { queries: { staleTime: 10_000 } }
    },
  },

  svgo: {
    defaultImport: 'component',
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupIds: false,
              removeUselessStrokeAndFill: false,
            },
          },
        },
      ],
    },
  },
})