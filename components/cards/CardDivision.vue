<template>
  <a :href="href" class="btn-owner card card--division card--bdr bg-white">
    <div class="card__title bg-inverted">
      {{ title }}
    </div>
    <div class="card__inner ">
      <div class="card__subheader">
        <h3 class="card__header">{{ name }}</h3>
        <p class="card__meta">{{ meta }}</p>
      </div>
      <hr>
      <p>{{ excerpt }}</p>
    </div>
    <div class="card__footer">
      <ButtonIcon element="span" class="btn--fullwidth">Contacts and bio</ButtonIcon>
    </div>
  </a>
</template>

<script>

export default {
  props: {
    thumb: {
      type: String,
    },
    title: {
      type: String,
    },
    name: {
      type: String,
    },
    meta: {
      type: String,
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
