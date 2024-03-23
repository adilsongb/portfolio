import { useState, useEffect } from 'react';
import { getSettings, setColorsTheme } from '../services/firebase';
import { themeColors } from 'types/generics';
import { generalResponse } from 'types/settings.firebase';

export function useSettings() {
  const [loading, setLoading] = useState(true);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [settings, setSettings] = useState({});
  const [general, setGeneral] = useState<generalResponse>();

  async function fetchSettings() {
    try {
      const data = await getSettings();
      setSettings(data);
      setGeneral(data.general);
    } catch (error) {
      console.error('Error ao fazer a requisição no firebase!');
    } finally {
      setLoading(false);
    }
  }

  function saveThemeColors(isDarkMode: boolean, theme: themeColors) {
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
    general,
    loading,
    loadingFetch,
    saveThemeColors,
  };
}
