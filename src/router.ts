import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/home.vue'; // Asumiendo que tienes un componente Home
import Pacientes from './components/AgregarPaciente.vue';
// import Consultas from './components/AgregarConsulta.vue';
import LoginPage from './views/LoginPage.vue'; // Importa la página de login


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: Pacientes,

  },
  // {
  //   path: '/consultas',
  //   name: 'Consultas',
  //   component: Consultas,

  // },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },

  // Otras rutas de tu aplicación
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
