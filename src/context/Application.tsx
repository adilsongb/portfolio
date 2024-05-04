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
    header: '#000000',
    headerText: '#F5F5F5',
    primary: '#68FFB7',
    intermediary: '#282828',
    secondary: '#212121',
    textTitle: '#F5F5F5',
    textBox: '#3e3e3e',
  },
  showLogo: true,
  showSwitchTheme: true,
  isDarkMode: true,
  loading: false,
  loadingFetch: false,
  userAdmin: null,
  setComponents: () => {},
  saveComponentsConfig: () => {},
  setColors: () => {},
  saveThemeColors: () => {},
  changeTheme: () => {},
};

export const Application = createContext<ApplicationType>(DEFAULT_VALUES);

function ApplicationProvider({ children }: { children: ReactNode }) {
  const [appLoading, setAppLoading] = useState(true);
  const [themeColors, setThemeColors] = useState(DEFAULT_VALUES.theme);
  const [isDarkMode, setDarkMode] = useState(DEFAULT_VALUES.isDarkMode);
  const [themeSaved, setThemeSaved] = useState<themeColors>();
  const [components, setComponents] = useState({
    showLogo: DEFAULT_VALUES.showLogo,
    showSwitchTheme: DEFAULT_VALUES.showSwitchTheme,
  });
  const userAdmin = getUserAuth();

  const {
    general,
    aboutMe,
    loading,
    loadingFetch,
    saveThemeColors,
    saveComponentsConfig,
  } = useSettings();

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
      setComponents(general.components);

      setAppLoading(false);
    }
  }, [general, isDarkMode]);

  return (
    <Application.Provider
      value={{
        userAdmin,
        aboutMe,
        loading: appLoading || loading,
        loadingFetch,
        isDarkMode,
        showLogo: components.showLogo,
        showSwitchTheme: components.showSwitchTheme,
        setComponents,
        saveComponentsConfig,
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
