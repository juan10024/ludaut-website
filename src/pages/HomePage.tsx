import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThreeDBackground } from '../components/ui/ThreeDBackground';
import ScrollReveal from '../components/common/ScrollReveal';

// Import partner logos from the assets folder
// Make sure these paths are correct and the images exist.
import ASecurityLogo from '../assets/logos/ASecurity.png';
import BoschLogo from '../assets/logos/Bosch.png';
import DahuaLogo from '../assets/logos/Dahua.png';
import HikvisionLogo from '../assets/logos/Hikvision.png';
import HilookLogo from '../assets/logos/Hilook.png';
import HochikiLogo from '../assets/logos/Hochiki.png';
import HoneywellLogo from '../assets/logos/Honeywell.png';
import IntelbrasLogo from '../assets/logos/intelbras.png';
import PowestLogo from '../assets/logos/powest.png';
import ZktecoLogo from '../assets/logos/ZKTECO.png';


/**
 * A component to display a scrolling marquee of partner logos.
 * Uses CSS animation for a smooth, infinite loop.
 */
const PartnersMarquee = () => {
  // Array of partner objects with names and imported logos
  const partners = [
    { name: 'ASecurity', logo: ASecurityLogo },
    { name: 'Bosch', logo: BoschLogo },
    { name: 'Dahua', logo: DahuaLogo },
    { name: 'Hikvision', logo: HikvisionLogo },
    { name: 'Hilook', logo: HilookLogo },
    { name: 'Hochiki', logo: HochikiLogo },
    { name: 'Honeywell', logo: HoneywellLogo },
    { name: 'Intelbras', logo: IntelbrasLogo },
    { name: 'Powest', logo: PowestLogo },
    { name: 'ZKTECO', logo: ZktecoLogo },
  ];

  // Duplicate the array to create a seamless looping effect
  const duplicatedPartners = [...partners, ...partners];

  return (
     <div className="w-full py-16">
        <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Partners</h2>
        </ScrollReveal>
      <div className="relative w-full overflow-hidden group">
        <div className="flex marquee-content group-hover:pause-animation">
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0 w-48 flex justify-center items-center mx-6">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                title={partner.name}
              />
            </div>
          ))}
        </div>
        {/* Fading gradients on the sides for a clean look */}
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
      <section className="relative text-center flex flex-col items-center justify-center min-h-[70vh] overflow-hidden px-4">
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