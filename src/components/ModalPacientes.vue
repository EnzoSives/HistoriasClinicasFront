<template>
  <div>
    <div class="modal" :class="{ 'show': showModal }">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Paciente: {{ paciente.nombre }} {{ paciente.apellido }}</h5>
            <button type="button" class="btn-close" @click="cerrarModal"></button>
          </div>
          <div class="modal-body">
            <!-- Sección de datos del paciente -->
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Información personal</div>
                  <div class="card-body">
                    <p><strong>Nombre:</strong> {{ paciente.nombre }} {{ paciente.apellido }}</p>
                    <p><strong>DNI:</strong> {{ paciente.dni }}</p>
                    <p><strong>Edad:</strong> {{ paciente.edad }}</p>
                    <p><strong>Teléfono:</strong> {{ paciente.telefonoCelular }}</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Imagen</div>
                  <div class="card-body">
                    <img v-if="paciente.imagen" :src="`/uploads/${paciente.imagen}`" alt="Imagen del paciente" class="card-img" @click="mostrarImagen">
                    <p v-else>No hay imagen disponible</p>
                  </div>
                </div>
              </div>

              <!-- Agrega más columnas aquí para más secciones -->

            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Exámenes físicos</div>
                  <div class="card-body">
                    <p><strong>Peso:</strong> {{ paciente.examenFisicoPeso }}</p>
                    <p><strong>Talla:</strong> {{ paciente.examenFisicoTalla }}</p>
                    <p><strong>IMC:</strong> {{ paciente.examenFisicoIMC }}</p>
                    <p><strong>TA:</strong> {{ paciente.examenFisicoTA }}</p>
                    <!-- Agrega más campos según sea necesario -->
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Antecedentes y hábitos</div>
                  <div class="card-body">
                    <p><strong>Antecedentes Personales Médicos:</strong> {{ paciente.antecedentesPersonalesMedicos }}</p>
                    <p><strong>Antecedentes Quirúrgicos:</strong> {{ paciente.antecedentesQuirurgicos }}</p>
                    <p><strong>Alergias:</strong> {{ paciente.alergias }}</p>
                    <p><strong>Hábitos Tóxicos:</strong> {{ paciente.habitosToxicos }}</p>
                    <!-- Agrega más campos según sea necesario -->
                  </div>
                </div>
              </div>

              <!-- Agrega más columnas aquí para más secciones -->

            </div>

            <!-- Agrega más filas y columnas según la estructura de datos que tengas -->

          </div>
        </div>
      </div>
    </div>

    <!-- Modal para mostrar imagen a pantalla completa -->
    <div class="modal-fullscreen" :class="{ 'show': showImageModal }">
      <span class="close" @click="cerrarImagenModal">&times;</span>
      <img :src="imageSrc" class="modal-img">
    </div>
  </div>
</template>


<script>
export default {
  props: {
    showModal: Boolean,
    paciente: Object,
    // Otros props según sea necesario
  },
  data() {
    return {
      showImageModal: false,
      imageSrc: ''
    };
  },
  methods: {
    cerrarModal() {
      this.$emit('cerrar');
    },
    mostrarImagen() {
      this.imageSrc = `/uploads/${this.paciente.imagen}`;
      this.showImageModal = true;
    },
    cerrarImagenModal() {
      this.showImageModal = false;
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
}
.modal-content {
  position: relative;
  border-radius: 10px;
}
.card {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.card-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card-body {
  padding: 10px;
}
.card-img {
  width: 50%;
  cursor: pointer;
  border-radius: 5px;
}
.show {
  display: block;
}

/* Styles for the fullscreen modal */
.modal-fullscreen {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}
.modal-fullscreen.show {
  display: block;
}
.modal-img {
  display: block;
  margin: auto;
  max-width: 90%;
  max-height: 90%;
  
}
.close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}
.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}
</style>
