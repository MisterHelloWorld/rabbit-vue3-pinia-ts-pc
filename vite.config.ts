import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  // 配置路径，使得项目可以使用@
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 全局引入less文件
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `,
      },
    },
  },
});
