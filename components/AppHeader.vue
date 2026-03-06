<template>
  <div class="w-full px-3 md:px-5 py-3 md:py-4 mb-3 md:mb-4 drop-shadow-2xl flex flex-row items-center justify-between bg-eerie-black content-start">
    <NuxtLink to="/" class="flex flex-row items-center gap-2">
      <AppLogo :size="36" class="text-moonstone md:w-10 md:h-10" />
      <span class="text-xl md:text-3xl lg:text-4xl text-moonstone">Lovely Reminder</span>
    </NuxtLink>
    <button type="button" @click="emit('toggleMenu')" class="bg-transparent border-none cursor-pointer p-1 md:p-0" aria-label="Open menu">
      <Icon icon="heroicons:cog-6-tooth-20-solid" class="w-7 h-7 md:w-8 md:h-8 text-moonstone" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

const emit = defineEmits<{
  toggleMenu: []
}>();
</script>
