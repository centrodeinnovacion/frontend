<template>
    <div class="verify mx-auto fixed-top">
        <div class="hash odometer firsthash""><vue-odometer :value="ipfshash"></vue-odometer><i class="fas fa-thumbs-up"></i></div>
    <div class="hash odometer secondhash""><vue-odometer :value="ipfshash"></vue-odometer><i class="fas fa-thumbs-up"></i></div>
        <div class="hashbig"><h5 class="coloryellow">548963524</h5></div>
        <div class="line1 mx-auto fixed-top">
            <svg width="650px" height="650px"  viewBox="0 0 1000 1000" enable-background="new 0 0 340 333" xml:space="preserve">

            <path class="path" fill="transparent" stroke="#37F6D5" stroke-width="2" d="M 350 420 C 350,230 180,230 180,230  M 410 420 C 440,220 510,180 510,180 M 350 520 C 350,650 180,730 180,730"/>
        </svg>
        </div>
    </div>
</template>


<script>
    import VueOdometer from 'v-odometer/src'
    export default {
        name: 'verify',
        components: {
            'vue-odometer':VueOdometer
        },
        data(){
            return{
                ipfshash: '35353'
            }
        },
        mounted(){
            setTimeout(()=>{
                this.ipfshash='548963524'
            },2000)
        }
    }
</script>

<style scoped>

</style>