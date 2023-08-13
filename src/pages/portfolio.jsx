import { useContext } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import 'animate.css';
import { Application } from '../context/Application';
import { Loading } from '../styles/Loading';
import { Containers } from '../styles';

function Portfolio() {
  const { loading } = useContext(Application);

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
    </>
  );
}

export default Portfolio;
