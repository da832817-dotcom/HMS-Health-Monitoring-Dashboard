import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "patientApp",
      filename: "remoteEntry.js",
      remotes: {
        // Patient ko batana zaroori hai ke store kahan se laye
        shellApp: "http://localhost:3000/assets/remoteEntry.js",
      },
      exposes: {
        "./PatientList": "./src/components/PatientList.jsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
          eager: true, // Is se library foran load ho jayegi
        },
        "react-dom": {
          singleton: true,
          requiredVersion: false,
          eager: true,
        },
        "react-redux": {
          singleton: true,
          eager: true,
        },
        "@reduxjs/toolkit": {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
  server: {
    port: 3001,
    strictPort: true,
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
