<template>
  <div>
    <img :src="pdf" alt="" class="d-flex embed-responsive embed-responsive-1by1 img-fluid">
    <object class="d-flex embed-responsive embed-responsive-1by1 pdf" type="application/pdf" :data="pdf">
      <p>Insert your error message here, if the PDF cannot be displayed.</p>
    </object>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "PreviewFile",
    data() {
      return {
        reader: new FileReader(),
        pdf: null,
        flag: null
      }
    },
    computed: {
      ...mapState({
        file: state => state.Toolkit.file
      })
    },
    watch: {
      file(e) {
        console.log(this.file)
        console.log(`file.type = ${this.file.type}`)
        console.log(`file.name = ${this.file.name}`)
        console.log(`file.type == "application/pdf" = ${this.file.type == "application/pdf"}`)
        if (e) {
          this.reader.readAsDataURL(e)
        }
        this.flag = this.file.type === 'image/jpeg' || 'image/png'/*"application/pdf"*/
      }
    },
    created() {
      this.reader.addEventListener('load', () => {
        this.pdf = this.reader.result
      })
    }
  }

</script>