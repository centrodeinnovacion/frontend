<template>
  <div class="home">
    <div class="row">
      <div class="col-3 imageback">
      </div>
      <div class="col-6 homecontent">
        <div class="content" data-text="Blockchain"><span class="lineth"><span
            class="linetext">Blockchain</span></span>
        </div>
        <div class="content" data-text="Toolkit"><span class="lineth"><span
            class="linetext">Toolkit</span></span>
        </div>

        <p>Blockchain permite el registro de información en diferentes partes del planeta de manera simultánea,
          asegurando la seguridad y veracidad de esta. Esta herramienta le ayudará a entender el
          funcionamiento de
          Blockchain, </p>

        <router-link class="btn" :to="{name: 'dashboard'}"><span class="buttontext">Empezar</span></router-link>
      </div>
      <div class="col-3 imageback2"></div>
    </div>
    <footer>
      <div class="row">
        <div class="col-6 ">
        </div>
        <div class="col "><img src="../assets/logo_mintic.png"/>
        </div>
        <div class="col linefooterhome"><img src="../assets/logo_centrodeinnovacion.png"/>
        </div>
        <div class="col linefooterhome"><img src="../assets/logo_vivelab.png"/></div>
      </div>
    </footer>
  </div>

</template>

<script>
  import Global from '@/components/common/Global'

  export default {
    name: 'home',
    components: {
      Global
    }
  }
</script>
