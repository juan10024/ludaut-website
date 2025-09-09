import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThreeDBackground } from '../components/ui/ThreeDBackground';

/**
 * The home page of the application.
 * Features a hero section with a 3D background, a title, subtitle, and calls to action.
 */
export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative text-center flex flex-col items-center justify-center min-h-[70vh] overflow-hidden"
    >
      <ThreeDBackground />
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-4 animate-slide-in-up z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('home.heroTitle')}
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl max-w-2xl mb-8 text-secondary z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {t('home.heroSubtitle')}
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link 
          to="/services" 
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
        >
          {t('home.cta_services')}
        </Link>
        <Link 
          to="/contact" 
          className="bg-secondary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
        >
          {t('home.cta_contact')}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;