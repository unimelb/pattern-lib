<template>
  <section-wrap>
    <div class="listing listing--four listing--center">
      <list-item><card-link title="Test 1"></card-link></list-item>
      <list-item><card-link title="Test 2"></card-link></list-item>
      <list-item><card-link title="Test 3"></card-link></list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardLink from './../../CardLink.vue';

export default {
  components: { CardLink },
};

</script>
