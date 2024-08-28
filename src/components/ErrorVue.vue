<template>
    <div class="error-container">
      <h1>Página no disponible</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorPage'
  }
  </script>
  
  <style scoped>
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f8d7da;
    color: #721c24;
  }
  
  h1 {
    font-size: 2rem;
  }
  </style>
  