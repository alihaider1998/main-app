// src/App.jsx
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App1 = lazy(() => import("app1/App"));
const App2 = lazy(() => import("app2/App"));

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p className="mt-2">Welcome to the main application</p>
    </div>
  );
}

function App() {
  // Get the base URL from the Vite environment
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <div className="min-h-screen bg-gray-50">
        <nav className="mb-4 bg-white shadow">
          <div className="px-4 py-4 mx-auto max-w-7xl">
            <div className="flex gap-4">
              <Link to="/" className="font-medium hover:text-blue-600">
                Home
              </Link>
              <Link to="/app1" className="font-medium hover:text-blue-600">
                App 1
              </Link>
              <Link to="/app2" className="font-medium hover:text-blue-600">
                App 2
              </Link>
            </div>
          </div>
        </nav>

        <div className="px-4 mx-auto max-w-7xl">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app1/*" element={<App1 />} />
              <Route path="/app2/*" element={<App2 />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
