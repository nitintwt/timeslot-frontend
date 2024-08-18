import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config({
  path:'./.env'
})


// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api/v1/customer':process.env.AWS_CLIENT_API,
      '/api/v1/users':process.env.AWS_USERS_API,
      '/api/v1/slot':process.env.AWS_SLOT_API,
      '/api/v1/google':process.env.AWS_GOOGLE_API,
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },    
})