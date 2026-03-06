import { ref } from 'vue';

export interface UserSettings {
  theme: {
    selectedTheme?: string;
    primaryColor: string;
    backgroundColor: string;
    accentColor: string;
  };
}

const defaultSettings: UserSettings = {
  theme: {
    selectedTheme: 'gothic',
    primaryColor: '#7B68A6',
    backgroundColor: '#0D0D0F',
    accentColor: '#2D2A38',
  },
};

const userSettings = ref<UserSettings>(defaultSettings);

export const useUserSettings = () => {
  const loadSettings = () => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('lovelyReminder_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        userSettings.value = { ...defaultSettings, ...parsed };
      }
    } catch (error) {
      console.error('Error loading user settings:', error);
    }
  };

  const saveSettings = () => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('lovelyReminder_settings', JSON.stringify(userSettings.value));
    } catch (error) {
      console.error('Error saving user settings:', error);
    }
  };

  const resetSettings = () => {
    userSettings.value = { ...defaultSettings };
    saveSettings();
  };

  const updateTheme = (theme: Partial<UserSettings['theme']>) => {
    userSettings.value.theme = { ...userSettings.value.theme, ...theme };
    saveSettings();
  };

  const exportSettings = (): string => {
    return JSON.stringify(userSettings.value, null, 2);
  };

  const importSettings = (jsonStr: string): boolean => {
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
    importSettings,
  };
};
