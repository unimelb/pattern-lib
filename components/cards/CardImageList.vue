<template>
  <a :is="element" :href="href" class="btn-owner card card--imagelisting" :class="classes">
    <div class="card__thumb" :style="{ backgroundImage: `url(${thumb})` }"></div>
    <div class="card__inner ">
      <h3 class="card__header">{{ meta }}</h3>
      <p class="card__meta">{{ title }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    thumb: {
      type: String,
      default: 'http://via.placeholder.com/400x200',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    border: {
      type: Boolean,
      default: true,
    },
    meta: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
    element: {
      type: String,
      default: 'a',
    },    
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
  },
  computed: {
    classes() {
      return {
        'btn-owner': this.element && this.element === 'a',
        'card--bdr': !!this.border,
        card: true,
        'card--imagelisting': true,
      };
    },
  },
};
</script>
