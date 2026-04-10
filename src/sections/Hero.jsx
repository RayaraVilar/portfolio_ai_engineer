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
                    <span className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-purple-900/30 text-orange-700 dark:text-orange-500 rounded-full text-sm font-semibold mb-5">
                        👋 Olá, sou a Rayara
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4 text-soft-text dark:text-soft-darkText">
                        AI Engineer com foco em <span className="text-transparent bg-clip-text bg-purple-600">Python & IA aplicada</span>
                    </h1>
                    <p className="text-lg md:text-xl text-soft-text/85 dark:text-soft-darkText/85 mb-7 max-w-xl leading-relaxed">
                        Crio soluções modernas com LLMs, RAG e automações inteligentes para resolver problemas reais com ótima experiência do usuário.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <a href="#projetos" className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition shadow-lg shadow-purple-500/20">
                            Ver projetos
                        </a>
                        <a href="#contato" className="px-6 py-3 bg-soft-card dark:bg-soft-darkCard border border-soft-text/20 dark:border-soft-darkText/20 rounded-full font-semibold hover:border-orange-400 dark:hover:border-orange-300 transition">
                            Entrar em contato
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/rayara-vilar" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-soft-card dark:bg-soft-darkCard hover:bg-orange-100 dark:hover:bg-purple-900/40 transition">
                            <FaLinkedinIn size={20} />
                        </a>
                        <a href="https://github.com/RayaraVilar" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-soft-card dark:bg-soft-darkCard hover:bg-orange-100 dark:hover:bg-purple-900/40 transition">
                            <FaGithub size={20} />
                        </a>
                        <a href="mailto:ravtra301@gmail.com" className="p-2.5 rounded-full bg-soft-card dark:bg-soft-darkCard hover:bg-orange-100 dark:hover:bg-purple-900/40 transition">
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-purple-500/25 rounded-full blur-3xl" />
                    <div className="relative rounded-[2.5rem] p-4 border border-white/30 dark:border-soft-darkText/10 bg-white/30 dark:bg-white/5 backdrop-blur-xl shadow-2xl">
                        <img src={avatar} alt="Rayara Vilar - AI Engineer" className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl scale-x-100" />
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-soft-text/50 dark:text-soft-darkText/50">
                <ArrowDown size={24} />
            </div>
        </section>
    );
}
