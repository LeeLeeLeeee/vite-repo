import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import inlineWorkerPlugin from 'esbuild-plugin-inline-worker';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
      preserveSymlinks: true,
  },
  plugins: [react({
    babel: {
      plugins: [],
      presets: [['@babel/preset-env', {
        include: 'api.js',
      }]],
    }
  }), 
  Inspect()],
  optimizeDeps: {
    include: ['sub'],
    esbuildOptions: {
      plugins: [inlineWorkerPlugin({
        format: 'esm',

      })]
    }
  }
})
