// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const BASE_URL = "/main-app/";
const GITHUB_USERNAME = "alihaider1998";

export default defineConfig(({ mode }) => {
  const useDevUrls = mode === "development";

  const remoteUrls = useDevUrls
    ? {
        app1: "http://localhost:5001/app1/assets/remoteEntry.js",
        app2: "http://localhost:5002/app2/assets/remoteEntry.js",
      }
    : {
        app1: `https://${GITHUB_USERNAME}.github.io/app1/assets/remoteEntry.js`,
        app2: `https://${GITHUB_USERNAME}.github.io/app2/assets/remoteEntry.js`,
      };

  console.log("Mode:", mode);
  console.log("Using URLs:", remoteUrls);

  return {
    plugins: [
      react(),
      federation({
        name: "main-app",
        filename: "remoteEntry.js",
        exposes: {
          "./NotFound": "./src/components/NotFound",
        },
        remotes: remoteUrls,
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    base: BASE_URL,
    build: {
      target: "esnext",
      modulePreload: false,
      minify: false,
      cssCodeSplit: false,
    },
    preview: {
      port: 5000,
    },
  };
});
