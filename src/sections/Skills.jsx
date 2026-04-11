import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data/portfolioData';
import { motion } from 'framer-motion';

const recruiterCaptions = {
    'AI & ML': 'Transformo dados em decisões e impacto real no produto.',
    'MLOps & Infra': 'Garanto deploy confiável, monitoramento e escala em produção.',
    Linguagens: 'Escrevo código limpo para acelerar entregas e manutenção.',
    Frameworks: 'Escolho as melhores ferramentas para entregar valor mais rápido.'
};

export default function Skills() {
    return (
        <SectionWrapper id="habilidades" title="Habilidades" subtitle="Stack técnica e competências que aplico em projetos reais.">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((group, i) => (
                    <motion.div key={group.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-soft-card dark:bg-soft-darkCard p-6 rounded-3xl border border-soft-text/5 dark:border-soft-darkText/10">
                        <h3 className="font-display font-semibold text-lg mb-4 text-brand-600 dark:text-brand-400">{group.category}</h3>
                        <p className="text-sm text-soft-text/75 dark:text-soft-darkText/75 mb-4">
                            {recruiterCaptions[group.category] || 'Experiência aplicada para gerar resultados de negócio.'}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full text-sm font-medium">{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
