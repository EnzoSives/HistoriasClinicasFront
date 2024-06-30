<template>
    <div class="modal" :class="{ 'show': showModal }" @click.self="cerrarModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar Consulta</h5>
            <button type="button" class="btn-close" @click="cerrarModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="actualizar">
              <div class="mb-3">
                <label for="motivoConsulta" class="form-label">Motivo de la Consulta</label>
                <input type="text" class="form-control" id="motivoConsulta" v-model="consultaEditada.motivoConsulta" required>
              </div>
              <div class="mb-3">
                <label for="observaciones" class="form-label">Observaciones</label>
                <textarea class="form-control" id="observaciones" v-model="consultaEditada.observaciones" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showModal: Boolean,
      consulta: Object, // Consulta a editar
    },
    data() {
      return {
        consultaEditada: {
          motivoConsulta: '',
          observaciones: '',
        }
      };
    },
    watch: {
      showModal(newVal) {
        if (newVal) {
          this.cargarConsulta();
        }
      },
      consulta: {
        immediate: true,
        handler(newVal) {
          // Copiar la consulta recibida para editarla sin modificar directamente props
          this.consultaEditada = { ...newVal };
        }
      }
    },
    methods: {
      cerrarModal() {
        this.$emit('cerrar');
      },
      async actualizar() {
        try {
          // Aquí deberías hacer la solicitud PATCH para actualizar la consulta en el backend
          // Usaremos un ejemplo simplificado con un console.log
  
          // Simular actualización en el backend
          console.log('Consulta actualizada:', this.consultaEditada);
  
          // Emitir evento con la consulta actualizada
          this.$emit('actualizarConsulta', this.consultaEditada);
  
          // Cerrar el modal después de actualizar
          this.cerrarModal();
        } catch (error) {
          console.error('Error actualizando la consulta:', error);
          alert('Hubo un problema actualizando la consulta. Por favor, inténtelo de nuevo.');
        }
      },
      cargarConsulta() {
        // Esta función puede ser útil si deseas realizar alguna carga inicial específica al abrir el modal
        // Por ejemplo, formatear fechas u otros campos antes de la edición
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    overflow: auto;
  }
  .modal.show {
    display: flex;
  }
  .modal-content {
    position: relative;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
  }
  </style>
  