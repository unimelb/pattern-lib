<template>
  <div class="contact-card">
    <iframe
      v-if="withMap"
      class="contact-card__map"
      width="100%"
      height="450"
      frameborder="0"
      src="https://maps.unimelb.edu.au/parkville/building/152?SQ_DESIGN_NAME=plain"
    >
      <a href='https://maps.unimelb.edu.au/parkville/building/152'>Raymond Priestley</a>
    </iframe>
    <div class="contact-card__lower grid">
      <div class="cell cell--desk-1of3" v-for="n in columns-0" :key="n" v-html="content[n-1]"></div>
    </div>
  </div>
</template>

<script>
import content from './content';

export default {
  props: {
    columns: Number,
    withMap: Boolean,
  },
  data: () => ({
    content,
  }),
};
</script>
