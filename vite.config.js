import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000
  },
  base: '/quiz-app/', // Add base URL for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});