import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

const root = resolve(__dirname, 'src')

export default defineConfig({
  plugins: [react()],
  root,
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000
  }
});
