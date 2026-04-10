import { motion } from 'framer-motion';
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import avatar from '../assets/avatar-rayara.png'; // Coloque sua ilustração aqui

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-20 px-4 md:px-8 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <span className="inline-block px-3 py-1 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 rounded-full text-sm font-medium mb-4">
                        👋 Olá, sou a Rayara
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Engenheira de <span className="text-brand-500">Inteligência Artificial</span>
                    </h1>
                    <p className="text-lg text-soft-text/80 dark:text-soft-darkText/80 mb-6 max-w-lg">
                        Especializada em LLMs, RAG e Agentes Autônomos. Transformo dados em soluções inteligentes com foco em UX, escalabilidade e automação de processos.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                        <a href="#projetos" className="px-6 py-3 bg-brand-500 text-white rounded-full font-medium hover:bg-brand-600 transition shadow-lg shadow-brand-500/20">Ver Projetos</a>
                        <a href="#contato" className="px-6 py-3 bg-soft-card dark:bg-soft-darkCard border border-soft-text/10 rounded-full font-medium hover:border-brand-400 transition">Entrar em Contato</a>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/rayara-vilar" target="_blank" className="p-2 rounded-full bg-soft-card dark:bg-soft-darkCard hover:bg-brand-100 dark:hover:bg-brand-900/30 transition"><FaLinkedinIn size={20} /></a>
                        <a href="https://github.com/RayaraVilar" target="_blank" className="p-2 rounded-full bg-soft-card dark:bg-soft-darkCard hover:bg-brand-100 dark:hover:bg-brand-900/30 transition"><FaGithub size={20} /></a>
                        <a href="mailto:ravtra301@gmail.com" className="p-2 rounded-full bg-soft-card dark:bg-soft-darkCard hover:bg-brand-100 dark:hover:bg-brand-900/30 transition"><Mail size={20} /></a>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-300/20 to-accent/20 rounded-full blur-3xl" />
                    <img src={avatar} alt="Rayara Vilar - AI Engineer" className="relative w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-xl" />
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-soft-text/40">
                <ArrowDown size={24} />
            </div>
        </section>
    );
}