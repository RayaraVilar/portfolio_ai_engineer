import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <SectionWrapper id="sobre" title="Sobre Mim" subtitle="Conectando IA, UX e automação para criar experiências digitais inteligentes.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-soft-card dark:bg-soft-darkCard p-8 rounded-3xl shadow-sm border border-soft-text/10 dark:border-soft-darkText/10"
      >
        <p className="text-lg leading-relaxed mb-6 text-soft-text dark:text-soft-darkText">
          Sou AI Engineer com formação em Mídias Digitais e Sistemas para Internet. Minha abordagem combina{' '}
          <strong>rigor técnico em Python e Machine Learning</strong> com visão centrada no usuário, vinda do meu background em UX/UI.
        </p>
        <p className="text-lg leading-relaxed mb-6 text-soft-text/90 dark:text-soft-darkText/90">
          Desenvolvo agentes inteligentes, pipelines de RAG e automações com APIs de IA, priorizando escalabilidade, clean code e interfaces claras.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            ['15+', 'Projetos de IA e Python'],
            ['2', 'Graduações'],
            ['Python', 'Linguagem Principal'],
            ['UX + IA', 'Soluções Humanizadas']
          ].map(([n, l]) => (
            <div key={l} className="text-center p-4 bg-brand-50 dark:bg-brand-900/15 rounded-2xl border border-brand-200/60 dark:border-brand-700/20">
              <span className="block text-2xl font-bold text-orange-600 dark:text-orange-300">{n}</span>
              <span className="text-sm text-soft-text/85 dark:text-soft-darkText/85">{l}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
