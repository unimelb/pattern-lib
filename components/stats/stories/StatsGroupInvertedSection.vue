<template>
  <StatsGroup
    inverted
    attribution="Times Higher Education World University Rankings 2016-2017/QS Graduate Employability 2016"
  >
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
