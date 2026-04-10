import { motion } from 'framer-motion';

export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-6xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-[0.14em] text-brand-600 dark:text-brand-300 mb-2">{title}</h2>
        {subtitle && <p className="text-soft-text/75 dark:text-soft-darkText/75 max-w-xl mx-auto">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}
