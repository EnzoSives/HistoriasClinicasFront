import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: '',
    email: '',
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

    async login(email:string, password: string) {
      try {
        const response = await axios.post('/auth/login', { email, password });
        this.token = response.data.access_token;
        this.email = response.data.email;
        localStorage.setItem('access-token', this.token);
        localStorage.setItem('email', this.email);
        this.isAuthenticated = true; // Asegura que el estado se actualice correctamente
        console.log('Token de inicio de sesión:', this.token);
        
        // Llama a validateToken después de iniciar sesión
        await this.validateToken();

        router.push('/');
        // Redirige al usuario y recarga la página
        // router.push('/home').then(() => {
        //   window.location.reload(); // Recarga la página
        // });
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario.
      }
    },

    async validateToken() {
      const token = localStorage.getItem('access-token');
      const email = localStorage.getItem('email');
    
      if (token && email) {
        try {
          const response = await axios.get('/auth/user', {
            headers: {
              Authorization: `Bearer ${token}`
            },
            params: { email: encodeURIComponent(email) } // Codifica el email
          });
    
          this.user = response.data.user.username;
          this.isAuthenticated = true;
          console.log('Token validado correctamente', this.user);
          
        } catch (error) {
          console.error('Error al validar el token:', error);
        
          this.user = null;
          this.isAuthenticated = false;
          alert('Sesión expirada. Por favor, inicia sesión de nuevo.');
        }
      } else {
        this.user = null;
        this.isAuthenticated = false;
      }
    },
    
    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem('access-token');
      localStorage.removeItem('email');
      console.log('Usuario desconectado');
      router.push('/');
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
