<template>
  <SectionWrap class="bg-alt colour-cycle--alt">
    <div class="grid grid--3col">
      <FocusWrapper
        color="green"
        size="lg"
        semi-opaque
        padded>
        <StatsItem
          number="11"
          meta="Graduate employability worldwide"/>
      </FocusWrapper>
    </div>
  </SectionWrap>
</template>

<script>
import FocusWrapper from '../FocusWrapper.vue';
import StatsItem from '../../stats/StatsItem.vue';

export default {
  components: { FocusWrapper, StatsItem },
  readme: { source: true, html: true },
};
</script>
