<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    :width="size"
    :height="size"
    class="inline-block flex-shrink-0"
    aria-hidden="true"
  >
    <!-- Heart - uses theme primary color -->
    <path fill="currentColor" d="M32 50 C32 50 6 36 6 18 C6 8 14 4 22 4 C28 4 32 10 32 10 C32 10 36 4 42 4 C50 4 58 8 58 18 C58 36 32 50 32 50 Z"/>
    <!-- Checklist - scaled down, moved up, centered in heart -->
    <g transform="translate(20, 10) scale(0.6)">
      <rect x="0" y="0" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.98"/>
      <path d="M3 6 L5.5 8.5 L10 3" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.98"/>
      <line x1="16" y1="6" x2="36" y2="6" stroke="#ffffff" stroke-width="1.8" opacity="0.98"/>
      <rect x="0" y="18" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.98"/>
      <line x1="16" y1="24" x2="36" y2="24" stroke="#ffffff" stroke-width="1.8" opacity="0.98"/>
      <rect x="0" y="36" width="12" height="12" rx="2" fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.98"/>
      <line x1="16" y1="42" x2="36" y2="42" stroke="#ffffff" stroke-width="1.8" opacity="0.98"/>
    </g>
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string;
  }>(),
  { size: 40 }
);
</script>
