<template>
  <a :href="href" class="btn-owner card card--imagelisting">
    <div class="card__thumb" :style="{backgroundImage: `url('${thumb}')`}"></div>
    <div class="card__inner ">
      <h3 class="card__header">{{ title }}</h3>
      <p class="card__meta">{{ meta }}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CardImageListing',
  props: {
    thumb: {
      type: String,
      default: 'http://via.placeholder.com/400x200',
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
