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
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">DNI</th>
                      <th scope="col">Obra Social</th>
                      <th scope="col">N° Afiliado</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(paciente, index) in filtrarPacientes()" :key="index">

                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ paciente.nombre }}</td>
                      <td>{{ paciente.apellido }}</td>
                      <td>{{ paciente.dni }}</td>
                      <td>{{ paciente.obraSocial }}</td>
                      <td>{{ paciente.afiliadoObraSocial }}</td>
                      <td><button @click="mostrarPacientes(paciente)" type="button" class="btn btn-secondary">Info</button> <button style="margin-left: 5px;" @click="mostrarConsultas(paciente)" type="button" class="btn btn-outline-secondary">Consultas</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal-consultas :show-modal="mostrarModal" :consultas="consultasPaciente" :paciente="pacienteSeleccionado" @cerrar="cerrarModal" />
    <modal-pacientes :show-modal="mostrarModalPacientes" :paciente="pacienteSeleccionado" @cerrar="cerrarModal" />
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
      mostrarModal: false,
      mostrarModalPacientes: false,
      consultasPaciente: [],
      pacienteSeleccionado: {},
      busqueda: ''
    };
  },
  mounted() {
    // Llamar al método para cargar datos cuando el componente se monta
    this.cargarDatosDeApi();
  },
      // Hacer la solicitud a la API y actualizar la propiedad pacientes
      // Ejemplo con Axios
      // Reemplaza la URL con la dirección de tu API
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

   // Método para filtrar pacientes por nombre o apellido
   filtrarPacientes() {
    return this.pacientes.filter(paciente => {
      const terminoBusqueda = this.busqueda.toLowerCase();
      return paciente.nombre.toLowerCase().includes(terminoBusqueda) ||
             paciente.apellido.toLowerCase().includes(terminoBusqueda);
    });
  },
  mostrarConsultas(paciente) {
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
    this.mostrarModalPacientes= false; // Establecer mostrarModal a false para cerrar el modal
  }
}}

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
