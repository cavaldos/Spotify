import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // default: 'localhost'
  },
  preview: {
    port: 8080,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "**/*.jsx", "**/*.tsx"],
  },
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: "/src/",
      },
    ],
  },
});
