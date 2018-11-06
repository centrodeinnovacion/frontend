<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="alignicon2 upload align-middle" id="upload-ipfs">
    <div class="alingnicon">
      <div class="sizeicon colorgreen">
        <i class="fas fa-layer-group"></i>
      </div>
      <h3 class="colorgreen">Transacción de <br> IPFS a Blockchain</h3>
      <p> El documento es transferido de IPFS a nodos en la red de Blockchain de Ethereum.</p>
      <h4 class="colorgreen">Hash:</h4>
      <h5 class="colorgreen" v-clipboard:copy="hash.tx" v-clipboard:success="onCopy" v-clipboard:error="onError"> <!-- chaffle-data="en"-->
        {{ hash.tx.substr(0,13) }}...
      </h5>
      <p> Blockchain devuelve al usuario un hash que indentifica la transacción. </p>
    </div>

  </div>
</template>

<script>
  import Chaffle from 'chaffle'
  import {mapState} from 'vuex'

  export default {
    name: "Uploadipfs",
    mounted(){
      setTimeout(()=>{
        this.chaffleIt()
      },3000)
    },
    computed: {
      ...mapState({
        hash: state => state.Toolkit.hash
      })
    },
    methods: {
      chaffleIt() {
        const elements = document.querySelectorAll('[data-chaffle]')
        Array.prototype.forEach.call(elements, el => {
          const chaffle = new Chaffle(el, {
            lang: 'en',
            speed: 20,
            delay: 100
          })
          chaffle.init()
        })
      },
      onCopy(e) {
        alert('You just copied: ' + e.text)
      },
      onError(e) {
        alert('Failed to copy texts')
      }
    }
  }
</script>
