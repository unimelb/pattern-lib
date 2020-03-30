<template>
  <div>
    <LoadingOverlay :is-loading="isLoading">
      <StoryContent />
    </LoadingOverlay>

    <button @click.prevent="isLoading = !isLoading">
      toggle
    </button>
  </div>
</template>

<script>
import LoadingOverlay from '../LoadingOverlay.vue';
import StoryContent from './StoryContent.vue';

export default {
  name: 'LoadingOverlayDefault',
  components: { LoadingOverlay, StoryContent },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
