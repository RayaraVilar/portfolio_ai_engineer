import SectionWrapper from '../components/SectionWrapper';
import { contactInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
    return (
        <SectionWrapper id="contato" title="Vamos Conversar?" subtitle="Aberta a oportunidades, colaborações e projetos desafiadores.">
            <div className="grid md:grid-cols-2 gap-10">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Mail className="text-brand-500 mt-1" />
                        <div><h4 className="font-medium">E-mail</h4><p className="text-soft-text/70">{contactInfo.email}</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-brand-500 mt-1" />
                        <div><h4 className="font-medium">Telefone</h4><p className="text-soft-text/70">{contactInfo.phone}</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="text-brand-500 mt-1" />
                        <div><h4 className="font-medium">Localização</h4><p className="text-soft-text/70">{contactInfo.location}</p></div>
                    </div>
                    <div className="flex gap-4 mt-6">
                        <a href={contactInfo.linkedin} target="_blank" className="p-3 bg-soft-card dark:bg-soft-darkCard rounded-xl hover:bg-brand-100 dark:hover:bg-brand-900/30 transition"><FaLinkedinIn size={20} /></a>
                        <a href={contactInfo.github} target="_blank" className="p-3 bg-soft-card dark:bg-soft-darkCard rounded-xl hover:bg-brand-100 dark:hover:bg-brand-900/30 transition"><FaGithub size={20} /></a>
                    </div>
                </motion.div>

                <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-soft-card dark:bg-soft-darkCard p-6 rounded-3xl border border-soft-text/5 dark:border-soft-darkText/10 space-y-4">
                    <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 bg-soft-bg dark:bg-soft-darkBg rounded-xl border border-transparent focus:border-brand-400 focus:outline-none transition" />
                    <input type="email" placeholder="Seu e-mail" className="w-full px-4 py-3 bg-soft-bg dark:bg-soft-darkBg rounded-xl border border-transparent focus:border-brand-400 focus:outline-none transition" />
                    <textarea rows="4" placeholder="Sua mensagem..." className="w-full px-4 py-3 bg-soft-bg dark:bg-soft-darkBg rounded-xl border border-transparent focus:border-brand-400 focus:outline-none transition resize-none"></textarea>
                    <button type="submit" className="w-full py-3 bg-brand-500 text-white rounded-xl font-medium hover:bg-brand-600 transition shadow-lg shadow-brand-500/20">Enviar Mensagem</button>
                </motion.form>
            </div>
        </SectionWrapper>
    );
}