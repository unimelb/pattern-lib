<template>
  <Tags :data="tags"/>
</template>

<script>
import Tags from '../Tags.vue';
import SectionWrap from '../../section/SectionWrap.vue';
import tags from './tags.md';

export default {
  components: { Tags, SectionWrap },
  readme: { custom: tags, source: true, html: false },
  data() {
    return {
      tags: [{
        href: 'https://www.unimelb.edu.au/',
        value: 'tag1',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag2',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag3',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag4',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag5',
      },
      {
        href: 'https://www.unimelb.edu.au/',
        value: 'tag super hiper ultra mega long',
      }],
    };
  },
};
</script>
