
<template>
  <a :href="href" class="btn-owner card card--division card--division--head card--bdr bg-white" :class="{'card--division--head-compact': compact}">
    <div class="card__thumb">
      <img :src="thumb" alt=""></div>
    </div>
    <div class="card__inner">
      <div class="card__subheader">
        <h3 class="card__header">{{ name }}</h3>
        <p class="card__meta">{{ title }}</p>
      </div>
      <hr v-if="!compact" >
      <slot></slot>
      <button-icon v-if="cols === 1" class="btn--wide">Contacts and bio</button-icon>
    </div>
    <div class="card__footer" v-if="cols !== 1 && compact === false">
      <button-icon element="button" class="btn--fullwidth">Contacts and bio</button-icon>
    </div>
  </a>
</template>

<script>

export default {
  props: {
    thumb: {
      type: String,
    },
    cols: {
      type: Number,
      default: 3,
    },
    title: {
      type: String,
    },
    name: {
      type: String,
    },
    href: {
      type: String,
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
};

</script>
