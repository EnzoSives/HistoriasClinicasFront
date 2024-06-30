<template>
  <div class="modal" :class="{ 'show': showModal }">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Consultas del Paciente {{ paciente.nombre }} {{ paciente.apellido }}</h5>
          <button type="button" class="btn-close" @click="cerrarModal"></button>
        </div>
        <div class="modal-body">
          <button type="button" class="btn btn-primary" @click="abrirAgregarConsultaModal">Agregar Consulta</button>
          
          <div v-if="localConsultas.length > 0">
            <div v-for="(consulta, index) in paginatedConsultas" :key="index" class="card">
              <div class="card-body">
                <h5 class="card-title">{{ formatearFecha(consulta.fechaHoraInicio) }}</h5>
                <p class="card-text">{{ consulta.motivoConsulta }}</p>
                <button type="button" class="btn btn-outline-primary" @click="verObservaciones(consulta.observaciones)">Ver Observaciones</button>
                <button type="button" class="btn btn-secondary" @click="editarConsulta(consulta)">Editar</button>
                <button type="button" class="btn btn-danger" @click="eliminarConsulta(consulta.id)">Eliminar</button>
              </div>
            </div>
          </div>
          <div v-else>
            <p>No hay consultas registradas para este paciente.</p>
          </div>

          <ul v-if="localConsultas.length > 0" class="pagination justify-content-end mt-3">
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

          <!-- Agregar ConsultaEdicion dentro del modal -->
          <EditarConsulta v-if="modoEdicion" :showModal="showModal" :consulta="consultaParaEditar" @actualizarConsulta="actualizarConsulta" @cerrar="cerrarConsultaEdicion" />

          <ObservacionesModal :showModal="showObservacionesModal" :observaciones="observacionesModalContent" @cerrar="cerrarObservacionesModal" />
          <!-- Ajustar la lógica del modal para agregar consulta -->
          <AgregarConsultaModal :showModal="showAgregarConsultaModal" :paciente="paciente" @guardar="guardarConsulta" @cerrar="cerrarAgregarConsultaModal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ObservacionesModal from '../components/ModalObservaciones.vue';
import AgregarConsultaModal from '../components/ModalAgregarConsulta.vue'; // Asegúrate que este sea el componente correcto
import EditarConsulta from '../components/EditarConsulta.vue';

export default {
  props: {
    showModal: Boolean,
    consultas: Array,
    paciente: Object,
    itemsPerPage: {
      type: Number,
      default: 3
    },
  },
  components: {
    ObservacionesModal,
    AgregarConsultaModal, // Asegúrate de importar el componente correcto
    EditarConsulta,
  },
  data() {
    return {
      currentPage: 1,
      showObservacionesModal: false,
      observacionesModalContent: '',
      showAgregarConsultaModal: false,
      modoEdicion: false,
      consultaParaEditar: null,
      localConsultas: [...this.consultas] // Crear una copia de consultas en el estado local
    }
  },
  watch: {
    consultas: {
      handler(newConsultas) {
        this.localConsultas = [...newConsultas];
      },
      deep: true
    }
  },
  computed: {
    orderedConsultas() {
      return [...this.localConsultas].sort((a, b) => new Date(b.fechaHoraInicio) - new Date(a.fechaHoraInicio));
    },
    paginatedConsultas() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.orderedConsultas.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.orderedConsultas.length / this.itemsPerPage);
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
    },
    abrirAgregarConsultaModal() {
      this.showAgregarConsultaModal = true;
    },
    cerrarAgregarConsultaModal() {
      this.showAgregarConsultaModal = false;
    },
    editarConsulta(consulta) {
      this.consultaParaEditar = consulta;
      this.modoEdicion = true; // Activar el modo de edición
    },
    async eliminarConsulta(idConsulta) {
      try {
        await axios.delete(`consulta/eliminar/${idConsulta}`);
        this.localConsultas = this.localConsultas.filter(consulta => consulta.id !== idConsulta);
        this.$emit('actualizarConsultas', this.localConsultas); // Emitir evento para actualizar el prop consultas
      } catch (error) {
        console.error('Error eliminando la consulta:', error);
        alert('Hubo un problema eliminando la consulta. Por favor, inténtelo de nuevo.');
      }
    },
    actualizarConsulta(consultaActualizada) {
      // Aquí podrías realizar la actualización de la consulta en el backend
      // Por ahora, simularemos la actualización en el frontend

      const index = this.localConsultas.findIndex(c => c.id === consultaActualizada.id);
      if (index !== -1) {
        this.localConsultas.splice(index, 1, consultaActualizada);
        this.modoEdicion = false; // Desactivar el modo de edición
        this.$emit('actualizarConsultas', this.localConsultas); // Emitir evento para actualizar el prop consultas
      }
    },
    cerrarConsultaEdicion() {
      this.modoEdicion = false; // Desactivar el modo de edición al cerrar la ventana de edición
    },
    async guardarConsulta(nuevaConsulta) {
      try {
        // Formatea la fecha y hora como una cadena ISO 8601
        nuevaConsulta.fechaHoraInicio = new Date().toISOString();
        console.log(nuevaConsulta);

        const response = await axios.post('consulta/crear', nuevaConsulta);
        this.consultas.push(response.data);
        this.cerrarAgregarConsultaModal();
      } catch (error) {
        console.error('Error guardando la consulta:', error);
        alert('Hubo un problema guardando la consulta. Por favor, inténtelo de nuevo.');
      }
    },
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
button {
  margin: 2px;
}
</style>
