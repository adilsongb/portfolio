import { useState, useEffect } from 'react';
import { getProjects } from '../services/firebase';
import { infoError } from '@utils/errors';

export function useProjects() {
  const [loadInitial, setLoadInitial] = useState(true);
  const [projects, setProjects] = useState([]);

  async function getProjectsDB() {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      infoError('getProjectsDB');
    } finally {
      setLoadInitial(false);
    }
  }

  useEffect(() => {
    getProjectsDB();
  }, []);

  return { projects, loadInitial };
}
