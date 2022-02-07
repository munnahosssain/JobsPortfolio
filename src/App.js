import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
