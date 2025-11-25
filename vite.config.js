import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  optimizeDeps: {
    exclude: [
      'gsap',
      '@gsap/react',
      '@splinetool/react-spline',
      '@splinetool/runtime',
      'framer-motion',
    ],
  },
})