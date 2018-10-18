<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-3">
      <h2>Instrucciones</h2>
    <p>Suponga que usted quiere cargar, verificar y descargar el registro sanitario o médico de un producto, para esto seleccione una de las siguientes acciones: </p>

    <form @submit.prevent="">
      <div class="buttonscol">
      <input type="file"  placeholder="Drag a file to upload" name="upload" id="upload" class="inputstylebtn"  >
      <input type="file" placeholder="Drag a file to verify" name="verify" id="verify" class="inputstylebtnverify">
      <button type="button" class="btn btn-dashboard">Descargar documento <i class="fas fa-cloud-download-alt"></i> </button>
      </div>    </form>  </div>

    <div class="col-6">
    </div>
    <div class="col-3 alignicon2">
        <div class="sizeicon">
            <i class="fas fa-file-alt sizeicon"></i>
        </div>
        <div class="alingnicon">

         <h3>  DOCUMENTO CARGADO </br> EN VARIOS NODOS DE IPFS </h3>
      <p class="spacetext">El documento es almacenado y distribuido a través de IPFS un protocolo que busca reemplazar a HTTP, pues a diferencia de HTTP, descarga la información desde varios computadores(nodos) de forma simultánea y por lo tanto descentralizada, asegurando la veracidad de esta y permitiendo la distribución de altos volumenes de información con mayor eficiencia. </p>
      <h9>HASH:</h9>
      <h5>DFCG741</h5>
        <p>Al finalizar la carga del archivo, IPFS devuelve al usuario un “Hash”, es decir el documento encriptado en un código alfanumérico. El hash será visible para todos en la red pero es imposible deducir el contenido sólo leyendolo. <p1>IPFS permite tener la información versionada, es decir que si el documento sufre alguna modificación y se sube nuevamente, la carga se realizará con un hash diferente, de ese modo, los integranntes de la red sabrán que el archivo ha sido modificado. </p1></p>
            <img src="../assets/blockchainicon.png" class="sizeicon3 "/> <h6>TRANSACCIÓN DE </br>IPFS A BLOCKCHAIN</h6>
      <p> El documento es transferido de IPFS a nodos en la red de Blockchain.</p>
      <h7>HASH:</h7>
        </br>
      <h8>EET3490IO</h8>
      <p> Blockchain devuelve al usuario un hash único que indentifica la transacción. </p>
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