import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-soft-bg dark:bg-soft-darkBg">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <footer className="py-8 text-center text-sm text-soft-text/70 dark:text-soft-darkText/60 border-t border-soft-text/10 dark:border-soft-darkText/10">
          © {new Date().getFullYear()} Rayara de Andrade Vilar.
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
