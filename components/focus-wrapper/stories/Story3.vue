<template>
  <SectionWrap small>
    <FocusWrapper
      size="small"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      size="medium"
      padded
      class="bg-white"
    />

    <br>

    <FocusWrapper
      size="large"
      padded
      class="bg-white"
    />
  </SectionWrap>
</template>

<script>
import { codeBlock } from '../../../.storybook/utils';
import FocusWrapper from '../FocusWrapper.vue';

const markup = codeBlock(`
  <FocusWrapper size="small">
    ...
  </FocusWrapper>

  <FocusWrapper size="medium">
    ...
  </FocusWrapper>

  <FocusWrapper size="large">
    ...
  </FocusWrapper>
`);

export default {
  components: { FocusWrapper },
  readme: {
    custom: markup,
    source: false,
  },
};
</script>
