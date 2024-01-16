
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/home.vue';
import Pacientes from './components/AgregarPaciente.vue'; // Asegúrate de cambiar esto con la ubicación real de tus componentes

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
  // Agrega más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
