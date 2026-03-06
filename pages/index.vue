<template>
  <div>
    <div v-if="tasks.length === 0" class="p-4 md:p-8 bg-eerie-black rounded-lg shadow-md text-center">
      <div class="w-full md:max-w-2xl md:mx-auto">
        <AppLogo :size="64" class="text-moonstone mx-auto mb-4 md:w-20 md:h-20" />
        <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-3">Welcome to Lovely Reminder</h2>
        <div class="text-gray-300 space-y-4 text-left text-sm md:text-base leading-relaxed">
          <p class="text-gray-400">This story will explain it better than I ever could. (Thanks to Pete and Claudia.)</p>
          <p>Pete met Claudia at a friend's birthday. Nothing flashy – she was the one laughing in the corner, and he couldn't stop looking. A year later, he had her. The hard part, he realised, wasn't getting her. It was keeping her. Not in a possessive way – he just didn't want to wake up one day and find they'd become strangers sharing a couch.</p>
          <p>He never saw her as "normal". She was his person. So he wrote notes: ask about her day, send a song that reminded him of her, plan time without phones. When he'd done one, he put it in his desk. Every week he'd check the desk and put the notes back on top – so he'd see them again. That simple rhythm. Based on that idea, this app was born.</p>
          <p>Pete and Claudia are still together. Funny enough, she's the one using the app now. He still has his notes from fifteen years ago.</p>
          <p class="text-gray-400 italic">Add tasks, tick them off – they return after the interval you choose. Small steps. Big love.</p>
          <NuxtLink to="/task-add" class="btn-primary px-5 py-3 inline-flex items-center mt-4">
            <Icon icon="heroicons:plus-20-solid" class="w-5 h-5 mr-2" />
            Add First Task
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-else class="space-y-4 md:space-y-6">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div class="flex items-center gap-3">
          <AppLogo :size="40" class="text-moonstone flex-shrink-0" />
          <div>
            <h2 class="text-lg md:text-xl font-bold text-gray-100">Your Tasks</h2>
            <p class="text-sm text-gray-400 mt-0.5">Remember: You do it for the both of you. ♥</p>
          </div>
        </div>
          <NuxtLink to="/task-add" class="btn-add px-4 py-2 inline-flex items-center text-sm self-start md:self-center">
          <Icon icon="heroicons:plus-20-solid" class="w-5 h-5 mr-2" />
          Add Task
        </NuxtLink>
      </div>

      <div v-for="task in tasks" :key="task.id" class="bg-eerie-black rounded-lg shadow-md p-4 md:p-5">
        <div class="flex flex-row items-start gap-3 md:gap-4">
          <input
            type="checkbox"
            :checked="isTaskCompleted(task)"
            :disabled="isTaskCompleted(task)"
            :aria-label="isTaskCompleted(task) ? `Completed: ${task.text}` : `Mark as complete: ${task.text}`"
            class="mt-1 w-5 h-5 md:w-6 md:h-6 rounded border-2 flex-shrink-0 accent-green-500"
            :class="isTaskCompleted(task) ? 'cursor-default opacity-90' : 'cursor-pointer'"
            :style="{ borderColor: 'var(--color-border)' }"
            @change="completeTask(task.id)"
          >
          <div class="flex-1 min-w-0">
            <p
              class="text-gray-200 text-sm md:text-base leading-relaxed"
              :class="{ 'line-through opacity-70': isTaskCompleted(task) }"
            >
              {{ task.text }}
            </p>
            <div class="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-400">
              <span v-if="isTaskCompleted(task) && daysUntilReactivation(task) !== null">
                <template v-if="daysUntilReactivation(task) === 0">Reactivates today</template>
                <template v-else-if="daysUntilReactivation(task) === 1">1 day until reactivation</template>
                <template v-else>{{ daysUntilReactivation(task) }} days until reactivation</template>
              </span>
              <span v-else>Every {{ task.reactiveDays }} {{ task.reactiveDays === 1 ? 'day' : 'days' }}</span>
            </div>
          </div>
          <button
            type="button"
            class="btn-delete flex-shrink-0"
            aria-label="Delete task"
            @click="deleteTask(task.id)"
          >
            <Icon icon="heroicons:trash-20-solid" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useTasks } from '~/composables/useTasks';

definePageMeta({ title: 'Dashboard' });

const { tasks, loadFromLocalStorage, checkAndReactivateTasks, completeTask, deleteTask, isTaskCompleted, daysUntilReactivation } = useTasks();

onMounted(() => {
  loadFromLocalStorage();
  checkAndReactivateTasks();
});
</script>
