<template>
  <StatsGroup>
    <StatsItem
      :icon="icons[0]"
      number="1"
      meta="in Australia" />
    <StatsItem
      :icon="icons[1]"
      number="33"
      meta="in the world" />
    <StatsItem
      :icon="icons[2]"
      number="11"
      meta="Graduate employability worldwide" />
  </StatsGroup>
</template>

<script>
import StatsGroup from '../StatsGroup.vue';
import StatsItem from '../StatsItem.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';
import icons from './icons';

export default {
  components: { StatsGroup, StatsItem },
  data: () => ({ icons }),
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
  readme: { source: true, html: true },
};
</script>
