import { useRef } from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { ProjectModal } from '../styles/Projects';

type projectType = {
  images: string[];
  title: string;
  links: {
    website: string;
    github: string;
  };
  description: string;
  technologies: string[];
};

function DetailProject({
  project,
  close,
}: {
  project: projectType;
  close: (project: projectType | null) => void;
}) {
  const modal = useRef<HTMLDivElement>(null);

  const closeWindowProject = () => {
    if (!modal.current) return;
    const container = modal.current;
    const containerChild = modal.current.querySelector(
      '.projectDetail',
    ) as HTMLElement | null;

    if (!containerChild?.style) return;

    const containerStyle = container.style;
    const containerChildStyle = containerChild.style;

    containerStyle.animation = 'fadeOut';
    containerStyle.animationDuration = '0.5s';
    containerChildStyle.animation = 'fadeOutDownBig';
    containerChildStyle.animationDuration = '0.5s';
    setTimeout(() => close(null), 200);
  };

  return (
    <ProjectModal ref={modal}>
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
          {project.technologies.map((technologie, i) => (
            <span key={i}>{technologie}</span>
          ))}
        </div>
      </div>
    </ProjectModal>
  );
}

export default DetailProject;
