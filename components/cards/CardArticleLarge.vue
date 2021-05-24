<template>
  <div class="card-article-large">
    <div class="card-article-large__inner">
      <div class="card-article-large__content">
        <h3 class="heading-md">
          {{ title }}
        </h3>
        <p class="card-article-large__category">
          {{ category }}
        </p>
        <p
          v-if="description"
          class="content-max-width">
          {{ description }}
        </p>
        <div>
          <ButtonIcon
            v-if="href"
            :href="href"
            class="btn--text"
            :aria-label="`Read more about ${title}`">
            Read more
          </ButtonIcon>
        </div>
      </div>
      <div class="card-article-large__img">
        <client-only>
          <progressive-img
            :src="img.src"
            :alt="img.alt || ''"
            :aspect-ratio="0.675" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from 'components/buttons/ButtonIcon.vue';

export default {
  components: {
    ButtonIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    category: {
      type: String,
      required: false,
      default: '',
    },
    img: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
    href: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
