<template>
  <div
    :class="['btn-owner', 'card', 'card--generic', cols === 1 && 'card--generic--full-width' , className]"
  >
    <a
      :href="href"
      :style="{ backgroundImage: `url(${thumb})` }"
      :aria-label="'Image for' + title"
      class="card__thumb"
    />
    <div class="card__inner">
      <h3 class="card__header">
        <a
          :href="href"
          class="card__title">{{ title }}</a>
      </h3>
      <div
        v-if="hasSubTitleSlots"
        class="card__sub-titles">
        <slot name="sub-title-1"/>
        <slot name="sub-title-2"/>
        <slot name="sub-title-3"/>
      </div>
      <div class="card__excerpt">{{ excerpt }}</div>
      <div class="card__links">
        <slot name="links"/>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';

export default {
  name: 'GenericCard',
  props: {
    thumb: {
      type: String,
      default: IMAGE_PLACEHOLDER_BIG,
    },
    title: {
      type: String,
      default: '',
    },
    cols: {
      type: Number,
      default: 3,
      validator: value => value && value <= 3,
    },
    href: {
      type: String,
      default: '#',
    },
    excerpt: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur.',
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    hasSubTitleSlots() {
      return (
        !!this.$slots['sub-title-1']
        || !!this.$slots['sub-title-2']
        || !!this.$slots['sub-title-3']
      );
    },
  },
};
</script>
