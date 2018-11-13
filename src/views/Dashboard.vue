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
                <input type="file" placeholder="Drag a file to upload" id="Upload" @change="upload" accept=".jpg,.jpeg,.pdf">
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
        <global ref="globe"></global>
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

          <div v-if="uploadIpfsComponent || uploadComponent || previewFile" class="scrollbar force-overflow">
            <component :is="uploadComponent"></component>
            <component :is="uploadIpfsComponent"></component>
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
  import Uploadipfs from '@/components/common/Uploadipfs'
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
        uploadComponent: null,
        uploadIpfsComponent: null,
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
      Uploadipfs,
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
    /*mounted(){
      this.addMarkersToGlobe()
    },*/
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
        this.ipfsInterval = setInterval(() => {
          this.$refs.globe.globe.addImage(4.570868, -74.297333, this.$refs.globe.imageIPFS) // Colombia
        }, 1800)

        this.gifComponent = 'Gif'
        this.uploadComponent = 'Upload'

        this.ethereumTimeOut = setTimeout(() => {
          this.ethInterval = setInterval(() => {
            // const i1 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(24.9056, 67.0822, this.$refs.globe.imageETH) //14.192.152.183
            this.$refs.globe.globe.addImage(22.25, 114.1667, this.$refs.globe.imageETH) //150.109.46.182
            // this.$refs.globe.globe.addImage(, , this.$refs.globe.imageETH) //
            /*this.$refs.globe.globe.addImage(this.$refs.globe.countries[187][0], this.$refs.globe.countries[187][1], this.$refs.globe.imageETH) //Russia
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[102][0], this.$refs.globe.countries[102][1], this.$refs.globe.imageETH) //India
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[45][0], this.$refs.globe.countries[45][1], this.$refs.globe.imageETH) //China
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[13][0], this.$refs.globe.countries[13][1], this.$refs.globe.imageETH) //Australia 13
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[119][0], this.$refs.globe.countries[119][1], this.$refs.globe.imageETH) //South Korea 119
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[242][0], this.$refs.globe.countries[242][1], this.$refs.globe.imageETH) //South Africa 242
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[71][0], this.$refs.globe.countries[71][1], this.$refs.globe.imageETH) //France 71
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[1][0], this.$refs.globe.countries[1][1], this.$refs.globe.imageETH) //United Arab Emirates 1
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[73][0], this.$refs.globe.countries[73][1], this.$refs.globe.imageETH) //United Kingdom 73
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[227][0], this.$refs.globe.countries[227][1], this.$refs.globe.imageETH) //United States 227
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[232][0], this.$refs.globe.countries[232][1], this.$refs.globe.imageETH) //Venezuela 232
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[32][0], this.$refs.globe.countries[32][1], this.$refs.globe.imageETH) //Canada 32
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[40][0], this.$refs.globe.countries[40][1], this.$refs.globe.imageETH) //Switzerland 40
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[193][0], this.$refs.globe.countries[193][1], this.$refs.globe.imageETH) //Sweden 193*/
            /*this.$refs.globe.globe.addImage(this.$refs.globe.countries[20][0], this.$refs.globe.countries[20][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[90][0], this.$refs.globe.countries[90][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[63][0], this.$refs.globe.countries[63][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[41][0], this.$refs.globe.countries[41][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[40][0], this.$refs.globe.countries[40][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[34][0], this.$refs.globe.countries[34][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[60][0], this.$refs.globe.countries[60][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[95][0], this.$refs.globe.countries[95][1], this.$refs.globe.imageETH)
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[100][0], this.$refs.globe.countries[100][1], this.$refs.globe.imageETH)*/
          }, 1800)
          this.uploadIpfsComponent = 'Uploadipfs'
        }, 2000) //20000
      },
      setToNull() {
        this.uploadComponent = null
        this.uploadIpfsComponent = null
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
      },
      verifyBlockchain(){
        this.gifComponent = 'Gif'
        this.verifyBlockchainComponent = 'VerifyBlockchain'
      },
      showModal(){
        this.setToNull()
        this.previewFile = 'PreviewFile'
      }
    }
  }
</script>
