<template>
  <a
    :href="href"
    class="btn-owner card card--news card--bdr">
    <div
      v-if="cols !== 1"
      :style="{ backgroundImage: `url(${thumb})` }"
      class="card__thumb card__thumb--zoom"/>
    <div class="card__inner ">
      <p class="card__meta ">{{ meta }}</p>
      <div class="card__header">{{ title }}</div>
      <div>{{ excerpt }}</div>
    </div>
    <div
      v-if="cols !== 1"
      class="card__footer">
      <ButtonIcon
        element="span"
        class="btn--fullwidth">Read More</ButtonIcon>
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
