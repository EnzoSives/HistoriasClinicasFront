<template>
    <div class="modal" :class="{ 'show': showModal }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Observaciones de la Consulta</h5>
            <button type="button" class="btn-close" @click="cerrarModal"></button>
          </div>
          <div class="modal-body">
            <p>{{ observaciones }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: Boolean,
      observaciones: String,
    },
    methods: {
      cerrarModal() {
        this.$emit('cerrar');
      },
    },
  };
  </script>
  