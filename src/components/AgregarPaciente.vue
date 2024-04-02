<template>
  <div class="card">
    <div class="card-header">Nuevo Paciente</div>
    <div class="card-body">
      <!-- Primera fila de cuatro inputs -->
      <div class="row align-items-start">
        <div class="col">
          <div class="mb-3">
            <label for="floatingInput" class="form-label">Nombre</label>
            <input
              v-model="nuevoPaciente.nombre"
              type="text"
              class="form-control"
              id="input1"
            />
          </div>
        </div>

        <div class="col">
          <div class="mb-3">
            <label for="input2" class="form-label">Apellido</label>
            <input
              v-model="nuevoPaciente.apellido"
              type="text"
              class="form-control"
              id="input2"
              rows="3"
            />
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="input3" class="form-label">DNI</label>
              <input
                v-model="nuevoPaciente.dni"
                type="text"
                class="form-control"
                id="input3"
                rows="3"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3"></div>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="input4" class="form-label">Sexo</label>
            <input
              v-model="nuevoPaciente.sexo"
              type="text"
              class="form-control"
              id="input4"
              placeholder=""
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="input5" class="form-label">Edad</label>
            <input
              v-model="nuevoPaciente.edad"
              type="text"
              class="form-control"
              id="input5"
              placeholder=""
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="input6" class="form-label">Fecha de nacimiento</label>
            <input
              v-model="nuevoPaciente.fechaNacimiento"
              type="date"
              class="form-control"
              id="input6"
              rows="3"
            />
          </div>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <div class="mb-3">
            <label for="input7" class="form-label">Lugar de nacimiento</label>
            <input
              v-model="nuevoPaciente.lugarNacimiento"
              type="text"
              class="form-control"
              id="input7"
              rows="3"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="input8" class="form-label">Direccion</label>
            <input
              v-model="nuevoPaciente.direccion"
              type="text"
              class="form-control"
              id="input8"
              placeholder=""
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="input5" class="form-label">Telefono fijo</label>
            <input
              v-model="nuevoPaciente.telefonoFijo"
              type="text"
              class="form-control"
              id="input5"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <div class="mb-3">
            <label for="input6" class="form-label">Telefono celular</label>
            <input
              v-model="nuevoPaciente.telefonoCelular"
              type="text"
              class="form-control"
              id="input6"
              rows="3"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="input7" class="form-label">Ocupacion</label>
            <input
              v-model="nuevoPaciente.ocupacion"
              type="text"
              class="form-control"
              id="input7"
              rows="3"
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="estadoCivil" class="form-label">Estado Civil</label>
            <select
              v-model="nuevoPaciente.estadoCivil"
              class="form-select"
              id="estadoCivil"
            >
              <option value="" selected>Selecciona estado civil</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
              <!-- Agrega más opciones según sea necesario -->
            </select>
          </div>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <div class="mb-3">
            <label for="input5" class="form-label">Obra social</label>
            <input
              v-model="nuevoPaciente.obraSocial"
              type="text"
              class="form-control"
              id="input5"
              placeholder=""
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="input6" class="form-label">N° Afiliado</label>
            <input
              v-model="nuevoPaciente.afiliadoObraSocial"
              type="text"
              class="form-control"
              id="input6"
              rows="3"
            />
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="antecedentesPersonalesMedicos" class="form-label"
                >Antecedentes Personales Médicos</label
              >
              <input
                v-model="nuevoPaciente.antecedentesPersonalesMedicos"
                class="form-control"
                id="antecedentesPersonalesMedicos"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="antecedentesQuirurgicos" class="form-label"
                >Antecedentes Quirúrgicos</label
              >
              <input
                v-model="nuevoPaciente.antecedentesQuirurgicos"
                class="form-control"
                id="antecedentesQuirurgicos"
                rows="3"
              />
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="alergias" class="form-label">Alergias</label>
              <input
                v-model="nuevoPaciente.alergias"
                class="form-control"
                id="alergias"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="antecedentesHeredoFamiliares" class="form-label"
                >Antecedentes HeredoFamiliares</label
              >
              <input
                v-model="nuevoPaciente.antecedentesHeredoFamiliares"
                class="form-control"
                id="antecedentesHeredoFamiliares"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="habitosToxicos" class="form-label"
                >Hábitos Tóxicos</label
              >
              <input
                v-model="nuevoPaciente.habitosToxicos"
                class="form-control"
                id="habitosToxicos"
                rows="3"
              />
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="medicacionHabitual" class="form-label"
                >Medicación Habitual</label
              >
              <input
                v-model="nuevoPaciente.medicacionHabitual"
                class="form-control"
                id="medicacionHabitual"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoHabito" class="form-label"
                >Examen Físico Hábito</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoHabito"
                class="form-control"
                id="examenFisicoHabito"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoPeso" class="form-label"
                >Examen Físico Peso</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoPeso"
                type="number"
                class="form-control"
                id="examenFisicoPeso"
              />
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoTalla" class="form-label"
                >Examen Físico Talla</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoTalla"
                type="number"
                class="form-control"
                id="examenFisicoTalla"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoIMC" class="form-label"
                >Examen Físico IMC</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoIMC"
                type="number"
                class="form-control"
                id="examenFisicoIMC"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoTA" class="form-label"
                >Examen Físico TA</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoTA"
                type="text"
                class="form-control"
                id="examenFisicoTA"
              />
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoFC" class="form-label"
                >Examen Físico FC</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoFC"
                type="text"
                class="form-control"
                id="examenFisicoFC"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoFR" class="form-label"
                >Examen Físico FR</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoFR"
                type="text"
                class="form-control"
                id="examenFisicoFR"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoTemperatura" class="form-label"
                >Examen Físico Temperatura</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoTemperatura"
                type="text"
                class="form-control"
                id="examenFisicoTemperatura"
              />
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoSistemaNervioso" class="form-label"
                >Examen Físico Sistema Nervioso</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoSistemaNervioso"
                class="form-control"
                id="examenFisicoSistemaNervioso"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoAPCardiovascular" class="form-label"
                >Examen Físico Aparato Cardiovascular</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoAPCardiovascular"
                class="form-control"
                id="examenFisicoAPCardiovascular"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoAPRespiratorio" class="form-label"
                >Examen Físico Aparato Respiratorio</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoAPRespiratorio"
                class="form-control"
                id="examenFisicoAPRespiratorio"
                rows="3"
              />
            </div>
          </div>
        </div>
        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoAPDigestivo" class="form-label"
                >Examen Físico Aparato Digestivo</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoAPDigestivo"
                class="form-control"
                id="examenFisicoAPDigestivo"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoAPGenitourinario" class="form-label"
                >Examen Físico Aparato Genitourinario</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoAPGenitourinario"
                class="form-control"
                id="examenFisicoAPGenitourinario"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoSistemaEndocrino" class="form-label"
                >Examen Físico Sistema Endocrino</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoSistemaEndocrino"
                class="form-control"
                id="examenFisicoSistemaEndocrino"
                rows="3"
              />
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoSistemaHematopoyetico" class="form-label"
                >Examen Físico Sistema Hematopoyético</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoSistemaHematopoyetico"
                class="form-control"
                id="examenFisicoSistemaHematopoyetico"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label
                for="examenFisicoSistemaMusculoEsqueletico"
                class="form-label"
                >Examen Físico Sistema Musculoesquelético</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoSistemaMusculoEsqueletico"
                class="form-control"
                id="examenFisicoSistemaMusculoEsqueletico"
                rows="3"
              />
            </div>
          </div>

          <div class="col">
            <div class="mb-3">
              <label for="examenFisicoPielAnexos" class="form-label"
                >Examen Físico Piel y Anexos</label
              >
              <input
                v-model="nuevoPaciente.examenFisicoPielAnexos"
                class="form-control"
                id="examenFisicoPielAnexos"
                rows="3"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-start">
        <!-- Add a button to trigger the form submission -->
        <div class="col">
          <button @click="guardarPaciente" class="btn btn-primary">
            Guardar Paciente
          </button>
          <button class="btn btn-danger">
            <router-link to="/" class="router-link">Cancelar</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
