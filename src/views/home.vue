<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from '../components/NavBar.vue'
import Tabla from '../components/TablaPacientes.vue'
import Footer from '../components/Footer.vue'


</script>

<template>
  <NavBar></NavBar>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <Tabla></Tabla>
  <Footer></Footer>

</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body{
  font-family: 'Roboto', sans-serif;
  font-size: large;
}

</style>
