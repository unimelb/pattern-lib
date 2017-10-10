<template>
  <section-wrap>
    <div class="listing listing--four listing--center">
      <list-item><card-link inverted title="Test 1"/></list-item>
      <list-item><card-link inverted title="This is an even Longer title that totally goes over three lines"/></list-item>
      <list-item><card-link inverted title="This is a Longer title over two lines"/></list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardLink from './../../CardLink.vue';

export default {
  components: { CardLink },
};

</script>
