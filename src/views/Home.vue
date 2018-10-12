<template>
    <div class="home">

        <div class="row">
            <div class="col-3 imageback">
            </div>
            <div class="col-5 homecontent"><h1><span class="lineth"><span
                    class="linetext">Blockchain toolkit</span></span>
            </h1>
                <p>Blockchain permite el registro de información en diferentes partes del planeta de manera simultánea,
                    asegurando la seguridad y veracidad de esta. Esta herramienta le ayudará a entender el
                    funcionamiento de
                    Blockchain, </p>

                <router-link class="btn" :to="{name: 'dashboard'}"><span class="buttontext">Empezar</span></router-link>
            </div>
            <div class="col-4 imageback2"></div>

        </div>
<footer>
    <div class="row">
        <div class="col-6 ">
        </div>
        <div class="col "><img src="../assets/logo_mintic.png"/>
        </div>
        <div class="col linefooterhome"><img src="../assets/logo_centrodeinnovacion.png" />
        </div>
        <div class="col linefooterhome"><img src="../assets/logo_vivelab.png" /></div>



    </div>
</footer>
    </div>

</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'home',
        components: {}
    }
</script>
