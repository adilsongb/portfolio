import '../styles/DetailProject.css';
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function DetailProject({ project, close }) {
  const closeWindowProject = () => {
    const container = document.querySelector('.cont-projectDetail');
    const containerChild = document.querySelector('.projectDetail');
    container.style.animation = 'fadeOut';
    container.style.animationDuration = '0.5s';
    containerChild.style.animation = 'fadeOutDownBig';
    containerChild.style.animationDuration = '0.5s';
    setTimeout(() => close({}), 500);
  }

  return (
    <div className="cont-projectDetail">
      <div className="projectDetail">
        <div className="thumb">
          <button className="close-btn" onClick={closeWindowProject}>
            <IoMdClose />
          </button>
          <img src={project.images[0]} alt={project.title} />
        </div>
        <div className="content-infos">
          <div className="links">
            <a href={project.links.website} target="_blank" rel="noreferrer">
              <BiWorld />
            </a>
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <h4>TECNOLOGIAS USADAS</h4>
          {
            project.technologies.map((technologie, i) => (
              <span key={i}>{technologie}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default DetailProject;
