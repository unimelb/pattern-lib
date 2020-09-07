<template>
  <div
    v-if="isLoading"
    class="loader">
    <Spinner />
  </div>
  <div v-else>
    <slot />
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  name: 'Loader',
  components: { Spinner },
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
