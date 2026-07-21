import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const isBuild = process.argv.includes("build");

const port = Number(process.env.PORT || 3000);
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    strictPort: true,
  },
  preview: {
    port,
    host: "0.0.0.0",
  },
});
