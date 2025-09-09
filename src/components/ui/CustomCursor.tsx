import { useTheme } from '../../hooks/useTheme';
import { useCustomCursor } from '../../hooks/useCustomCursor';

/**
 * Renders a custom cursor that smoothly follows the mouse.
 * It connects the optimized logic from the useCustomCursor hook to a DOM element.
 * The appearance is handled by CSS classes defined in main.css.
 */
export const CustomCursor = () => {
  const { theme } = useTheme();
  const cursorRef = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor fixed rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 hidden md:block ${theme}`}
    />
  );
};