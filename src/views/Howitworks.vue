<template>
    <div class="howitworks ">
        <div class="contentMore d-flex align-items-start flex-column pt-5 pl-5">
            <h2 class="mt-3">¿Cómo funciona Blockchain?</h2>
            <p class="pt-0">Para empezar haga scroll hacia abajo.</p></div>
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 d-flex  align-items-center flex-column step pr-5 mr-5 pt-5 fadeInLeft ad-1">
                <p><span class="number text-right">1.</span></br>
                    Un usuario de la red realiza alguna transacción.(Carga o envía cualquier tipo de
                    información).</p>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 d-flex  align-items-center flex-column stepright mt-5 ml-5 pl-5 pt-5 fadeInRight ad-1">
                <p class="text-left"><span class="number text-left">2.</span></br>
                    La transacción es almacenada en un bloque con otras transacciones.</p>
            </div>
            <div class="col-lg-2 col-md-2"></div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-1 col-xs-1"></div>
                <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5 d-flex  align-items-center flex-column step pr-5 mr-5  fadeInLeft ad-1">
                    <p><span class="number text-right">3.</span></br>
                        Cada 10 minutos se cierra un bloque con el registro de las transacciones realizadas y se crea un
                        nuevo bloque.</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5 d-flex  align-items-center flex-column stepright mt-5 ml-5 pl-5 pt-5 fadeInRight ad-1">
                    <p class="text-left"><span class="number text-left">4.</span></br>
                        El bloque se envía a todos los nodos o computadores conectados a la red, y se enlaza con los
                        bloques anteriores.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-1 col-xs-1"></div>
                <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5 d-flex  align-items-center flex-column step pr-5 mr-5 pt-5 fadeInLeft ad-1">
                    <p><span class="number text-right">5.</span></br>
                        Cada nodo de la red tiene una copia de la cadena de bloques.</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5 d-flex  align-items-center flex-column stepright mt-5 ml-5 pl-5 pt-5 fadeInRight  ad-1">
                    <p class="text-left"><span class="number text-left">6.</span></br>
                        Para destruir o modificar un bloque de la cadena hay que destruir los bloques que se encuentran
                        encima.</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-1 col-xs-1"></div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-1 col-xs-1"></div>
                <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5 d-flex  align-items-center flex-column step pr-5 mr-5 pt-5 fadeInLeft ad-1">
                    <p><span class="number text-right">7.</span></br>
                        Y también destruir cada cadena de bloques en todos los nodos de la red, lo cual se considera imposible de hacer, debido a la magnitud de bloques y nodos.</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-5 col-xs-5 d-flex  align-items-center flex-column stepright mt-5 ml-5 pl-5 pt-5">
                    <p class="text-left"><span class="number text-left">8.</span></br>
                        Por esta razón Blockchain es considerado en extremo seguro.</p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-1 col-xs-1"></div>
            </div>
        </div>
        <footer>
            <div class="d-flex flex-row-reverse align-items-end">
                <div class="p-2 mr-3 mb-3">
                    <router-link class="btnDiamond" :to="{name: 'dashboard'}"><i class="fas fa-arrow-right"></i>
                    </router-link>
                </div>
                <div class="p-2 mb-3"><p>Prueba blockchain con un ejemplo.</p></div>
            </div>
        </footer>
    </div>

</template>

<script>
    export default {
        name: "Howitworks"
    }
</script>

<style scoped>

</style>