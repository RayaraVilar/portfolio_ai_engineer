import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = ['Sobre', 'Habilidades', 'Projetos', 'Trajetória', 'Contato'];

const getSectionHref = (label) => `#${label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '')}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const cvLink = import.meta.env.VITE_CV_LINK || '#';

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <nav className="fixed top-0 w-full z-50 bg-soft-bg/85 dark:bg-soft-darkBg/85 backdrop-blur-xl border-b border-soft-text/10 dark:border-soft-darkText/15">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <a href="#" className="font-display font-bold text-lg md:text-xl text-orange-600 dark:text-purple-300 tracking-wide">
          Rayara Ai engineer
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={getSectionHref(l)}
              className="text-sm font-semibold text-soft-text/90 dark:text-soft-darkText/90 hover:text-orange-500 dark:hover:text-orange-300 transition-colors"
            >
              {l}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-soft-text/15 dark:border-soft-darkText/15 hover:bg-orange-100 dark:hover:bg-purple-900/30 transition"
            aria-label="Alternar tema"
            title="Alternar tema"
          >
            {isDark ? <Sun size={18} className="text-orange-300" /> : <Moon size={18} className="text-purple-700" />}
          </button>

          <a
            href={cvLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-full text-sm font-semibold transition"
          >
            Baixar currículo
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-soft-card dark:bg-soft-darkCard border-t border-soft-text/10 p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l}
              href={getSectionHref(l)}
              className="text-sm font-medium text-soft-text dark:text-soft-darkText"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <div className="flex gap-3 pt-1">
            <button onClick={toggleTheme} className="px-3 py-2 rounded-lg border border-soft-text/15 dark:border-soft-darkText/15 text-sm font-medium">
              {isDark ? 'Modo claro' : 'Modo escuro'}
            </button>
            <a href={cvLink} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium transition">
              Baixar currículo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
