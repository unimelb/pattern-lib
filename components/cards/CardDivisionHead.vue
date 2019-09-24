<template>
  <a
    :href="href"
    :class="{'card--division--head-compact': compact}"
    class="btn-owner card card--division card--division--head card--bdr bg-white"
  >
    <div class="card__thumb">
      <div
        :style="`background-image: url('${thumb}')`"
        class="card__thumb-img"
      />
    </div>
    <div class="card__inner">
      <div class="card__subheader">
        <h3 class="card__header">{{ name }}</h3>
        <p class="card__meta">{{ title }}</p>
      </div>
      <hr v-if="!compact">
      <slot />
      <ButtonIcon
        v-if="cols === 1"
        class="btn--wide"
      >Contacts and bio</ButtonIcon>
    </div>
    <div
      v-if="cols !== 1 && compact === false"
      class="card__footer"
    >
      <ButtonIcon
        element="span"
        class="btn--fullwidth"
      >Contacts and bio</ButtonIcon>
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
    cols: {
      type: Number,
      default: 3,
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '#',
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
