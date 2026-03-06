<template>
  <transition
    enter-active-class="transition-all duration-200 ease-out"
    leave-active-class="transition-all duration-150 ease-in"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isOpen"
      class="menu-dropdown fixed top-16 right-4 z-50 w-64 bg-eerie-black rounded-lg shadow-2xl border-2 border-gray-600 overflow-hidden backdrop-blur-sm"
    >
      <nav class="flex flex-col bg-eerie-black">
        <NuxtLink to="/" @click="emit('closeMenu')" class="flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700">
          <Icon icon="heroicons:clipboard-document-list-20-solid" class="w-5 h-5 flex-shrink-0" />
          <span>Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/task-add" @click="emit('closeMenu')" class="flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700">
          <Icon icon="heroicons:plus-circle-20-solid" class="w-5 h-5 flex-shrink-0" />
          <span>Add Task</span>
        </NuxtLink>
        <NuxtLink to="/settings" @click="emit('closeMenu')" class="flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700">
          <Icon icon="heroicons:swatch-20-solid" class="w-5 h-5 flex-shrink-0" />
          <span>Theme & Settings</span>
        </NuxtLink>
        <NuxtLink to="/export" @click="emit('closeMenu')" class="flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone border-b border-gray-700">
          <Icon icon="heroicons:arrow-down-tray-20-solid" class="w-5 h-5 flex-shrink-0" />
          <span>Export</span>
        </NuxtLink>
        <NuxtLink to="/import" @click="emit('closeMenu')" class="flex items-center gap-3 px-4 py-3 text-gray-200 text-base font-semibold no-underline transition duration-200 hover:bg-gray-700 hover:text-moonstone">
          <Icon icon="heroicons:arrow-up-tray-20-solid" class="w-5 h-5 flex-shrink-0" />
          <span>Import</span>
        </NuxtLink>
      </nav>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  closeMenu: [];
}>();
</script>
