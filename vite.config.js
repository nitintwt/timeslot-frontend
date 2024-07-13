import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api/v1/customer':'http://localhost:3000',
      '/api/v1/users':'http://localhost:3003',
      '/api/v1/slot':'http://localhost:3003',
      '/api/v1/google':'http://localhost:3002',
    }

  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },    
})