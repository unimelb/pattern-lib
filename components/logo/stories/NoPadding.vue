<template>
  <div>
    <logo no-padding/>
  </div>
</template>

<script>
import Logo from '../Logo.vue';
import logo from './logo.md';

export default {
  components: { Logo },
  readme: { custom: logo, source: true, html: true },
};
</script>

<style lang="scss" scoped>

</style>
