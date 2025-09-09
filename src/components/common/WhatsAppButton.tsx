/**
 * @file WhatsAppButton.tsx
 * @description A floating WhatsApp button with an animation.
 * This component is fixed to the bottom-right of the screen and provides a direct link
 * to a WhatsApp chat.
 * @author Senior Full-Stack Developer
 * @date 2024-05-16
 */

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react'; // Using a similar icon as a placeholder for WhatsApp

/**
 * A reusable floating action button that links to a WhatsApp conversation.
 * It features a subtle floating animation to attract attention.
 *
 * @returns {React.ReactElement} The rendered WhatsApp floating button.
 */
const WhatsAppButton = () => {
  const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=573224810181";

  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
      aria-label="Contact us on WhatsApp"
      // Animation variants for the button
      initial={{ scale: 0, y: 50, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Floating animation using motion.div */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MessageCircle size={32} />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
