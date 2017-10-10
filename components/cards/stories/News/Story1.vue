<template>
  <section-wrap class="bg-alt">
    <div class="listing listing--three">
      <list-item><card-news title="Test 1"/></list-item>
      <list-item><card-news title="Test 2"/></list-item>
      <list-item><card-news title="Test 3"/></list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardNews from './../../CardNews.vue';

export default {
  components: { CardNews },
};

</script>
