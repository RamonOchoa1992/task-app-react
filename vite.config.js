import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    //setupFiles: "src/setupTests.js",
    environment: "jsdom",
  },
  plugins: [react()],
});
