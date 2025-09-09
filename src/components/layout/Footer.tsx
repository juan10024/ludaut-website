import { useTranslation } from 'react-i18next';

/**
 * The main footer component for the application.
 */
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-secondary">
        <p>{t('footer.copy')}</p>
      </div>
    </footer>
  );
};
