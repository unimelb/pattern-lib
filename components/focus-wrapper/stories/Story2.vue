<template>
  <SectionWrap class="bg-alt colour-cycle--alt">
    <div class="grid grid--3col">
      <FocusWrapper
        color="green"
        size="large"
        semi-opaque
      >
        <StatsItem
          icon="no icon"
          number="11"
          meta="Graduate employability worldwide" />
      </FocusWrapper>
    </div>
  </SectionWrap>
</template>

<script>

import FocusWrapper from '../FocusWrapper.vue';
import StatsItem from '../../stats/StatsItem.vue';
import { codeBlock } from '../../../.storybook/utils';

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
  components: { FocusWrapper, StatsItem },
  readme: { custom: markup, source: false },
};
</script>
