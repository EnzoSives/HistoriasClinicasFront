import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '149.50.137.224', // Tu IP específica
    port: 5173, // O el puerto que prefieras
  }
})
