// import '../styles/Intro.css';
import avatar from '../img/avatar.png';
import curriculo from '../adilson-curriculo.pdf';
import { Containers, LinkButton, Texts } from '../styles';

function Intro() {
  const heightScreen = window.innerHeight;
  const colorPrimary = "#68FFB7";
  const colorSecondary = "#212121";

  return (
    <Containers.Intro style={{ height: heightScreen - 60 }}> 
      <Containers.Avatar $colorPrimary={colorPrimary}>
        <img src={avatar} alt="" width={200} />
      </Containers.Avatar>
      <Texts.Title $colorPrimary={colorPrimary}>
        {"</ADILSON GABRIEL>"}
      </Texts.Title>
      <Texts.Subtitle $colorPrimary={colorPrimary}>
        DESENVOLVEDOR WEB
      </Texts.Subtitle>
      <Containers.ButtonsIntro>
        <LinkButton
          as="a"
          href="#contato"
          $isPrimary
          $colorPrimary={colorPrimary}
          $colorSecondary={colorSecondary}
        >
          CONTATE-ME
        </LinkButton>
        <LinkButton
          as="a"
          href={curriculo} 
          target="_blank"
          rel="noreferrer"
          $colorPrimary={colorPrimary}
        >
          BAIXAR CV
        </LinkButton>
      </Containers.ButtonsIntro>
    </Containers.Intro>
  );
}

export default Intro;
