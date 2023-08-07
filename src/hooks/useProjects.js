import { useState, useEffect } from 'react';
import { getProjects } from '../services/firebase';

export function useProjects() {
  const [loadInitial, setLoadInitial] = useState(true);
  const [projects, setProjects] = useState([]);

  async function getProjectsDB() {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error ao fazer a requisição no firebase!');
    } finally {
      setLoadInitial(false);
    }
  }

  useEffect(() => {
    getProjectsDB();
  }, []);

  return { projects, loadInitial };
}
