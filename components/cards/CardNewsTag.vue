<template>
  <GenericCard
    :thumb="thumb"
    :title="title"
    :href="href"
    :excerpt="excerpt"
    :tags="tags"
    :cols="1"
  >
    <slot
      v-for="(_, name) in $slots"
      :name="name"
      :slot="name"/>
  </GenericCard>
</template>

<script>
import GenericCard from './GenericCard.vue';
export default {
  name: 'CardNewsTag',
  components: { GenericCard },
  props: {
    thumb: {
      type: String,
      default: 'https://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '#',
    },
    excerpt: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
