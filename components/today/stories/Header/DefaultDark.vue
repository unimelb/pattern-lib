<template>
  <PageHeaderAlt
    title="Short courses and microcredentials"
    introduction="Online, face-to-face and blended study options will help unlock your potential so you can thrive in a continuously evolving world."
    :img="{ src: placeholder }"
    :bg-src="bg"
    dark>
    <template slot="actions">
      <a
        href="#"
        class="btn btn--secondary">
        Browse courses
      </a>
    </template>
  </PageHeaderAlt>
</template>

<script>
import PageHeaderAlt from 'components/header/PageHeaderAlt.vue';

import placeholder from './static/default.jpg';
import bg from './static/bg.jpg';

export default {
  components: {
    PageHeaderAlt,
  },
  readme: { source: true, html: true },
  data() {
    return {
      placeholder,
      bg,
    };
  },
};
</script>
