<template>
  <SectionWrap class="bg-alt colour-cycle--alt">
    <div class="grid grid--3col">
      <FocusWrapper
        color="green"
        size="large"
        semi-opaque
        padded>
        <StatsItem
          :icon="icon"
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
  data() {
    return {
      icon: `
<svg role="presentation" focusable="false" width="128" height="128" viewbox="0 0 128 128">
  <path d="M114.38 48.57l-7.75-3.86-3.88-15.4h-3.87V17.7H95l-3.87 15.44L87.25 37l-15.5-7.7 3.88-7.73V17.7H56.25l-3.87 11.6H48.5l-7.75-3.87-3.87 3.86-11.63 19.24L2 56.3v11.56L13.63 91v11.57h7.75l7.75-7.7h11.62v-7.73H64L67.88 91l7.75 3.86v3.85h7.75l3.88 11.6h11.62l3.88-3.84h7.74l7.75-11.57L126 79.42V67.86zm7.75 29.95l-7.23 14.4-6.47 9.65h-7.28l-3.87 3.86h-7.23l-3.88-11.57H79.5v-2.4l-9.32-4.63-4.57-4.54H36.9V91h-9.35l-7.75 7.7h-2.3v-8.6L5.9 66.94v-7.88l21.96-7.3 12.12-20.1 1.56-1.54 6.07 3.02h7.6l3.88-11.57H71.3L66.54 31 88 41.7l6.6-6.58.5-1.97h4.6l3.6 14.23 8.32 4.14 10.5 17.4v9.6z"/>
</svg>
  `,
    };
  },
};
</script>
