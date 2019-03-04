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
import { codeBlock } from '../../../.storybook/utils';
import FocusWrapper from '../FocusWrapper.vue';

const markup = codeBlock(`
  <FocusWrapper padded>
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
