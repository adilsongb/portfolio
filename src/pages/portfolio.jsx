import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import '../App.css';
import 'animate.css';

function Portfolio() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Projects />
        <AboutMe />
        <ContactMe />
      </main>
    </div>
  );
}

export default Portfolio;
