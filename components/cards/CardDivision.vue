<template>
  <a
    :href="href"
    class="btn-owner card card--division card--bdr bg-white">
    <div class="card__title bg-inverted">
      {{ title }}
    </div>
    <div class="card__inner ">
      <div class="card__subheader">
        <div class="card__header">{{ name }}</div>
        <div class="card__meta">{{ meta }}</div>
      </div>
      <hr>
      <p>{{ excerpt }}</p>
    </div>
    <div class="card__footer">
      <ButtonIcon
        element="span"
        class="btn--fullwidth">Contacts and bio</ButtonIcon>
    </div>
  </a>
</template>

<script>

export default {
  props: {
    thumb: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    meta: {
      type: String,
      default: '',
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
