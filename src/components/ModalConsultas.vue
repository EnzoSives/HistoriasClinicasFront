<template>
   <div class="modal" :class="{ 'show': showModal }">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Consultas del Paciente</h5>
          <button type="button" class="btn-close" @click="cerrarModal"></button>
        </div>
        <div class="modal-body">
          <button type="button" class="btn btn-primary">Agregar Consulta</button>
          <!-- Aquí mostrarías las consultas del paciente -->
          <div v-for="(consulta, index) in paginatedConsultas" :key="index" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ formatearFecha(consulta.fechaHoraInicio) }}</h5>
              <p class="card-text">{{ consulta.motivoConsulta }}</p>
              <button type="button" class="btn btn-outline-primary" @click="verObservaciones(consulta.observaciones)">Ver Observacion</button>
            </div>
          </div>

          <!-- Paginador -->
          <ul class="pagination justify-content-end mt-3">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
              <a class="page-link" @click="setPage(currentPage - 1)">Anterior</a>
            </li>
            <li v-for="page in totalPages" :key="page" class="page-item" :class="{ 'active': currentPage === page }">
              <a class="page-link" @click="setPage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
              <a class="page-link" @click="setPage(currentPage + 1)">Siguiente</a>
            </li>
          </ul>


          <ObservacionesModal :showModal="showObservacionesModal" :observaciones="observacionesModalContent" @cerrar="cerrarObservacionesModal" />
        </div>
      </div>
    </div>
  </div>
</template>

  
<script>
import ObservacionesModal from '../components/ModalObservaciones.vue';

export default {
  props: {
    showModal: Boolean,
    consultas: Array,
    itemsPerPage: {
      type: Number,
      default: 3 // Puedes cambiar el número de consultas por página aquí
    },
  },
  components: {
    ObservacionesModal,
  },
  data() {
    return {
      currentPage: 1,
      showObservacionesModal: false,
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
  .card{
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
  