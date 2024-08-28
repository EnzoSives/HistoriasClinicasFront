<script setup lang="">
import { computed, onMounted } from 'vue';
import { useAuthStore } from '../store/index';
import NavBar from '../components/NavBar.vue';
import Tabla from '../components/TablaPacientes.vue';
import Footer from '../components/Footer.vue';
import LoginPage from './LoginPage.vue';

// Acceder al estado de autenticación
const authStore = useAuthStore();

// Computed property para verificar si el usuario está autenticado
const isAuthenticated = computed(() => authStore.isAuthenticated);

// Estado de carga
const isLoading = computed(() => authStore.token === '' && !authStore.isAuthenticated);


</script>

<template>
  <div>
    <!-- Mostrar el LoginPage si el usuario no está autenticado y la carga ha terminado -->
    <div v-if="isAuthenticated" >
    <NavBar />
      <Tabla />
      <Footer/>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  font-size: large;
}
</style>
