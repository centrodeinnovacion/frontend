<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-3">
      <h2>Instrucciones</h2>
    <p>Suponga que usted quiere cargar, verificar y descargar el Registro Sanitario de un producto, para esto seleccione una de las siguientes acciones: </p>

    <form @submit.prevent="">
      <input type="file"  placeholder="Drag a file to upload" name="upload" id="upload">
      <input type="file" placeholder="Drag a file to verify" name="verify" id="verify">
      <button type="button" class="btn btn-dashboard">Descargar documento <i class="fas fa-cloud-download-alt"></i> </button>
    </form>
  </div></div></div>

</template>

<script>
  export default {
    name: 'Dashboard'
  }
</script>

<style scoped>

</style>