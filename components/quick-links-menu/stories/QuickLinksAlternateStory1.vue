<template>
  <SectionWrap class="bg-white">
    <QuickLinks :menu-links="menuLinks" level="2">
      <div slot="content">
        <h2>Learning and teaching</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium quam voluptatem qui minus, amet quidem facilis non commodi, distinctio dolore aperiam illum ut libero ad maxime dicta iure deleniti.</p>
        <ButtonIcon icon="chevron-right" class="btn--xwide">Read more</ButtonIcon>
      </div>
      <h3 slot="menu-header">Explore growing esteem</h3>
    </QuickLinks>
  </SectionWrap>
</template>

<script>
import QuickLinks from '../QuickLinks.vue';

export default {
  components: { QuickLinks },
  data() {
    return {
      menuLinks: [
        {
          title: 'Strategy and governance',
          href: '#',
        },
        {
          title: 'Leadership',
          href: '#',
        },
        {
          title: 'Working with us',
          href: '#',
        },
        {
          title: 'News and resources',
          href: '#',
        },
      ],
    };
  },
};
</script>
