import { createContext, useState, useEffect } from 'react';
import { useSettings } from '../hooks/useSettings';
import { ThemeProvider } from 'styled-components';

export const Application = createContext();

function ApplicationProvider({ children }) {
  const [themeColors, setThemeColors] = useState({
    primary: '#68FFB7',
    intermediary: '#282828',
    secondary: '#212121',
    text: '#F5F5F5'
  });

  const heightScreen = window.innerHeight;

  const { settings, loadInitial } = useSettings();

  useEffect(() => {
    if (Object.keys(settings).length > 0) {
      setThemeColors(settings.general.Colors.dark);
    }
  }, [settings])

  return (
    <Application.Provider value={{
      loading: loadInitial,
      heightScreen: `${heightScreen}px`,
    }}>
      <ThemeProvider theme={{ color: themeColors }}>
        {children}
      </ThemeProvider>
    </Application.Provider>
  );
}

export default ApplicationProvider;
