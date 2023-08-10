import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import 'animate.css';

function Portfolio() {
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
