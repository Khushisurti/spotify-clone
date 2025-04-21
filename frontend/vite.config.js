import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Ensure this matches your backend URL
        changeOrigin: true,  // Ensure requests appear as coming from the correct origin
        secure: false,       // Allow HTTP (disable for HTTPS)
        ws: true,            // Enable WebSockets if needed
      }
    }
  }
})
