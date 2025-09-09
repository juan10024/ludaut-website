import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building, Target, Users, Award, Shield, Zap, Handshake, PenTool } from 'lucide-react';

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
      className="space-y-16"
    >
      {/* Who We Are Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
        <p className="max-w-3xl mx-auto text-lg text-secondary">{t('about.description')}</p>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid md:grid-cols-2 gap-12 text-center">
        <div className="p-6 rounded-lg shadow-md bg-light-bg dark:bg-gray-800">
          <Building size={48} className="mx-auto text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t('about.mission.title')}</h2>
          <p className="text-secondary">{t('about.mission.text')}</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-light-bg dark:bg-gray-800">
          <Target size={48} className="mx-auto text-primary mb-4" />
          <h2 className="text-2xl font-bold mb-2">{t('about.vision.title')}</h2>
          <p className="text-secondary">{t('about.vision.text')}</p>
        </div>
      </section>

      {/* Values Section */}
      <section>
          <h2 className="text-3xl font-bold text-center mb-8">{t('about.values.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map(value => (
                  <div key={value.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{value.icon}</div>
                      <div>
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                          <p className="text-secondary mt-1">{value.text}</p>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Founders Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">{t('about.founders.title')}</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Founder image placeholder */}
            <img src="https://placehold.co/400x400/0D6EFD/white?text=Founders" alt={t('about.founders.alt')} className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"/>
            <div className="max-w-lg text-left">
                <p className="text-lg text-secondary">{t('about.founders.text')}</p>
                <p className="font-semibold text-lg mt-4">Jordy Julián Pedraza</p>
                <p className="text-secondary">{t('about.founders.role')}</p>
            </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;