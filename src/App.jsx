// src/App.jsx (Main App)
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App1 = lazy(() => import("app1/App"));
const App2 = lazy(() => import("app2/App"));

const MainLayout = () => (
  <div className="min-h-screen bg-gray-100">
    <nav className="bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">Main App</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/app1"
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              App 1
            </Link>
            <Link
              to="/app2"
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
            >
              App 2
            </Link>
          </div>
        </div>
      </div>
    </nav>
    <main className="px-4 py-6 mx-auto max-w-7xl">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </div>
);

function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="app1/*" element={<App1 />} />
          <Route path="app2/*" element={<App2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
