import Header from '../components/Header';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import 'animate.css';
import { useSettings } from '../hooks/useSettings';

function Portfolio() {
  const { settings, loadInitial } = useSettings();

  // if (loadInitial) {
  //   return (
  //     <div className="App">
  //       <main>
  //       </main>
  //     </div>
  //   );
  // }

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
