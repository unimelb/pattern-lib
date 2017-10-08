<template>
  <div :class="classObj">
    <iframe
      :src="src"
      :width="size[0]"
      :height="size[1]"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    mode: {
      type: String,
      default: 'classic',
    },
  },
  computed: {
    classObj() {
      return [
        'embed',
        `embed--soundcloud-${this.mode}`,
      ];
    },
    size() {
      return (
        this.mode === 'classic'
          ? ['100%', '266']
          : ['450', '450']
      );
    },
  },
};
</script>

