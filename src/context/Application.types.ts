import type { User } from 'firebase/auth';
import { themeColors } from 'types/generics';
import { aboutMeResponse } from 'types/settings.firebase';

export type ApplicationType = {
  theme: themeColors;
  isDarkMode: boolean;
  loading: boolean;
  loadingFetch: boolean;
  setColors: (colors: themeColors) => void;
  changeTheme: () => void;
  saveThemeColors: (isDarkMode: boolean, theme: themeColors) => void;
  userAdmin: User | null;
  aboutMe?: aboutMeResponse;
  themeSaved?: themeColors;
};
