<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div id="hashVerified">
    <h5 data-chaffle="en" class="coloryellow hashbig" v-clipboard:copy="validate.hash" v-clipboard:success="onCopy"
        v-clipboard:error="onError">
      {{ validate.hash }}
    </h5>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "HashVerified",
    methods:{
      ...mapState({
        validate: state => state.Toolkit.validate
      }),
      onCopy(e) {
        alert('You just copied: ' + e.text)
      },
      onError(e) {
        alert('Failed to copy texts')
      }
    }
  }
</script>

<style scoped lang="scss">
  h5 {
    margin-top: 15px;
    font-weight: 400 !important;
    letter-spacing: 1px !important;
    font-size: 17px!important;
  }
</style>