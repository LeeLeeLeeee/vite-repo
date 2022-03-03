import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import Inspect from 'vite-plugin-inspect'
import inlineWorkerPlugin from 'esbuild-plugin-inline-worker';
console.log(inlineWorkerPlugin);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs(), Inspect()],
  optimizeDeps: {
    include: ['sub'],
    
  }
})
