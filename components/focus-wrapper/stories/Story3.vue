<template>
  <SectionWrap sm>
    <FocusWrapper
      size="sm"
      padded
      class="bg-white"/>

    <br>

    <FocusWrapper
      size="md"
      padded
      class="bg-white"/>

    <br>

    <FocusWrapper
      size="lg"
      padded
      class="bg-white"/>
  </SectionWrap>
</template>

<script>
import FocusWrapper from '../FocusWrapper.vue';

export default {
  components: { FocusWrapper },
  readme: { source: true, html: true },
};
</script>
