<template>
  <a
    :href="href"
    class="btn-owner card card--generic">
    <div
      v-if="cols !== 1"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb card__thumb--zoom"/>
    <div class="card__inner ">
      <h3 class="card__header">{{ title }}</h3>
      <div class="card__sub-title">
        <slot name="sub-title"/>
      </div>
      <div
        v-if="meta"
        class="card__meta">{{ meta }}</div>
      <div class="card__excerpt">{{ excerpt }}</div>
    </div>
    <div
      v-if="cols !== 1"
      class="card__footer"/>
  </a>
</template>

<script>

export default {
  name: 'GenericCard',
  props: {
    thumb: {
      type: String,
      default: 'https://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: '',
    },
    meta: {
      type: String,
      default: '',
    },
    cols: {
      type: Number,
      default: 3,
    },
    href: {
      type: String,
      default: '#',
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
  },
};

</script>
