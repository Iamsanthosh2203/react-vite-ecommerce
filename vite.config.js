import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://iamsanthosh2203.github.io/react-vite-ecommerce/", // <--- Add this line
});
