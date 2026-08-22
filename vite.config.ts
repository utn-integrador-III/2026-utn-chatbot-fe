import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
  environment: 'jsdom',
  globals: true,
  setupFiles: './src/test/setup.ts', // confirma que sea el path real que tienes
  coverage: {
    provider: 'v8',
    reporter: ['text', 'html'],
    exclude: [
      'src/test/**',
      'src/main.tsx',
      'src/vite-env.d.ts',
      '**/*.config.*',
      'src/types/**',
    ],
  },
},
})
