<template>
    <div class="dashboard">
        <div class="row">
            <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
               <buttons></buttons>
            </div>

            <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                <xxx></xxx>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                <upload></upload>
            </div>

        </div>
        <div class="row download">
            <div class="col-12 mx-auto">
                <download></download>
            </div>
        </div>
    </div>
</template>

<script>
    import Buttons from '@/components/menus/Buttons'
    import xxx from '@/components/common/xxx'
    import Upload from '@/components/common/Upload'
    import Download from '@/components/common/Download'
    export default {
        name: 'Dashboard',
        components: {
            Buttons,
            xxx,
            Upload,
            Download
        }
    }
</script>

<style scoped>

</style>