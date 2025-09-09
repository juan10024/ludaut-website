import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThreeDBackground } from '../components/ui/ThreeDBackground';


/**
 * A component to display a scrolling marquee of partner logos.
 */
const PartnersMarquee = () => {
  const partners = [
    { name: 'Suprema', logo: 'https://placehold.co/120x40/ffffff/9ca3af?text=Intelbras' },
    { name: 'ZKTeco', logo: 'https://icon2.cleanpng.com/20180516/jkw/kisspng-biometrics-access-control-zkteco-time-and-attendan-5afbeed8af8da0.4262760015264601207191.jpg' },
    { name: 'Hikvision', logo: 'https://placehold.co/120x40/ffffff/9ca3af?text=Hikvision' },
    { name: 'Hochiki', logo: 'https://placehold.co/120x40/ffffff/9ca3af?text=Hochiki' },
    { name: 'Honeywell', logo: 'https://placehold.co/120x40/ffffff/9ca3af?text=Honeywell' },
    { name: 'Bosch', logo: 'https://placehold.co/120x40/ffffff/9ca3af?text=Bosch' },
    { name: 'DSC', logo: 'https://placehold.co/120x40/ffffff/9ca3af?text=DSC' },
    { name: 'Paradox', logo: 'https://placehold.co/120x40/ffffff/9ca3af?text=Paradox' },
  ];
  const duplicatedPartners = [...partners, ...partners]; // Duplicate for seamless loop

  return (
     <div className="w-full py-12">
      <div className="relative w-full overflow-hidden">
        <div className="flex marquee-content">
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-48 flex justify-center items-center mx-4">
              <img src={partner.logo} alt={partner.name} className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-light-bg dark:from-dark-bg to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-light-bg dark:from-dark-bg to-transparent"></div>
      </div>
    </div>
  );
};


/**
 * The home page of the application.
 * Features a hero section with a 3D background, value propositions, and a partners marquee.
 */
export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative text-center flex flex-col items-center justify-center min-h-[70vh] overflow-hidden">
        <ThreeDBackground />
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 z-10"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('home.heroTitle')}
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-2xl mb-8 text-secondary z-10"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t('home.heroSubtitle')}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 z-10"
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/services" className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
            {t('home.cta_services')}
          </Link>
          <Link to="/contact" className="bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
            {t('home.cta_contact')}
          </Link>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section>
        <PartnersMarquee />
      </section>
    </motion.div>
  );
};

export default HomePage;