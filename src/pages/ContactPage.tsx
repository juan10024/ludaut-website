import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

/**
 * The Contact page.
 * Features a contact form and company contact information.
 */
const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">{t('contact.title')}</h1>
        <p className="text-lg text-secondary">{t('contact.subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{t('contact.info.title')}</h2>
            <p className="text-secondary">{t('contact.info.description')}</p>
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <Phone className="text-primary"/>
                    <a href="tel:+573001234567" className="hover:text-primary transition-colors">{t('contact.info.phone')}</a>
                </div>
                 <div className="flex items-center space-x-3">
                    <Mail className="text-primary"/>
                    <a href="mailto:contacto@ludaut.com" className="hover:text-primary transition-colors">{t('contact.info.email')}</a>
                </div>
                 <div className="flex items-center space-x-3">
                    <MapPin className="text-primary"/>
                    <span>{t('contact.info.address')}</span>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-lg shadow-lg bg-light-bg dark:bg-gray-800">
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">{t('contact.form.name')}</label>
                    <input type="text" id="name" className="w-full p-2 border rounded-md bg-transparent dark:border-gray-600 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">{t('contact.form.email')}</label>
                    <input type="email" id="email" className="w-full p-2 border rounded-md bg-transparent dark:border-gray-600 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-1 font-medium">{t('contact.form.message')}</label>
                    <textarea id="message" rows={4} className="w-full p-2 border rounded-md bg-transparent dark:border-gray-600 focus:ring-primary focus:border-primary"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
                    {t('contact.form.submit')}
                </button>
            </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;