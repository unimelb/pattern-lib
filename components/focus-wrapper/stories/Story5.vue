<template>
  <SectionWrap small>
    <FocusWrapper
      semi-opaque
      padded
      class="bg-white"
    />
  </SectionWrap>
</template>

<script>
import { codeBlock } from '../../../.storybook/utils';
import FocusWrapper from '../FocusWrapper.vue';

const markup = codeBlock(`
  <FocusWrapper semi-opaque>
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
