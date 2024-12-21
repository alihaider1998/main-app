// # main-app/src/components/NotFound.jsx
function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">404</h1>
      <p className="mb-6 text-xl text-gray-600">Page Not Found</p>
      <p className="mb-8 text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/main-app"
        className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Go to Home
      </a>
    </div>
  );
}

export default NotFound;
