import { useMemo, useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const categories = ['Todos', ...new Set(projects.map((p) => p.category))];
const INITIAL_VISIBLE = 6;

export default function Projects() {
  const [filter, setFilter] = useState('Todos');
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const visibleProjects = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = filtered.length > INITIAL_VISIBLE;

  const handleFilter = (category) => {
    setFilter(category);
    setShowAll(false);
  };

  return (
    <SectionWrapper
      id="projetos"
      title="Projetos"
      subtitle="Mais de 15 projetos de IA e Python. Exibindo 6 por padrão para navegação mais leve."
    >
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              filter === cat
                ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
                : 'bg-soft-card dark:bg-soft-darkCard text-soft-text/90 dark:text-soft-darkText/90 hover:bg-orange-100 dark:hover:bg-purple-900/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group bg-soft-card dark:bg-soft-darkCard rounded-3xl overflow-hidden border border-soft-text/10 dark:border-soft-darkText/10 hover:shadow-xl hover:shadow-purple-500/10 transition"
            >
              <div className="h-44 bg-gradient-to-br from-orange-100 via-orange-50 to-purple-100 dark:from-orange-500/15 dark:to-purple-500/20 flex items-center justify-center text-5xl">
                <span>{project.icon || '🚀'}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2 gap-3">
                  <h3 className="font-display font-semibold text-lg text-soft-text dark:text-soft-darkText">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-orange-500/10 text-orange-700 dark:text-orange-300 text-xs rounded-full whitespace-nowrap">
                      Destaque
                    </span>
                  )}
                </div>
                <p className="text-sm text-soft-text/85 dark:text-soft-darkText/80 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-soft-bg dark:bg-soft-darkBg text-xs text-soft-text dark:text-soft-darkText rounded-md border border-soft-text/10 dark:border-soft-darkText/10">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-semibold text-purple-700 dark:text-purple-300 hover:underline">
                    <ExternalLink size={14} /> Live
                  </a>
                  <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-semibold text-soft-text/80 dark:text-soft-darkText/80 hover:text-orange-600 dark:hover:text-orange-300 hover:underline">
                    <FaGithub size={16} /> Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-3 rounded-full font-semibold bg-soft-card dark:bg-soft-darkCard border border-soft-text/15 dark:border-soft-darkText/20 hover:border-orange-400 dark:hover:border-orange-300 transition"
          >
            {showAll ? 'Ver menos' : `Ver mais (${filtered.length - INITIAL_VISIBLE})`}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
