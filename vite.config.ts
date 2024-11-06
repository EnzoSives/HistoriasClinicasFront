import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '149.50.142.190', // Tu IP específica
    port: 5173, // O el puerto que prefieras
  }
})
