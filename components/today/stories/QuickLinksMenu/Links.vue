<template>
  <QuickLinksAlt :items="items" />
</template>

<script>
import QuickLinksAlt from 'components/quick-links-menu/QuickLinksAlt.vue';
import ContentBlock from 'components/content-block/ContentBlock.vue';

export default {
  components: { QuickLinksAlt },
  readme: { source: true, html: true },
  decorator: ContentBlock,
  decoratorProps: { size: 'sml' },
  data() {
    return {
      items: [
        {
          title: 'Start your application',
          href: '#',
        },
        {
          title: 'Explore scholarships',
          href: '#',
        },
        {
          title: 'Find accommodation',
          href: '#',
        },
        {
          title: 'Alternate pathways to Melbourne University',
          href: '#',
        },
      ],
    };
  },
};
</script>
