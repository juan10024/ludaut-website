/**
 * @file AboutPage.tsx
 * @description Displays information about the company, including its history, values, and founders.
 * Features improved section titles and consistent animations.
 * @author Senior Full-Stack Developer
 * @date 2024-05-16
 */

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building, Target, Users, Award, Shield, Zap, Handshake, PenTool } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';
import WhatsAppButton from '../components/common/WhatsAppButton';
import foundersImage from '../assets/images/founders_2.jpg';

/**
 * A reusable component for creating visually appealing section titles with a gradient effect.
 */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 pb-2">
            {children}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></span>
        </h2>
    </div>
);

/**
 * The About Us page component.
 */
const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: <PenTool size={32} className="text-primary" />, title: t('about.values.innovation.title'), text: t('about.values.innovation.text') },
    { icon: <Handshake size={32} className="text-primary" />, title: t('about.values.commitment.title'), text: t('about.values.commitment.text') },
    { icon: <Shield size={32} className="text-primary" />, title: t('about.values.integrity.title'), text: t('about.values.integrity.text') },
    { icon: <Award size={32} className="text-primary" />, title: t('about.values.excellence.title'), text: t('about.values.excellence.text') },
    { icon: <Users size={32} className="text-primary" />, title: t('about.values.teamwork.title'), text: t('about.values.teamwork.text') },
    { icon: <Zap size={32} className="text-primary" />, title: t('about.values.proactivity.title'), text: t('about.values.proactivity.text') },
  ];

  const sections = [
      { Icon: Building, title: t('about.history.title'), text: t('about.history.text') },
      { Icon: Target, title: t('about.mission.title'), text: t('about.mission.text') },
      { Icon: Users, title: t('about.vision.title'), text: t('about.vision.text') },
  ];

  return (
    <motion.div 
      className="container mx-auto px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sections for History, Mission, Vision */}
      {sections.map((section, index) => (
        // FIX: Removed the 'as' prop from ScrollReveal
        <ScrollReveal key={index} className="mb-20 text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <section.Icon className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
          <p className="text-lg text-secondary">{section.text}</p>
        </ScrollReveal>
      ))}
      
      {/* Values Section */}
      {/* FIX: Removed the 'as' prop from ScrollReveal */}
      <ScrollReveal className="mb-20">
          <SectionTitle>{t('about.values.title')}</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="flex items-start space-x-4 p-6 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:shadow-lg">
                      <div className="flex-shrink-0 mt-1">{value.icon}</div>
                      <div>
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                          <p className="text-secondary mt-1">{value.text}</p>
                      </div>
                  </div>
                </ScrollReveal>
              ))}
          </div>
      </ScrollReveal>

      {/* Founders Section */}
      <ScrollReveal>
        <SectionTitle>{t('about.founders.title')}</SectionTitle>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
            <motion.img 
              src={foundersImage} 
              alt={t('about.founders.alt')} 
              className="w-full h-auto max-w-sm lg:max-w-md object-cover rounded-2xl shadow-2xl border-4 border-primary"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="max-w-lg text-center lg:text-left">
                <p className="text-lg text-secondary italic">"{t('about.founders.text')}"</p>
                <p className="font-semibold text-xl mt-6">Jordy Julián Pedraza</p>
                <p className="text-secondary">CEO & Founder</p>
            </div>
        </div>
      </ScrollReveal>
      
      <WhatsAppButton />
    </motion.div>
  );
};

export default AboutPage;