import { createContext, useState, useEffect } from 'react';
import { useSettings } from '../hooks/useSettings';
import { ThemeProvider } from 'styled-components';

export const Application = createContext();

function ApplicationProvider({ children }) {
  const [themeColors, setThemeColors] = useState({
    primary: '#68FFB7',
    intermediary: '#282828',
    secondary: '#212121',
    textTitle: '#F5F5F5',
    textBox: '#3e3e3e'
  });
  const [isDarkMode, setDarkMode] = useState(true);

  const heightScreen = window.innerHeight;

  const { settings, loadInitial } = useSettings();

  function changeTheme() {
    setDarkMode(!isDarkMode);
  }

  useEffect(() => {
    if (Object.keys(settings).length > 0) {
      setThemeColors(isDarkMode ? settings.general.Colors.dark : settings.general.Colors.light);
    }
  }, [settings, isDarkMode])

  return (
    <Application.Provider value={{
      loading: loadInitial,
      isDarkMode,
      heightScreen: `${heightScreen}px`,
      changeTheme,
    }}>
      <ThemeProvider theme={{ color: themeColors }}>
        {children}
      </ThemeProvider>
    </Application.Provider>
  );
}

export default ApplicationProvider;