// Import Axios
import axios from "axios";

export default {
  data() {
    return {
      nuevoPaciente: {
        nombre: "",
        apellido: "",
        dni: "",
        sexo: "",
        edad: "",
        fechaNacimiento: "",
        lugarNacimiento: "",
        direccion: "",
        telefonoFijo: "",
        telefonoCelular: "",
        ocupacion: "",
        estadoCivil: "",
        obraSocial: "",
        afiliadoObraSocial: "",
        antecedentesPersonalesMedicos: "",
        antecedentesQuirurgicos: "",
        alergias: "",
        antecedentesHeredoFamiliares: "",
        habitosToxicos: "",
        medicacionHabitual: "",
        examenFisicoHabito: "",
        examenFisicoPeso: 0,
        examenFisicoTalla: 0,
        examenFisicoIMC: 0,
        examenFisicoTA: "",
        examenFisicoFC: "",
        examenFisicoFR: "",
        examenFisicoTemperatura: "",
        examenFisicoSistemaNervioso: "",
        examenFisicoAPCardiovascular: "",
        examenFisicoAPRespiratorio: "",
        examenFisicoAPDigestivo: "",
        examenFisicoAPGenitourinario: "",
        examenFisicoSistemaEndocrino: "",
        examenFisicoSistemaHematopoyetico: "",
        examenFisicoSistemaMusculoEsqueletico: "",
        examenFisicoPielAnexos: "",
      },
    };
  },
  methods: {
    guardarPaciente() {
      // Make Axios POST request
      axios
        .post("/paciente/crear", this.nuevoPaciente)
        .then((response) => {
          console.log(response.data);
          // Handle success, e.g., show a success message
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error, e.g., show an error message
        });
    },
  },
};
</script>

<style scoped>
.router-link {
  color: inherit; /* Hereda el color del texto del elemento padre */
  text-decoration: none; /* Elimina la decoración del enlace */
  cursor: pointer; /* Cambia el cursor al pasar sobre el enlace */
  /* Agrega otros estilos según sea necesario */
}
</style>