<template>
  <div class="download">
    <div class="modal" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="downloadModal" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p class="textcenter">Escriba el HASH del documento que desea descargar</p>
            <input type="text" class="box-download" placeholder="IPFS hash" v-model="hash">
            <div class="d-flex justify-content-center mt-4">
              <button type="button" class="btnpink" @click="download"> Descargar
                <i class="iconbutton mt-4 pt-2 pl-3 pr-2 icon-download"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  import * as constants from '@/store/constants'

  export default {
    name: "Download",
    data(){
      return {
        hash: ''
      }
    },
    methods: {
      ...mapActions({
        downloadFile: constants.TOOLKIT_DOWNLOAD_FILE
      }),
      ...mapMutations({
        setProperty: constants.TOOLKIT_SET_PROPERTY
      }),
      download(){
        console.log(`Hash ==> ${this.hash}`)
        this.downloadFile(this.hash)
      }
    }
  }
</script>