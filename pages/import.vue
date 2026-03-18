<template>
  <div class="bg-eerie-black rounded-lg text-gray-100">
    <section class="p-4 md:p-6 max-w-lg mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Import your data</h2>
      <p class="text-sm text-gray-400 mb-4">Import the data you previously exported.</p>
      <div class="flex flex-col gap-3 md:gap-4">
        <div class="flex flex-col gap-3 md:gap-4">
          <label for="importSettings" class="btn-import cursor-pointer">
            <Icon icon="heroicons:arrow-up-tray-20-solid" class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            Import Settings
          </label>
          <input
            id="importSettings"
            type="file"
            accept=".json"
            class="hidden"
            @change="executeSettingsImport"
          >
        </div>
        <div class="flex flex-col gap-3 md:gap-4">
          <label for="importTasks" class="btn-import cursor-pointer">
            <Icon icon="heroicons:arrow-up-tray-20-solid" class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            Import Tasks
          </label>
          <input
            id="importTasks"
            type="file"
            accept=".json"
            class="hidden"
            @change="executeTasksImport"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useUserSettings } from '~/composables/useUserSettings';
import { useTasks } from '~/composables/useTasks';

definePageMeta({ title: 'Import' });

const { importSettings } = useUserSettings();
const { importTasks } = useTasks();

const executeImport = (event: Event, importerFunction: (jsonContent: string) => boolean, route: string) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const json = e.target?.result as string;
      if (importerFunction(json)) {
        navigateTo(route);
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

const executeSettingsImport = (event: Event) => executeImport(event, importSettings, '/settings');
const executeTasksImport = (event: Event) => executeImport(event, importTasks, '/');
</script>
