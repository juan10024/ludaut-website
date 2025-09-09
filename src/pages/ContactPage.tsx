import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * Placeholder for the Contact page.
 */
const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-2">{t('contact.title')}</h1>
      <p className="text-secondary mb-6">{t('contact.subtitle')}</p>
      {/* A contact form would be implemented here */}
      <div className="max-w-md">
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"></textarea>
            </div>
            <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-opacity-90">
                Send Message
            </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
