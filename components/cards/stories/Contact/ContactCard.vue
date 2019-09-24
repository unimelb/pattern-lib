<template>
  <div class="contact-card">
    <iframe
      v-if="withMap"
      class="contact-card__map"
      width="100%"
      height="450"
      frameborder="0"
      src="https://maps.unimelb.edu.au/parkville/building/152?SQ_DESIGN_NAME=plain&borderwidth=0"
    >
      <a href='https://maps.unimelb.edu.au/parkville/building/152'>Raymond Priestley</a>
    </iframe>
    <div class="contact-card__lower">
      <div
        v-for="n in columns-0"
        :key="n"
        class="contact-card__col1_3"
        v-html="content[n-1]"
      />
    </div>
  </div>
</template>

<script>
import content from './content';

export default {
  props: {
    columns: {
      type: Number,
      default: 1,
    },
    withMap: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    content,
  }),
};
</script>
