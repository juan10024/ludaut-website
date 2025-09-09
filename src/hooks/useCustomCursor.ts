import { useEffect, useRef } from 'react';

/**
 * A highly optimized custom hook to manage the state of a custom cursor.
 * It uses requestAnimationFrame for smooth, lag-free position updates and
 * directly manipulates the DOM element's transform property for performance.
 * It also tracks hover state over interactive elements.
 *
 * @returns A ref to be attached to the cursor DOM element.
 */
export const useCustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const cursorElement = cursorRef.current;
    if (!cursorElement) return;

    let animationFrameId: number;

    const mousePos = { x: -100, y: -100 };
    const targetPos = { x: -100, y: -100 };
    const lerpFactor = 0.1; // Controls the smoothness (lower is smoother/slower)

    const updatePosition = (e: MouseEvent) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
    };

    const loop = () => {
      // Linear interpolation for smooth movement
      mousePos.x += (targetPos.x - mousePos.x) * lerpFactor;
      mousePos.y += (targetPos.y - mousePos.y) * lerpFactor;
      cursorElement.style.transform = `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`;
      animationFrameId = requestAnimationFrame(loop);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        if (!isHovering.current) {
            cursorElement.classList.add('hovering');
            isHovering.current = true;
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        if (isHovering.current) {
            cursorElement.classList.remove('hovering');
            isHovering.current = false;
        }
      }
    };
    
    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return cursorRef;
};