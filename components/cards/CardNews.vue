<template>
  <a :href="href" class="btn-owner card card--news card--bdr">
    <div v-if="cols !== 1" class="card__thumb card__thumb--zoom" :style="{ backgroundImage: `url(${thumb})` }"></div>
    <div class="card__inner ">
      <p class="card__meta ">{{ meta }}</p>
      <h3 class="card__header">{{ title }}</h3>
      <p>{{ excerpt }}</p>
    </div>
    <div class="card__footer" v-if="cols !== 1">
      <ButtonIcon element="button" class="btn--fullwidth">Read More</ButtonIcon>
    </div>
  </a>
</template>

<script>

export default {
  name: 'CardNews',
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
      default: '03 Apr 2017 | SPEECH',
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
