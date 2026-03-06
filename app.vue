<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  meta: [
    { name: 'description', content: 'Lovely Reminder - Weekly tasks with reactive timers. Complete tasks and they reappear after your chosen interval.' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'theme-color', content: '#4A1942' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'apple-mobile-web-app-title', content: 'Lovely Reminder' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/pwa-192x192.png' },
    { rel: 'apple-touch-icon', sizes: '192x192', href: '/pwa-192x192.png' },
    { rel: 'apple-touch-icon', sizes: '512x512', href: '/pwa-512x512.png' },
  ]
});
</script>
