<template>
  <div class="card card--features-panel card--features-panel--head">
    <div class="card__thumb">
      <div
        :style="`background-image: url('${thumb}')`"
        role="img"
        :aria-label="ariaLabel || title"
        class="card__thumb-img" />
    </div>
    <div class="card__inner">
      <h3 class="card__title">
        {{ title }}
      </h3>
      <p class="card__meta">
        {{ text }}
      </p>
    </div>
    <div
      v-if="href"
      class="card__footer">
      <ButtonIcon
        :href="href"
        class="btn--fullwidth btn--cta btn--sml">
        Read more
      </ButtonIcon>
    </div>
  </div>
</template>

<script>
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';
import ButtonIcon from '../buttons/ButtonIcon.vue';

export default {
  components: { ButtonIcon },
  props: {
    thumb: {
      type: String,
      default: IMAGE_PLACEHOLDER_BIG,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
      required: true,
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
