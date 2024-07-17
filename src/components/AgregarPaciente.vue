<template>
  <div v-if="!isAuthenticated">
    Pagina no disponible
  </div>
  <div v-else class="card">
    <div class="card-header">Primer consulta</div>
    <div class="card-body">
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="nombre" v-model="nuevoPaciente.nombre" label="Nombre" />
        </div>
        <div class="col">
          <FormKit type="text" name="apellido" v-model="nuevoPaciente.apellido" label="Apellido" />
        </div>
        <div class="col">
          <FormKit type="text" name="dni" v-model="nuevoPaciente.dni" label="DNI" />
        </div>
        <div class="col">
          <FormKit type="select" name="sexo" v-model="nuevoPaciente.sexo" label="Sexo" >
            <option value="">Selecciona sexo</option>
            <option value="soltero">Masculino</option>
            <option value="casado">Femenino</option>
            <option value="casado">X</option>
          </FormKit>
        </div>
        <div class="col">
          <FormKit type="date" name="fechaNacimiento" v-model="nuevoPaciente.fechaNacimiento" label="Fecha de nacimiento" />
        </div>
        <div class="col">
          <FormKit type="text" name="edad" v-model="nuevoPaciente.edad" label="Edad" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="lugarNacimiento" v-model="nuevoPaciente.lugarNacimiento" label="Lugar de nacimiento" />
        </div>
        <div class="col">
          <FormKit type="text" name="direccion" v-model="nuevoPaciente.direccion" label="Direccion" />
        </div>
        <div class="col">
          <FormKit type="text" name="telefonoFijo" v-model="nuevoPaciente.telefonoFijo" label="Telefono fijo" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="telefonoCelular" v-model="nuevoPaciente.telefonoCelular" label="Telefono celular" />
        </div>
        <div class="col">
          <FormKit type="text" name="ocupacion" v-model="nuevoPaciente.ocupacion" label="Ocupacion" />
        </div>
        <div class="col">
          <FormKit type="select" name="estadoCivil" v-model="nuevoPaciente.estadoCivil" label="Estado Civil">
            <option value="">Selecciona estado civil</option>
            <option value="soltero">Soltero</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
            <option value="viudo">Viudo</option>
          </FormKit>
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="obraSocial" v-model="nuevoPaciente.obraSocial" label="Obra social" />
        </div>
        <div class="col">
          <FormKit type="text" name="afiliadoObraSocial" v-model="nuevoPaciente.afiliadoObraSocial" label="N° Afiliado" />
        </div>
        <div class="col">
          <FormKit type="text" name="antecedentesPersonalesMedicos" v-model="nuevoPaciente.antecedentesPersonalesMedicos" label="Antecedentes Personales Médicos" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="antecedentesQuirurgicos" v-model="nuevoPaciente.antecedentesQuirurgicos" label="Antecedentes Quirúrgicos" />
        </div>
        <div class="col">
          <FormKit type="text" name="alergias" v-model="nuevoPaciente.alergias" label="Alergias" />
        </div>
        <div class="col">
          <FormKit type="text" name="antecedentesHeredoFamiliares" v-model="nuevoPaciente.antecedentesHeredoFamiliares" label="Antecedentes HeredoFamiliares" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="habitosToxicos" v-model="nuevoPaciente.habitosToxicos" label="Hábitos Tóxicos" />
        </div>
        <div class="col">
          <FormKit type="text" name="medicacionHabitual" v-model="nuevoPaciente.medicacionHabitual" label="Medicación Habitual" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoHabito" v-model="nuevoPaciente.examenFisicoHabito" label="Examen Físico Hábito" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="number" name="examenFisicoPeso" v-model="nuevoPaciente.examenFisicoPeso" label="Examen Físico Peso" />
        </div>
        <div class="col">
          <FormKit type="number" name="examenFisicoTalla" v-model="nuevoPaciente.examenFisicoTalla" label="Examen Físico Talla" />
        </div>
        <div class="col">
          <FormKit type="number" name="examenFisicoIMC" v-model="nuevoPaciente.examenFisicoIMC" label="Examen Físico IMC" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="examenFisicoTA" v-model="nuevoPaciente.examenFisicoTA" label="Examen Físico TA" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoFC" v-model="nuevoPaciente.examenFisicoFC" label="Examen Físico FC" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoFR" v-model="nuevoPaciente.examenFisicoFR" label="Examen Físico FR" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="examenFisicoTemperatura" v-model="nuevoPaciente.examenFisicoTemperatura" label="Examen Físico Temperatura" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoSistemaNervioso" v-model="nuevoPaciente.examenFisicoSistemaNervioso" label="Examen Físico Sistema Nervioso" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoAPCardiovascular" v-model="nuevoPaciente.examenFisicoAPCardiovascular" label="Examen Físico Aparato Cardiovascular" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="examenFisicoAPRespiratorio" v-model="nuevoPaciente.examenFisicoAPRespiratorio" label="Examen Físico Aparato Respiratorio" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoAPDigestivo" v-model="nuevoPaciente.examenFisicoAPDigestivo" label="Examen Físico Aparato Digestivo" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoAPGenitourinario" v-model="nuevoPaciente.examenFisicoAPGenitourinario" label="Examen Físico Aparato Genitourinario" />
        </div>
      </div>
      <div class="row align-items-start">
        <div class="col">
          <FormKit type="text" name="examenFisicoSistemaEndocrino" v-model="nuevoPaciente.examenFisicoSistemaEndocrino" label="Examen Físico Sistema Endocrino" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoSistemaHematopoyetico" v-model="nuevoPaciente.examenFisicoSistemaHematopoyetico" label="Examen Físico Sistema Hematopoyético" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoSistemaMusculoEsqueletico" v-model="nuevoPaciente.examenFisicoSistemaMusculoEsqueletico" label="Examen Físico Aparato Locomotor" />
        </div>
        <div class="col">
          <FormKit type="text" name="examenFisicoPielAnexos" v-model="nuevoPaciente.examenFisicoPielAnexos" label="Examen Físico Aparato Locomotor" />
        </div>
      </div>
      <div class="row align-items-start">
       
        <div class="col">
          <FormKit type="file" accept=".pdf,.png,.jpg" name="archivo1" fileRemove noFile='false' help="Solo permite archivos .jpg .png" @change="onFileChange($event, 1)" label="Adjuntar Archivo 1" />
        </div>
        <div class="col">
          <FormKit type="file" accept=".pdf,.png,.jpg" name="archivo2" fileRemove noFile='false' help="Solo permite archivos .jpg .png" @change="onFileChange($event, 2)" label="Adjuntar Archivo 2" />
        </div>
      </div>
      <div class="row align-items-start">
        <FormKit type="textarea" name="primerObservacion" v-model="nuevoPaciente.primerObservacion" label="Observaciones" />
      </div>
    </div>
    <div class="card-footer">
      <button class="btn-guardar" @click="guardarPaciente">Guardar</button>
      <button class="btn-cancelar" @click="volver" >Cancelar</button>
    </div>
  </div>
  
