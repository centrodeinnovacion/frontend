<template>
  <div id="app" class="container">
    <top></top>
    <router-view/>
  </div>
</template>

<script>
  import Top from '@/components/menus/Top'
  export default {
    components: {
      Top
    }
  }
</script>

<style lang="scss">
  @import "assets/styles/styles";
</style>
