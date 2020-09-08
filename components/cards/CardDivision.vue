<template>
  <a
    :href="href"
    class="btn-owner card card--division card--bdr bg-white">
    <div class="card__title bg-inverted">{{ title }}</div>
    <div class="card__inner">
      <div class="card__subheader">
        <h3 class="card__header">{{ name }}</h3>
        <p class="card__meta">{{ meta }}</p>
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
      required: true,
    },
    meta: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '#',
      required: true,
    },
    excerpt: {
      type: String,
      default: '',
    },
  },
};
</script>
