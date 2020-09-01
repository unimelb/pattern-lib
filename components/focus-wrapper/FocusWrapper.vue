<template>
  <div
    :class="[{ 'card-focus--padded': padded }]"
    class="card-focus">
    <slot />
    <SvgIcon
      :class="['card-focus__top-left', color, { 'semi-opaque': semiOpaque }]"
      icon="focus-top-left"
      name="focus-top-left" />
    <SvgIcon
      :class="['card-focus__bottom-right', color, { 'semi-opaque': semiOpaque }]"
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
    padded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
