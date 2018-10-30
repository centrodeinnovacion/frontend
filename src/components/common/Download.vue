<template>
    <div class="download">
            <div class="modal" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="downloadModal" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <p><p class="textcenter">Escriba el HASH del documento que desea descargar</p>
                                <input type="text" class="box-download">
                               <div class="d-flex justify-content-center mt-4"> <button type="button" class="btnpink"> Descargar
                            <i class="iconbutton mt-4 pt-2 pl-3 pr-2 icon-download"></i></button></p></div>
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