<template>
  <div class="alignicon2 upload align-middle">
    <div class="sizeicon">
      <i class="fas fa-file-alt"></i>
    </div>

    <div class="alingnicon">
      <h3 class="coloryellow"> Documento subido </br> en nodos de IPFS </h3>
      <p>El documento es almacenado y distribuido a través de IPFS, que sirve para descentralizar documentos,
        almacenándolos en varios computadores (nodos) de forma simultánea, lo que asegura que el documento no
        podrá ser alterado</p>

      <h4 class="coloryellow">Hash:</h4>
      <h5 class="coloryellow">{{ hash.hash }}</h5>

      <p>Al cargar el archivo, IPFS devuelve al usuario el resumen matemático del documento o un “Hash”. El hash será visible para todos en la red pero es imposible deducir el contenido sólo leyéndolo.</p>
      <img src="../../assets/blockchainicon.png" class="sizeicon3"/>
      <h3 class="colorgreen">Transacción de </br>IPFS a Blockchain</h3>
      <p> El documento es transferido de IPFS a nodos en la red de Blockchain de Ethereum.</p>
      <h4 class="colorgreen">Hash:</h4>
      <h5 class="colorgreen">{{ hash.tx }}</h5>
      <p> Blockchain devuelve al usuario un hash que indentifica la transacción. </p>
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

<style scoped>

</style>