import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * The main header component for the application.
 * Contains navigation, theme toggler, and language switcher.
 */
export const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: t('nav.home') },
    { to: '/services', text: t('nav.services') },
    { to: '/about', text: t('nav.about') },
    { to: '/contact', text: t('nav.contact') },
  ];

  const changeLanguage = (lng: 'en' | 'es') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setIsMenuOpen(false); // Close menu on language change
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Replace with your logo */}
            <NavLink to="/" className="text-2xl font-bold text-primary">
              Ludaut
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-light-text dark:text-dark-text'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>

          {/* Actions: Theme, Language, Mobile Menu */}
          <div className="flex items-center space-x-4">
             {/* Language Switcher */}
             <div className="hidden md:flex items-center space-x-2">
                <button onClick={() => changeLanguage('es')} className={`text-sm font-bold ${i18n.language === 'es' ? 'text-primary' : ''}`}>ES</button>
                <span>|</span>
                <button onClick={() => changeLanguage('en')} className={`text-sm font-bold ${i18n.language === 'en' ? 'text-primary' : ''}`}>EN</button>
            </div>
            {/* Theme Toggler */}
            <button onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full text-center block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    isActive ? 'text-primary' : 'text-light-text dark:text-dark-text'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))}
             <div className="flex items-center space-x-2 pt-4">
                <button onClick={() => changeLanguage('es')} className={`text-sm font-bold ${i18n.language === 'es' ? 'text-primary' : ''}`}>ES</button>
                <span>|</span>
                <button onClick={() => changeLanguage('en')} className={`text-sm font-bold ${i18n.language === 'en' ? 'text-primary' : ''}`}>EN</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
