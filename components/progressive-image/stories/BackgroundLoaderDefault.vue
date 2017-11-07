<template>
  <SectionWrap small progressive bg-image="https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg">
    <CardFocusBox>
      <h3 class="heading-section">Heading</h3>
      <p>Rem minus et modi laborum. Maxime modi consequatur ut voluptas qui quidem voluptatum et. Veritatis excepturi velit repellat iusto consequatur ut et labore.</p>
    </CardFocusBox>
  </SectionWrap>
</template>
<script>
import SectionWrap from '../../section/SectionWrap.vue';
import CardFocusBox from '../../cards/CardFocusBox.vue';
import progressiveBgDocs from './progressive-bg-docs.md';

export default {
  components: { SectionWrap, CardFocusBox },
  readme: {
    custom: progressiveBgDocs,
    html: true,
  },
};
</script>
