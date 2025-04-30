// vite.config.ts
import { defineConfig } from 'vite'; // ✅ this line was missing!
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
