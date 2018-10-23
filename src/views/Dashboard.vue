<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-3 col-xs-12">
        <buttons></buttons>
      </div>

      <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12">
        <global></global>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
        <upload></upload>
      </div>
    </div>
    <div class="row download">
      <div>
        <!--<download></download>-->
      </div>
    </div>

  </div>
  </div>
</template>

<script>
  import Buttons from '@/components/menus/Buttons'
  import Global from '@/components/common/Global'
  import Upload from '@/components/common/Upload'
  import Download from '@/components/common/Download'

  export default {
    name: 'Dashboard',
    components: {
      Buttons,
      Global,
      Upload,
      Download
    }
  }
</script>
