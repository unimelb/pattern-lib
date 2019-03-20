<template>
  <SectionWrap class="bg-alt colour-cycle--alt">
    <div class="grid grid--3col">
      <FocusWrapper
        color="green"
        size="large"
        semi-opaque
        padded
      >
        <StatsItem
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
  <FocusWrapper>
    <StatsItem
      number="11"
      meta="Graduate employability worldwide" />
  </FocusWrapper>
`);

export default {
  components: { FocusWrapper, StatsItem },
  readme: { custom: markup, source: false },
};
</script>
