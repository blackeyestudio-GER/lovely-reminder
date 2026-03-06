<template>
  <footer class="w-full px-3 md:px-5 py-3 mt-auto drop-shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-2 bg-eerie-black text-dim-gray border-t border-gray-700">
    <small class="text-xs md:text-sm text-center sm:text-left">
      &copy; {{ new Date().getFullYear() }} Lovely Reminder
    </small>
    <nav class="flex flex-row items-center gap-4 text-xs md:text-sm" aria-label="Legal links">
      <NuxtLink to="/impressum" class="text-gray-400 hover:text-moonstone transition-colors underline-offset-2 hover:underline">
        Imprint
      </NuxtLink>
      <NuxtLink to="/datenschutz" class="text-gray-400 hover:text-moonstone transition-colors underline-offset-2 hover:underline">
        Privacy Policy
      </NuxtLink>
    </nav>
  </footer>
</template>
