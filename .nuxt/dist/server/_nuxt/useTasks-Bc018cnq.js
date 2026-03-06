import { ref } from "vue";
const MS_PER_DAY = 24 * 60 * 60 * 1e3;
const tasks = ref([]);
const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
const useTasks = () => {
  const loadFromLocalStorage = () => {
    return;
  };
  const saveToLocalStorage = () => {
    return;
  };
  const checkAndReactivateTasks = () => {
    const now = Date.now();
    tasks.value = tasks.value.map((task) => {
      if (task.completedAt === null) return task;
      const elapsedDays = (now - task.completedAt) / MS_PER_DAY;
      if (elapsedDays >= task.reactiveDays) {
        return { ...task, completedAt: null };
      }
      return task;
    });
  };
  const addTask = (text, reactiveDays) => {
    const task = {
      id: generateId(),
      text,
      reactiveDays: Math.max(1, Math.min(365, reactiveDays)),
      completedAt: null,
      createdAt: Date.now()
    };
    tasks.value.push(task);
    return task;
  };
  const completeTask = (taskId) => {
    const task = tasks.value.find((t) => t.id === taskId);
    if (!task || task.completedAt !== null) return;
    task.completedAt = Date.now();
  };
  const deleteTask = (taskId) => {
    tasks.value = tasks.value.filter((t) => t.id !== taskId);
  };
  const isTaskCompleted = (task) => task.completedAt !== null;
  const daysUntilReactivation = (task) => {
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
    daysUntilReactivation
  };
};
export {
  useTasks as u
};
//# sourceMappingURL=useTasks-Bc018cnq.js.map
