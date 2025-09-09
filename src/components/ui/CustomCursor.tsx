import { useTheme } from '../../hooks/useTheme';
import { useCustomCursor } from '../../hooks/useCustomCursor';

/**
 * Renders a custom cursor that follows the mouse position.
 * Its appearance changes based on the theme and hover state over interactive elements.
 */
export const CustomCursor = () => {
  const { theme } = useTheme();
  const { position, isHovering } = useCustomCursor();

  const cursorStyle = {
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: isHovering ? '30px' : '15px',
    height: isHovering ? '30px' : '15px',
    backgroundColor: theme === 'light' ? 'rgba(13, 110, 253, 0.2)' : 'rgba(13, 110, 253, 0.4)',
    border: `2px solid ${theme === 'light' ? '#0D6EFD' : '#FFFFFF'}`,
  };

  return (
    <div
      className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-150 ease-in-out hidden md:block"
      style={cursorStyle}
    />
  );
};
