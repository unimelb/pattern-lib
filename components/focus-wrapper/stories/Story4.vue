<template>
  <SectionWrap small>
    <FocusWrapper
      padded
      class="bg-white"
    >
      <p>Padded Content</p>
    </FocusWrapper>
  </SectionWrap>
</template>

<script>
import FocusWrapper from '../FocusWrapper.vue';

export default {
  components: { FocusWrapper },
  readme: { source: true, html: true },
};
</script>
