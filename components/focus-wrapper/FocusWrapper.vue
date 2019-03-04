<template>
  <div
    :class="[{'card-focus--padded': padded}]"
    class="card-focus">
    <SvgIcon
      :class="['card-focus__top-left', color, {'semi-opaque': semiOpaque}]"
      :width="normalizeSize"
      :height="normalizeSize"
      name="focus-top-left"
    />
    <SvgIcon
      :class="['card-focus__bottom-right', color, {'semi-opaque': semiOpaque}]"
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
