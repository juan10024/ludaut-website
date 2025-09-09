import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building, Target, Users, Award, Shield, Zap, Handshake, PenTool } from 'lucide-react';
// Corrected the import path as requested.
import ScrollReveal from '../components/common/ScrollReveal';

// Corrected the path assuming 'pages' directory is inside 'src'.
import foundersImage from '../assets/images/founders_2.jpg';

/**
 * A reusable component for creating visually appealing section titles.
 */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            {children}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></span>
        </h2>
    </div>
);


/**
 * The About Us page.
 * Displays information about the company's history, mission, vision, values, and founders.
 */
const AboutPage = () => {
  const { t } = useTranslation();

  const values = [
    { icon: <PenTool size={32} className="text-primary" />, title: t('about.values.innovation.title'), text: t('about.values.innovation.text') },
    { icon: <Handshake size={32} className="text-primary" />, title: t('about.values.responsibility.title'), text: t('about.values.responsibility.text') },
    { icon: <Award size={32} className="text-primary" />, title: t('about.values.professionalism.title'), text: t('about.values.professionalism.text') },
    { icon: <Shield size={32} className="text-primary" />, title: t('about.values.excellence.title'), text: t('about.values.excellence.text') },
    { icon: <Users size={32} className="text-primary" />, title: t('about.values.commitment.title'), text: t('about.values.commitment.text') },
    { icon: <Zap size={32} className="text-primary" />, title: t('about.values.adaptability.title'), text: t('about.values.adaptability.text') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-24"
    >
      {/* Who We Are Section - Removed 'as' prop, passing className directly */}
      <ScrollReveal className="text-center">
        <SectionTitle>{t('about.title')}</SectionTitle>
        <p className="max-w-3xl mx-auto text-lg text-secondary leading-relaxed">{t('about.description')}</p>
      </ScrollReveal>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-12 text-center">
        <ScrollReveal delay={0.1}>
            <motion.div whileHover={{ y: -5, scale: 1.02}} className="p-8 h-full rounded-xl shadow-lg bg-light-bg dark:bg-gray-800 border border-transparent hover:border-primary transition-all duration-300">
            <Building size={48} className="mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">{t('about.mission.title')}</h2>
            <p className="text-secondary">{t('about.mission.text')}</p>
            </motion.div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
            <motion.div whileHover={{ y: -5, scale: 1.02}} className="p-8 h-full rounded-xl shadow-lg bg-light-bg dark:bg-gray-800 border border-transparent hover:border-primary transition-all duration-300">
            <Target size={48} className="mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">{t('about.vision.title')}</h2>
            <p className="text-secondary">{t('about.vision.text')}</p>
            </motion.div>
        </ScrollReveal>
      </section>

      {/* Values Section - Removed 'as' prop */}
      <ScrollReveal>
          <SectionTitle>{t('about.values.title')}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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

      {/* Founders Section - Removed 'as' prop */}
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
                <p className="text-primary font-medium">{t('about.founders.role')}</p>
            </div>
        </div>
      </ScrollReveal>
    </motion.div>
  );
};

export default AboutPage;