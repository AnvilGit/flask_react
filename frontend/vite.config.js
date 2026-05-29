import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration file for the React frontend.
// This enables the React plugin so Vite can transform JSX and enable fast refresh.
export default defineConfig({
  plugins: [react()],
});
