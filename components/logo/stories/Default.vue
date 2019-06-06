<template>
  <SectionWrap bg-color="white">
    <h1>Small</h1>
    <Logo small/>

    <h1>Medium</h1>
    <Logo medium/>

    <h1>Large</h1>
    <Logo large/>
  </SectionWrap>

</template>

<script>
import Logo from '../Logo.vue';

export default {
  components: { Logo },
  readme: { source: true, html: true },
};
</script>
