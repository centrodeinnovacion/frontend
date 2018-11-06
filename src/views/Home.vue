<template>
    <div class="home pt-5 d-flex flex-column justify-content-center align-items-center">
        <div class="mt-5 content text-center" data-text="Blockchain"><span class="">
            <span class="linetext">Blockchain</span></span>
        </div>
        <div class="justify-content-center d-flex align-items-center flex-column">
            <p class="textcenter text-center pr-5 pl-5 mr-5 ml-5">Esta tecnología puede considerarse como una base de
                datos compartida y validada por consenso, entre varios nodos o computadores conectados a una misma red,
                es decir que la información se maneja de forma descentralizada. Este toolkit le dará herramientas para
                entender el funcionamiento de Blockchain. </p>
            <router-link class="btn" :to="{name: 'howitworks'}"><span class="buttontext">Empezar</span></router-link>
            <div class="p-5">
                <img src="../assets/img/logo_toolkit2.png"/>
            </div>
        </div>
        <footer>
            <div class="d-flex align-items-end fixed-bottom">
                <div class="p-2"><img src="../assets/img/logo_vivelab.png"/>
                </div>
                <div class="p-2"><span class="linefooterhome"></span><img src="../assets/img/logo_gobierno.png"/>
                </div>
                <div class="p-2"><img src="../assets/img/logo_mintic.png"/>
                </div>
                <div class="p-2"><img src="../assets/img/logo_centrodeinnovacion.png"/>
                </div>
                <div class="ml-auto p-2"><img src="../assets/img/logo_unpd.png"/><img src="../assets/img/logo_undesa.png"/>
                </div>
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
