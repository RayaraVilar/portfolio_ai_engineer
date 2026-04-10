import { motion } from 'framer-motion';
import { ArrowDown, Mail, Cpu, Code2, Bot } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import avatar from '../assets/avatar-rayara.png';

const floatingTags = [
  { icon: Cpu, label: 'AI', className: '-left-4 top-8' },
  { icon: Code2, label: '</>', className: 'right-2 top-6' },
  { icon: Bot, label: 'Python', className: '-right-4 bottom-10' }
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto relative">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 bg-brand-100/70 dark:bg-brand-900/25 text-brand-700 dark:text-brand-300 rounded-full text-sm font-semibold mb-5 border border-brand-200/60 dark:border-brand-800/40">
            👋 Olá, sou a Rayara
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4 text-soft-text dark:text-soft-darkText">
            AI ENGINEER COM FOCO EM <span className="text-brand-600 dark:text-brand-300">PYTHON & IA APLICADA</span>
          </h1>
          <p className="text-lg md:text-xl text-soft-text/85 dark:text-soft-darkText/85 mb-7 max-w-xl leading-relaxed">
            Crio soluções modernas e divertidas com LLMs, RAG e automações inteligentes para resolver problemas reais com ótima experiência do usuário.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#projetos" className="px-6 py-3 bg-brand-500 text-white rounded-full font-semibold hover:bg-brand-600 transition shadow-lg shadow-brand-500/20">
              Ver projetos
            </a>
            <a href="#contato" className="px-6 py-3 bg-soft-card/80 dark:bg-soft-darkCard/80 border border-soft-text/20 dark:border-soft-darkText/20 rounded-full font-semibold hover:border-brand-400 dark:hover:border-brand-300 transition">
              Entrar em contato
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/rayara-vilar" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-soft-card/80 dark:bg-soft-darkCard/90 hover:bg-brand-100 dark:hover:bg-brand-900/40 transition border border-soft-text/10 dark:border-soft-darkText/15">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/RayaraVilar" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-soft-card/80 dark:bg-soft-darkCard/90 hover:bg-brand-100 dark:hover:bg-brand-900/40 transition border border-soft-text/10 dark:border-soft-darkText/15">
              <FaGithub size={20} />
            </a>
            <a href="mailto:ravtra301@gmail.com" className="p-2.5 rounded-full bg-soft-card/80 dark:bg-soft-darkCard/90 hover:bg-brand-100 dark:hover:bg-brand-900/40 transition border border-soft-text/10 dark:border-soft-darkText/15">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center">
          <div className="relative rounded-[2.5rem] p-4 border border-soft-text/15 dark:border-soft-darkText/10 bg-white/45 dark:bg-white/5 backdrop-blur-xl shadow-2xl group transition duration-500 hover:-translate-y-1 hover:shadow-brand-500/20">
            <img
              src={avatar}
              alt="Rayara Vilar - AI Engineer"
              className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl -scale-x-100 transition duration-500 group-hover:scale-105"
            />

            {floatingTags.map((tag, i) => {
              const Icon = tag.icon;
              return (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{ delay: 0.4 + i * 0.2, duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute ${tag.className} px-3 py-1.5 rounded-full border border-brand-200/60 dark:border-brand-700/40 bg-soft-card/75 dark:bg-soft-darkCard/70 backdrop-blur-md text-xs font-semibold text-brand-700 dark:text-brand-300 flex items-center gap-1.5`}
                >
                  <Icon size={14} /> {tag.label}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-soft-text/50 dark:text-soft-darkText/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
