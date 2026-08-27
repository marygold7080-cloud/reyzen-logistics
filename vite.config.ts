import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/reyzen-app-[hash].js`,
        chunkFileNames: `assets/reyzen-chunk-[hash].js`,
        assetFileNames: `assets/reyzen-style-[hash].[ext]`
      }
    }
  },
  server: {
    port: 3000,
    open: false
  }
});
