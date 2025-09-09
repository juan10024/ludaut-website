import { motion } from 'framer-motion';
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
 * The Services page.
 * Displays a grid of cards, each representing a service offered by the company.
 */
const ServicesPage = () => {
    const { t } = useTranslation();

    const services: Service[] = [
        { icon: <Video size={40} className="text-primary" />, titleKey: 'services.cctv.title', descriptionKey: 'services.cctv.description' },
        { icon: <UserCheck size={40} className="text-primary" />, titleKey: 'services.accessControl.title', descriptionKey: 'services.accessControl.description' },
        { icon: <Siren size={40} className="text-primary" />, titleKey: 'services.fireDetection.title', descriptionKey: 'services.fireDetection.description' },
        { icon: <KeyRound size={40} className="text-primary" />, titleKey: 'services.intrusionSystems.title', descriptionKey: 'services.intrusionSystems.description' },
        { icon: <Building2 size={40} className="text-primary" />, titleKey: 'services.systemsIntegrator.title', descriptionKey: 'services.systemsIntegrator.description' },
        { icon: <Lightbulb size={40} className="text-primary" />, titleKey: 'services.domotics.title', descriptionKey: 'services.domotics.description' },
        { icon: <Network size={40} className="text-primary" />, titleKey: 'services.networking.title', descriptionKey: 'services.networking.description' },
        { icon: <Bot size={40} className="text-primary" />, titleKey: 'services.ai.title', descriptionKey: 'services.ai.description' },
        { icon: <Volume2 size={40} className="text-primary" />, titleKey: 'services.soundAndLighting.title', descriptionKey: 'services.soundAndLighting.description' },
        { icon: <Tv size={40} className="text-primary" />, titleKey: 'services.videoIntercom.title', descriptionKey: 'services.videoIntercom.description' },
        { icon: <Wind size={40} className="text-primary" />, titleKey: 'services.renewableEnergy.title', descriptionKey: 'services.renewableEnergy.description' },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-12"
        >
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">{t('services.title')}</h1>
                <p className="max-w-2xl mx-auto text-lg text-secondary">{t('services.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.titleKey}
                        className="p-6 rounded-lg shadow-md bg-light-bg dark:bg-gray-800 flex flex-col items-start"
                        variants={cardVariants}
                        custom={index}
                        whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                    >
                        {service.icon}
                        <h3 className="text-xl font-bold my-3">{t(service.titleKey)}</h3>
                        <p className="text-secondary">{t(service.descriptionKey)}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesPage;