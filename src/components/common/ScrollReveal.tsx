import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * A reusable wrapper component that animates its children when they enter the viewport.
 * It uses framer-motion's useInView hook for efficient scroll detection.
 * @param {ReactNode} children - The content to be animated.
 * @param {number} [delay=0] - The delay in seconds before the animation starts.
 * @param {string} [className] - Optional CSS classes to apply to the container.
 */
const ScrollReveal = ({ children, delay = 0, className }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;
