import { motion } from 'framer-motion';

/**
 * Placeholder for the About Us page.
 */
const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>Information about Ludaut will be here.</p>
    </motion.div>
  );
};

export default AboutPage;
