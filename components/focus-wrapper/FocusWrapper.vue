<template>
  <div class="card-focus">
    <SvgIcon
      :class="['card-focus__topLeft', color, {'semi-opaque': semiOpaque}]"
      :width="normalizeSize"
      :height="normalizeSize"
      name="focus-top-left"
    />
    <SvgIcon
      :class="['card-focus__bottomRight', color, {'semi-opaque': semiOpaque}]"
      :width="normalizeSize"
      :height="normalizeSize"
      name="focus-bottom-right"
    />
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'FocusWrapper',
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
