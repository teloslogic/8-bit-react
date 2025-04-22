/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      '**/dist/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/public/**',
      '**/roms/**'
    ],
    reporters: 'verbose'
  }
})
