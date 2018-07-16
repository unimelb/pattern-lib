<template>
  <div class="card card--fact card--bdr bg-white text-center" :class="{'card--fact-image': icon, 'card--bdr-top': top, 'card--bdr-thin': thin}">
    <img v-if="icon" class="card__thumb" :src="icon" alt="">
    <div class="card__inner">
      <div class="card__header" :class="{'card__header--sml' : smlHeader}">{{ title }}</div>
      <div class="card__meta">{{ meta }}</div>
      <p>{{ excerpt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFact',
  props: {
    title: {
      type: String,
      default: '42',
    },
    icon: String,
    meta: {
      type: String,
      default: 'Million students',
    },
    smlHeader: {
      type: Boolean,
      default: false,
    },
    excerpt: {
      type: String,
      default: 'Completed something or rather',
    },
    top: {
      type: Boolean,
      default: false,
    },
    thin: {
      type: Boolean,
      default: false,
    },
  },
};

</script>
