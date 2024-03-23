import { useState, useEffect } from 'react';
import { getSettings, setColorsTheme } from '../services/firebase';
import { themeColors } from 'types/generics';
import type { aboutMeResponse, generalResponse } from 'types/settings.firebase';

export function useSettings() {
  const [loading, setLoading] = useState(true);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [general, setGeneral] = useState<generalResponse>();
  const [aboutMe, setAboutMe] = useState<aboutMeResponse>();

  async function fetchSettings() {
    try {
      const data = await getSettings();
      setGeneral(data.general);
      setAboutMe(data.aboutme);
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
    general,
    aboutMe,
    loading,
    loadingFetch,
    saveThemeColors,
  };
}
