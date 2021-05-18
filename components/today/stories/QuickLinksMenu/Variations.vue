<template>
  <div>
    <h2 class="heading-xxs">
      With search query
    </h2>
    <QuickLinksAlt
      :items="items"
      search-query="Acc"
      class="shim-mb2" />
    <h2 class="heading-xxs">
      Full width - use when component stretches to edge of screen
    </h2>
    <QuickLinksAlt
      :items="items"
      full-width
      class="shim-mb2" />
    <h2 class="heading-xxs">
      No inset - no horizontal padding when used on a <code>grey-light</code> background
    </h2>
    <div class="max bg-grey-light shim-pt1 shim-pb1 shim-mb2">
      <QuickLinksAlt
        :items="items"
        no-inset />
    </div>
    <h2 class="heading-xxs">
      Border bottom - include border on last item
    </h2>
    <QuickLinksAlt
      :items="items"
      border-bottom
      class="shim-mb2" />
  </div>
</template>

<script>
import QuickLinksAlt from 'components/quick-links-menu/QuickLinksAlt.vue';
import ContentBlock from 'components/content-block/ContentBlock.vue';
import quickLinksAltDocs from './quick-links-alt.md';

export default {
  components: { QuickLinksAlt },
  readme: { custom: quickLinksAltDocs, source: true, html: true },
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
        title: item,
        href: '#',
      }));
    },
  },
};
</script>
