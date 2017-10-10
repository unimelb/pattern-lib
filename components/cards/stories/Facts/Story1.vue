
<template>
  <section-wrap>
    <div class="listing">
      <list-item class="list-item--desk-1of2"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of2"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of4"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of4"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of4"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of4"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of3"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-2of3"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of1"><card-fact ></card-fact></list-item>
      <list-item class="list-item--desk-1of1"><card-fact ></card-fact></list-item>
    </div>
  </section-wrap>
</template>

<script>
import CardFact from './../../CardFacts.vue';

export default {
  components: { CardFact },
};
</script>
