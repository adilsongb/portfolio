import avatar from '../img/avatar.png';
import curriculo from '../adilson-curriculo.pdf';
import { Containers, LinkButton, Texts } from '../styles';

function Intro() {
  const heightScreen = window.innerHeight;

  return (
    <Containers.Intro style={{ height: heightScreen - 60 }}> 
      <Containers.Avatar>
        <img src={avatar} alt="" width={200} />
      </Containers.Avatar>
      <Texts.Title>
        {"</ADILSON GABRIEL>"}
      </Texts.Title>
      <Texts.Subtitle>
        DESENVOLVEDOR WEB
      </Texts.Subtitle>
      <Containers.ButtonsIntro>
        <LinkButton
          as="a"
          href="#contato"
          $isPrimary
        >
          CONTATE-ME
        </LinkButton>
        <LinkButton
          as="a"
          href={curriculo} 
          target="_blank"
          rel="noreferrer"
        >
          BAIXAR CV
        </LinkButton>
      </Containers.ButtonsIntro>
    </Containers.Intro>
  );
}

export default Intro;
