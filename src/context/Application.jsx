import { createContext, useState, useEffect } from 'react';
import { useSettings } from '../hooks/useSettings';
import { ThemeProvider } from 'styled-components';
import { getUserAuth } from '../services/firebase';

export const Application = createContext();

function ApplicationProvider({ children }) {
  const [themeSaved, setThemeSaved] = useState();
  const [themeColors, setThemeColors] = useState({
    primary: '#68FFB7',
    intermediary: '#282828',
    secondary: '#212121',
    textTitle: '#F5F5F5',
    textBox: '#3e3e3e'
  });
  const [isDarkMode, setDarkMode] = useState(true);
  const userAdmin = getUserAuth();

  const {
    settings,
    loading,
    loadingFetch,
    saveThemeColors,
  } = useSettings();

  function changeTheme() {
    setDarkMode(!isDarkMode);
  }

  function setColors(colors) {
    setThemeColors(prev => ({...prev, ...colors}));
  }

  useEffect(() => {
    if (Object.keys(settings).length > 0) {
      const colors =
        isDarkMode ? settings.general.Colors.dark : settings.general.Colors.light;
      setThemeColors(colors);
      setThemeSaved(colors);
    }
  }, [settings, isDarkMode])

  return (
    <Application.Provider value={{
      userAdmin,
      loading,
      loadingFetch,
      isDarkMode,
      changeTheme, 
      setColors,
      saveThemeColors,
      themeSaved, // tema de cores salvo no firebase
      theme: themeColors,
    }}>
      <ThemeProvider theme={{ color: themeColors }}>
        {children}
      </ThemeProvider>
    </Application.Provider>
  );
}

export default ApplicationProvider;
