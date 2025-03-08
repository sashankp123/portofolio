import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use base path only for GitHub Pages, not for Vercel
  base: process.env.VERCEL ? '/' : '/portofolio/',
})
