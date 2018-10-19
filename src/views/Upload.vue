<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-3"></div>

    <div class="col-6"></div>
      <div class="col-3 alignicon2 upload">
        <div class="sizeicon">
          <i class="fas fa-file-alt"></i>
        </div>

        <div class="alingnicon">
          <h3 class="coloryellow">  Documento </br> nodos de ipfs </h3>
          <p>El documento es almacenado y distribuido a través de IPFS, un Drive descentralizado que descarga la información desde varios computadores (nodos) de forma simultánea, lo que hace a la red extremadamente segura.</p>

          <h4 class="coloryellow">Hash:</h4>
          <h5 class="coloryellow">DFCG741</h5>

          <p>Al cargar el archivo, IPFS devuelve al usuario el resumen matemático del documento o “Hash”. El hash será visible para todos en la red pero es imposible deducir el contenido sólo leyendolo.</p>
          <img src="../assets/blockchainicon.png" class="sizeicon3"/>
          <h3 class="colorgreen">Transacción de </br>IPFS a Blockchain</h3>
          <p> El documento es transferido de IPFS a nodos en la red de Blockchain.</p>
          <h4 class="colorgreen">Hash:</h4>
          <h5 class="colorgreen">EET3490IO</h5>
          <p> Blockchain devuelve al usuario un hash único que indentifica la transacción. </p>
        </div>

      </div>
    </div>



    </div>
  </div>

</template>

<script>
  export default {
    name: 'Dashboard'
  }
</script>

<style scoped>

</style>