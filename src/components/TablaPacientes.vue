<template>
  <div>
    <div class="acciones">
      <router-link to="/pacientes" id="btn" class="btn btn-outline-primary">Agregar paciente</router-link>
      <input class="form-control custom-search border-secondary" type="search" placeholder="Buscar paciente por nombre o apellido" aria-label="Search" v-model="busqueda">
    </div>

    <div class="container-fluid w-100">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>Pacientes</h3>
              <div class="table-responsive">
                <table class="table table-hover">
                  <!-- Encabezado de la tabla -->
                  <thead>
                    <tr>
                  
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">DNI</th>
                      <th scope="col">Obra Social</th>
                      <th scope="col">N° Afiliado</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
          
                  <tbody>
                    <tr v-for="(paciente, index) in pacientesPaginados" :key="index">
                      
                      <td>{{ paciente.nombre }}</td>
                      <td>{{ paciente.apellido }}</td>
                      <td>{{ paciente.dni }}</td>
                      <td>{{ paciente.obraSocial }}</td>
                      <td>{{ paciente.afiliadoObraSocial }}</td>
                      <td>
                        <button @click="mostrarPacientes(paciente)" type="button" class="btn btn-secondary">Info</button> 
                        <button style="margin-left: 5px;" @click="mostrarConsultas(paciente)" type="button" class="btn btn-outline-secondary">Consultas</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Paginador -->
              <nav aria-label="Page navigation">
                <ul class="pagination justify-content-end">
                  <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <a class="page-link" @click="cambiarPagina(currentPage - 1)" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item" v-for="page in totalPaginas" :key="page" :class="{ 'active': currentPage === page }">
                    <a class="page-link" @click="cambiarPagina(page)">{{ page }}</a>
                  </li>
                  <li class="page-item" :class="{ 'disabled': currentPage === totalPaginas }">
                    <a class="page-link" @click="cambiarPagina(currentPage + 1)" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modales -->
    <modal-consultas :show-modal="mostrarModal" :consultas="consultasPaciente" :paciente="pacienteSeleccionado" @cerrar="cerrarModal" />
    <modal-pacientes :show-modal="mostrarModalPacientes" :paciente="pacienteSeleccionado" @cerrar="cerrarModalPacientes" />
  </div>
</template>

<script>
import axios from "axios";
import ModalConsultas from "./ModalConsultas.vue";
import ModalPacientes from './ModalPacientes.vue';

