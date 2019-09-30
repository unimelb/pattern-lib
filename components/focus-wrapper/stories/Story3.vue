<template>
  <SectionWrap small>
    <FocusWrapper
      size="small"
      padded
      class="bg-white" />

    <br>

    <FocusWrapper
      size="medium"
      padded
      class="bg-white" />

    <br>

    <FocusWrapper
      size="large"
      padded
      class="bg-white" />
  </SectionWrap>
</template>

<script>
import FocusWrapper from '../FocusWrapper.vue';

export default {
  components: { FocusWrapper },
  readme: { source: true, html: true },
};
</script>
