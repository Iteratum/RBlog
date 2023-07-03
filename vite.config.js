import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@headlessui/react', 'react-router-dom', '@heroicons/react/24/outline'],
    }
  }
})
