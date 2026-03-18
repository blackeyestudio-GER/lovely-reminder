<template>
  <div class="bg-eerie-black rounded-lg p-4 md:p-6 shadow-md max-w-xl mx-auto">
    <h2 class="text-xl md:text-2xl font-bold text-gray-100 mb-4">Add Task</h2>

    <form class="flex flex-col gap-4" @submit.prevent="submit">
      <div>
        <label for="task-text" class="block text-sm font-semibold text-gray-200 mb-2">Task</label>
        <input
          id="task-text"
          v-model="text"
          type="text"
          required
          placeholder="e.g. Water the plants"
          class="w-full px-4 py-2 rounded-lg border-2 bg-night text-gray-200 placeholder-gray-500"
          :style="{ borderColor: 'var(--color-border)' }"
        >
      </div>

      <div>
        <label for="reactive-days" class="block text-sm font-semibold text-gray-200 mb-2">
          Reactive timer (days until task reappears)
        </label>
        <input
          id="reactive-days"
          v-model.number="reactiveDays"
          type="number"
          min="1"
          max="365"
          class="w-full px-4 py-2 rounded-lg border-2 bg-night text-gray-200"
          :style="{ borderColor: 'var(--color-border)' }"
        >
        <p class="text-xs text-gray-400 mt-1">When you check this task, it will uncheck after this many days.</p>
      </div>

      <div class="flex gap-3 mt-2">
        <button type="submit" class="btn-primary px-5 py-2 inline-flex items-center">
          <Icon icon="heroicons:plus-20-solid" class="w-5 h-5 mr-2" />
          Add Task
        </button>
        <NuxtLink to="/" class="btn-neutral px-5 py-2 inline-flex items-center">
          Cancel
        </NuxtLink>
      </div>
    </form>

    <!-- Task suggestions accordion -->
    <div class="mt-6 border rounded-lg overflow-hidden" :style="{ borderColor: 'var(--color-border)' }">
      <p class="text-xs text-gray-400 px-3 py-2 bg-night">Click a suggestion to copy it into the task field – adapt it if you like.</p>
      <div v-for="(section, idx) in suggestionSections" :key="section.title" class="border-b last:border-b-0" :style="{ borderColor: 'var(--color-border)' }">
        <button
          type="button"
          class="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-gray-200 hover:bg-gray-700/50 transition-colors"
          @click="expandedSection = expandedSection === idx ? null : idx"
        >
          <span>{{ section.title }}</span>
          <Icon :icon="expandedSection === idx ? 'heroicons:chevron-up-20-solid' : 'heroicons:chevron-down-20-solid'" class="w-5 h-5 flex-shrink-0" />
        </button>
        <div v-show="expandedSection === idx" class="px-4 pb-3">
          <ul class="space-y-1.5">
            <li
              v-for="(item, i) in section.items"
              :key="i"
              role="button"
              tabindex="0"
              class="text-sm text-gray-300 py-2 px-3 rounded cursor-pointer hover:bg-gray-700/50 transition-colors border-l-2 pl-3 -ml-px"
              :style="{ borderLeftColor: 'var(--color-primary)' }"
              @click="useSuggestion(item.text, section.days)"
              @keydown.enter="useSuggestion(item.text, section.days)"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useTasks } from '~/composables/useTasks';

definePageMeta({ title: 'Add Task' });

const router = useRouter();
const { addTask } = useTasks();

const text = ref('');
const reactiveDays = ref(7);
const expandedSection = ref<number | null>(null);

const suggestionSections = [
  {
    title: 'Daily',
    days: 1,
    items: [
      { text: 'Ask once honestly about their day ("What was your highlight today?")' },
      { text: 'Share a small moment from your own everyday life.' },
      { text: 'React attentively to things they share.' },
      { text: 'Be kind and respectful in tone – even when you\'re stressed.' },
      { text: 'Show small appreciation ("That sounds like an exhausting day").' },
    ],
  },
  {
    title: 'Several times per week',
    days: 2,
    items: [
      { text: 'Give an honest compliment (not just appearance, also personality).' },
      { text: 'Send something that reminds you of them (meme, song, image, article).' },
      { text: 'Show humor or playfully tease them.' },
      { text: 'Ask about things that matter to them (hobbies, projects, interests).' },
    ],
  },
  {
    title: '1–2 times per week',
    days: 5,
    items: [
      { text: 'Plan quality time together (date, film, game, walk).' },
      { text: 'Talk about things you want to experience together.' },
      { text: 'Show physical closeness or affection (hug, hold hands, etc., when appropriate).' },
    ],
  },
  {
    title: 'Weekly',
    days: 7,
    items: [
      { text: 'Have a conversation without distractions (no phone on the side).' },
      { text: 'Say consciously that you appreciate the time together.' },
      { text: 'Ask if something is stressing them or if they need support.' },
    ],
  },
  {
    title: 'Occasionally (every few weeks)',
    days: 14,
    items: [
      { text: 'Make a small surprising gesture (favourite snack, coffee, message).' },
      { text: 'Remember things they mentioned (e.g. an event or project).' },
      { text: 'Plan something new together (trip, restaurant, activity).' },
    ],
  },
];

const useSuggestion = (suggestionText: string, days: number) => {
  text.value = suggestionText;
  reactiveDays.value = days;
};

const submit = () => {
  if (!text.value.trim()) return;
  addTask(text.value.trim(), reactiveDays.value);
  text.value = '';
  router.push('/');
};
</script>
