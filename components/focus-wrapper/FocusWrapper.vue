<template>
  <div
    :class="[{ 'card-focus--padded': padded }]"
    class="card-focus">
    <slot />
    <SvgIcon
      :class="['card-focus__top-left', color, { 'semi-opaque': semiOpaque }]"
      :width="normalizeSize"
      :height="normalizeSize"
      icon="focus-top-left"
      name="focus-top-left" />
    <SvgIcon
      :class="['card-focus__bottom-right', color, { 'semi-opaque': semiOpaque }]"
      :width="normalizeSize"
      :height="normalizeSize"
      icon="focus-bottom-right"
      name="focus-bottom-right" />
  </div>
</template>

<script>
import SvgIcon from '../icons/SvgIcon.vue';

export default {
  name: 'FocusWrapper',
  components: {
    SvgIcon,
  },
  props: {
    color: {
      type: String,
      default: '',
      validator: (color) => ['', 'navy', 'teal', 'yellow', 'emerald', 'orange', 'green', 'purple', 'pink'].includes(color),
    },
    semiOpaque: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
      validator: (size) => ['sm', 'md', 'lg'].includes(size),
    },
    padded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    normalizeSize() {
      const sizes = {
        sm: 48,
        md: 72,
        lg: 96,
      };
      return sizes[this.size] || sizes.medium;
    },
  },
};
</script>
