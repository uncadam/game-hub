import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 Important: update "game-hub" if your repo name changes
export default defineConfig({
  plugins: [react()],
  base: "/game-hub/"
});
