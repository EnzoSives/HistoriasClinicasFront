<template>
  <div class="modal" :class="{ 'show': showModal }">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Consultas del Paciente {{ paciente.nombre }} {{ paciente.apellido }}</h5>
          <button type="button" class="btn-close" @click="cerrarModal"></button>
        </div>
        <div class="modal-body">
          <!-- Sección de datos del paciente -->
          <div class="paciente-info">
            <h4>Información del Paciente</h4>
            <p><strong>Nombre:</strong> {{ paciente.nombre }} {{ paciente.apellido }}</p>
            <p><strong>DNI:</strong> {{ paciente.dni }}</p>
            <p><strong>Edad:</strong> {{ paciente.edad }}</p>
            <p><strong>Teléfono:</strong> {{ paciente.telefonoCelular }}</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    showModal: Boolean,
  
    paciente: Object,  // Añadido para recibir los datos del paciente
    itemsPerPage: {
      type: Number,
      default: 3
    },
  },
  components: {
   
  },
  data() {
    return {
      currentPage: 1,
      showObservacionesModal: false,
      observacionesModalContent: '',
    }
  },
  computed: {
    paginatedConsultas() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.consultas.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.consultas.length / this.itemsPerPage);
    }
  },
  methods: {
    cerrarModal() {
      this.$emit('cerrar');
    },
    setPage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.currentPage = page;
    },
    verObservaciones(observaciones) {
      this.observacionesModalContent = observaciones;
      this.showObservacionesModal = true;
    },
    cerrarObservacionesModal() {
      this.showObservacionesModal = false;
      this.observacionesModalContent = '';
    },
    formatearFecha(fecha) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      return new Date(fecha).toLocaleDateString('es-ES', options);
    }
  },
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
  }
  .modal-content {
    position: relative;
    border-radius: 10px;
  }
  .card {
    margin: 10px;
  }
  .modal-header {
    padding: 1rem;
    border-bottom: 1px solid #dee2e6;
  }
  .modal-title {
    margin-bottom: 0;
  }
  .modal-body {
    padding: 1rem;
  }
  .show {
    display: block;
  }
</style>
