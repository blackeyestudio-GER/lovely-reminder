<template>
  <div class="bg-eerie-black rounded-lg text-gray-100">
    <section class="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md">
      <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Theme</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div
          v-for="theme in runtimeConfig.public.themes"
          :key="theme.id"
          role="button"
          tabindex="0"
          class="cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-moonstone"
          :class="selectedTheme === theme.id ? 'ring-2 ring-moonstone' : 'bg-night'"
          @click="selectTheme(theme.id)"
          @keydown.enter="selectTheme(theme.id)"
        >
          <div class="p-3 md:p-5">
            <h3 class="text-lg font-bold text-gray-200 mb-1">{{ theme.name }}</h3>
            <p class="text-xs md:text-sm text-gray-400 mb-3">{{ theme.description }}</p>
            <div class="flex gap-2 flex-wrap" :data-theme="theme.id">
              <div class="h-8 w-12 rounded bg-moonstone"/>
              <div class="h-8 w-12 rounded bg-night"/>
              <div class="h-8 w-12 rounded bg-dark-slate-gray"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUserSettings } from '~/composables/useUserSettings';
const runtimeConfig = useRuntimeConfig();
definePageMeta({ title: 'Settings' });

const { userSettings, loadSettings, saveSettings } = useUserSettings();
const selectedTheme = ref<string>(userSettings.value.theme);


const selectTheme = (themeId: string) => {
  selectedTheme.value = themeId;
  userSettings.value.theme = themeId;
  saveSettings();
};

onMounted(() => {
  loadSettings();
  if (userSettings.value.theme) {
    selectedTheme.value = userSettings.value.theme;
  }
});
</script>
