import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categories = ['Todos', ...new Set(projects.map(p => p.category))];

export default function Projects() {
    const [filter, setFilter] = useState('Todos');
    const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

    return (
        <SectionWrapper id="projetos" title="Projetos" subtitle="Soluções práticas em IA, automação e desenvolvimento.">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map(cat => (
                    <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${filter === cat ? 'bg-brand-500 text-white' : 'bg-soft-card dark:bg-soft-darkCard text-soft-text/70 hover:bg-brand-100 dark:hover:bg-brand-900/30'}`}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filtered.map(project => (
                        <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="group bg-soft-card dark:bg-soft-darkCard rounded-3xl overflow-hidden border border-soft-text/5 dark:border-soft-darkText/10 hover:shadow-xl hover:shadow-brand-500/10 transition">
                            <div className="h-48 bg-gradient-to-br from-brand-100 to-accent/20 flex items-center justify-center">
                                <span className="text-4xl">🤖</span>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-display font-semibold text-lg">{project.title}</h3>
                                    {project.featured && <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">Destaque</span>}
                                </div>
                                <p className="text-sm text-soft-text/70 dark:text-soft-darkText/70 mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.map(t => <span key={t} className="px-2 py-1 bg-soft-bg dark:bg-soft-darkBg text-xs rounded-md">{t}</span>)}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.live} target="_blank" className="flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline"><ExternalLink size={14} /> Live</a>
                                    <a href={project.repo} target="_blank" className="flex items-center gap-1 text-sm font-medium text-soft-text/70 hover:text-brand-600 dark:hover:text-brand-400 hover:underline"><FaGithub size={20} /> Código</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </SectionWrapper>
    );
}