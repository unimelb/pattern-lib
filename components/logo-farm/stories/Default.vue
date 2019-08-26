<template>
  <LogoFarm :data="sample"/>
</template>

<script>
import LogoFarm from '../LogoFarm.vue';
import sample from '../sample.json';

export default {
  components: { LogoFarm },
  readme: { source: true, html: false },
  data() {
    return {
      sample,
    };
  },
};
</script>
