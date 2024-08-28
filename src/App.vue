<template>
  <div id="app">
    <!-- <Nav v-if="!isAuthenticated"></Nav> -->
    <!-- <LoginPage v-if="!isAuthenticated" ></LoginPage> -->
        <router-view ></router-view>
        
      
  </div>
</template>

<script>

import { useAuthStore } from './store/index';

export default{
  name: 'App',
  components:{
    
  },
  setup() {
    const { isAuthenticated } = useAuthStore();
    return {
      isAuthenticated,
    };
  },
  async created() {
    const { validateToken } = useAuthStore();
    try {
      await validateToken();
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
  },
}
</script>
