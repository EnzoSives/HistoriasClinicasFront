import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './style.css'
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { plugin, defaultConfig } from '@formkit/vue'
import router from './router';
import config from '../formkit.config.ts'
import '../src/axios.ts';



const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(plugin, defaultConfig(config))

app.mount('#app');