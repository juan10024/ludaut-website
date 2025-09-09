import { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppRouter } from './routes/AppRouter';
import { PreLoader } from './components/ui/PreLoader';

/**
 * The root component of the application.
 * It wraps the entire app with context providers and handles the initial loading state.
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? <PreLoader /> : <AppRouter />}
    </ThemeProvider>
  );
}

export default App;