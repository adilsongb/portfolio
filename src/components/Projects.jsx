import projects from '../projects/projects';
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../styles/Projects.css';
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function Projects() {
  let isMobile = useMediaQuery('(max-width: 1300px)');
  const heightScreen = window.innerHeight;

  return (
    <section
      id="projetos"
      className="projects"
      style={ isMobile ? { padding: '40px 0', height: 'auto' } : { height: heightScreen } }
    >
      <h2>PROJETOS</h2>
      <div className="cont-projects">
        {
          projects.map((project, index) => (
            <div
              id={ `project${index + 1}` } 
              className="project"
              key={ index }
            >
              <div>
                <div className="details">
                  <a href={ project.links.deploy } target="_blank" rel="noreferrer">
                    <BiWorld /> Website
                  </a>
                  <a href={ project.links.github } target="_blank" rel="noreferrer">
                    <BsGithub /> GitHub
                  </a>
                </div>
                <img src={ project.thumb } alt={ project.description } />
              </div>
            </div>
          ))
        }
      </div>

      {/* <div className="projectDetail">
        detalhes do projeto
      </div> */}
    </section>
  );
}

export default Projects;
