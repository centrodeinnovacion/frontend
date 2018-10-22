<template>
   <div>
       <h2>Instrucciones</h2>
       <p>Suponga que usted quiere cargar, verificar y descargar el registro sanitario o médico de un producto,
           para esto seleccione una de las siguientes acciones: </p>

       <form @submit.prevent="">
           <div class="buttonscol">
               <input type="file" placeholder="Drag a file to upload" name="upload" id="upload"
                      class="inputstylebtn">
               <input type="file" placeholder="Drag a file to verify" name="verify" id="verify"
                      class="inputstylebtnverify">
               <button type="button" class="btn btn-dashboard">Descargar documento <i
                       class="fas fa-cloud-download-alt"></i></button>
           </div>
       </form>
   </div>
</template>

<script>
    export default {
        name: "Buttons"
    }
</script>

<style scoped>

</style>