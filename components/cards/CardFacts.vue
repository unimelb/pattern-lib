<template>
  <div
    :class="{ 'card--fact-image': icon, 'card--bdr-top': top, 'card--bdr-thin': thin }"
    class="card card--fact card--bdr bg-white text-center">
    <img
      v-if="icon"
      :src="icon"
      class="card__thumb"
      alt="">
    <div class="card__inner">
      <div
        :class="{ 'card__header--sml': smlHeader }"
        class="card__header">
        {{ title }}
      </div>
      <div class="card__meta">
        {{ meta }}
      </div>
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
    icon: {
      type: String,
      default: '',
    },
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
