<template>
    <div id="app" class="container">
        <home></home>
        <!--<router-view/>-->
    </div>
</template>

<script>
    import Home from "./views/Home";
    export default {
        components: {
            Home
        }
    }
</script>

<style lang="scss">
    @import "assets/styles/styles";
</style>
