import SectionWrapper from '../components/SectionWrapper';
import { timeline } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

// Mapeamento de ícones
const iconMap = {
    education: GraduationCap,
    cert: Award,
    exp: Briefcase
};

export default function Timeline() {
    return (
        <SectionWrapper id="trajetoria" title="Trajetória" subtitle="Formação acadêmica, certificações e experiência prática.">
            <div className="relative border-l-2 border-brand-200 dark:border-brand-800 ml-4 md:ml-6 space-y-8">
                {timeline.map((item, i) => {
                    // ✅ Atribui o ícone a uma variável com letra maiúscula
                    const Icon = iconMap[item.type] || Briefcase;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 md:pl-10"
                        >
                            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-brand-500 rounded-full border-4 border-soft-bg dark:border-soft-darkBg" />
                            <span className="text-sm font-medium text-brand-600 dark:text-brand-400">{item.year}</span>
                            <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
                            <p className="text-soft-text/70 dark:text-soft-darkText/70 flex items-center gap-2 mt-1">
                                {/* ✅ Usa a variável Icon (com maiúscula) como componente */}
                                <Icon size={16} className="text-brand-500" /> {item.org}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}