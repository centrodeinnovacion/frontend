<template>
  <div class="alignicon2 upload align-middle" id="upload-ipfs">
    <div class="alingnicon">
      <div class="sizeicon colorgreen">
        <i class="fas fa-layer-group"></i>
      </div>
      <h3 class="colorgreen">Transacción de <br> IPFS a Blockchain</h3>
      <p> El documento es transferido de IPFS a nodos en la red de Blockchain de Ethereum.</p>
      <h4 class="colorgreen">Hash:</h4>
      <h5 class="colorgreen" data-chaffle="en">EET3490IO</h5>
      <p> Blockchain devuelve al usuario un hash que indentifica la transacción. </p>
    </div>

  </div>
</template>

<script>
  import Chaffle from 'chaffle'

  export default {
    name: "Uploadipfs",
    mounted(){
      setTimeout(()=>{
        this.chaffleIt()
      },3000)
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
      }
    }
  }
</script>
