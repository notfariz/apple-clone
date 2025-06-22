// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/apple-clone/',  // <-- this line is critical
  plugins: [react()],
})