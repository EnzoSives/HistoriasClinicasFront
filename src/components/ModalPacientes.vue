<template>
  <div>
    <div class="modal" :class="{ 'show': showModal }">
      <div class="modal-dialog modal-xl">
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
                    <p><strong>Sexo:</strong> {{ paciente.sexo }}</p>
                    <p><strong>Edad:</strong> {{ paciente.edad }}</p>
                    <p><strong>Fecha de nacimiento:</strong> {{ paciente.fechaNacimiento }}</p>
                    <p><strong>Lugar de nacimiento:</strong> {{ paciente.lugarNacimiento }}</p>
                    <p><strong>Dirección:</strong> {{ paciente.direccion }}</p>
                    <p><strong>Teléfono fijo:</strong> {{ paciente.telefonoFijo }}</p>
                    <p><strong>Teléfono celular:</strong> {{ paciente.telefonoCelular }}</p>
                    <p><strong>Ocupación:</strong> {{ paciente.ocupacion }}</p>
                    <p><strong>Estado civil:</strong> {{ paciente.estadoCivil }}</p>
                    <p><strong>Obra social:</strong> {{ paciente.obraSocial }}</p>
                    <p><strong>Afiliado Obra Social:</strong> {{ paciente.afiliadoObraSocial }}</p>
                    <br><br><br>
                    <br><br>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Exámenes físicos</div>
                  <div class="card-body">
                    <p><strong>Peso:</strong> {{ paciente.examenFisicoPeso }}</p>
                    <p><strong>Talla:</strong> {{ paciente.examenFisicoTalla }}</p>
                    <p><strong>IMC:</strong> {{ paciente.examenFisicoIMC }}</p>
                    <p><strong>TA:</strong> {{ paciente.examenFisicoTA }}</p>
                    <p><strong>FC:</strong> {{ paciente.examenFisicoFC }}</p>
                    <p><strong>FR:</strong> {{ paciente.examenFisicoFR }}</p>
                    <p><strong>Temperatura:</strong> {{ paciente.examenFisicoTemperatura }}</p>
                    <p><strong>Sistema nervioso:</strong> {{ paciente.examenFisicoSistemaNervioso }}</p>
                    <p><strong>Cardiovascular:</strong> {{ paciente.examenFisicoAPCardiovascular }}</p>
                    <p><strong>Respiratorio:</strong> {{ paciente.examenFisicoAPRespiratorio }}</p>
                    <p><strong>Digestivo:</strong> {{ paciente.examenFisicoAPDigestivo }}</p>
                    <p><strong>Genitourinario:</strong> {{ paciente.examenFisicoAPGenitourinario }}</p>
                    <p><strong>Endocrino:</strong> {{ paciente.examenFisicoSistemaEndocrino }}</p>
                    <p><strong>Hematopoyético:</strong> {{ paciente.examenFisicoSistemaHematopoyetico }}</p>
                    <p><strong>Musculoesquelético:</strong> {{ paciente.examenFisicoSistemaMusculoEsqueletico }}</p>
                    <p><strong>Piel y anexos:</strong> {{ paciente.examenFisicoPielAnexos }}</p>
                  </div>
                </div>
              </div>
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Antecedentes y hábitos</div>
                  <div class="card-body">
                    <p><strong>Antecedentes personales médicos:</strong> {{ paciente.antecedentesPersonalesMedicos }}</p>
                    <p><strong>Antecedentes quirúrgicos:</strong> {{ paciente.antecedentesQuirurgicos }}</p>
                    <p><strong>Alergias:</strong> {{ paciente.alergias }}</p>
                    <p><strong>Hábitos tóxicos:</strong> {{ paciente.habitosToxicos }}</p>
                    <p><strong>Medicación habitual:</strong> {{ paciente.medicacionHabitual }}</p>
                  </div>
                </div>
              </div>
               <div class="col-md-6">
                <div class="card">
                  <div class="card-header">Imagen</div>
                  <div class="card-body-img">
                    <img v-if="paciente.imagen" :src="`/uploads/${paciente.imagen}`" alt="Imagen del paciente" class="card-img" @click="mostrarImagen($event)" style="padding-right: 5px;">
                    <img v-if="paciente.imagen2" :src="`/uploads/${paciente.imagen2}`" alt="Imagen del paciente" class="card-img" @click="mostrarImagen($event)">
                    <p v-else>No hay imagen disponible</p>
                  </div>
                  <br>
                </div>
              </div>
              </div>
            </div>
          

            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">Primer consulta</div>
                  <div class="card-body">
                    <p><strong>Motivo:</strong> {{ paciente.primerObservacion }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Agrega más filas y columnas según la estructura de datos que tengas -->

          </div>
          <div class="modal-footer">
          <button class="btn btn-primary" @click="descargarPdf(paciente.id_paciente)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-pdf" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
</svg>Descargar</button>
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
import axios from 'axios';
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
     async descargarPdf(pacienteId) {
    try {
      const response = await axios.get(`consulta/pdf/${pacienteId}`, {
        responseType: 'blob', // Asegúrate de indicar que esperas un blob
      });
      
      // Crea un objeto URL para el blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `consultas_paciente_${pacienteId}.pdf`); // nombre del archivo
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link); // Limpia el DOM
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
      alert('Hubo un problema al descargar el PDF.');
    }
  },
    cerrarModal() {
      this.$emit('cerrar');
    },
    mostrarImagen(event) {
      this.imageSrc = event.target.src;
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
  width: 170px; /* Ajusta el tamaño de la imagen al 100% del contenedor */
  height: 170px;
  cursor: pointer;
  border-radius: 5px;
}
.card-body-img{
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
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
