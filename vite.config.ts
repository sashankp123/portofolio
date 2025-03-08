import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine the base path based on the deployment platform
const getBasePath = () => {
  // For GitHub Pages
  if (process.env.GITHUB_PAGES) {
    return '/portofolio/'
  }
  // For Vercel and Netlify, use root path
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use appropriate base path depending on the deployment platform
  base: getBasePath(),
})
