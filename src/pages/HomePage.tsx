/**
 * @file HomePage.tsx
 * @description Página principal con un título de héroe rediseñado, animación de logos de socios,
 * y una animación 3D de fondo más sutil.
 * @author Tu Nombre / Nombre de tu Empresa
 * @date 2024-05-17
 */

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThreeDBackground } from '../components/ui/ThreeDBackground'; 
import ScrollReveal from '../components/common/ScrollReveal';
import WhatsAppButton from '../components/common/WhatsAppButton';

// Importación de logos de socios
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
 * Carrusel de logos de socios con animación de desplazamiento horizontal continuo.
 */
const PartnersMarquee = () => {
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
    { name: 'Zkteco', logo: ZktecoLogo },
  ];
  
  // Duplicamos la lista para un efecto de bucle infinito
  const extendedPartners = [...partners, ...partners];

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-8">
      {/* Usamos un gradiente en los bordes para un efecto de desvanecimiento suave */}
      <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-light-bg dark:from-dark-bg z-10"></div>
      <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-light-bg dark:from-dark-bg z-10"></div>
      
      <motion.div 
        className="flex"
        animate={{
          x: ['-100%', '0%'],
          transition: {
            ease: 'linear',
            duration: 40, // Duración más larga para un movimiento suave
            repeat: Infinity,
          }
        }}
      >
        {extendedPartners.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-10 flex items-center justify-center w-48">
            <img
              src={partner.logo}
              alt={`${partner.name} Logo`}
              className="h-20 w-auto object-contain transition-transform duration-300 filter grayscale hover:grayscale-0 dark:invert dark:hover:invert-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/**
 * Componente principal de la página de inicio.
 */
const HomePage = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden px-4">
        <ThreeDBackground />
        
        <motion.div 
          className="z-10"
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-500 hover:saturate-150">
            <span className="block">{t('home.heroTitle.line1')}</span>
            <span className="block text-3xl md:text-5xl mt-2">{t('home.heroTitle.line2')}</span>
          </h1>
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-500 dark:text-gray-300 z-10"
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
          <Link to="/services" className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
            {t('home.cta_services')}
          </Link>
          <Link to="/contact" className="bg-secondary text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
            {t('home.cta_contact')}
          </Link>
        </motion.div>
      </header>
      
      <main className='bg-light-bg dark:bg-dark-bg'>
        <ScrollReveal className="py-20">
          <SectionTitle>{t('home.partnersTitle')}</SectionTitle>
          <PartnersMarquee />
        </ScrollReveal>
      </main>

      <WhatsAppButton />
    </motion.div>
  );
};


/**
 * Componente reutilizable para títulos de sección.
 */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 pb-2">
            {children}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></span>
        </h2>
    </div>
);


export default HomePage;

