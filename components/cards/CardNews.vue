<template>
  <div class="btn-owner card card--news card--bdr">
    <a
      v-if="cols !== 1"
      :href="href"
      :style="{ backgroundImage: `url(${thumb})` }"
      :aria-label="title"
      class="card__thumb card__thumb--zoom"
    />
    <div class="card__inner">
      <p class="card__meta">{{ meta }}</p>
      <a :href="href">
        <h3 class="card__header">{{ title }}</h3>
      </a>
      <p>{{ excerpt }}</p>
    </div>
    <div
      v-if="cols !== 1"
      class="card__footer">
      <ButtonIcon
        :href="href"
        class="btn--fullwidth">Read More</ButtonIcon>
    </div>
  </div>
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
      default:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta quae doloribus, aliquid modi? Blanditiis quod, ullam aliquam provident, accusamus neque aut necessitatibus accusantium maxime voluptates sit consequatur illum tempora magnam.',
    },
  },
};
</script>
