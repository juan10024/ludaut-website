import { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppRouter } from './routes/AppRouter';
import { PreLoader } from './components/ui/PreLoader';
import { CustomCursor } from './components/ui/CustomCursor';

/**
 * The root component of the application.
 * It wraps the entire app with context providers and handles the initial loading state.
 * It also implements the cursor reveal effect by tracking mouse position.
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Logic for the cursor reveal effect
    const handleMouseMove = (e: MouseEvent) => {
      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', e.clientX.toString());
        appRef.current.style.setProperty('--mouse-y', e.clientY.toString());
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <CustomCursor />
      <div ref={appRef}>
        {isLoading ? <PreLoader /> : <AppRouter />}
      </div>
    </ThemeProvider>
  );
}

export default App;