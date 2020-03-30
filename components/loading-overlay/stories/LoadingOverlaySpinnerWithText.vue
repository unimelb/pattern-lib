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
import LoadingOverlay from '../LoadingOverlay.vue';
import StoryContent from './StoryContent.vue';

export default {
  name: 'LoadingOverlaySpinnerWithText',
  components: { LoadingOverlay, StoryContent },
};
</script>
