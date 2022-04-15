import '../styles/Intro.css';
import avatar from '../img/avatar.png';
import curriculo from '../adilson-curriculo.pdf';

function Intro() {
  const heightScreen = window.innerHeight;

  return (
    <section className="intro" style={{ height: heightScreen - 60 }}>
      <div className="cont-avatar">
        <img src={avatar} alt="" width={200} />
      </div>
      <h1>{"</ADILSON GABRIEL>"}</h1>
      <h2>DESENVOLVEDOR WEB</h2>
      <div className="btns-intro">
        <a href="#contato">CONTATE-ME</a>
        <a href={ curriculo } target="_blank" rel="noreferrer">BAIXAR CV</a>
      </div>
    </section>
  );
}

export default Intro;
