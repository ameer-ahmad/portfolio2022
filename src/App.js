import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'
import Experience from './components/Experience'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
