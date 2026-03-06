<template>
  <div class="bg-eerie-black rounded-lg text-gray-100">
    <section class="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md">
      <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Theme</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div
          v-for="theme in themes"
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
            <div class="flex gap-2 flex-wrap">
              <div
                v-for="(color, i) in theme.colors"
                :key="i"
                class="h-8 w-12 rounded"
                :style="{ backgroundColor: color.hex }"
                :title="color.name"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useUserSettings } from '~/composables/useUserSettings';

definePageMeta({ title: 'Settings' });

const { userSettings, loadSettings, saveSettings } = useUserSettings();
const selectedTheme = ref('gothic');

const themes = [
  { id: 'gothic', name: 'Dark Gothic', description: 'Deep purples & blacks', colors: [{ hex: '#9B7EBD' }, { hex: '#0D0D0F' }, { hex: '#2D2A38' }] },
  { id: 'dracula', name: 'Dracula', description: 'Classic IDE palette', colors: [{ hex: '#BD93F9' }, { hex: '#282A36' }, { hex: '#FF79C6' }] },
  { id: 'business', name: 'Business', description: 'Clean & professional', colors: [{ hex: '#2563EB' }, { hex: '#F8FAFC' }, { hex: '#1E293B' }] },
  { id: 'pastel', name: 'Lovely Pastel', description: 'Red & pink pastels', colors: [{ hex: '#E91E8C' }, { hex: '#FFF5F8' }, { hex: '#4C1D35' }] },
];

const selectTheme = (themeId: string) => {
  selectedTheme.value = themeId;
  userSettings.value.theme.selectedTheme = themeId;
  saveSettings();
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', themeId);
  }
};

onMounted(() => {
  loadSettings();
  if (userSettings.value.theme.selectedTheme) {
    selectedTheme.value = userSettings.value.theme.selectedTheme;
  }
});
</script>
