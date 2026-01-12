import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shellApp",
      filename: "remoteEntry.js", // Shell ko bhi filename chahiye agar wo kuch expose kar raha ho
      remotes: {
        patientApp: "http://localhost:3001/assets/remoteEntry.js",
        appointmentApp: "http://localhost:3002/assets/remoteEntry.js", // Naya remote add kiya
      },
      exposes: {
        "./store": "./src/store/index.js",
        "./userSlice": "./src/store/userSlice.js",
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
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
