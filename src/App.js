import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div>
      <Home />
      <NavBar />
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
