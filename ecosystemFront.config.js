module.exports = {
    apps: [
      {
        name: "AppVue",
        script: "npm",
        args: "run serve",
        watch: true,  // reiniciar automáticamente la aplicación al cambiar los archivos
        env: {
          NODE_ENV: "development",
        }
      },
    ]
  };