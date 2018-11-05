<template>
    <div class="dashboard">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <buttons></buttons>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <global></global>
                <!--<searchipfs></searchipfs>-->
                <Notfoundipfs></Notfoundipfs>
                <!--<Notfoundbc></Notfoundbc>-->
                <!--<verify></verify>-->
            </div>
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                <div class="explanation">
                    <!--<DownloadPdf></DownloadPdf>-->
                    <!--<verify_blockchain></verify_blockchain>-->
                    <filenofound></filenofound>
                    <!--<filefound></filefound>-->
                    <!--<div class="scrollbar">-->
                    <!--<div class="force-overflow"></div>-->
                    <!--<upload></upload>-->
                    <!--<uploadipfs></uploadipfs>-->
                    <!--</div>-->
                </div>
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
    import verify from '@/components/common/Searchbc'
    import verify_blockchain from '@/components/common/verify_blockchain'
    import Searchipfs from '@/components/common/Searchipfs'
    import Filenofound from '@/components/common/Filenofound'
    import Filefound from '@/components/common/Filefound'
    import DownloadPdf from '@/components/common/DownloadPdf'
    import Notfoundbc from '@/components/common/Notfoundbc'
    import Notfoundipfs from '@/components/common/Notfoundipfs'

    export default {
        name: 'Dashboard',
        components: {
            Buttons,
            Global,
            Upload,
            Uploadipfs,
            Download,
            verify,
            verify_blockchain,
            Searchipfs,
            Filenofound,
            Filefound,
            DownloadPdf,
            Notfoundbc,
            Notfoundipfs
        }
    }
</script>
