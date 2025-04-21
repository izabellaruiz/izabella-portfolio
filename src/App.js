import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Degree from './components/Degree';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Bag from './components/Bag';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Degree />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Bag />
        <Footer />
      </main>
    </div>
  );
}

export default App;
