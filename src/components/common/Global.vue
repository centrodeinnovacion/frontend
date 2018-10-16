<template>
    <div>
        <canvas width="100%" id="3DView"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'Global',
        data () {
            return {
                options: {
                    globeBackColor: '#396A92aa',
                    globeFrontColor: '#9AB4CBbb',
                    globeLinesColor: '#00000044',
                    
                    rotationIdleSpeedFactor: 10.0,
                    rotationSpeedFactor: 1.5,
                    wave: false
                },
                globe: null
            }
        },
        methods:{
            init (){
                this.globe = new Globe(document.getElementById("3DView"), this.options)
            }
        },
        mounted () {
            this.init()
        }
    }
</script>