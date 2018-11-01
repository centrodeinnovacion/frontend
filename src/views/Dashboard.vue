<template>
    <div class="dashboard">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <buttons></buttons>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <global></global>
                <!--<verify></verify>-->
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <uploadipfs></uploadipfs>
              <upload></upload>
                <!--<verifyBlockchain></verifyBlockchain>-->
            </div>
        </div>
        <div class="row download">
            <div>
                <download></download>
            </div>
        </div>
    </div>
</template>

<script>
    import Buttons from '@/components/menus/Buttons'
    import Global from '@/components/common/Global'
    import Upload from '@/components/common/Upload'
    import Download from '@/components/common/Download'
    import Uploadipfs from '@/components/common/Uploadipfs'
    import Verify from '@/components/common/Verify'
    import VerifyBlockchain from '@/components/common/VerifyBlockchain'

    export default {
        name: 'Dashboard',
        components: {
            Buttons,
            Global,
            Upload,
            Uploadipfs,
            Download,
            Verify,
            VerifyBlockchain
        }
    }
</script>
