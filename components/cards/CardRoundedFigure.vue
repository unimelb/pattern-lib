<template>
  <div class="card card-rounded-figure">
    <div class="card__thumb">
      <FigureRounded
        small
        :background-image="thumb"
        :aria-label="ariaLabel" />
    </div>
    <div>
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
          class="btn--cta btn--fullwidth">
          {{ buttonLabel }}
        </ButtonIcon>
      </div>
    </div>
  </div>
</template>

<script>
import FigureRounded from 'components/figure/FigureRounded.vue';
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';

export default {
  components: {
    FigureRounded,
  },
  props: {
    roundedThumb: {
      type: Boolean,
      default: false,
    },
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
    },
    text: {
      type: String,
      default: '',
    },
    buttonLabel: {
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
