<template>
  <SectionWrap small>
    <FocusWrapper>
      <div class="placeholder"/>
    </FocusWrapper>
  </SectionWrap>
</template>

<script>
import { codeBlock } from '../../../.storybook/utils';
import FocusWrapper from '../FocusWrapper.vue';
import SectionWrap from '../../section/SectionWrap.vue';

const markup = codeBlock(`
  <FocusWrapper>
    ...
  </FocusWrapper>
`);

export default {
  components: { FocusWrapper, SectionWrap },
  readme: {
    custom: markup,
    source: false,
  },
};
</script>

<style>
  .placeholder {
    height: 80px;
    width: 100%;
    background: #fff;
  }
</style>
