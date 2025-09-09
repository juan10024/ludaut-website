import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

// Define the type for our form inputs
type FormInputs = {
  name: string;
  email: string;
  message: string;
};

/**
 * The Contact page.
 * Features company contact information and a functional contact form with validation,
 * which sends emails using the EmailJS service.
 */
const ContactPage = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // react-hook-form setup for validation and state management
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();

  // Handler for form submission
  const onSubmit: SubmitHandler<FormInputs> = () => {
    if (!form.current) return;
    
    setSubmissionStatus('sending');

    const serviceID = import.meta.env.VITE_REACT_APP_SERVICE_ID;
    const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setSubmissionStatus('success');
        reset(); // Clear form fields on success
      }, (error: unknown) => { // Added 'unknown' type to error parameter to fix TS error.
        console.error('FAILED...', error);
        setSubmissionStatus('error');
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollReveal className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">{t('contact.title')}</h1>
        <p className="text-lg text-secondary">{t('contact.subtitle')}</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <ScrollReveal className="space-y-6" delay={0.2}>
            <h2 className="text-2xl font-semibold">{t('contact.info.title')}</h2>
            <p className="text-secondary">{t('contact.info.description')}</p>
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <Phone className="text-primary"/>
                    <a href="tel:+573001234567" className="hover:text-primary transition-colors">{t('contact.info.phone')}</a>
                </div>
                 <div className="flex items-center space-x-3">
                    <Mail className="text-primary"/>
                    <a href="mailto:ludautautomatiacionyseguridad@gmail.com" className="hover:text-primary transition-colors">ludautautomatiacionyseguridad@gmail.com</a>
                </div>
                 <div className="flex items-center space-x-3">
                    <MapPin className="text-primary"/>
                    <span>{t('contact.info.address')}</span>
                </div>
            </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal className="p-8 rounded-lg shadow-lg bg-light-bg dark:bg-gray-800" delay={0.4}>
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">{t('contact.form.name')}</label>
                    <input 
                        type="text" 
                        id="name"
                        {...register('name', { required: t('contact.form.validation.required', { field: t('contact.form.name') }) })}
                        className={`w-full p-2 border rounded-md bg-transparent dark:border-gray-600 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1"/>{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">{t('contact.form.email')}</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register('email', { 
                            required: t('contact.form.validation.required', { field: t('contact.form.email') }),
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t('contact.form.validation.email')
                            }
                        })}
                        className={`w-full p-2 border rounded-md bg-transparent dark:border-gray-600 focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1"/>{errors.email.message}</p>}
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block mb-1 font-medium">{t('contact.form.message')}</label>
                    <textarea 
                        id="message" 
                        rows={4}
                        {...register('message', { required: t('contact.form.validation.required', { field: t('contact.form.message') }) })}
                        className={`w-full p-2 border rounded-md bg-transparent dark:border-gray-600 focus:ring-primary focus:border-primary ${errors.message ? 'border-red-500' : ''}`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle size={16} className="mr-1"/>{errors.message.message}</p>}
                </div>

                {/* Submit Button and Status Messages */}
                <div>
                  {submissionStatus === 'success' && (
                    <div className="text-green-600 bg-green-100 dark:bg-green-900/50 p-3 rounded-md mb-4 flex items-center">
                      <CheckCircle size={20} className="mr-2"/> {t('contact.form.status.success')}
                    </div>
                  )}
                   {submissionStatus === 'error' && (
                    <div className="text-red-600 bg-red-100 dark:bg-red-900/50 p-3 rounded-md mb-4 flex items-center">
                      <AlertCircle size={20} className="mr-2"/> {t('contact.form.status.error')}
                    </div>
                  )}
                  <button 
                      type="submit" 
                      className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 flex items-center justify-center disabled:bg-opacity-70 disabled:cursor-not-allowed"
                      disabled={submissionStatus === 'sending'}
                  >
                      {submissionStatus === 'sending' ? (
                          <>
                              <Loader className="animate-spin mr-2" size={20} />
                              {t('contact.form.status.sending')}
                          </>
                      ) : t('contact.form.submit')}
                  </button>
                </div>
            </form>
        </ScrollReveal>
      </div>
    </motion.div>
  );
};

export default ContactPage;