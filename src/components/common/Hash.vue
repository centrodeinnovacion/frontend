<template>
  <div id="hash" @click="doCopy">
    <div class="hashbig inferior d-flex align-items-center">
      <p class="linebottom">HASH del documento</p>
      <textarea data-toggle="tooltip" data-placement="top" title="Clic para copiar hash (Necesario al querer descargar un documento)" readonly class="coloryellow" id="verifiedHash">
        {{ validate.hash }}
      </textarea>
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
        }, (e)  =>{
          alert('No se pudo copiar')
        })
      }
    }
  }
</script>