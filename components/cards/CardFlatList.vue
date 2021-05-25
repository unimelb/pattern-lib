<template>
  <div class="card-flat-list grid grid--lg">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="cell cell--lg cell--tab-1of2 card-flat-list__item">
      <CardFlat
        v-bind="item" />
    </div>
  </div>
</template>

<script>
import CardFlat from './CardFlat.vue';

export default {
  components: {
    CardFlat,
  },
  props: {
    items: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
};
</script>
