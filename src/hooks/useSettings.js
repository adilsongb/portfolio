import { useState, useEffect } from 'react';
import { getSettings, setColorsTheme } from '../services/firebase';

export function useSettings() {
  const [loading, setLoading] = useState(true);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [settings, setSettings] = useState({});

  async function fetchSettings() {
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (error) {
      console.error('Error ao fazer a requisição no firebase!');
    } finally {
      setLoading(false);
    }
  }

  function saveThemeColors(isDarkMode, theme) {
    try {
      setLoadingFetch(true);
      setColorsTheme(isDarkMode, theme);
    } catch (error) {
      console.error('Error ao fazer a requisição no firebase!');
    } finally {
      setLoadingFetch(false);
      fetchSettings();
    }
  }

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    loadingFetch,
    saveThemeColors,
  };
}
