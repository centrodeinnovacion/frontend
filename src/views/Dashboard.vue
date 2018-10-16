<template>
  <div>
    <form @submit.prevent="">
      <input type="file" placeholder="Drag a file to upload" name="upload" id="upload">
      <input type="file" placeholder="Drag a file to verify" name="verify" id="verify">
      <button type="button" class="btn btn-dashboard">Descargar</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard'
  }
</script>

<style scoped>

</style>