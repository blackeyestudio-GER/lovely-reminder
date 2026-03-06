<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-200 ease-in"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="showPrompt"
      class="fixed bottom-20 left-3 right-3 md:left-auto md:right-6 md:w-96 bg-gray-700 rounded-lg shadow-2xl p-4 z-50 border-2 border-moonstone"
    >
      <button
        type="button"
        @click="dismissPrompt"
        class="absolute top-2 right-2 text-gray-400 hover:text-gray-200 transition-colors"
        aria-label="Close"
      >
        <Icon icon="heroicons:x-mark-20-solid" class="w-5 h-5" />
      </button>

      <div class="flex items-start gap-3 pr-6">
        <div class="bg-moonstone p-2 rounded-lg flex-shrink-0">
          <Icon icon="heroicons:arrow-down-tray-20-solid" class="w-6 h-6 text-night" />
        </div>

        <div class="flex-1">
          <h3 class="text-white font-semibold mb-1">Install Lovely Reminder</h3>
          <p class="text-gray-300 text-sm mb-3">Add to your home screen for quick access!</p>

          <button
            type="button"
            @click="installPwa"
            class="w-full px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200"
            style="background-color: var(--color-success); color: var(--color-text-secondary);"
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';

const showPrompt = ref(false);
let deferredPrompt: any = null;

onMounted(() => {
  const dismissed = localStorage.getItem('lovelyReminder_pwa-dismissed');
  const installed = localStorage.getItem('lovelyReminder_pwa-installed');
  if (dismissed || installed) return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    setTimeout(() => { showPrompt.value = true; }, 3000);
  });

  window.addEventListener('appinstalled', () => {
    localStorage.setItem('lovelyReminder_pwa-installed', 'true');
    showPrompt.value = false;
  });
});

const installPwa = async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    localStorage.setItem('lovelyReminder_pwa-installed', 'true');
  }
  deferredPrompt = null;
  showPrompt.value = false;
};

const dismissPrompt = () => {
  showPrompt.value = false;
  localStorage.setItem('lovelyReminder_pwa-dismissed', 'true');
};
</script>
