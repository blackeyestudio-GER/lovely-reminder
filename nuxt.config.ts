// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/themes.css'
  ],

  runtimeConfig: {
    public: {
      themes: [
        {
          id: 'gothic',
          name: 'Dark Gothic',
          description: 'Deep purples & blacks',
        },
        {
          id: 'dracula',
          name: 'Dracula',
          description: 'Classic IDE palette',
        },
        {
          id: 'business',
          name: 'Business',
          description: 'Clean & professional',
        },
        {
          id: 'pastel',
          name: 'Lovely Pastel',
          description: 'Red & pink pastels',
        },
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@vite-pwa/nuxt'
  ],

  pwa: {
    manifest: {
      name: 'Lovely Reminder',
      short_name: 'LovelyReminder',
      description: 'Weekly tasks with reactive timers - complete tasks and they reappear after your chosen interval',
      theme_color: '#4A1942',
      background_color: '#111212',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      scope: '/',
      icons: [
        { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,ico,svg}'],
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-gstatic-cache',
            expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
            cacheableResponse: { statuses: [0, 200] },
          },
        },
      ],
    },
    injectRegister: 'auto',
    registerType: 'prompt',
    devOptions: { enabled: true },
  },
})
