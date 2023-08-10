import { useState, useEffect } from 'react';
import { getSettings } from '../services/firebase';

export function useSettings() {
  const [loadInitial, setLoadInitial] = useState(true);
  const [settings, setSettings] = useState({});

  async function getSettingsDB() {
    try {
      const data = await getSettings();
      setSettings(data);
    } catch (error) {
      console.error('Error ao fazer a requisição no firebase!');
    } finally {
      setLoadInitial(false);
    }
  }

  function getColors(isDarkMode) {
    const colors = settings.general.Colors;
    return isDarkMode ? colors.dark : colors.light;
  }

  useEffect(() => {
    getSettingsDB();
  }, []);

  return { settings, loadInitial, getColors };
}
