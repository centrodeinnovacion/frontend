<template>
    <div class="alignicon2 upload align-middle">
        <div class="alingnicon">
            <div class="sizeicon colorgreen">
                <i class="fas fa-layer-group"></i>
            </div>
            <h3 class="colorgreen">Transacción de </br>IPFS a Blockchain</h3>
            <p> El documento es transferido de IPFS a nodos en la red de Blockchain de Ethereum.</p>
            <h4 class="colorgreen">Hash:</h4>
            <h5 class="colorgreen odometer">EET3490IO</h5>
            <p> Blockchain devuelve al usuario un hash que indentifica la transacción. </p>
        </div>

    </div>


</template>

<script>
    setTimeout(function(){
        odometer.innerHTML = 5555;
    }, 1000);
export default {
        name: "Uploadipfs"
    }
</script>

<style scoped>

</style>