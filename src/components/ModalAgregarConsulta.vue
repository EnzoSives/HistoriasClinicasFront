<template>
  <div class="modal" :class="{ 'show': showModal }" @click.self="cerrarModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Agregar Consulta</h5>
          <button type="button" class="btn-close" @click="cerrarModal"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="guardar">
            <!-- <div class="mb-3">
              <label for="fechaHoraInicio" class="form-label">Fecha y Hora de Inicio</label>
              <input type="datetime-local" class="form-control" id="fechaHoraInicio" v-model="nuevaConsulta.fechaHoraInicio" required>
            </div> -->
            <div class="mb-3">
              <label for="motivoConsulta" class="form-label">Motivo de la Consulta</label>
              <input type="text" class="form-control" id="motivoConsulta" v-model="nuevaConsulta.motivoConsulta" required>
            </div>
            <div class="mb-3">
              <label for="observaciones" class="form-label">Observaciones</label>
              <textarea class="form-control" id="observaciones" v-model="nuevaConsulta.observaciones" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
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
    paciente: Object
  },
  data() {
    return {
      nuevaConsulta: {
        // fechaHoraInicio: '',
        motivoConsulta: '',
        observaciones: '',
        id_paciente: this.paciente.id_paciente // Asignar el id del paciente al inicializar
      }
    }
  },
  watch: {
    showModal(newVal) {
      if (newVal) {
        this.resetForm();
      }
    },
    paciente: {
      immediate: true,
      handler(newVal) {
        this.nuevaConsulta.id_paciente = newVal.id_paciente;
      }
    }
  },
  methods: {
    cerrarModal() {
      this.$emit('cerrar');
    },
    guardar() {
      // // Formatear la fecha y hora antes de enviar la consulta al backend
      // this.nuevaConsulta.fechaHoraInicio = this.formatDateTime(this.nuevaConsulta.fechaHoraInicio);

      // Emitir el evento 'guardar' con la consulta
      this.$emit('guardar', this.nuevaConsulta);

      // Resetear el formulario después de enviar la consulta
      this.resetForm();

      // Cerrar el modal
      this.cerrarModal();
    },
    formatDateTime(dateTime) {
      const date = new Date(dateTime);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    },
    resetForm() {
      this.nuevaConsulta = {
        // fechaHoraInicio: '',
        motivoConsulta: '',
        observaciones: '',
        id_paciente: this.paciente.id_paciente
      };
    }
  }
}
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
