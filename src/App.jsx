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
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <footer className="py-8 text-center text-sm text-soft-text/50 dark:text-soft-darkText/50 border-t border-soft-text/5 dark:border-soft-darkText/10">
          © {new Date().getFullYear()} Rayara de Andrade Vilar. Feito com 💜 e IA.
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;