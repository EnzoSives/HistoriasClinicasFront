<template>
<div class="acciones">
  <button type="button" class="btn btn-outline-primary" to="/pacientes"><router-link to="/pacientes"  class="router-link">Agregar paciente</router-link></button>
  <input class="form-control custom-search border-secondary" type="search" placeholder="Buscar paciente" aria-label="Search">
</div>

  <div class="container-fluid w-100">
    <div class="row">
      <div class="col"> <!-- <div class="col-md-6 offset-md-6"> Se utiliza col-md-6 para que ocupe la mitad de la pantalla -->
        <div class="card">
          <div class="card-body">
            <h3>Pacientes</h3>
            <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(persona, index) in personas" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ persona.nombre }}</td>
                  <td>{{ persona.edad }}</td>
                  <td>@{{ persona.nombre.toLowerCase() }}</td>
                  <td>{{ persona.nombre }}</td>
                  <td>{{ persona.edad }}</td>
                  <td>@{{ persona.nombre.toLowerCase() }}</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      personas: [
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 30 },
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 30 },
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 30 },
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 30 },
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 30 },
        // Agrega más datos de ejemplo
      ],
    };
  },
};
</script>
  
<style scoped>
.container-fluid{
  margin-top: 10px;
}
.acciones{
  display: flex;
  justify-content:start;
}
.custom-search {
  width: 250px; 
  font-size: 14px;
  margin-top: 70px;
  margin-left: 10px;
}
.btn{
  margin-top: 70px;
  margin-left: 10px;
}

.router-link-exact-active,
.router-link-active {
  /* Estilos para los estados activos de router-link, ajusta según sea necesario */
}

.router-link {
  color: inherit; /* Hereda el color del texto del elemento padre */
  text-decoration: none; /* Elimina la decoración del enlace */
  cursor: pointer; /* Cambia el cursor al pasar sobre el enlace */
  /* Agrega otros estilos según sea necesario */
}
</style>