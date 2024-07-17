<template>
    <div class="container mt-5">
      <h2 class="mb-4">Iniciar sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useAuthStore } from '../store/index';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async handleLogin() {
        try {
          await useAuthStore().login(this.email, this.password);
          // Redirigir a la página después del inicio de sesión (puedes ajustar esto según tu flujo de la aplicación)
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          // Manejar el error, por ejemplo mostrar un mensaje al usuario
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
  }
  </style>
  