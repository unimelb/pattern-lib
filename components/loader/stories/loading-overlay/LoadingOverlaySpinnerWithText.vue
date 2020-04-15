<template>
  <div>
    <LoadingOverlay
      :is-loading="true"
      spinner-text="Fetching results">
      <StoryContent />
    </LoadingOverlay>
  </div>
</template>

<script>
import LoadingOverlay from '../../LoadingOverlay.vue';
import StoryContent from './StoryContent.vue';
import loadingOverlaySpinnerWithText from './loadingOverlaySpinnerWithText.md';

export default {
  readme: { custom: loadingOverlaySpinnerWithText, source: false, html: true },
  name: 'LoadingOverlaySpinnerWithText',
  components: { LoadingOverlay, StoryContent },
};
</script>
