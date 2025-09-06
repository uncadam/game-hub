import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 MUST match your GitHub repo name exactly
export default defineConfig({
  plugins: [react()],
  base: "/game-hub/"
});
