<template>
  <div
    :class="['card', 'card--generic', cols === 1 && 'card--generic--full-width' , className]">
    <a
      :href="href"
      :style="{ backgroundImage: `url(${thumb})` }"
      :aria-label="'Image for' + title"
      :class="[cols === 1 ? 'card__thumb--full-height' : '']"
      class="card__thumb" />
    <div class="card__inner">
      <h3 class="card__header">
        <a
          :href="href"
          class="card__title">{{ title }}</a>
      </h3>
      <div
        v-if="hasSubTitleSlots"
        class="card__sub-titles">
        <slot name="sub-title-1" />
        <slot name="sub-title-2" />
        <slot name="sub-title-3" />
      </div>
      <div class="card__excerpt">
        {{ excerpt }}
      </div>
      <div
        :class="[cols !== 1 ? 'card__footer--column' : '']"
        class="card__footer">
        <Tags
          v-if="tags.length"
          :data="tags"
          class="card__tags" />
        <div class="card__links">
          <slot name="links" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '../tags/Tags.vue';
import { IMAGE_PLACEHOLDER_BIG } from '../../utils/placeholders';

export default {
  name: 'GenericCard',
  components: {
    Tags,
  },
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
      validator: (value) => {
        const maxColumns = 3;

        return value && value <= maxColumns;
      },
    },
    href: {
      type: String,
      default: '#',
    },
    excerpt: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
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
