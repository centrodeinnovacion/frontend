<template>
    <div class="home">
        <div class="float-left fixed-top ">
            <div class="logotoolkit"><img src="../assets/logo_toolkit.png"/>
            </div>
        </div>
        <div class="row">
            <div class="col-3 imageback">
            </div>
            <div class="col-6 homecontent justify-content-center">
                <!--<div class="content" data-text="Toolkit"><span class="lineth">-->
                <!--<span class="linetext">Toolkit</span></span>-->
                <!--</div>-->
                <p class="center">Blockchain permite el registro de información en diferentes partes del planeta de
                    manera simultánea,
                    asegurando la seguridad y veracidad de esta. Esta herramienta le ayudará a entender el
                    funcionamiento de
                    Blockchain, </p>
            </div>
            <div class="col-3 imageback2"></div>
        </div>
        <div class="homecontent justify-content-center contentfront">
            <!--<div class="float-left leftext">-->
                <!--<img src="../assets/logo_toolkit2.png"/>-->
            <!--</div>-->
            <div class="content" data-text="Blockchain"><span class="">
                    <span class="linetext">Blockchain</span></span>
            </div>
            <p class="textcenter">Blockchain permite el registro de información en diferentes partes del planeta de
                manera simultánea,
                asegurando la seguridad y veracidad de esta. Esta herramienta le ayudará a entender el
                funcionamiento de
                Blockchain, </p>

            <router-link class="btn" :to="{name: 'dashboard'}"><span class="buttontext">Empezar</span></router-link>
        </div>
        <footer>

            <div class="d-flex">
                <div class="p-2"><img src="../assets/logo_gobierno.png"/>
                </div>
                <div class="p-2"><img src="../assets/logo_mintic.png"/>
                </div>
                <div class="p-2"><img src="../assets/logo_centrodeinnovacion.png"/>
                </div>
                <div class="ml-auto p-2"><img src="../assets/logo_unpd.png"/><img src="../assets/logo_undesa.png"/>
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
