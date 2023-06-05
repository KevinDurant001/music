import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import pxtovw from "postcss-px-to-viewport";
const loader_pxtovw = pxtovw({
  viewportWidth: 414,
  viewportUnit: "vw",
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [loader_pxtovw],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/assets/css/index.less"
        )}";`,
      },
    },
  },
});
