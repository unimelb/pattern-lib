<template>
  <SectionWrap bg-color="inverted">
    <Stats
      inverted
      attribution="Times Higher Education World University Rankings 2016-2017/QS Graduate Employability 2016"
    >
      <Stat number="1" meta="in Australia" :icon="icons[0]" icon-viewbox="0 0 128 128" />
      <Stat number="33" meta="in the world" :icon="icons[1]" icon-viewbox="0 0 128 128" />
      <Stat number="11" meta="Graduate employability worldwide" :icon="icons[2]" icon-viewbox="0 0 128 128" />
    </Stats>
  </SectionWrap>
</template>

<script>
import Stats from '../Stats.vue';
import Stat from '../Stat.vue';
import SectionWrap from '../../section/SectionWrap.vue';
import icons from './icons';

export default {
  components: { SectionWrap, Stats, Stat },
  data: () => ({ icons }),
};
</script>

