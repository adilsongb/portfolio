/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { useSettings } from '../hooks/useSettings';
import { ThemeProvider } from 'styled-components';
import { getUserAuth } from '../services/firebase';
import type { ApplicationType } from './Application.types';
import { themeColors } from 'types/generics';

const DEFAULT_VALUES = {
  theme: {
    primary: '#68FFB7',
    intermediary: '#282828',
    secondary: '#212121',
    textTitle: '#F5F5F5',
    textBox: '#3e3e3e',
  },
  isDarkMode: true,
  loading: false,
  loadingFetch: false,
  userAdmin: null,
  setColors: () => {},
  saveThemeColors: () => {},
  changeTheme: () => {},
};

export const Application = createContext<ApplicationType>(DEFAULT_VALUES);

function ApplicationProvider({ children }: { children: ReactNode }) {
  const [themeColors, setThemeColors] = useState(DEFAULT_VALUES.theme);
  const [isDarkMode, setDarkMode] = useState(DEFAULT_VALUES.isDarkMode);
  const [themeSaved, setThemeSaved] = useState<themeColors>();
  const userAdmin = getUserAuth();

  const { general, aboutMe, loading, loadingFetch, saveThemeColors } =
    useSettings();

  function changeTheme() {
    setDarkMode(!isDarkMode);
  }

  function setColors(colors: themeColors) {
    setThemeColors((prev) => ({ ...prev, ...colors }));
  }

  useEffect(() => {
    if (general) {
      const colors = isDarkMode ? general.Colors.dark : general.Colors.light;
      setThemeColors(colors);
      setThemeSaved(colors);
    }
  }, [general, isDarkMode]);

  return (
    <Application.Provider
      value={{
        userAdmin,
        aboutMe,
        loading,
        loadingFetch,
        isDarkMode,
        changeTheme,
        setColors,
        saveThemeColors,
        themeSaved,
        theme: themeColors,
      }}
    >
      <ThemeProvider theme={{ color: themeColors }}>{children}</ThemeProvider>
    </Application.Provider>
  );
}

export const useApplication = () => {
  const applicationContext = useContext(Application);
  if (!applicationContext) {
    throw new Error('useApplication must be used within a ApplicationProvider');
  }
  return applicationContext;
};

export default ApplicationProvider;
