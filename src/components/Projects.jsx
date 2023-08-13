import { useState } from 'react';
import DetailProject from './DetailProject';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useProjects } from '../hooks/useProjects';
import { ProjectsSection, ProjectsList } from '../styles/Projects';

function Projects() {
  const [viewDetailProject, setViewDP] = useState(false);
  const [projectDetail, setProject] = useState({});
  let isMobile = useMediaQuery('(max-width: 1200px)');
  const { projects, loadInitial } = useProjects();

  const heightScreen = window.innerHeight;

  const viewProject = (project) => {
    if (!viewDetailProject) {
      document.body.style.overflowY = 'hidden'
      setViewDP(true);
      setProject(project)
    } else {
      document.body.style.overflowY = 'auto'
      setViewDP(false);
    }
  }

  const renderProjects = () => {
    if (loadInitial) {
      return (
        <>
          <div className="project" />
          <div className="project" />
          <div className="project" />
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
    <ProjectsSection style={isMobile ? { padding: '40px 0', height: 'auto' } : { height: heightScreen } }>
      <h2>PROJETOS</h2>
      <ProjectsList>
        {renderProjects()}
      </ProjectsList>
      {viewDetailProject && <DetailProject project={projectDetail} close={viewProject} />}
    </ProjectsSection>
  );
}

export default Projects;
