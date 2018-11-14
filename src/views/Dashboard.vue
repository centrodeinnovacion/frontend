<template>
  <div class="dashboard">

    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <div>
          <h2>Instrucciones</h2>
          <p>Suponga que usted quiere cargar, verificar y descargar un archivo <strong>.pdf</strong> o <strong>.jpg</strong>,
            para esto seleccione una de las siguientes acciones: </p>

          <form @submit.prevent>

            <div class="d-flex align-items-start flex-column justify-content-start">
              <div class="form-group inputstyle">
                <input type="file" placeholder="Drag a file to upload" id="Upload" @click="throwWarning" @change="upload" accept=".jpg,.jpeg,.pdf">
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
                <button type="button" data-toggle="modal" data-target="#downloadModal" id="Download" @click="showModal"></button>
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
        <component :is="globeComponent" ref="globe"></component>
        <gif :is="gifComponent"></gif>
        <component :is="verifyComponent"></component>
        <component :is="hashVerified"></component>
        <component :is="notFoundBc"></component>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="explanation">
          <component :is="verifyBlockchainComponent"></component>
          <component :is="previewFile"></component>
          <component :is="fileFound"></component>
          <component :is="fileNotFound"></component>

          <div v-if="uploadBlockchainComponent || uploadComponent || previewFile" class="scrollbar force-overflow">
            <component :is="uploadComponent"></component>
            <component :is="uploadBlockchainComponent"></component>
          </div>
        </div>
      </div>

    </div>
    <div class="row download">
      <div>
        <download></download>
      </div>
    </div>
    <footer class="inferior">
      <div class="d-flex flex-row-reverse align-items-end">
        <div class="p-2 mr-3 mb-3">
          <router-link class="btnDiamond" :to="{name: 'about'}"><i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
        <div class="p-2 mr-3 mb-3">
          <router-link class="btnDiamond" :to="{name: 'howitworks'}"><i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import {mapActions, mapMutations, mapState} from 'vuex'
  import * as constants from '@/store/constants'

  import Global from '@/components/common/Global'
  import Upload from '@/components/common/Upload'
  import Download from '@/components/common/Download'
  import UploadBlockchain from '@/components/common/UploadBlockchain'
  import Verify from '@/components/common/Verify'
  import VerifyBlockchain from '@/components/common/VerifyBlockchain'
  import FileNotFound from '@/components/common/FileNotFound'
  import FileFound from '@/components/common/FileFound'
  import PreviewFile from '@/components/common/PreviewFile'
  import NotFoundBc from '@/components/common/NotFoundBc'
  import Hash from '@/components/common/Hash'
  import Gif from '@/components/common/Gif'

  export default {
    name: 'Dashboard',
    data(){
      return {
        globeComponent: 'Global',
        uploadComponent: null,
        uploadBlockchainComponent: null,
        verifyComponent: null,
        verifyBlockchainComponent: null,
        hashVerified: null,
        previewFile: null,
        gifComponent: null,
        ethereumTimeOut: null,
        ipfsInterval: null,
        ethInterval: null,
        fileFound: null,
        fileNotFound: null,
        notFoundBc: null,
        download: null
      }
    },
    components: {
      Global,
      Upload,
      UploadBlockchain,
      Download,
      Verify,
      VerifyBlockchain,
      FileNotFound,
      FileFound,
      PreviewFile,
      NotFoundBc,
      Hash,
      Gif
    },
    computed:{
      ...mapState({
        validate: state => state.Toolkit.validate,
        notValid: state => state.Toolkit.notValid
      })
    },
    watch:{
      validate(e){
        if(e){
          this.setToNull()
          this.verifyComponent = 'Verify'
          this.hashVerified = 'Hash'
          setTimeout( () => {
            this.fileFound = 'FileFound'
          },5000)
        }
      },
      notValid(e){
        this.setToNull()
        this.notFoundBc = 'NotFoundBc'
        this.fileNotFound = 'FileNotFound'
      }
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

        this.verifyBlockchain()
      },
      addMarkersToGlobe(){
        this.setToNull()
        this.globeComponent = 'Global'
        this.ipfsInterval = setInterval(() => {
          // this.globeComponent.globe.addImage(4.570868, -74.297333, this.$refs.globe.imageIPFS) // Colombia
          this.$refs.globe.globe.addImage(4.570868, -74.297333, this.$refs.globe.imageIPFS) // Colombia
        }, 1000)

        this.gifComponent = 'Gif'
        this.uploadComponent = 'Upload'

        this.ethereumTimeOut = setTimeout(() => {
          this.ethInterval = setInterval(() => {
            this.$refs.globe.globe.addImage(35.685, 139.7514, this.$refs.globe.imageETH) //52.193.60.84 ec2-52-193-60-84.ap-northeast-1.compute.amazonaws.com
            this.$refs.globe.globe.addImage(22.25, 114.1667, this.$refs.globe.imageETH) //150.109.46.182
            this.$refs.globe.globe.addImage(37.751, -97.822, this.$refs.globe.imageETH) //34.45.109.226 ec2-34-245-109-226.eu-west-1.compute.amazonaws.com sea!!
            this.$refs.globe.globe.addImage(24.9056, 67.0822, this.$refs.globe.imageETH) //14.192.152.183
            this.$refs.globe.globe.addImage(53.3331, -6.2489 , this.$refs.globe.imageETH) //54.229.6.221 ec2-54-229-6-221.eu-west-1.compute.amazonaws.com
            this.$refs.globe.globe.addImage(51.2993, 9.491, this.$refs.globe.imageETH) //88.198.169.253 static.88-198-169-253.clients.your-server.de
            this.$refs.globe.globe.addImage(48.8582, 2.3387, this.$refs.globe.imageETH) //94.23.49.75 forum.getmasari.org
            this.$refs.globe.globe.addImage(40.8344, -74.1377, this.$refs.globe.imageETH) //159.203.79.51
            this.$refs.globe.globe.addImage(34.7725, 113.7266, this.$refs.globe.imageETH) //120.78.194.152
            this.$refs.globe.globe.addImage(35.69, 139.69, this.$refs.globe.imageETH) //163.143.196.35.bc.googleusercontent.com
            this.$refs.globe.globe.addImage(38.6582, -77.2497, this.$refs.globe.imageETH) //35.196.143.163
            this.$refs.globe.globe.addImage(51.2993, 9.491, this.$refs.globe.imageETH) //87.106.111.132 s19433107.onlinehome-server.info
          }, 1000)
          this.uploadBlockchainComponent = 'UploadBlockchain'
        }, 2000) //20000
      },
      setToNull() {
        this.uploadComponent = null
        this.uploadBlockchainComponent = null
        this.verifyComponent = null
        this.verifyBlockchainComponent = null
        this.hashVerified = null
        this.previewFile = null
        this.gifComponent = null
        clearTimeout(this.ethereumTimeOut)
        clearInterval(this.ipfsInterval)
        clearInterval(this.ethInterval)
        this.fileFound = null
        this.fileNotFound = null
        this.notFoundBc = null
        this.globeComponent = null
      },
      verifyBlockchain(){
        this.gifComponent = 'Gif'
        this.verifyBlockchainComponent = 'VerifyBlockchain'
      },
      showModal(){
        this.setToNull()
        this.globeComponent = 'Global'
        this.previewFile = 'PreviewFile'
      },
      throwWarning(){
        alert('Tenga en cuenta que los archivos aquí subidos quedarán guardados en IPFS y en la cadena de bloques,' +
            ' por lo que se recomienda NO subir archivos con contenido sensible o datos personales')
      }
    }
  }
</script>
