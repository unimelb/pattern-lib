<template>
  <StatsGroup inverted>
    <StatsItem number="1" meta="in Australia" :icon="icons[0]" />
    <StatsItem number="33" meta="in the world" :icon="icons[1]" />
    <StatsItem number="11" meta="Graduate employability worldwide" :icon="icons[2]" />
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
  decoratorProps: { bg: 'inverted' },
};
</script>

