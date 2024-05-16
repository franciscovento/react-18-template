/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    include: ['src/**/*.test.tsx'],
    setupFiles: './tests/setup.ts',
    coverage: {
      include: ['src/ui/**/*.{ts,tsx}'],
      exclude: [
        ...configDefaults.exclude, // toda la config para excluir modules
        'src/ui/**/**/*.stories.{ts,tsx}',
      ],
    },
  }
})
