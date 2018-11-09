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
        <gif :is="gifComponent"></gif>
        <!--<searchipfs></searchipfs>-->
        <!--<Notfoundipfs></Notfoundipfs>
        <!--<Notfoundbc></Notfoundbc>-->
        <!--<verify></verify>-->
        <component :is="verifyComponent"></component>
        <component :is="hashVerified"></component>
        <component :is="notFoundBc"></component>
      </div>

      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <div class="explanation">
          <component :is="verifyBlockchainComponent"></component>
          <component :is="downloadPdf"></component>
          <component :is="fileFound"></component>
          <component :is="fileNotFound"></component>
          <!--<filenofound></filenofound>
          <!--<filefound></filefound>-->
          <div class="scrollbar">
            <div class="force-overflow"></div>
            <component :is="uploadComponent"></component>
            <component :is="uploadIpfsComponent"></component>
            <!--<component :is="downloadPdf"></component>-->
            <downloadPdf></downloadPdf>
          </div>
        </div>
      </div>

    </div>
    <div class="row download">
      <div>
        <download ref="modalDownload"></download>
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
  import Searchipfs from '@/components/common/Searchipfs'
  import FileNotFound from '@/components/common/FileNotFound'
  import FileFound from '@/components/common/FileFound'
  import DownloadPdf from '@/components/common/DownloadPdf'
  import NotFoundBc from '@/components/common/NotFoundBc'
  import Notfoundipfs from '@/components/common/Notfoundipfs'
  import HashVerified from '@/components/common/HashVerified'
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
        downloadPdf: null,
        gifComponent: null,
        ethereumTimeOut: null,
        ipfsInterval: null,
        ethInterval: null,
        fileFound: null,
        fileNotFound: null,
        notFoundBc: null,
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
      FileNotFound,
      FileFound,
      DownloadPdf,
      NotFoundBc,
      Notfoundipfs,
      HashVerified,
      Gif
    },
    methods: {
      ...mapState({
        validate: state => state.Toolkit.validate()
      }),
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
        this.setProperty({validate: {hash: 'procesando...', fileName: 'procesando...'}})
        const file = files[0]
        console.log(file)
        this.verifiedFile(file)

        this.verifyBlockchain()
      },
      addMarkersToGlobe(){
        this.setToNull()

        //this.$refs.globe.ipfs()
        this.ipfsInterval = setInterval(() => {
          this.$refs.globe.globe.addImage(4.570868, -74.297333, this.$refs.globe.imageIPFS) // Colombia
        }, 1800)
        setTimeout(()=>{
          clearInterval(this.ipfsInterval)
        },10000)

        this.uploadComponent = 'Upload'

        this.ethereumTimeOut = setTimeout(() => {
          //this.$refs.globe.ethereum()
          this.ethInterval = setInterval(() => {
            const i1 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[i1][0], this.$refs.globe.countries[i1][1], this.$refs.globe.imageETH)
            const i2 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[i2][0], this.$refs.globe.countries[i2][1], this.$refs.globe.imageETH)
            const i3 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[i3][0], this.$refs.globe.countries[i3][1], this.$refs.globe.imageETH)
            const i4 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[i4][0], this.$refs.globe.countries[i4][1], this.$refs.globe.imageETH)
            const i5 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[i5][0], this.$refs.globe.countries[i5][1], this.$refs.globe.imageETH)
            const i6 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[i6][0], this.$refs.globe.countries[i6][1], this.$refs.globe.imageETH)
            const i7 = Math.floor(Math.random() * (this.$refs.globe.countries.length))
            this.$refs.globe.globe.addImage(this.$refs.globe.countries[i7][0], this.$refs.globe.countries[i7][1], this.$refs.globe.imageETH)
          }, 1800)
          setTimeout(()=>{
            clearInterval(this.ethInterval)
          },10000)
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
        this.gifComponent = null
        clearTimeout(this.ethereumTimeOut)
        clearInterval(this.ipfsInterval)
        clearInterval(this.ethInterval)
        this.fileFound = null
        this.fileNotFound = null
        this.notFoundBc = null
      },
      getHashToDownload(){
        return this.$refs.modalDownload.hash
      },
      verifyBlockchain(){
        this.gifComponent = 'Gif'
        this.verifyBlockchainComponent = 'VerifyBlockchain'
        //if(this.validate){
          setTimeout(()=>{
            this.setToNull()
            this.verifyComponent = 'Verify'
            this.hashVerified = 'HashVerified'
            this.fileFound = 'FileFound'
            setTimeout(()=>{
              this.setToNull()
              this.notFoundBc = 'NotFoundBc'
              this.hashVerified = 'HashVerified'
              this.fileNotFound = 'FileNotFound'
            }, 4000)
          }, 4000)
        /*}else{
          setTimeout(()=>{
            this.setToNull()
            this.notFoundBc = 'NotFoundBc'
            this.fileNotFound = 'FileNotFound'
          }, 4000)
        }*/
      }
    }
  }
</script>
