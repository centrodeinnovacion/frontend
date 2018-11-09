<template>
  <div>
    <object class="d-flex pdf embed-responsive embed-responsive-1by1">
      <embed class="embed-responsive-item" :src="`https://ipfs.infura.io/ipfs/${hash}`"></object>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "DownloadPdf",
    data(){
      return {
        hash: 'QmdFyM4C5SxQU4ti5pwU4NN2NiyLLgLc6o97MMZi3t72yG'
      }
    },
    computed: {
      ...mapState({
        file: state => state.Toolkit.file
      })
    },
  }
</script>