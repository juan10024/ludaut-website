import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Video, KeyRound, Siren, Building2, Bot, Network, Lightbulb, UserCheck, Tv, Wind, Volume2 } from 'lucide-react';
import React from 'react';

// Define the type for a service item
interface Service {
    icon: React.ReactElement;
    titleKey: string;
    descriptionKey: string;
}

/**
 * A reusable component for creating visually appealing section titles.
 */
const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle: string }) => (
    <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold inline-block relative mb-4">
            {children}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-secondary mt-6">{subtitle}</p>
    </div>
);


/**
 * The Services page.
 * Displays a grid of cards with enhanced hover effects.
 */
const ServicesPage = () => {
    const { t } = useTranslation();

    const services: Service[] = [
        { icon: <Video size={32} className="text-primary" />, titleKey: 'services.cctv.title', descriptionKey: 'services.cctv.description' },
        { icon: <UserCheck size={32} className="text-primary" />, titleKey: 'services.accessControl.title', descriptionKey: 'services.accessControl.description' },
        { icon: <Siren size={32} className="text-primary" />, titleKey: 'services.fireDetection.title', descriptionKey: 'services.fireDetection.description' },
        { icon: <KeyRound size={32} className="text-primary" />, titleKey: 'services.intrusionSystems.title', descriptionKey: 'services.intrusionSystems.description' },
        { icon: <Building2 size={32} className="text-primary" />, titleKey: 'services.systemsIntegrator.title', descriptionKey: 'services.systemsIntegrator.description' },
        { icon: <Lightbulb size={32} className="text-primary" />, titleKey: 'services.domotics.title', descriptionKey: 'services.domotics.description' },
        { icon: <Network size={32} className="text-primary" />, titleKey: 'services.networking.title', descriptionKey: 'services.networking.description' },
        { icon: <Bot size={32} className="text-primary" />, titleKey: 'services.ai.title', descriptionKey: 'services.ai.description' },
        { icon: <Volume2 size={32} className="text-primary" />, titleKey: 'services.soundAndLighting.title', descriptionKey: 'services.soundAndLighting.description' },
        { icon: <Tv size={32} className="text-primary" />, titleKey: 'services.videoIntercom.title', descriptionKey: 'services.videoIntercom.description' },
        { icon: <Wind size={32} className="text-primary" />, titleKey: 'services.renewableEnergy.title', descriptionKey: 'services.renewableEnergy.description' },
    ];

    /**
     * Defines the animation variants for the service cards.
     * Explicitly typed with the `Variants` type from framer-motion to prevent type errors.
     */
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <motion.div initial="hidden" animate="visible">
            <SectionTitle subtitle={t('services.subtitle')}>{t('services.title')}</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.titleKey}
                        className="group relative p-8 rounded-xl shadow-md bg-light-bg dark:bg-gray-800 overflow-hidden border border-gray-200 dark:border-gray-700"
                        variants={cardVariants}
                        custom={index}
                        whileHover={{ y: -8, scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
                    >
                        <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-3">{t(service.titleKey)}</h3>
                        <p className="text-secondary leading-relaxed">{t(service.descriptionKey)}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesPage;