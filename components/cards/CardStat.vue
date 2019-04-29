<template>
  <FocusWrapper
    :color="color"
    size="large">
    <div :class="classes">
      <div class="card__inner">
        <h3 class="card-header__heading">{{ stat }}</h3>
        <p>{{ excerpt }}</p>
      </div>
    </div>
  </FocusWrapper>
</template>

<script>
import FocusWrapper from '../focus-wrapper/FocusWrapper.vue';

export default {
  name: 'CardStat',
  components: { FocusWrapper },
  props: {
    color: {
      type: String,
      default: '',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    stat: {
      type: String,
      default: '123456',
      validator: value => value.length > 0 && value.length <= 6,
    },
    cols: {
      type: Number,
      default: 3,
      validator: value => value >= 2 && value <= 3,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'card--focus-box-vert': this.vertical,
        [`card--focus-box--${this.color}`]: this.color && this.color.length > 0,
        'card--stat btn-owner card card--focus-box bg-inverted': this.inverted,
        'card--stat btn-owner card card--focus-box bg-white': !this.inverted,
      };
    },
  },
};
</script>
