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
import LoadingOverlay from '../LoadingOverlay.vue';
import StoryContent from './StoryContent.vue';

export default {
  name: 'LoadingOverlayDefault',
  components: { LoadingOverlay, StoryContent },
};
</script>
