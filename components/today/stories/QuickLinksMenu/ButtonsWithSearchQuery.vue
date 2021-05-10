<template>
  <QuickLinksAlt
    :items="items"
    border-bottom
    search-query="Acc" />
</template>

<script>
import QuickLinksAlt from 'components/quick-links-menu/QuickLinksAlt.vue';
import ContentBlock from 'components/content-block/ContentBlock.vue';

export default {
  components: { QuickLinksAlt },
  readme: { source: true, html: true },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
  computed: {
    items() {
      return [
        'Accounting',
        'Actuarial studies',
        'Agricultural sciences',
        'Architectural engineering',
        'Architecture',
        'Architecture, building, planning and design',
        'Arts and culture',
      ].map((item) => ({
        action: () => console.log(item), // eslint-disable-line no-console
        title: item,
        preview: 'Quick view',
      }));
    },
  },
};
</script>
