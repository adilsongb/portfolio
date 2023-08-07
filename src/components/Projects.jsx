import { useState } from 'react';
import DetailProject from './DetailProject';
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../styles/Projects.css';
import { useProjects } from '../hooks/useProjects';

function Projects() {
  const [viewDetailProject, setViewDP] = useState(false);
  const [projectDetail, setProject] = useState({});
  let isMobile = useMediaQuery('(max-width: 1300px)');
  const { projects, loadInitial } = useProjects();

  const heightScreen = window.innerHeight;

  const viewProject = (project) => {
    if (!viewDetailProject) {
      setViewDP(true);
      setProject(project)
    } else {
      setViewDP(false);
    }
  }

  const renderProjects = () => {
    if (loadInitial) {
      return (
        <>
          <div className="project" />
          <div className="project" />
          {!isMobile && <div className="project" />}
        </>
      )
    }

    return (
      projects.map((project, index) => (
        <div
          id={`project${index + 1}`} 
          className="project"
          onClick={() => viewProject(project)}
          key={index}
        >
          <div>
            <img src={project.images[0]} alt={project.description} />
          </div>
        </div>
      ))
    )
  }

  return (
    <section
      id="projetos"
      className="projects"
      style={isMobile ? {padding: '40px 0', height: 'auto'} : {height: heightScreen} }
    >
      <h2>PROJETOS</h2>
      <div className="cont-projects">
        {renderProjects()}
      </div>

      {viewDetailProject ? <DetailProject project={projectDetail} close={viewProject} /> : ''}
    </section>
  );
}

export default Projects;
