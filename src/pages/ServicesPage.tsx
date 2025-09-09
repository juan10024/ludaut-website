/**
 * @file ServicesPage.tsx
 * @description Muestra los servicios ofrecidos por la empresa. Las claves de texto se han actualizado
 * para coincidir con los archivos de traducción y se han asignado iconos relevantes.
 * @author Tu Nombre / Nombre de tu Empresa
 * @date 2024-05-17
 */

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// NOTE: Asegúrate de tener 'lucide-react' instalado: npm install lucide-react
import {
  Video,
  KeyRound,
  Siren,
  Building2,
  Network,
  Flame,
  Lightbulb,
  UserCheck,
  Zap,
} from 'lucide-react';
import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import WhatsAppButton from '../components/common/WhatsAppButton';

// Definición del tipo para un elemento de servicio
interface Service {
  icon: React.ReactElement;
  titleKey: string;
  descriptionKey: string;
}

/**
 * Componente reutilizable para los títulos de sección.
 */
const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle: string }) => (
  <div className="text-center mb-16">
    <h1 className="text-4xl md:text-5xl font-bold inline-block relative mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 pb-2">
      {children}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></span>
    </h1>
    <p className="max-w-3xl mx-auto text-lg text-secondary mt-6">{subtitle}</p>
  </div>
);

/**
 * La página de Servicios.
 * Muestra una cuadrícula de tarjetas de servicios con efectos visuales y animaciones.
 */
const ServicesPage = () => {
  const { t } = useTranslation();

  // FIX: Se actualizó el array de servicios para que coincida con las claves de los archivos de traducción
  const services: Service[] = [
    {
      icon: <Video size={36} className="text-primary" />,
      titleKey: 'services.cctv.title',
      descriptionKey: 'services.cctv.description',
    },
    {
      icon: <KeyRound size={36} className="text-primary" />,
      titleKey: 'services.accessControl.title',
      descriptionKey: 'services.accessControl.description',
    },
    {
      icon: <Siren size={36} className="text-primary" />,
      titleKey: 'services.alarms.title',
      descriptionKey: 'services.alarms.description',
    },
    {
      icon: <Building2 size={36} className="text-primary" />,
      titleKey: 'services.automation.title',
      descriptionKey: 'services.automation.description',
    },
    {
      icon: <Network size={36} className="text-primary" />,
      titleKey: 'services.structuredCabling.title',
      descriptionKey: 'services.structuredCabling.description',
    },
    {
      icon: <Flame size={36} className="text-primary" />,
      titleKey: 'services.fireDetection.title',
      descriptionKey: 'services.fireDetection.description',
    },
    {
      icon: <Lightbulb size={36} className="text-primary" />,
      titleKey: 'services.lighting.title',
      descriptionKey: 'services.lighting.description',
    },
    {
      icon: <UserCheck size={36} className="text-primary" />,
      titleKey: 'services.videoIntercom.title',
      descriptionKey: 'services.videoIntercom.description',
    },
    {
      icon: <Zap size={36} className="text-primary" />,
      titleKey: 'services.renewableEnergy.title',
      descriptionKey: 'services.renewableEnergy.description',
    },
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
        <SectionTitle subtitle={t('services.subtitle')}>{t('services.title')}</SectionTitle>
      </ScrollReveal>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={service.titleKey} delay={index * 0.05}>
            <div className="group relative h-full flex flex-col p-8 rounded-xl shadow-md bg-light-bg dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-0.5">
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
              <p className="text-secondary leading-relaxed flex-grow">{t(service.descriptionKey)}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <WhatsAppButton />
    </motion.div>
  );
};

export default ServicesPage;