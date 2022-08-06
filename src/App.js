import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
