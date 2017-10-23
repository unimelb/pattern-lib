<template>
  <SectionWrap class="bg-white">
    <QuickLinks level="ql-menu--l2">
      <div slot="content">
        <h2>Learning and teaching</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur praesentium quam voluptatem qui minus, amet quidem facilis non commodi, distinctio dolore aperiam illum ut libero ad maxime dicta iure deleniti.</p>
        <ButtonIcon icon="chevron-right" class="btn--xwide">Read more</ButtonIcon>
      </div>
      <h3>Explore growing esteem</h3>
      <QuickLinksMenuItem href="#" v-for="item in menuLinks" :key="item" v-html="item" />
    </QuickLinks>
  </SectionWrap>
</template>

<script>
import QuickLinks from './QuickLinks.vue';
import QuickLinksMenuItem from './QuickLinksMenuItem.vue';

export default {
  components: { QuickLinks, QuickLinksMenuItem },
  data() {
    return {
      menuLinks: [
        'Strategy and governance',
        'Leadership',
        'Working with us',
        'News and resources',
        'Campus and maps',
      ],
    };
  },
};
</script>
