// src/App.jsx
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

const App1 = lazy(() => import("app1/App"));
const App2 = lazy(() => import("app2/App"));

function App() {
  const basename = import.meta.env.BASE_URL;

  return (
    <Router basename={basename}>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="px-4 mx-auto max-w-7xl">
            <div className="flex justify-between h-16">
              <div className="flex">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center ${isActive ? "text-blue-600" : ""}`
                  }
                >
                  <span className="text-xl font-bold">Main App</span>
                </NavLink>
              </div>
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/app1"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 ${
                      isActive ? "bg-gray-100" : ""
                    }`
                  }
                >
                  App 1
                </NavLink>
                <NavLink
                  to="/app2"
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 ${
                      isActive ? "bg-gray-100" : ""
                    }`
                  }
                >
                  App 2
                </NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main className="px-4 py-6 mx-auto max-w-7xl">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/app1/*" element={<App1 />} />
              <Route path="/app2/*" element={<App2 />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
