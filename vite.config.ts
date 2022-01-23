// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue';

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
          "components": path.resolve(__dirname, "./src/components"),
          "core": path.resolve(__dirname, "./src/core"),
          "stores": path.resolve(__dirname, "./src/stores"),
          "views": path.resolve(__dirname, "./src/views"),
        },
      },
})