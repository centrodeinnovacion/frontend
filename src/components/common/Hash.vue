<template>
  <div id="hash">
    <div class="hashbig2 inferior d-flex flex-column align-items-center">
      <p class="linebottom">HASH DEL DOCUMENTO</p>
      <div @click="doCopy" data-toggle="tooltip" data-placement="top" title="Clic para copiar hash (Necesario al
      querer descargar un documento)" class="coloryellow" id="verifiedHash">
        {{ validate.hash }}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Hash",
    computed:{
      ...mapState({
        validate: state => state.Toolkit.validate
      })
    },
    methods:{
      doCopy () {
        console.log(`I just click to copy ${this.validate.hash}`)
        this.$copyText(this.validate.hash).then( (e) => {
          alert(`Se ha copiado: ${this.validate.hash}`)
        })
      }
    }
  }
</script>