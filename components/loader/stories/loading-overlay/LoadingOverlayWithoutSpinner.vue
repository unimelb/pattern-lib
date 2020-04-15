<template>
  <div>
    <LoadingOverlay
      :is-loading="true"
      :is-spinner-visible="false">
      <StoryContent />
    </LoadingOverlay>
  </div>
</template>

<script>
import LoadingOverlay from '../../LoadingOverlay.vue';
import StoryContent from './StoryContent.vue';
import loadingOverlayWithoutSpinner from './loadingOverlayWithoutSpinner.md';

export default {
  readme: { custom: loadingOverlayWithoutSpinner, source: false, html: true },
  name: 'LoadingOverlayDefault',
  components: { LoadingOverlay, StoryContent },
};
</script>
