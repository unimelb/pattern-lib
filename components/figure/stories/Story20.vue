<template>
  <div>
    <h1>Figure Rounded</h1>
    <FigureRounded
      background-image="http://lorempixel.com/640/480/people"
      aria-label="test aria label" />
  </div>
</template>

<script>
import FigureRounded from '../FigureRounded.vue';

export default {
  components: { FigureRounded },
  readme: { html: true, source: true },
};
</script>
