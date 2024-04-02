
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/home.vue';
import Pacientes from './components/AgregarPaciente.vue';
import Consultas from './components/AgregarConsulta.vue';
import './axios'

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
  {
    path: '/consultas',
    name: 'Consultas',
    component: Consultas,
  },
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
