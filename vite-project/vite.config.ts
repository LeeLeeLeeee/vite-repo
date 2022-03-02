import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import Inspect from 'vite-plugin-inspect'
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs(), Inspect(), {
    ...replace({
      preventAssignment: true,
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: '15',
      '.worker': '.worker?worker'
    }),
    enforce: 'pre',
  }],
})
