<template>
  <FocusWrapper>
    <a
      :href="href"
      :aria-label="title"
      :class="classes">
      <!-- eslint-disable vue/no-v-html -->
      <h3
        v-if="!compact"
        class="card__header heading-section"
        v-html="title" />
      <!-- eslint-enable vue/no-v-html -->
      <div
        v-if="!titleonly"
        class="card__inner">
        <ButtonIcon
          v-if="compact"
          element="span"
          icon="chevron-right"
          class="btn--inverted btn--fullwidth">{{ title }}</ButtonIcon>
        <p><slot /></p>
      </div>
      <div
        v-if="!compact"
        class="card__footer">
        <ButtonIcon
          element="span"
          icon="chevron-right"
          class="btn--inverted btn--fullwidth">Find out more</ButtonIcon>
      </div>
    </a>
  </FocusWrapper>
</template>

<script>
import FocusWrapper from '../focus-wrapper/FocusWrapper.vue';

export default {
  name: 'CardPathfinder',
  components: {
    FocusWrapper,
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    href: {
      type: String,
      default: 'www.unimelb.edu.au',
      required: true,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    titleonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'btn-owner card bg-inverted card--pathfinder': true,
        'card--pathfinder--sml': this.compact || this.titleonly,
      };
    },
  },
};

</script>
