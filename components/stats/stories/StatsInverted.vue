<template>
  <Stats inverted>
    <Stat number="1" meta="in Australia" :icon="icons[0]" icon-viewbox="0 0 128 128" />
    <Stat number="33" meta="in the world" :icon="icons[1]" icon-viewbox="0 0 128 128" />
    <Stat number="11" meta="Graduate employability worldwide" :icon="icons[2]" icon-viewbox="0 0 128 128" />
  </Stats>
</template>

<script>
import Stats from '../Stats.vue';
import Stat from '../Stat.vue';
import ContentBlock from '../../content-block/ContentBlock.vue';
import icons from './icons';

export default {
  components: { Stats, Stat },
  data: () => ({ icons }),
  decorator: ContentBlock,
  decoratorProps: { bg: 'inverted' },
};
</script>

