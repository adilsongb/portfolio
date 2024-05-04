import { useState, useEffect } from 'react';
import {
  getSettings,
  setColorsTheme,
  setComponentsConfig,
} from '../services/firebase';
import type { componentsConfig, themeColors } from 'types/generics';
import type { aboutMeResponse, generalResponse } from 'types/settings.firebase';
import { infoError } from '@utils/errors';

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
      infoError('fetchSettings');
    } finally {
      setLoading(false);
    }
  }

  function saveThemeColors(isDarkMode: boolean, theme: themeColors) {
    try {
      setLoadingFetch(true);
      setColorsTheme(isDarkMode, theme);
    } catch (error) {
      infoError('saveThemeColors');
    } finally {
      setLoadingFetch(false);
      fetchSettings();
    }
  }

  function saveComponentsConfig(componentsConfig: componentsConfig) {
    try {
      setLoadingFetch(true);
      setComponentsConfig(componentsConfig);
    } catch (error) {
      infoError('saveComponentsConfig');
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
    saveComponentsConfig,
  };
}
