<template>
  <div :class="classes">
    <iframe
      :src="src"
      :width="size[0]"
      :height="size[1]"
      frameborder="0"
      allowfullscreen />
  </div>
</template>

<script>
const IFRAME_SIZES = {
  classic: ['100%', '266'],
  visual: ['450', '450'],
};

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    mode: {
      type: String,
      default: 'classic',
      validator: (value) => ['classic', 'visual'].includes(value),
    },
  },
  computed: {
    classes() {
      return [
        'embed',
        `embed--soundcloud-${this.mode}`,
      ];
    },
    size() {
      return IFRAME_SIZES[this.mode];
    },
  },
};
</script>
