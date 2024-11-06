<template>
  <div>
    <!-- Modal -->
    <div class="modal" id="editarPacienteModal" tabindex="-1" role="dialog" aria-labelledby="editarPacienteModalLabel" aria-hidden="true" v-show="isModalOpen">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editarPacienteModalLabel">Editar Paciente</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="cerrarModal">
              
            </button>
          </div>
          <div class="modal-body">
            <div class="card">
              <div class="card-body">
                <div class="row align-items-start">
                  <div class="col">
                    <FormKit type="text" name="nombre" v-model="paciente.nombre" label="Nombre" />
                  </div>
                  <div class="col">
                    <FormKit type="text" name="apellido" v-model="paciente.apellido" label="Apellido" />
                  </div>
                  <div class="col">
                    <FormKit type="text" name="dni" v-model="paciente.dni" label="DNI" />
                  </div>
                  <div class="col">
                    <FormKit type="date" name="fechaNacimiento" v-model="paciente.fechaNacimiento" label="Fecha de Nacimiento" />
                  </div>
                  <div class="row align-items-start">
                  <div class="col">
                    <FormKit type="text" name="direccion" v-model="paciente.direccion" label="Dirección" />
                  </div>
                  <div class="col">
                    <FormKit type="text" name="telefono" v-model="paciente.telefono" label="Teléfono" />
                  </div>
                  <div class="col">
                    <FormKit type="text" name="email" v-model="paciente.email" label="Email" />
                  </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" @click="guardarCambios">Guardar Cambios</button>
                <button type="button" class="btn btn-danger" @click="cerrarModal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { FormKit } from '@formkit/vue';

export default {
  name: 'EditarPaciente',
  components: {
    FormKit,
  },
  props: {
    isModalOpen: Boolean,
    pacienteData: Object, // Recibe los datos del paciente a editar
  },
  emits: ['guardar', 'update:isModalOpen'], // Define los eventos que este componente emite
  setup(props, { emit }) {
    const paciente = ref({ ...props.pacienteData });

    // Cuando el valor de isModalOpen cambie, se resetean los datos del paciente
    watch(() => props.isModalOpen, (newVal) => {
      if (newVal) {
        paciente.value = { ...props.pacienteData }; // Resetea los datos del paciente
      }
    });

    function cerrarModal() {
      emit('cerrar', false); // Cambia isModalOpen a false para cerrar el modal
    }

    function guardarCambios() {
      console.log("Datos del paciente actualizados:", paciente.value);
      emit('guardar', paciente.value); // Envía los datos editados al componente padre
      cerrarModal(); // Cierra el modal después de guardar
    }

    return {
      paciente,
      cerrarModal,
      guardarCambios,
    };
  },
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #f8f9fa;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.card-body {
  padding: 15px;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.modal {
  display: block; /* Asegúrate de que se muestre cuando isModalOpen sea true */
}
</style>
