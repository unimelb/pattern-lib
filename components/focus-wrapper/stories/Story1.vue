<template>
  <FocusWrapper
    color="pink"
    size="small"
    semi-opaque
  >
    <p>any content to wrap goes here...</p>
  </FocusWrapper>
</template>

<script>
import { codeBlock } from '../../../.storybook/utils';
import FocusWrapper from '../FocusWrapper.vue';

const markup = codeBlock(`
  <FocusWrapper
    color="one of ['navy', 'teal', 'yellow', 'emerald', 'orange', 'green', 'purple', 'pink']"
    size="one of ['small', 'medium', 'large']"
    semi-opaque="if added component will be with opacity 33%"
  >
    <p>any content to wrap goes here...</p>
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
