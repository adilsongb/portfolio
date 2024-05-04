import avatar from '../img/avatar.jpg';
import curriculo from '../adilson-curriculo.pdf';
import { Containers, LinkButton, Texts } from '../styles';

function Intro() {
  return (
    <Containers.Intro>
      <Containers.Avatar>
        <img src={avatar} alt="Avatar" width={200} />
      </Containers.Avatar>
      <Texts.Title>{'</ADILSON GABRIEL>'}</Texts.Title>
      <Texts.Subtitle>Desenvolvedor Full Stack</Texts.Subtitle>
      <Containers.ButtonsIntro>
        <LinkButton as="a" href="#contato" $isPrimary>
          Contate-me
        </LinkButton>
        <LinkButton as="a" href={curriculo} target="_blank" rel="noreferrer">
          Ver Currículo
        </LinkButton>
      </Containers.ButtonsIntro>
    </Containers.Intro>
  );
}

export default Intro;
