import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <SectionWrapper id="sobre" title="Sobre Mim" subtitle="Conectando IA, UX e automação para criar experiências digitais inteligentes.">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-soft-card dark:bg-soft-darkCard p-8 rounded-3xl shadow-sm border border-soft-text/5 dark:border-soft-darkText/10">
                <p className="text-lg leading-relaxed mb-6">
                    Sou Engenheira de IA com formação em Mídias Digitais e Sistemas para Internet. Minha abordagem combina <strong>rigor técnico em Python e Machine Learning</strong> com uma visão centrada no usuário, herdada do meu background em UX/UI.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                    Atuo no desenvolvimento de agentes inteligentes, pipelines de RAG e automações com APIs de IA (OpenAI), sempre priorizando escalabilidade, clean code e interfaces intuitivas. Acredito que a tecnologia deve ser acessível, elegante e resolver problemas reais.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[['5+', 'Projetos de IA'], ['2', 'Graduações'], ['Python', 'Linguagem Principal'], ['UX', 'Foco no Usuário']].map(([n, l]) => (
                        <div key={l} className="text-center p-4 bg-brand-50 dark:bg-brand-900/20 rounded-2xl">
                            <span className="block text-2xl font-bold text-brand-600 dark:text-brand-400">{n}</span>
                            <span className="text-sm text-soft-text/70 dark:text-soft-darkText/70">{l}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </SectionWrapper>
    );
}