<template>
  <div class="home pt-4 d-flex flex-column justify-content-center align-items-center">
    <div class="mt-5 content text-center" data-text="Blockchain"><span class="">
        <span class="linetext">Blockchain</span></span>
    </div>
    <div class="justify-content-center d-flex align-items-center flex-column">
      <p class="textcenter text-center pr-5 pl-5 mr-5 ml-5">Esta tecnología puede considerarse como una base de
      datos compartida y validada por consenso, entre varios nodos o computadores conectados a una misma red,
      es decir que la información se maneja de forma descentralizada. Este toolkit le dará herramientas para
      entender el funcionamiento de Blockchain. Para navegar correctamente por el sitio es necesario hacerlo desde un computador.  </p>
      <router-link class="btn" :to="{name: 'howitworks'}"><span class="buttontext">Empezar</span></router-link>
      <div class="pt-5">
        <img src="../assets/img/logo_toolkit2.png"/>
      </div>
    </div>
    <div class="d-flex flex-column container-fluid falsefooter pt-5">
      <div class="d-flex flex-wrap ">
        <div class="p-2"><a href="http://vivelabbogota.com/" target="_blank"><img src="../assets/img/logo_vivelab.png"/></a>
        </div>
        <div class="p-2"><span class="linefooterhome"></span><img src="../assets/img/logo_gobierno.png"/>
        </div>
        <div class="p-2"><img src="../assets/img/logo_mintic.png"/>
        </div>
        <div class="p-2"><a href="http://centrodeinnovacion.gobiernoenlinea.gov.co/es" target="_blank"><img src="../assets/img/logo_centrodeinnovacion.png"/></a>
        </div>
        <div class="ml-auto p-2"><img src="../assets/img/logo_unpd.png"/><img src="../assets/img/logo_undesa.png"/>
        </div>
      </div>
    </div>
  </div>

</template>de Blockchain. Para navegar correctamente por el sitio es necesario hacerlo desde un computador.



<script>
import Global from '@/components/common/Global'

export default {
  name: 'home',
  components: {
    Global
  }
}
</script>
