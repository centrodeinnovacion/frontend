<template>
  <div id="hash" @click="doCopy">
    <div class="hashbig">
      <p class="linebottom">HASH</p>
      <textarea readonly class="coloryellow" id="verifiedHash">
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