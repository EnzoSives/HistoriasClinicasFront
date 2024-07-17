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
    async register(username: string, email: string, password: string) {
      try {
        const response = await axios.post('/auth/register', { username, email, password });
        this.token = response.data.access_token;
        localStorage.setItem('access-token', this.token);
        router.push('/login');
      } catch (error) {
        console.error('Error al registrar:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario.
      }
    },

    async login(email: string, password: string) {
      try {
        const response = await axios.post('/auth/login', { email, password });
        this.token = response.data.access_token;
        localStorage.setItem('access-token', this.token);
        this.isAuthenticated = true; // Asegura que el estado se actualice correctamente
        console.log('Token de inicio de sesión:', this.token);
        router.push('/');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario.
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
      } else {
        this.isAuthenticated = false; // Asegura que el estado se actualice correctamente
      }
    },

    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('access-token');
      console.log('Usuario desconectado');
      router.push('/login');
    },
    // Esto asegura que al recargar la página se valide el token almacenado en localStorage
    persist: {
      enabled: true,
      strategies: [
        {
          key: 'auth',
          storage: localStorage,
        },
      ],
    },
  },

});
