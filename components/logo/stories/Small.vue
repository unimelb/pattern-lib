<template>
  <SectionWrap bg-color="white">
    <h1>Small</h1>
    <Logo small/>
  </SectionWrap>

</template>

<script>
import Logo from '../Logo.vue';

export default {
  components: { Logo },
  readme: { source: true, html: true },
};
</script>
