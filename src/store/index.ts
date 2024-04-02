import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: '',
    isAuthenticated: false,
  }),

  actions: {
    async register(username:string, email:string, password:string) {
      const response = await axios.post('/auth/register', { username, email, password });
      this.token = response.data.access_token;
      localStorage.setItem('access-token', this.token);
      router.push('/login');
    },

    async login(email:string, password:string) {
      try {
        const response = await axios.post('/auth/login', { email, password });
        this.token = response.data.access_token;
        localStorage.setItem('access-token', this.token);
        console.log('Token de inicio de sesión:', this.token);
        router.push('/secretaria');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    },

    async validateToken() {
      const token = localStorage.getItem('access-token');

      if (token) {
        try {
          const response = await axios.get('/auth/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          this.user = response.data;
          this.isAuthenticated = true;
          console.log('Token validado correctamente');
        } catch (error) {
          console.error('Error al validar el token:', error);
          localStorage.removeItem('access-token');
          this.isAuthenticated = false;
        }
      }
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('access-token');
      console.log('Usuario desconectado');
      router.push('/login'); // Redirige a la página de inicio de sesión
    },
  },
});