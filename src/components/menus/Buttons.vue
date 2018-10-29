<template>
  <div>
    <h2>Instrucciones</h2>
    <p>Suponga que usted quiere cargar, verificar y descargar el registro sanitario o médico de un producto,
      para esto seleccione una de las siguientes acciones: </p>

    <form @submit.prevent>
      <div class="buttonscol">
        <input type="file" placeholder="Drag a file to upload" name="upload" id="upload"
               class="btn btn-dashboard" @change="upload">
        <input type="file" placeholder="Drag a file to verify" name="verify" id="verify"
               class="inputstylebtnverify">
        <button type="button" class="btn btn-dashboard">Descargar documento <i
                class="fas fa-cloud-download-alt"></i></button>
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
        uploadFile: constants.TOOLKIT_UPLOAD_FILE
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
        this.uploadFile(file)
      }
    }
  }
</script>

<style scoped>

</style>