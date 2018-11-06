<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="alignicon2 upload align-middle">
    <div class="sizeicon coloryellow">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="alingnicon">
      <h3 class="coloryellow"> Documento subido <br> en nodos de IPFS </h3>
      <p>El documento es almacenado y distribuido a través de IPFS, que sirve para descentralizar información
        almacenándola en varios nodos de forma simultánea, lo que asegura que esta no
        podrá ser alterada.</p>
      <h4 class="coloryellow">Hash:</h4>
      <h5 class="coloryellow"  v-clipboard:copy="hash.hash" v-clipboard:success="onCopy" v-clipboard:error="onError"> <!-- chaffle-data="en"-->
        {{ hash.hash.substr(0,13)  }}...
      </h5>
      <p>Al cargar el archivo, IPFS devuelve al usuario el resumen matemático del documento o un “Hash”. El hash
        será visible para todos en la red pero es imposible deducir el contenido sólo leyéndolo.</p>
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