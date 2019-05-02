<template>
  <div>
    <Heading1
      size="xxl"
      text="Heading1"/>
    <Heading1
      size="xl"
      text="Heading1"/>
    <Heading2
      size="lg"
      text="Heading2"/>
    <Heading3
      size="md"
      text="Heading3"/>
    <Heading4
      size="sm"
      text="Heading4"/>
    <Heading5
      size="xs"
      text="Heading5"/>
    <Heading6
      size="xxs"
      text="Heading6"/>
  </div>
</template>

<script>
import headingsDoc from './headings.md';

import Heading1 from '../headings/Heading1.vue';
import Heading2 from '../headings/Heading2.vue';
import Heading3 from '../headings/Heading3.vue';
import Heading4 from '../headings/Heading4.vue';
import Heading5 from '../headings/Heading5.vue';
import Heading6 from '../headings/Heading6.vue';

export default {
  components: {
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
  },
  readme: { custom: headingsDoc, source: true, html: true },
};
</script>
