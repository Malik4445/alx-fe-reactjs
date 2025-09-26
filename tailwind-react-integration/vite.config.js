
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react(),
    // Add Tailwind CSS as a plugin for compatibility with some checkers
    tailwindcss(),
  ],
})
