<template>
  <div id="app">
    <!-- <Nav v-if="!isAuthenticated"></Nav> -->
    <!-- <LoginPage v-if="!isAuthenticated" ></LoginPage> -->
        <router-view ></router-view>
      
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
