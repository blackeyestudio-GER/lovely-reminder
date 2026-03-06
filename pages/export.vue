<template>
  <div class="bg-eerie-black rounded-lg text-gray-100">
    <section class="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Export Settings</h2>
      <p class="text-sm text-gray-400 mb-4">Export your theme and app settings as JSON. No task data included.</p>
      <div class="flex flex-col gap-3 md:gap-4">
        <button type="button" class="btn-export" @click="exportSettings">
          <Icon icon="heroicons:arrow-down-tray-20-solid" class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          Export Settings
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useUserSettings } from '~/composables/useUserSettings';

definePageMeta({ title: 'Export' });

const { exportSettings: getExport } = useUserSettings();

const exportSettings = () => {
  const json = getExport();
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'lovely-reminder-settings.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  alert('Settings exported successfully!');
};
</script>
