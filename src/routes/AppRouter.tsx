import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import { PreLoader } from '../components/ui/PreLoader';
import { NotFoundPage } from '../pages/NotFoundPage';

// Lazy load pages for better performance (code splitting)
const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

/**
 * Defines all the application routes.
 * Uses React Router DOM for navigation and lazy loading for pages.
 */
export const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};
