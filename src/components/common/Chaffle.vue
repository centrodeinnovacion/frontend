<template>
  <p data-chaffle="en" @click="chaffleador">0x96eb99488b230cce33d210a2831f8da2a6cd3581dfbb4aaa02a8893893a7262d</p>
</template>

<script>
  import Chaffle from 'chaffle'

  export default {
    name: "Chaffle",
    methods: {
      chaffleador() {
        const elements = document.querySelectorAll('[data-chaffle]')
        Array.prototype.forEach.call(elements, el => {
          const chaffle = new Chaffle(el, {
            lang: 'en',
            speed: 5,
            delay: 10
          })
          chaffle.init()
        })
      }
    }
  }
</script>

<style scoped>

</style>