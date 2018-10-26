<template>
   <div>
       <h2>Instrucciones</h2>
       <p>Suponga que usted quiere cargar, verificar y descargar el registro sanitario o médico de un producto,
           para esto seleccione una de las siguientes acciones: </p>

       <form @submit.prevent="">

           <div class="d-flex align-items-center flex-column justify-content-start">
               <div class="form-group inputstyle">
                   <input type="file" placeholder="Drag a file to upload" id="Upload">
                   <div class="d-flex">
                       <div class="p-2"><h3>Subir documento</h3>
                           <p class="text-input">Arrastre el documento aquí o haga clic para buscarlo</p></div>
                       <div class="p-1 ml-auto align-self-start"><i class="iconbutton icon-upload"></i></div>
                   </div>
               </div>

               <div class="form-group inputstyle">
                   <input type="file" placeholder="Drag a file to upload" id="Verify">
                   <div class="d-flex">
                       <div class="p-2"><h3>Verificar documento</h3>
                           <p class="text-input">Arrastre el documento aquí o haga clic para buscarlo</p></div>
                       <div class="p-1 ml-auto align-self-start"><i class="iconbutton icon-verify"></i></div>
                   </div>
               </div>

               <div class="form-group inputstyle">
                   <button type="button" data-toggle="modal" data-target="#downloadModal" id="Download"></button>
                   <div class="d-flex">
                       <div class="p-2"><h3>Descargar documento</h3></div>
                       <div class="p-1 ml-auto align-self-start"><i class="iconbutton icon-download"></i></div>
                   </div>
               </div>
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