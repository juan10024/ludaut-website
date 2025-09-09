/**
 * @file ScrollReveal.tsx
 * @description Componente reutilizable que anima a sus hijos cuando entran en el viewport,
 * utilizando el código proporcionado para una integración perfecta con el proyecto existente.
 * @author Juan Valderrama
 * @date 2024-05-17
 */
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Un componente contenedor reutilizable que anima a sus hijos cuando entran en el viewport.
 * Utiliza el hook useInView de framer-motion para una detección de scroll eficiente.
 * @param {ReactNode} children - El contenido a animar.
 * @param {number} [delay=0] - El retraso en segundos antes de que comience la animación.
 * @param {string} [className] - Clases CSS opcionales para aplicar al contenedor.
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
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;