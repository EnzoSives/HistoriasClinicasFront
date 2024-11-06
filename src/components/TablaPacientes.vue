<template>
  <div>
    <div class="acciones" style="margin-top: 10px;">
      <router-link to="/pacientes" id="btn" class="btn btn-primary">Agregar paciente</router-link>
      <!-- <router-link to="/consultas" id="btn" class="btn btn-primary">Agregar paciente</router-link> -->
      <input class="form-control custom-search border-secondary" type="search" placeholder="Buscar paciente por nombre o apellido" aria-label="Search" v-model="busqueda">
    </div>

    <div class="container-fluid w-100" style="margin-top: 20px; overflow: auto;">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>Pacientes</h3>
              <div class="table-responsive">
                <table class="table table-striped table-hover">
                  <!-- Encabezado de la tabla -->
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">DNI</th>
                      <th scope="col">Obra Social</th>
                      <th scope="col">N° Afiliado</th>
                      <th scope="col">Direccion</th>
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
                      <td>{{ paciente.direccion }}</td>
                      <td>
                        <button @click="mostrarPacientes(paciente)" type="button" id="botonInfo" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>Ver</button> 
                        <button style="margin-left: 5px;" @click="editarPaciente(paciente)" type="button" id="botonEditar" class="btn btn-warning"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
</svg>Editar</button>
                        <button style="margin-left: 5px;" @click="mostrarConsultas(paciente)" type="button" id="botonConsultas" class="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-file-earmark-medical" viewBox="0 0 16 16">
  <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>Ver Consultas</button>
                      <button style="margin-left: 5px;" @click="borrarPaciente(paciente)" type="button"  class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
  <path d="M14 3a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2M3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5s-3.69-.311-4.785-.793"/>
</svg>Borrar</button>
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
    <editar-paciente-dialog
  :isModalOpen="mostrarModalEditar"
  :pacienteData="pacienteSeleccionado"
  @guardar="guardarCambios"
  @cerrar="cerrarModalEditar"
  
/>

  </div>
</template>

<script>
import axios from "axios";
import ModalConsultas from "./ModalConsultas.vue";
import ModalPacientes from './ModalPacientes.vue';
import EditarPacienteDialog from './EditarPacienteDialog.vue';

export default {
  components: {
    ModalConsultas,
    ModalPacientes,
    EditarPacienteDialog
  },
  data() {
    return {
      pacientes: [],
      pacientesPorPagina: 5,
      currentPage: 1,
      isModalOpen: false,
      mostrarModal: false,
      mostrarModalPacientes: false,
      mostrarModalEditar: false,
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
      axios.get('/paciente/all')
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
      axios.get(`/paciente/${paciente.id_paciente}`)
        .then(response => {
          // Guardar los datos completos del paciente obtenidos de la API
          this.pacienteSeleccionado = response.data;
          // Luego, intentar obtener las consultas del paciente
          return axios.get(`/consulta/paciente/${paciente.id_paciente}`);
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
      axios.get(`/paciente/${paciente.id_paciente}`)
        .then(response => {
          // Guardar los datos completos del paciente obtenidos de la API
          this.pacienteSeleccionado = response.data;
          // Luego, intentar obtener las consultas del paciente
          return axios.get(`/consulta/paciente/${paciente.id_paciente}`);
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
     guardarCambios(pacienteEditado) {
    // Aquí puedes realizar la lógica para guardar los cambios del paciente editado
    // Por ejemplo, hacer una llamada a la API para actualizar el paciente en la base de datos
    axios.patch(`/paciente/actualizar/${pacienteEditado.id_paciente}`, pacienteEditado)
      .then(response => {
        // Actualizar la lista de pacientes con los datos editados
        const index = this.pacientes.findIndex(p => p.id_paciente === pacienteEditado.id_paciente);
        if (index !== -1) {
          this.pacientes.splice(index, 1, response.data);
        }
        // Cerrar el modal después de guardar los cambios
        this.isModalOpen = false;
      })
      .catch(error => {
        console.error('Error al guardar los cambios:', error);
      });
  },
  borrarPaciente(paciente) {
    // Solicitar la eliminación del paciente en la API
    axios.delete(`/paciente/eliminar/${paciente.id_paciente}`)
      .then(response => {
        // Si la eliminación fue exitosa, eliminar el paciente de la lista local
        this.pacientes = this.pacientes.filter(p => p.id_paciente !== paciente.id_paciente);
      })
      .catch(error => {
        console.error('Error al eliminar el paciente:', error);
      });
  },
  editarPaciente(paciente) {
    this.pacienteSeleccionado = paciente;
    this.mostrarModalEditar = true; // Usar una variable dedicada para el modal de edición
  },
  cerrarModalEditar() { 
    this.mostrarModalEditar = false; 
  },

    cerrarModal() {
      this.mostrarModal = false;
    },
    cerrarModalPacientes() {
      this.mostrarModalPacientes = false;
    },
    
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
      // Aplicar el filtro de búsqueda a la lista completa de pacientes y luego ordenar por ID de manera descendente
      const pacientesFiltrados = this.pacientes.filter(paciente => {
        const terminoBusqueda = this.busqueda.toLowerCase();
        return paciente.nombre.toLowerCase().includes(terminoBusqueda) || paciente.apellido.toLowerCase().includes(terminoBusqueda);
      }).sort((a, b) => b.id_paciente - a.id_paciente); // Ordenar por ID descendente

      // Paginar los resultados ordenados
      return pacientesFiltrados.slice(inicio, fin);
    }
  }
}
</script>

<style scoped>
.container-fluid {
  margin-top: 10px;
  overflow: auto; /* Asegúrate de que el contenedor pueda hacer scroll */
}
.acciones {
  display: flex;
  justify-content: start;
}
.custom-search {
  width: 29%;
  font-size: 14px;
  margin-top: 70px;
  margin-left: 10px;
}
#btn {
  margin-top: 70px;
  margin-left: 10px;
}

#botonConsultas{
  background-color: #20c92e;
}
#botonConsultas:hover{
  background-color: #0e664b;
}

.router-link {
  color: inherit; /* Hereda el color del texto del elemento padre */
  text-decoration: none; /* Elimina la decoración del enlace */
  cursor: pointer; /* Cambia el cursor al pasar sobre el enlace */
  /* Agrega otros estilos según sea necesario */
}
</style>
