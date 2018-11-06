<template>
  <div class="upload d-flex align-items-start">
      <div class="coloryellow">
        <i class="fas fa-file-alt"></i>
      </div>
      <div class="pl-6">
        <h3 class="coloryellow"> Documento subido en nodos de IPFS </h3>
        <p>El documento es almacenado y distribuido a través de <a href="https://ipfs.io/" target="_blank">IPFS</a>, un dropbox que sirve para descentralizar información
          almacenándola en varios nodos de forma simultánea.</p>
        <h4 class="coloryellow">Hash:</h4>
        <h5 class="coloryellow">
          {{hash.hash}}
        </h5>
        <p>Al cargar el archivo, <a href="https://ipfs.io/" target="_blank">IPFS</a> devuelve al usuario el resumen matemático del documento o un “Hash”. El hash
          será visible para todos en la red pero es imposible deducir su contenido sólo leyéndolo.</p>
      </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Dashboard',
    computed: {
      ...mapState({
        hash: state => state.Toolkit.hash
      })
    }
  }
</script>