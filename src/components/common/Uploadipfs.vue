<template>
    <div class="upload d-flex align-items-start mt-6">
            <div class="colorgreen">
                <i class="fas fa-layer-group"></i>
            </div>
            <div class="pl-6">
            <h3 class="colorgreen">Transacción deIPFS a Blockchain</h3>
            <p> El documento es transferido de IPFS a nodos en la red de Blockchain de Ethereum.</p>
            <h4 class="colorgreen">Hash:</h4>
            <h5 class="colorgreen odometer">EET3490IO</h5>
            <p class="pb-5"> Blockchain devuelve al usuario un hash que indentifica la transacción. </p>
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