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
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: [".test/vitest.setup.js"],
    include: ["**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [
      "node_modules",
      "dist",
      ".idea",
      ".git",
      ".cache",
      ".scannerwork",
      ".yarn",
    ],
  },
});
