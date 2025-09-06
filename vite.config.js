import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: change game-hub to your repo name exactly
export default defineConfig({
  plugins: [react()],
  base: "/game-hub/"
});
