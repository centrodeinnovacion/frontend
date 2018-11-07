<template>
  <div class="dashboard">

    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
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
                <button type="button" data-toggle="modal" data-target="#downloadModal" id="Download" @click="setToNull"></button>
                <div class="d-flex">
                  <div><p class="buttontittle">Descargar documento</p></div>
                  <div class="pt-2 pr-2 ml-auto align-self-start"><i class="iconbutton icon-download"></i></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <global ref="globe"></global>
        <!--<searchipfs></searchipfs>-->
        <!--<Notfoundipfs></Notfoundipfs>
        <!--<Notfoundbc></Notfoundbc>-->
        <!--<verify></verify>-->
        <component :is="verifyComponent"></component>
        <component :is="hashVerified"></component>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="explanation">
          <component :is="verifyBlockchainComponent"></component>
          <downloadPdf :is="downloadPdf"></downloadPdf>
          <!--<filenofound></filenofound>
          <!--<filefound></filefound>-->
          <div class="scrollbar">
            <div class="force-overflow"></div>
            <component :is="uploadComponent"></component>
            <component :is="uploadIpfsComponent"></component>
            <component :is="downloadPdf"></component>
          </div>
        </div>
      </div>

    </div>
    <div class="row download">
      <div>
        <download ref="modalDownload"></download>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  import * as constants from '@/store/constants'

  import Global from '@/components/common/Global'
  import Upload from '@/components/common/Upload'
  import Download from '@/components/common/Download'
  import Uploadipfs from '@/components/common/Uploadipfs'
  import Verify from '@/components/common/Verify'
  import VerifyBlockchain from '@/components/common/VerifyBlockchain'
  import Searchipfs from '@/components/common/Searchipfs'
  import Filenofound from '@/components/common/Filenofound'
  import Filefound from '@/components/common/Filefound'
  import DownloadPdf from '@/components/common/DownloadPdf'
  import Notfoundbc from '@/components/common/Notfoundbc'
  import Notfoundipfs from '@/components/common/Notfoundipfs'
  import HashVerified from '@/components/common/HashVerified'

  export default {
    name: 'Dashboard',
    data(){
      return {
        uploadComponent: null,
        uploadIpfsComponent: null,
        verifyComponent: null,
        verifyBlockchainComponent: null,
        hashVerified: null,
        downloadPdf: 'DownloadPdf'
      }
    },
    components: {
      Global,
      Upload,
      Uploadipfs,
      Download,
      Verify,
      VerifyBlockchain,
      Searchipfs,
      Filenofound,
      Filefound,
      DownloadPdf,
      Notfoundbc,
      Notfoundipfs,
      HashVerified
    },
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

        this.addMarkersToGlobe()

        this.uploadFile(file)
      },
      verified(e) {
        this.setToNull()

        const files = e.target.files
        if(!files.length){ return }
        const file = files[0]
        console.log(file)
        this.verifiedFile(file)

        this.verifyComponent = 'Verify'
        this.hashVerified = 'HashVerified'
        setTimeout(()=>{
          this.verifyBlockchainComponent = 'VerifyBlockchain'
        }, 8000)
      },
      addMarkersToGlobe(){
        this.setToNull()

        this.$refs.globe.ipfs()
        this.uploadComponent = 'Upload'

        setTimeout(() => {
          this.$refs.globe.ethereum()
          this.uploadIpfsComponent = 'Uploadipfs'
        }, 12000)
      },
      setToNull() {
        this.uploadComponent = null
        this.uploadIpfsComponent = null
        this.verifyComponent = null
        this.verifyBlockchainComponent = null
        this.hashVerified = null
        this.downloadPdf = null
      },
      getHashToDownload(){
        return this.$refs.modalDownload.hash
      }
    }
  }
</script>
