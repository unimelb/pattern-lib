<template>
  <PageHeaderAlt
    title="Short courses and microcredentials"
    introduction="Online, face-to-face and blended study options will help unlock your potential so you can thrive in a continuously evolving world."
    :img="{ src: placeholder }"
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
