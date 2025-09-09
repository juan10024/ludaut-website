import { Link } from 'react-router-dom';

/**
 * A 404 Not Found page component.
 * Displayed when a user navigates to a non-existent route.
 */
export const NotFoundPage = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-2xl mt-4 mb-8">Page Not Found</p>
      <Link to="/" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90">
        Go Back Home
      </Link>
    </div>
  );
};
