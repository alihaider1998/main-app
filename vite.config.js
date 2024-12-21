// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "host",
//       remotes: {
//         app1: "http://localhost:5001/assets/remoteEntry.js",
//         app2: "http://localhost:5002/assets/remoteEntry.js",
//       },
//       shared: ["react", "react-dom"],
//     }),
//   ],
//   build: {
//     target: "esnext",
//     modulePreload: false,
//     minify: false,
//     cssCodeSplit: false,
//   },
//   preview: {
//     port: 5000,
//     strictPort: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//     },
//   },
// });
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const BASE_URL = "/main-app/";
const GITHUB_USERNAME = "alihaider1998";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        app1: `https://${GITHUB_USERNAME}.github.io/app1/assets/remoteEntry.js`,
        app2: `https://${GITHUB_USERNAME}.github.io/app2/assets/remoteEntry.js`,
      },
      shared: ["react", "react-dom"],
    }),
  ],
  base: BASE_URL,
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
});
