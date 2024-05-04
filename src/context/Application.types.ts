import type { User } from 'firebase/auth';
import type { componentsConfig, themeColors } from 'types/generics';
import type { aboutMeResponse } from 'types/settings.firebase';

export type ApplicationType = {
  theme: themeColors;
  isDarkMode: boolean;
  showLogo: boolean;
  showSwitchTheme: boolean;
  loading: boolean;
  loadingFetch: boolean;
  setComponents: (components: componentsConfig) => void;
  saveComponentsConfig: (components: componentsConfig) => void;
  setColors: (colors: themeColors) => void;
  changeTheme: () => void;
  saveThemeColors: (isDarkMode: boolean, theme: themeColors) => void;
  userAdmin: User | null;
  aboutMe?: aboutMeResponse;
  themeSaved?: themeColors;
};
