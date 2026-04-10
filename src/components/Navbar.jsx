import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const links = ['Sobre', 'Habilidades', 'Projetos', 'Trajetória', 'Contato'];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <nav className="fixed top-0 w-full z-50 bg-soft-bg/80 dark:bg-soft-darkBg/80 backdrop-blur-md border-b border-soft-text/5 dark:border-soft-darkText/10">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
                <Link to="/" className="font-display font-bold text-xl text-brand-600 dark:text-brand-400">Rayara.dev</Link>

                <div className="hidden md:flex items-center gap-6">
                    {links.map(l => (
                        <a key={l} href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '')}`} className="text-sm font-medium hover:text-brand-500 transition-colors">{l}</a>
                    ))}
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="p-2 rounded-full hover:bg-soft-text/10">
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <a href={import.meta.env.VITE_CV_LINK || '#'} target="_blank" className="px-4 py-2 bg-brand-500 text-white rounded-full text-sm font-medium hover:bg-brand-600 transition">Baixar CV</a>
                </div>

                <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-soft-card dark:bg-soft-darkCard border-t border-soft-text/10 p-4 flex flex-col gap-4">
                    {links.map(l => (
                        <a key={l} href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '')}`} className="text-sm font-medium" onClick={() => setOpen(false)}>{l}</a>
                    ))}
                </div>
            )}
        </nav>
    );
}