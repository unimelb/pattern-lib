<template>
  <PageHeaderHome
    title="Effective Leadership Communication"
    introduction="Become an authentic, persuasive and engaging communicator to enhance your effectiveness as a leader."
    :img="{ src: placeholder, alt: 'Business leaders at a conference' }"
    :bg-src="placeholderBg" />
</template>

<script>
import PageHeaderHome from 'components/header/PageHeaderHome.vue';

import placeholderBg from './static/hero-bg.jpg';
import placeholder from './static/hero-feature.png';

import Docs from './page-header-home.md';

export default {
  components: {
    PageHeaderHome,
  },
  readme: {
    custom: Docs,
    source: true,
    html: false,
  },
  data() {
    return {
      placeholder,
      placeholderBg,
    };
  },
};
</script>
