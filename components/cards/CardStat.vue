<template>
  <FocusWrapper
    :color="color">
    <div :class="classes">
      <div class="card__inner">
        <h3 class="card-header__heading">
          {{ stat }}
        </h3>
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
      validator: (value) => {
        const maxLength = 6;

        return value.length && value.length <= maxLength;
      },
    },
    cols: {
      type: Number,
      default: 3,
      validator: (value) => {
        const minColumns = 2;
        const maxColumns = 3;

        return value >= minColumns && value <= maxColumns;
      },
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
        'card--stat btn-owner card bg-inverted': this.inverted,
        'card--stat btn-owner card bg-white': !this.inverted,
      };
    },
  },
};
</script>
