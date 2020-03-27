<template>
  <GenericCard
    :thumb="thumb"
    :title="title"
    :href="href"
    :excerpt="excerpt"
    :tags="tags"
    :cols="cols">
    <slot
      v-for="(_, name) in $slots"
      :slot="name"
      :name="name" />
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
    cols: {
      type: Number,
      default: 1,
      validator: (value) => {
        const maxColumns = 3;

        return value && value <= maxColumns;
      },
    },
  },
};
</script>
