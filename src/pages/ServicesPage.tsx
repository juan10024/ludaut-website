import { motion } from 'framer-motion';

/**
 * Placeholder for the Services page.
 */
const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p>Detailed information about our services will be here.</p>
    </motion.div>
  );
};

export default ServicesPage;
