<template>
    <div class="verify mx-auto fixed-top">
        <div class="hash odometer firsthash""><vue-odometer :value="ipfshash"></vue-odometer><i class="fas fa-thumbs-up"></i></div>
    <div class="hash odometer secondhash"><vue-odometer :value="ipfshash"></vue-odometer><i class="fas fa-thumbs-up"></i></div>
        <div class="line1 mx-auto fixed-top">
            <svg width="650px" height="650px"  viewBox="0 0 1000 1000" enable-background="new 0 0 340 333" xml:space="preserve">
            <path class="path" fill="transparent" stroke="#37F6D5" stroke-width="2" d="M 400,500 L 100,500 M 400,500 C 150,380 150,400 150,400 M 400,500 L 200,300 M 400,500 L 300,250 M 400,500 L 400,200
            M 400,500 L 500,250 M 400,500 L 600,300 M 400,500 L 650,400 M 400,500 L 700,500 M 400,500 L 650,600 M 400,500 L 600,700 M 400,500 L 500,750 M 400,500 L 400,800 M 400,500 L 300,750 M 400,500 L 200,700 M 400,500 L 100,600"/>
        </svg>
        </div>
    <div class="hashbig"><p class="linebottom">HASH</p><h5 class="coloryellow">548963524</h5></div>
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