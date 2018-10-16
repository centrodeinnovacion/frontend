<template>
  <div>
    <h1>GLOBE</h1>
    <div id="ViewContainer">
      <canvas id="3DView"></canvas>
    </div>
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
        }
      }
    }
  }
</script>