<template>
  <div class="bg-eerie-black rounded-lg text-gray-100">
    <section class="p-4 md:p-6 max-w-lg mx-auto">
      <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Export your data</h2>
      <p class="text-sm text-gray-400 mb-4">You can grab your data to transfer it to another device.</p>
      <div class="flex flex-col gap-3 md:gap-4">
        <button type="button" class="btn-export" @click="executeSettingsExport">
          <Icon icon="heroicons:arrow-down-tray-20-solid" class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          Export Settings
        </button>
        <button type="button" class="btn-export" @click="executeTasksExport">
          <Icon icon="heroicons:arrow-down-tray-20-solid" class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
          Export Tasks
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useUserSettings } from '~/composables/useUserSettings';
import { useTasks } from '~/composables/useTasks';

definePageMeta({ title: 'Export' });

const { exportSettings } = useUserSettings();
const { exportTasks } = useTasks();

const executeExport = (content: string, fileName: string) => {
  const blob = new Blob([content], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const executeSettingsExport = () => {
  executeExport(exportSettings(), 'lovely-reminder-settings.json');
}
const executeTasksExport = () => {
  executeExport(exportTasks(), 'lovely-reminder-tasks.json');
}
</script>
