import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative paths for assets, ideal for GitHub Pages
  build: {
    outDir: 'dist',
  }
});
