/**
 * @file ContactPage.tsx
 * @description Página de contacto con claves de traducción actualizadas para coincidir con los archivos JSON.
 * @author Tu Nombre / Nombre de tu Empresa
 * @date 2024-05-17
 */

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';
import WhatsAppButton from '../components/common/WhatsAppButton';

// Definición del tipo para los campos del formulario
type FormInputs = {
  name: string;
  email: string;
  message: string;
};

/**
 * Componente de la página de Contacto.
 */
const ContactPage = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  useEffect(() => {
    if (submissionStatus === 'success' || submissionStatus === 'error') {
      const timer = setTimeout(() => {
        setSubmissionStatus('idle');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const onSubmit: SubmitHandler<FormInputs> = () => {
    if (!form.current) return;
    setSubmissionStatus('sending');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID ;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setSubmissionStatus('success');
        reset();
      }, (error) => {
        console.error('EmailJS Error:', error);
        setSubmissionStatus('error');
      });
  };
  
  const contactDetails = [
      {
          icon: <Mail size={24} className="text-primary"/>,
          title: t('contact.info.emailTitle'), // Clave de traducción actualizada
          value: t('contact.info.email'), // Clave de traducción actualizada
          href: `mailto:${t('contact.info.email')}`
      },
      {
          icon: <Phone size={24} className="text-primary"/>,
          title: t('contact.info.phoneTitle'), // Clave de traducción actualizada
          value: t('contact.info.phone'), // Clave de traducción actualizada
          href: `tel:${t('contact.info.phone').replace(/\s/g, '')}`
      },
      {
          icon: <MapPin size={24} className="text-primary"/>,
          title: t('contact.info.addressTitle'), // Clave de traducción actualizada
          value: t('contact.info.address'), // Clave de traducción actualizada
          href: 'https://www.google.com/maps/place/Duitama,+Boyacá'
      }
  ];

  return (
    <motion.div 
      className="container mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold inline-block relative mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 pb-2">
            {t('contact.title')}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-secondary mt-6">{t('contact.subtitle')}</p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <ScrollReveal>
          <div className="space-y-8">
            {contactDetails.map(detail => (
              <a 
                key={detail.title} 
                href={detail.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center p-6 bg-gray-100 dark:bg-gray-800/50 rounded-lg group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="pr-6">{detail.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{detail.title}</h3>
                  <p className="text-secondary group-hover:text-primary transition-colors">{detail.value}</p>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-light-bg dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.form.name')}</label>
              <input type="text" id="name" {...register('name', { required: true })} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary" />
              {errors.name && <span className="text-red-500 text-sm mt-1">{t('contact.form.validation.required', {field: t('contact.form.name')})}</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">{t('contact.form.email')}</label>
              <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary" />
              {errors.email && <span className="text-red-500 text-sm mt-1">{t('contact.form.validation.email')}</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">{t('contact.form.message')}</label>
              <textarea id="message" rows={5} {...register('message', { required: true })} className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary" />
              {errors.message && <span className="text-red-500 text-sm mt-1">{t('contact.form.validation.required', {field: t('contact.form.message')})}</span>}
            </div>
            
            <div>
              <AnimatePresence>
                {submissionStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-green-600 bg-green-100 dark:bg-green-900/50 p-3 rounded-md mb-4 flex items-center">
                    <CheckCircle size={20} className="mr-2"/> {t('contact.form.status.success')}
                  </motion.div>
                )}
                {submissionStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-red-600 bg-red-100 dark:bg-red-900/50 p-3 rounded-md mb-4 flex items-center">
                    <AlertCircle size={20} className="mr-2"/> {t('contact.form.status.error')}
                  </motion.div>
                )}
              </AnimatePresence>
              <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 flex items-center justify-center disabled:bg-opacity-70 disabled:cursor-not-allowed" disabled={submissionStatus === 'sending'}>
                {submissionStatus === 'sending' ? ( <><Loader className="animate-spin mr-2" size={20} />{t('contact.form.status.sending')}</> ) : t('contact.form.submit')}
              </button>
            </div>
          </form>
        </ScrollReveal>
      </div>
      <WhatsAppButton />
    </motion.div>
  );
};

export default ContactPage;