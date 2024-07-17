<!-- Footer.vue -->
<template>
  <v-footer dark height="auto" class="footer">
    <v-card class="flex" flat tile>
      <v-card-title class="teal text-center"> <!-- Añadida la clase text-center aquí -->
        <strong class="subheading">Sistema Historias Clinicas</strong>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center text-center"> <!-- Añadida la clase text-center aquí -->
        &copy;2024 
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
 name:'footer',
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
