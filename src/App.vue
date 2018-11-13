<template>

  <div id="app" class="container-fluid">
    <router-view/>
    <footer class="">
      <div class="d-flex fixed-bottom" v-if="route !== 'home' && route !== 'about'">
        <div class="p-2 ml-5 mr-auto mb-3">
          <button type="button"  class="btnDiamond" data-toggle="modal" data-target="#tutorialModal" id="Tutorial"><i class="fas fa-question"></i></button>
        </div>
        <div class="p-2 mr-3 mb-3">
          <router-link class="btnDiamond" :to="{name: back}"><i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="p-2 mr-3 mb-3">
          <router-link class="btnDiamond" :to="{name: forward}"><i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <div class="footer-copyright text-center py-3" v-if="route !== 'dashboard' && route !== 'home'">© 2018 Copyright.
        <a href=""> Términos y condiciones de uso.</a>
      </div>
      <div class="d-flex fixed-bottom footer-copyright justify-content-center align-content-center text-center py-3" v-if="route !== 'howitworks' && route !== 'about'">© 2018 Copyright.
        <a href=""> Términos y condiciones de uso.</a>
      </div>
    </footer>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: ['back', 'forward'],
    computed: {
        ...mapState({
          route: state => state.route.name
        })
    }
  }
</script>

<style lang="scss">
  @import "assets/styles/styles";
</style>
