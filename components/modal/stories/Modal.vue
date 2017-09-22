<template>
  <div>
    <button class="btn fr-dialogmodal-open js-fr-dialogmodal-open" aria-controls="modal-1">
      <span class="push-icon">
        Open Dialog
      </span>
    </button>

    <div class="fr-dialogmodal js-fr-dialogmodal fr-dialogmodal--is-ready" id="modal-1" aria-hidden="true">
      <div class="fr-dialogmodal-modal js-fr-dialogmodal-modal" aria-labelledby="modal-1-title" role="dialog">
        <div role="document">
          <slot/>
          <button class="fr-dialogmodal-close js-fr-dialogmodal-close" aria-label="Close Dialog" type="button">
            ✕
          </button>
        </div>
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
