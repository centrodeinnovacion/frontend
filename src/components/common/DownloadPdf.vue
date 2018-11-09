<template>
  <div>
    <object class="d-flex pdf embed-responsive embed-responsive-1by1" type="application/pdf" :data="pdf">
      <p>Insert your error message here, if the PDF cannot be displayed.</p>
    </object>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "DownloadPdf",
    data() {
      return {
        reader: new FileReader(),
        pdf: null
      }
    },
    computed: {
      ...mapState({
        file: state => state.Toolkit.file
      })
    },
    watch: {
      file (e) {
        if (e) {
          this.reader.readAsDataURL(e)
        }
      }
    },
    created () {
      this.reader.addEventListener('load', () => {
        this.pdf = this.reader.result
      })
    }
  }
</script>