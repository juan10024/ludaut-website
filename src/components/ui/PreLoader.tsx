/**
 * A full-screen pre-loader component displayed while the application is loading.
 */
export const PreLoader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-light-bg dark:bg-dark-bg">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);