</template>

<script>
import { ref, watch, computed} from 'vue'
import { FormKit } from '@formkit/vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store'

export default {
  name: 'FormularioPaciente',
  components: {
    FormKit
  },
  setup() {
    const router = useRouter()
    const authStore = useAuthStore();
    const isAuthenticated = computed(() => authStore.isAuthenticated);

    
    const nuevoPaciente = ref({
      nombre: '',
      apellido: '',
      dni: '',
      sexo: '',
      edad: '',
      fechaNacimiento: '',
      lugarNacimiento: '',
      direccion: '',
      telefonoFijo: '',
      telefonoCelular: '',
      ocupacion: '',
      estadoCivil: '',
      obraSocial: '',
      afiliadoObraSocial: '',
      antecedentesPersonalesMedicos: '',
      antecedentesQuirurgicos: '',
      alergias: '',
      antecedentesHeredoFamiliares: '',
      habitosToxicos: '',
      medicacionHabitual: '',
      examenFisicoHabito: '',
      examenFisicoPeso: '',
      examenFisicoTalla: '',
      examenFisicoIMC: '',
      examenFisicoTA: '',
      examenFisicoFC: '',
      examenFisicoFR: '',
      examenFisicoTemperatura: '',
      examenFisicoSistemaNervioso: '',
      examenFisicoAPCardiovascular: '',
      examenFisicoAPRespiratorio: '',
      examenFisicoAPDigestivo: '',
      examenFisicoAPGenitourinario: '',
      examenFisicoSistemaEndocrino: '',
      examenFisicoSistemaHematopoyetico: '',
      examenFisicoSistemaMusculoEsqueletico: '',
      examenFisicoPielAnexos: '',
      
      primerObservacion: '',
    })

    const selectedFiles = ref({ archivo1: null, archivo2: null })

    const onFileChange = (event, archivoNumber) => {
      if (archivoNumber === 1) {
        selectedFiles.value.archivo1 = event.target.files[0]
      } else if (archivoNumber === 2) {
        selectedFiles.value.archivo2 = event.target.files[0]
      }
    }

    const volver = () => {
      router.push('/')
    }

    const guardarPaciente = () => {
      const formData = new FormData()
      for (const key in nuevoPaciente.value) {
        formData.append(key, nuevoPaciente.value[key])
      }
      if (selectedFiles.value.archivo1) {
        formData.append("files", selectedFiles.value.archivo1)
      }
      if (selectedFiles.value.archivo2) {
        formData.append("files", selectedFiles.value.archivo2)
      }

      axios
        .post("paciente/crear", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data)
          volver();
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    }

    // Función para calcular la edad a partir de la fecha de nacimiento
    const calcularEdad = (fechaNacimiento) => {
      const hoy = new Date()
      const fechaNac = new Date(fechaNacimiento)
      let edad = hoy.getFullYear() - fechaNac.getFullYear()
      const mes = hoy.getMonth() - fechaNac.getMonth()
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--
      }
      return edad
    }

    // Observar cambios en fecha de nacimiento para calcular la edad
    watch(() => nuevoPaciente.value.fechaNacimiento, (val, prevVal) => {
      if (val !== prevVal) {
        nuevoPaciente.value.edad = calcularEdad(val)
      }
    })

    

    return {
      nuevoPaciente,
      selectedFiles,
      onFileChange,
      guardarPaciente,
      volver,
      isAuthenticated
    }
  },
}
</script>


<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
}
.card-header {
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 20px;
}
.card-body .row {
  margin-bottom: 15px;
}
.card-footer{
  text-align: right;
  
}
.btn-guardar {
  text-align: right;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
.btn-cancelar {
  text-align: right;
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-guardar:hover {
  background-color: #0056b3;
}

.btn-cancelar:hover {
  background-color: #a33939;
}

</style>
