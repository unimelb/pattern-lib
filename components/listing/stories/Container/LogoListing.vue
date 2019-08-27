<template>
  <LogoListing :data="sample"/>
</template>

<script>
import LogoListing from '../../LogoListing.vue';
import sample from '../../sample.json';

export default {
  components: { LogoListing },
  readme: { source: true, html: false },
  data() {
    return {
      sample,
    };
  },
};
</script>
