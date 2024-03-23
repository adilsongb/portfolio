import { useApplication } from '@context/Application';
import { AboutMeSection } from '../styles/AboutMe';

function AboutMe() {
  const { aboutMe } = useApplication();

  return (
    <AboutMeSection id="sobre-mim">
      <div className="photoProfile">
        <div className="contPhoto">
          <img src={aboutMe.photo} alt="Foto de Adilson Gabriel" />
        </div>
      </div>
      <div className="infos">
        <h2>SOBRE MIM</h2>
        {aboutMe?.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <h2>TECNOLOGIAS</h2>
        {aboutMe?.technologies.map((tec, index) => (
          <span key={index}>{tec}</span>
        ))}
      </div>
    </AboutMeSection>
  );
}

export default AboutMe;
