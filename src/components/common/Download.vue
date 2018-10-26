<template>
    <div class="download">
            <div class="modal" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="downloadModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div><p class="textcenter">Escriba el HASH del documento que desea descargar</p>
                                <input type="text" class="box-download">
                                <button type="button" class="btnpink"> Descargar
                                    <i class="icon-download icon-download-pink"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Download"
    }
</script>

<style scoped>

</style>