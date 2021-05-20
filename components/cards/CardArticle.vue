<template>
  <div
    class="article-card">
    <div class="article-card__inner border-top">
      <h3 class="article-card__title heading-sm">
        <a
          class="article-card__link link-reset"
          :href="href">
          {{ title }}
        </a>
      </h3>
      <p class="article-card__category">
        {{ category }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
      default: '',
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    category: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
