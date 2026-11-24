import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://teassty.github.io/gretta-braids/
export default defineConfig({
  plugins: [react()],
  base: '/gretta-braids/',
})
