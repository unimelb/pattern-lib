<template>
  <div class="fr-dialogmodal js-fr-dialogmodal fr-dialogmodal--is-ready" id="modal-1" aria-hidden="true">
    <div class="fr-dialogmodal-modal js-fr-dialogmodal-modal" aria-labelledby="modal-1-title" role="dialog">
      <div role="document">

        <slot/>

        <button class="fr-dialogmodal-close js-fr-dialogmodal-close" aria-label="Close Dialog" type="button">&#x2715;</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Frdialogmodal from 'fr-dialogmodal';

  export default {
    name: 'Modal',
    mounted: () => {
      var myModal = Frdialogmodal();
    }
  }
</script>
