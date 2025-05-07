import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/select-language": {
        target: "https://sabitalk-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/auth/signup": {
        target: "https://sabitalk-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },

      "/auth/verify-otp": {
        target: "https://sabitalk-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/auth/reset-password": {
        target: "https://sabitalk-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },"/auth/reset/new-password": {
        target: "https://sabitalk-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/auth/login": {
        target: "https://sabitalk-api.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
