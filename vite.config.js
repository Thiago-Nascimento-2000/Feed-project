import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TestTube } from 'phosphor-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['phosphor-react']
    }
  }
})
