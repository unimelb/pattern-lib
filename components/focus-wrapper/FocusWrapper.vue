<template>
  <div
    :class="[{'card-focus--padded': padded}]"
    class="card-focus">
    <SvgIcon
      :class="['card-focus__top-left', color, {'semi-opaque': semiOpaque}]"
      :width="normalizeSize"
      :height="normalizeSize"
      view-box="0 0 112 112"
      name="focus-top-left"
    >
      <path d="m0 0v112l32-32v-48h48l32-32h-112z"/>
    </SvgIcon>
    <SvgIcon
      :class="['card-focus__bottom-right', color, {'semi-opaque': semiOpaque}]"
      :width="normalizeSize"
      :height="normalizeSize"
      view-box="0 0 112 112"
      name="focus-bottom-right"
    >
      <path d="m112 0-32 32v48h-48l-32 32h112v-112z"/>
    </SvgIcon>
    <slot/>
  </div>
</template>

<script>
// import SvgIcon from '../icons/SvgIcon.vue';

export default {
  name: 'FocusWrapper',
  // components: {
  //   SvgIcon,
  // },
  props: {
    color: {
      type: String,
      default: '',
      validator: color => ['', 'navy', 'teal', 'yellow', 'emerald', 'orange', 'green', 'purple', 'pink'].indexOf(color) > -1,
    },
    semiOpaque: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: size => ['small', 'medium', 'large'].indexOf(size) > -1,
    },
    padded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    normalizeSize() {
      const sizes = {
        small: 48,
        medium: 72,
        large: 96,
      };
      return sizes[this.size] || sizes.medium;
    },
  },
};
</script>
