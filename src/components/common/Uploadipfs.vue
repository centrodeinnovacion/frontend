<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="upload d-flex align-items-start mt-6">
    <div class="colorgreen">
      <i class="fas fa-layer-group"></i>
    </div>
    <div class="pl-6">
      <h3 class="colorgreen">Transacción de IPFS a Blockchain</h3>
      <p> El hash del documento es transferido de <a href="https://ipfs.io/" target="_blank">IPFS</a> a nodos de la red de
        Blockchain en este caso <a href="https://www.ethereum.org/" target="_blank">Ethereum</a> a través del <a href="https://hipertextual.com/archivo/2014/05/que-es-api/" target="_blank">API</a>.</p>
      <h4 class="colorgreen">Hash:</h4>
      <textarea readonly class="colorgreen" id="etheHash" v-clipboard:copy="hash.hash" v-clipboard:success="onCopy" v-clipboard:error="onError">
        {{hash.tx}}
      </textarea>
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
