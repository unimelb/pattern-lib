<template>
  <div class="article-card-list grid grid--lg">
    <CardArticle
      v-for="(item, index) in items"
      :key="index"
      :href="item.href"
      :title="item.title"
      :category="item.category"
      class="article-card-list__item cell cell--lg cell--tab-1of3 shim-mb0 shim-mt0" />
  </div>
</template>

<script>
import CardArticle from './CardArticle.vue';

export default {
  components: {
    CardArticle,
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
