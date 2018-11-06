<template>
  <div>
    <h2>Instrucciones</h2>
    <p>Suponga que usted quiere cargar, verificar y descargar el registro sanitario o médico de un producto,
      para esto seleccione una de las siguientes acciones: </p>

       <form @submit.prevent>

           <div class="d-flex align-items-start flex-column justify-content-start">
               <div class="form-group inputstyle">
                   <input type="file" placeholder="Drag a file to upload" id="Upload" @change="upload">
                   <div class="d-flex">
                       <div><p class="buttontittle">Subir documento</p>
                           <p class="text-input">Arrastre el documento aquí o haga clic para buscarlo</p></div>
                       <div class="pt-2 pr-2 ml-auto align-self-start"><i class="iconbutton icon-upload"></i></div>
                   </div>
               </div>

               <div class="form-group inputstyle">
                   <input type="file" placeholder="Drag a file to upload" id="Verify" @change="verified">
                   <div class="d-flex">
                       <div><p class="buttontittle">Verificar documento</p>
                           <p class="text-input">Arrastre el documento aquí o haga clic para buscarlo</p></div>
                       <div class="pt-2 pr-2 ml-auto align-self-start"><i class="iconbutton icon-verify"></i></div>
                   </div>
               </div>

               <div class="form-group inputstyle" id="Input-Download">
                   <button type="button" data-toggle="modal" data-target="#downloadModal" id="Download"></button>
                   <div class="d-flex">
                       <div><p class="buttontittle">Descargar documento</p></div>
                       <div class="pt-2 pr-2 ml-auto align-self-start"><i class="iconbutton icon-download"></i></div>
                   </div>
               </div>
           </div>

       </form>

   </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  import * as constants from '@/store/constants'

  export default {
    name: 'Buttons',
    methods: {
      ...mapActions({
        uploadFile: constants.TOOLKIT_UPLOAD_FILE,
        verifiedFile: constants.TOOLKIT_VERIFIED_FILE
      }),
      ...mapMutations({
        setProperty: constants.TOOLKIT_SET_PROPERTY
      }),
      upload(e){
        const files = e.target.files
        if(!files.length){ return }
        this.setProperty({hash: {hash: 'procesando...', tx: 'procesando...'}})
        const file = files[0]
        console.log(file)
        const uplo = this.uploadFile(file)
        console.log(uplo)
      },
      verified(e) {
        const files = e.target.files
        if(!files.length){ return }
        const file = files[0]
        console.log(file)
        const verf = this.verifiedFile(file)
        console.log(verf)
      }
    }
  }
</script>