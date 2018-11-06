<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="upload d-flex align-items-start mt-6">
    <div class="colorgreen">
      <i class="fas fa-layer-group"></i>
    </div>
    <div class="pl-6">
      <h3 class="colorgreen">Transacción de IPFS a Blockchain</h3>
      <p> El documento es transferido de <a href="https://ipfs.io/" target="_blank">IPFS</a> a nodos de la red de
        Blockchain de <a href="https://www.ethereum.org/" target="_blank">Ethereum</a>.</p>
      <h4 class="colorgreen">Hash:</h4>
      <h5 class="colorgreen" v-clipboard:copy="hash.tx" v-clipboard:success="onCopy" v-clipboard:error="onError">
        <!-- chaffle-data="en"-->
        {{hash.tx}}
      </h5>
      <p class="mb-5">Blockchain devuelve al usuario un hash que indentifica la transacción.</p>
    </div>
  </div>
</template>

<script>
  import Chaffle from 'chaffle'
  import {mapState} from 'vuex'

  export default {
    name: "Uploadipfs",
    mounted() {
      setTimeout(() => {
        this.chaffleIt()
      }, 3000)
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
