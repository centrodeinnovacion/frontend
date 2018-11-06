<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="upload d-flex align-items-start">
    <div class="coloryellow">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="pl-6">
      <h3 class="coloryellow"> Documento subido en nodos de IPFS </h3>
      <a>El documento es almacenado y distribuido a través de <a href="https://ipfs.io/" target="_blank">IPFS</a>,
        un <a href="https://es.wikipedia.org/wiki/Protocolo_de_internet"></a> protocolo</a> (http es un protocolo) que utiliza múltiples nodos para almacenar la información de forma descentralizada.</p>
      <h4 class="coloryellow">Hash:</h4>
      <h5 class="coloryellow" v-clipboard:copy="hash.hash" v-clipboard:success="onCopy" v-clipboard:error="onError">
        <!-- chaffle-data="en"-->
        {{hash.hash}}
      </h5>
      <p>Al cargar el archivo, <a href="https://ipfs.io/" target="_blank">IPFS</a> devuelve al usuario el resumen
        matemático del documento o un “Hash”. El hash
        será visible para todos en la red pero es imposible deducir su contenido sólo leyéndolo.</p>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Chaffle from 'chaffle'

  export default {
    name: 'Dashboard',
    hash: 'skdfhsdjhfsjdkfhsdjkfh',
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
            speed: 5,
            delay: 10
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