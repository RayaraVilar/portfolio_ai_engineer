import { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { contactInfo } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contato do portfólio - ${formData.name || 'Sem nome'}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Email enviado com sucesso! ✅');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contato" title="Vamos Conversar?" subtitle="Aberta a oportunidades, colaborações e projetos desafiadores.">
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-brand-500 mt-1" />
            <div>
              <h4 className="font-medium">E-mail</h4>
              <p className="text-soft-text/80 dark:text-soft-darkText/80">{contactInfo.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-brand-500 mt-1" />
            <div>
              <h4 className="font-medium">Telefone</h4>
              <p className="text-soft-text/80 dark:text-soft-darkText/80">{contactInfo.phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="text-brand-500 mt-1" />
            <div>
              <h4 className="font-medium">Localização</h4>
              <p className="text-soft-text/80 dark:text-soft-darkText/80">{contactInfo.location}</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-soft-card dark:bg-soft-darkCard rounded-xl hover:bg-brand-100 dark:hover:bg-brand-900/30 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-soft-card dark:bg-soft-darkCard rounded-xl hover:bg-brand-100 dark:hover:bg-brand-900/30 transition">
              <FaGithub size={20} />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-soft-card dark:bg-soft-darkCard p-6 rounded-3xl border border-soft-text/10 dark:border-soft-darkText/10 space-y-4"
        >
          <input
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange('name')}
            required
            className="w-full px-4 py-3 bg-soft-bg dark:bg-soft-darkBg rounded-xl border border-transparent focus:border-brand-400 focus:outline-none transition"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={handleChange('email')}
            required
            className="w-full px-4 py-3 bg-soft-bg dark:bg-soft-darkBg rounded-xl border border-transparent focus:border-brand-400 focus:outline-none transition"
          />
          <textarea
            rows="4"
            placeholder="Sua mensagem..."
            value={formData.message}
            onChange={handleChange('message')}
            required
            className="w-full px-4 py-3 bg-soft-bg dark:bg-soft-darkBg rounded-xl border border-transparent focus:border-brand-400 focus:outline-none transition resize-none"
          />
          <button type="submit" className="w-full py-3 bg-brand-500 text-white rounded-xl font-medium hover:bg-brand-600 transition shadow-lg shadow-brand-500/20">
            Enviar Mensagem
          </button>
          {statusMessage && <p className="text-sm font-medium text-brand-600 dark:text-brand-300">{statusMessage}</p>}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