export default {
  components: {
    ModalConsultas,
    ModalPacientes
  },
  data() {
    return {
      pacientes: [],
      pacientesPorPagina: 5,
      currentPage: 1,
      mostrarModal: false,
      mostrarModalPacientes: false,
      consultasPaciente: [],
      pacienteSeleccionado: {},
      busqueda: ''
    };
  },
  mounted() {
    this.cargarDatosDeApi();
  },
  methods: {
    cargarDatosDeApi() {
      axios.get('http://localhost:3000/paciente/all')
        .then(response => {
          this.pacientes = response.data;
        })
        .catch(error => {
          console.error('Error al cargar datos de la API:', error);
        });
    },
    filtrarPacientes() {
      const terminoBusqueda = this.busqueda.toLowerCase();
      const pacientesFiltrados = this.pacientes.filter(paciente => {
        return paciente.nombre.toLowerCase().includes(terminoBusqueda) || paciente.apellido.toLowerCase().includes(terminoBusqueda);
      });
      const inicio = (this.currentPage - 1) * this.pacientesPorPagina;
      const fin = inicio + this.pacientesPorPagina;
      return pacientesFiltrados.slice(inicio, fin);
    },
    cambiarPagina(page) {
      if (page < 1 || page > this.totalPaginas) return;
      this.currentPage = page;
    },
    mostrarConsultas(paciente) {
      this.consultasPaciente = []; // Limpiar las consultas antes de cargarlas
      axios.get(`http://localhost:3000/paciente/${paciente.id_paciente}`)
        .then(response => {
          // Guardar los datos completos del paciente obtenidos de la API
          this.pacienteSeleccionado = response.data;
          // Luego, intentar obtener las consultas del paciente
          return axios.get(`http://localhost:3000/consulta/paciente/${paciente.id_paciente}`);
        })
        .then(response => {
          // Guardar las consultas del paciente, si existen
          this.consultasPaciente = response.data;
          this.mostrarModal = true; // Mostrar el modal con los datos obtenidos
        })
        .catch(error => {
          // Manejar los errores, por ejemplo si el paciente no tiene consultas o hay problemas con la API
          console.error('Error al cargar datos del paciente o consultas:', error);
          // Aún mostrar el modal si se han obtenido los datos del paciente correctamente
          if (this.pacienteSeleccionado) {
            this.mostrarModal = true;
          }
        });
    },
    mostrarPacientes(paciente) {
      axios.get(`http://localhost:3000/paciente/${paciente.id_paciente}`)
        .then(response => {
          // Guardar los datos completos del paciente obtenidos de la API
          this.pacienteSeleccionado = response.data;
          // Luego, intentar obtener las consultas del paciente
          return axios.get(`http://localhost:3000/consulta/paciente/${paciente.id_paciente}`);
        })
        .then(response => {
          // Guardar las consultas del paciente, si existen
          this.consultasPaciente = response.data;
          this.mostrarModalPacientes = true; // Mostrar el modal con los datos obtenidos
        })
        .catch(error => {
          // Manejar los errores, por ejemplo si el paciente no tiene consultas o hay problemas con la API
          console.error('Error al cargar datos del paciente o consultas:', error);
          // Aún mostrar el modal si se han obtenido los datos del paciente correctamente
          if (this.pacienteSeleccionado) {
            this.mostrarModalPacientes = true;
          }
        });
    },
    cerrarModal() {
      this.mostrarModal = false;
    },
    cerrarModalPacientes() {
      this.mostrarModalPacientes = false;
    }
  },
  computed: {
    totalPaginas() {
      // Aplicar el filtro de búsqueda a la lista completa de pacientes
      const pacientesFiltrados = this.pacientes.filter(paciente => {
        const terminoBusqueda = this.busqueda.toLowerCase();
        return paciente.nombre.toLowerCase().includes(terminoBusqueda) || paciente.apellido.toLowerCase().includes(terminoBusqueda);
      });
      // Calcular el número total de páginas basado en la lista filtrada
      return Math.ceil(pacientesFiltrados.length / this.pacientesPorPagina);
    },
    pacientesPaginados() {
      // Obtener el índice de inicio y fin del rango de pacientes por página
      const inicio = (this.currentPage - 1) * this.pacientesPorPagina;
      const fin = inicio + this.pacientesPorPagina;
      // Aplicar el filtro de búsqueda a la lista completa de pacientes y luego paginar los resultados
      return this.pacientes.filter(paciente => {
        const terminoBusqueda = this.busqueda.toLowerCase();
        return paciente.nombre.toLowerCase().includes(terminoBusqueda) || paciente.apellido.toLowerCase().includes(terminoBusqueda);
      }).slice(inicio, fin);
    }
  }
}
</script>

<style scoped>
.container-fluid {
  margin-top: 10px;
}
.acciones {
  display: flex;
  justify-content: start;
}
.custom-search {
  width: 250px;
  font-size: 14px;
  margin-top: 70px;
  margin-left: 10px;
}
#btn {
  margin-top: 70px;
  margin-left: 10px;
}

.router-link {
  color: inherit; /* Hereda el color del texto del elemento padre */
  text-decoration: none; /* Elimina la decoración del enlace */
  cursor: pointer; /* Cambia el cursor al pasar sobre el enlace */
  /* Agrega otros estilos según sea necesario */
}
</style>
