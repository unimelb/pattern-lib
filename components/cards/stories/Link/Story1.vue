<template>
  <section-wrap>
    <div class="listing listing--four listing--center">
      <list-item><card-link inverted title="Test 1" /></list-item>
      <list-item><card-link inverted title="Test 2" /></list-item>
      <list-item><card-link inverted title="Test 3" /></list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardLink from './../../CardLink.vue';

export default {
  components: { CardLink },
};

</script>
