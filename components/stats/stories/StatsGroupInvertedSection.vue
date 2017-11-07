<template>
  <StatsGroup
    inverted
    attribution="Times Higher Education World University Rankings 2016-2017/QS Graduate Employability 2016"
  >
    <StatsItem number="1" meta="in Australia" :icon="icons[0]" icon-viewbox="0 0 128 128" />
    <StatsItem number="33" meta="in the world" :icon="icons[1]" icon-viewbox="0 0 128 128" />
    <StatsItem number="11" meta="Graduate employability worldwide" :icon="icons[2]" icon-viewbox="0 0 128 128" />
  </StatsGroup>
</template>

<script>
import StatsGroup from '../StatsGroup.vue';
import StatsItem from '../StatsItem.vue';
import SectionWrap from '../../section/SectionWrap.vue';
import icons from './icons';

export default {
  components: { SectionWrap, StatsGroup, StatsItem },
  data: () => ({ icons }),
  decorator: SectionWrap,
  decoratorProps: { bgColor: 'inverted' },
  readme: { decorated: true },
};
</script>

