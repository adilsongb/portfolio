import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import { useApplication } from '../context/Application';
import { Loading } from '../styles/Loading';
import { Containers } from '../styles';
import PaineAdmin from '../components/PainelAdmin';
import 'animate.css';

function Portfolio() {
  const { loading, userAdmin } = useApplication();

  if (loading) {
    return (
      <main>
        <Containers.FullScreen>
          <Loading />
        </Containers.FullScreen>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>

      {!!userAdmin && <PaineAdmin />}
    </>
  );
}

export default Portfolio;
