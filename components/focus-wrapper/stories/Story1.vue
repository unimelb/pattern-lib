<template>
  <SectionWrap sm>
    <FocusWrapper>
      <div class="placeholder"/>
    </FocusWrapper>
  </SectionWrap>
</template>

<script>
import FocusWrapper from '../FocusWrapper.vue';
import SectionWrap from '../../section/SectionWrap.vue';

export default {
  components: { FocusWrapper, SectionWrap },
  readme: { source: true, html: true },
};
</script>

<style>
.placeholder {
  height: 80px;
  width: 100%;
  background: #fff;
}
</style>
