import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// vite.config.js
import path from "path";
import { partytownVite } from "@builder.io/partytown/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
});
