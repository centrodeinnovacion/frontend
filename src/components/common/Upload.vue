<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div class="upload d-flex align-items-start"> <!--v-if="ethFlag">-->
    <div class="coloryellow">
      <i class="fas fa-file-alt"></i>
    </div>
    <div class="pl-6">
      <h3 class="coloryellow"> Documento subido en nodos de IPFS </h3>
      <p>El documento es almacenado y distribuido a través de <a href="https://ipfs.io/" target="_blank">IPFS</a>,
        un <a href="https://es.wikipedia.org/wiki/Protocolo_de_internet" target="_blank">protocolo</a> (http es también un protocolo), que utiliza múltiples nodos para almacenar la información de forma descentralizada.</p>
      <h4 class="coloryellow">Hash:</h4>
      <textarea data-toggle="tooltip" data-placement="top" title="Clic para copiar hash y poder descargar el documento" readonly class="coloryellow" id="ipfsHash" v-clipboard:copy="hash.hash" v-clipboard:success="onCopy" v-clipboard:error="onError">
        {{hash.hash}}
      </textarea>
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
    },
      
  }
</script>