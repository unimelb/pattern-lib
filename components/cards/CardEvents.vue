<template>
  <GenericCard
    :thumb="thumb"
    :title="title"
    :href="href"
    :excerpt="excerpt"
    :cols="1"
    :class-name="'card--events ' + className">
    <slot
      v-for="(_, name) in $slots"
      :slot="name"
      :name="name" />
  </GenericCard>
</template>

<script>
import GenericCard from './GenericCard.vue';
export default {
  name: 'CardEvents',
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
  },
};
</script>
