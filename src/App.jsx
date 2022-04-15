import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import './App.css';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro />
        <Projects />
      </main>
    </div>
  );
}

export default App;
