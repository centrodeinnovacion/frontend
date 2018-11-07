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
                <button type="button" data-toggle="modal" data-target="#downloadModal" id="Download"></button>
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
        <global ref="globe" :ipfsFlag="ipfsFlag" :ethFlag="ethFlag"></global>
        <!--<searchipfs></searchipfs>-->
        <!--<Notfoundipfs></Notfoundipfs>
        <!--<Notfoundbc></Notfoundbc>-->
        <!--<verify></verify>-->
      </div>
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="explanation">
          <!--<DownloadPdf></DownloadPdf>-->
          <!--<verify_blockchain></verify_blockchain>-->
          <!--<filenofound></filenofound>
          <!--<filefound></filefound>-->
          <div class="scrollbar">
            <div class="force-overflow"></div>
            <upload></upload>
            <uploadipfs></uploadipfs>
          </div>
        </div>
      </div>
    </div>
    <div class="row download">
      <div>
        <download></download>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  import * as constants from '@/store/constants'

  import Buttons from '@/components/menus/Buttons'
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

  export default {
    name: 'Dashboard',
    components: {
      //Buttons,
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
      Notfoundipfs
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
        this.uploadFile(file)
        this.$refs.globe.markers()
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
