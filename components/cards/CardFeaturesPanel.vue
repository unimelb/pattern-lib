<template>
  <div
    :href="href"
    class="card card--features-panel card--features-panel--head bg-white">
    <div class="card__thumb">
      <div
        :style="`background-image: url('${thumb}')`"
        class="card__thumb-img"/>
    </div>
    <div class="card__inner">
      <div class="card__subheader">
        <h5 class="card__title">{{ title }}</h5>
        <p class="card__meta">{{ text }}</p>
      </div>
    </div>
    <div class="card__footer">
      <ButtonIcon
        v-if="href"
        :href="href"
        class="btn--wide btn--cta btn--sml">Read more</ButtonIcon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    thumb: {
      type: String,
      default:
        'https://matrix-cms.unimelb.edu.au/__data/assets/image/0022/82903/pattern-library-staff-placeholder.png',
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },
};
</script>
