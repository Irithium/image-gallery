import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    define: {
      "process.env.NODE_ENV": '"production"',
    },
  },
  plugins: [react()],
});
