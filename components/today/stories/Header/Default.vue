<template>
  <PageHeaderAlt
    title="Effective Leadership Communication"
    :tag="{ text: 'Melbourne MicroCert', href: '#', color: 'red' }"
    introduction="Become an authentic, persuasive and engaging communicator to enhance your effectiveness as a leader."
    :img="{ src: placeholder, alt: 'Business leaders at a conference' }">
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
import pageHeaderAltReadme from './page-header-alt.md';

export default {
  components: {
    PageHeaderAlt,
  },
  readme: {
    custom: pageHeaderAltReadme,
    source: true,
    html: false,
    replace: {
      '<div class="page-header-alt__img-inner progressive-image" style="max-width: 100%;"><span><canvas width="1" height="1" class="progressive-image-canvas"></canvas> <div class="progressive-image-wrapper"><img alt="" class="progressive-image-main" style="display: none;"> </div></span></div>': `<progressive-image class="page-header-alt__img-inner" no-ratio src="${placeholder}" alt=""></progressive-image>`,
    },
  },
  data() {
    return {
      placeholder,
    };
  },
};
</script>
