import photoProfile from '../img/photo.jpg';
import { AboutMeSection } from '../styles/AboutMe';

function AboutMe() {
  return (
    <AboutMeSection id="sobre-mim">
      <div className="photoProfile">
        <div className="contPhoto">
          <img src={photoProfile} alt="" />
        </div>
      </div>
      <div className="infos">
        <h2>SOBRE MIM</h2>
        <p>
          Olá, eu sou o Adilson Gabriel, tenho 21 anos e sou da cidade de Parauapebas - Pará - Brasil. 
        </p>
        <p>
          Formado em Desenvolvimento Web pela Trybe, sou um aventureiro sempre em busca de novos desafios e de novos conhecimentos sobre o mundo da tecnologia. Gosto de jogos RPG, de muito café e de desenvolver projetos criativos e divertidos em equipe.
        </p>

        <h2>TECNOLOGIAS</h2>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Redux</span>
        <span>Context API</span>
        <span>Jest</span>
        <span>Firebase</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MySQL</span>
        <span>Typescript</span>
        <span>MongoDB</span>
      </div>
    </AboutMeSection>
  );
}

export default AboutMe;
