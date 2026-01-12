import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "appointmentApp",
      filename: "remoteEntry.js",
      exposes: {
        // Hum ye component share karenge
        "./AppointmentList": "./src/components/AppointmentList.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3002, // Iska port 3002 rakhenge
    strictPort: true,
  },
  preview: {
    port: 3002,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});