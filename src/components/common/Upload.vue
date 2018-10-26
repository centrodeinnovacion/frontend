<template>
    <div class="alignicon2 upload align-middle">
        <div class="sizeicon coloryellow">
            <i class="fas fa-file-alt"></i>
        </div>
        <div class="alingnicon">
            <h3 class="coloryellow"> Documento subido </br> en nodos de IPFS </h3>
            <p>El documento es almacenado y distribuido a través de IPFS, que sirve para descentralizar información
                almacenándola en varios nodos de forma simultánea, lo que asegura que esta no
                podrá ser alterada.</p>
            <h4 class="coloryellow">Hash:</h4>

            <h5 class="coloryellow odometer">
                <vue-odometer :value="ipfshash"></vue-odometer>
            </h5>
            <p>Al cargar el archivo, IPFS devuelve al usuario el resumen matemático del documento o un “Hash”. El hash
                será visible para todos en la red pero es imposible deducir el contenido sólo leyéndolo.</p>
        </div>
    </div>
</template>

<script>
    import VueOdometer from 'v-odometer/src'
    export default {
        name: 'Dashboard',
        components: {
            'vue-odometer':VueOdometer
        },
        data(){
            return{
                ipfshash: '35353DFG'
            }
        },
        mounted(){
            setTimeout(()=>{
                this.ipfshash='5464HJK'
            },3000)
        }
    }
</script>

<style scoped>

</style>