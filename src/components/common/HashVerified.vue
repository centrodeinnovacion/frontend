<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div id="hashVerified">
    <h5 data-chaffle="en" class="coloryellow hashbig" v-clipboard:copy="hash.tx" v-clipboard:success="onCopy"
        v-clipboard:error="onError">
      0x96eb99488b230cce33d210a2831f8da2a6cd3581dfbb4aaa02a8893893a7262d <!--{{ hash.tx }}-->
    </h5>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "HashVerified",
    methods:{
      ...mapState({
        hash: state => state.Toolkit.hash,
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