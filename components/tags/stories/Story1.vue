<template>
  <Tags :data="tags"/>
</template>

<script>
import Tags from '../Tags.vue';
import SectionWrap from '../../section/SectionWrap.vue';

export default {
  components: { Tags, SectionWrap },
  readme: { source: true, html: true },
  data() {
    return {
      tags: ['php', 'ruby', 'javascript', 'python', 'java', 'c#', 'scala', 'closure'],
    };
  },
};
</script>
