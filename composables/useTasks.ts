import { ref } from 'vue';

export interface Task {
  id: string;
  text: string;
  reactiveDays: number;
  completedAt: number | null;
  createdAt: number;
}

const STORAGE_KEY = 'lovelyReminder_tasks';
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const tasks = ref<Task[]>([]);

const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export const useTasks = () => {
  const loadFromLocalStorage = () => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        tasks.value = JSON.parse(stored);
        checkAndReactivateTasks();
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveToLocalStorage = () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const checkAndReactivateTasks = () => {
    const now = Date.now();
    let changed = false;
    tasks.value = tasks.value.map((task: Task) => {
      if (task.completedAt === null) return task;
      const elapsedDays = (now - task.completedAt) / MS_PER_DAY;
      if (elapsedDays >= task.reactiveDays) {
        changed = true;
        return { ...task, completedAt: null };
      }
      return task;
    });
    if (changed) saveToLocalStorage();
  };

  const addTask = (text: string, reactiveDays: number) => {
    const task: Task = {
      id: generateId(),
      text,
      reactiveDays: Math.max(1, Math.min(365, reactiveDays)),
      completedAt: null,
      createdAt: Date.now(),
    };
    tasks.value.push(task);
    saveToLocalStorage();
    return task;
  };

  const completeTask = (taskId: string) => {
    const task = tasks.value.find((task: Task) => task.id === taskId);
    if (!task || task.completedAt !== null) return;
    task.completedAt = Date.now();
    saveToLocalStorage();
  };

  const deleteTask = (taskId: string) => {
    tasks.value = tasks.value.filter((t) => t.id !== taskId);
    saveToLocalStorage();
  };

  const isTaskCompleted = (task: Task): boolean => task.completedAt !== null;

  const daysUntilReactivation = (task: Task): number | null => {
    if (task.completedAt === null) return null;
    const now = Date.now();
    const elapsedDays = (now - task.completedAt) / MS_PER_DAY;
    if (elapsedDays >= task.reactiveDays) return 0;
    return Math.ceil(task.reactiveDays - elapsedDays);
  };

  return {
    tasks,
    loadFromLocalStorage,
    saveToLocalStorage,
    checkAndReactivateTasks,
    addTask,
    completeTask,
    deleteTask,
    isTaskCompleted,
    daysUntilReactivation,
  };
};
