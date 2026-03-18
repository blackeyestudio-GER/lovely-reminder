<template>
  <div class="bg-night min-h-screen flex flex-col" :data-theme="currentTheme" @click="handleOutsideClick">
    <NuxtLoadingIndicator :throttle="0" :height="2" />
    <AppHeader @toggle-menu="isMenuOpen = !isMenuOpen" />
    <FullScreenMenu :is-open="isMenuOpen" @close-menu="isMenuOpen = false" />
    <div class="mx-auto max-w-screen-2xl w-full px-3 md:px-4 lg:px-6 py-3 md:py-4 flex-1">
      <slot />
    </div>
    <AppFooter />
    <PwaInstallPrompt />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import AppHeader from '~/components/AppHeader.vue';
import FullScreenMenu from '~/components/FullScreenMenu.vue';
import AppFooter from '~/components/AppFooter.vue';
import PwaInstallPrompt from '~/components/PwaInstallPrompt.vue';
import { useUserSettings } from '~/composables/useUserSettings';
import { useTasks } from '~/composables/useTasks';

const isMenuOpen = ref(false);
const { userSettings, loadSettings } = useUserSettings();
const { loadFromLocalStorage, checkAndReactivateTasks } = useTasks();

const currentTheme = computed(() => userSettings.value.theme || 'gothic');

watch(currentTheme, (newTheme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', newTheme);
  }
}, { immediate: true });

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (isMenuOpen.value && !target.closest('.menu-dropdown') && !target.closest('button')) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  loadSettings();
  loadFromLocalStorage();
  checkAndReactivateTasks();
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', currentTheme.value);
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('focus', checkAndReactivateTasks);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('focus', checkAndReactivateTasks);
  }
});

useHead({
  titleTemplate: (title) => title ? `${title} - Lovely Reminder` : 'Lovely Reminder',
});
</script>
