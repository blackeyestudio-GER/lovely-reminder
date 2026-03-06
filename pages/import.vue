<template>
  <div class="bg-eerie-black rounded-lg text-gray-100">
    <section class="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Import Settings</h2>
      <p class="text-sm text-gray-400 mb-4">Import theme and app settings from a JSON file. No task data is imported.</p>
      <div class="flex flex-col gap-3 md:gap-4">
        <label for="importFile" class="btn-import cursor-pointer">
          <Icon icon="heroicons:arrow-up-tray-20-solid" class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          Import Settings
        </label>
        <input
          id="importFile"
          type="file"
          accept=".json"
          class="hidden"
          @change="importSettings"
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useUserSettings } from '~/composables/useUserSettings';

definePageMeta({ title: 'Import' });

const router = useRouter();
const { importSettings: doImport, userSettings } = useUserSettings();

const importSettings = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const json = e.target?.result as string;
      if (doImport(json)) {
        const theme = userSettings.value.theme.selectedTheme;
        if (theme && typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', theme);
        }
        alert('Settings imported successfully!');
        router.push('/settings');
      } else {
        alert('Invalid JSON file.');
      }
    } catch {
      alert('Error parsing JSON file.');
    }
    target.value = '';
  };
  reader.readAsText(file);
};
</script>
