import { ref } from "vue";
const defaultSettings = {
  theme: {
    selectedTheme: "gothic",
    primaryColor: "#7B68A6",
    backgroundColor: "#0D0D0F",
    accentColor: "#2D2A38"
  }
};
const userSettings = ref(defaultSettings);
const useUserSettings = () => {
  const loadSettings = () => {
    return;
  };
  const saveSettings = () => {
    return;
  };
  const resetSettings = () => {
    userSettings.value = { ...defaultSettings };
  };
  const updateTheme = (theme) => {
    userSettings.value.theme = { ...userSettings.value.theme, ...theme };
  };
  const exportSettings = () => {
    return JSON.stringify(userSettings.value, null, 2);
  };
  const importSettings = (jsonStr) => {
    try {
      const parsed = JSON.parse(jsonStr);
      userSettings.value = { ...defaultSettings, ...parsed };
      saveSettings();
      return true;
    } catch {
      return false;
    }
  };
  return {
    userSettings,
    loadSettings,
    saveSettings,
    resetSettings,
    updateTheme,
    exportSettings,
    importSettings
  };
};
export {
  useUserSettings as u
};
//# sourceMappingURL=useUserSettings-Bvu9uI-b.js.map
