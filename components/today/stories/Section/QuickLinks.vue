<template>
  <SectionImage
    :img="{ src: 'https://via.placeholder.com/800x800', alt: 'Placeholder image' }">
    <h2
      class="heading-md shim-mb2"
      style="max-width: 15rem;">
      Get started with Melbourne
    </h2>
    <nav aria-label="Get started with Melbourne">
      <QuickLinksAlt
        :items="links"
        class="shim-mb1"
        no-inset />
    </nav>
  </SectionImage>
</template>

<script>
import SectionImage from 'components/section/SectionImage.vue';
import QuickLinksAlt from 'components/quick-links-menu/QuickLinksAlt.vue';
import SectionImageMd from './SectionImage.md';

export default {
  components: { SectionImage, QuickLinksAlt },
  readme: { custom: SectionImageMd, html: true, source: true },
  data() {
    return {
      links: [
        { title: 'Start your application', href: '#' },
        { title: 'Explore scholarships', href: '#' },
        { title: 'Find accommodation', href: '#' },
        { title: 'Alternate pathways to Melbourne University', href: '#' },
      ],
    };
  },
};
</script>
