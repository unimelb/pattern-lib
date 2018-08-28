<template>
  <a
    :href="href"
    class="btn-owner card card--stafflist card--bdr-blue bg-white">
    <div
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb"/>
    <div class="card__inner ">
      <div class="card__header">{{ meta }}</div>
      <div class="card__meta">{{ title }}</div>
    </div>
  </a>
</template>

<script>

export default {
  props: {
    thumb: {
      type: String,
      default: 'https://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    meta: {
      type: String,
      default: 'Test title',
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
