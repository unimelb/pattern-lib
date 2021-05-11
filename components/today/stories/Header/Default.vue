<template>
  <PageHeaderAlt
    title="Effective Leadership Communication"
    :tag="{ text: 'Melbourne MicroCert', href: '#', color: 'red' }"
    introduction="Become an authentic, persuasive and engaging communicator to enhance your effectiveness as a leader."
    :img="{ src: placeholder }">
    <template slot="actions">
      <a
        href="#"
        class="btn btn--cta">
        CTA text
      </a>
    </template>
    <template slot="after">
      Optional additional text
    </template>
  </PageHeaderAlt>
</template>

<script>
import PageHeaderAlt from 'components/header/PageHeaderAlt.vue';

import placeholder from './static/default.jpg';

export default {
  components: {
    PageHeaderAlt,
  },
  readme: { source: true, html: true },
  data() {
    return {
      placeholder,
    };
  },
};
</script>
