import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api/v1/customer':'https://9dgwr80go2.execute-api.us-east-1.amazonaws.com/timeslot/client',
      '/api/v1/users':'https://9dgwr80go2.execute-api.us-east-1.amazonaws.com/timeslot/users',
      '/api/v1/slot':'https://9dgwr80go2.execute-api.us-east-1.amazonaws.com/timeslot/users',
      '/api/v1/google':'https://9dgwr80go2.execute-api.us-east-1.amazonaws.com/timeslot/google',
    }

  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },    
})