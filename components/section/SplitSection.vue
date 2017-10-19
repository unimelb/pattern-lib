<template>
  <section class="split-section">
    <div class="split-section__side" :class="{ 'split-section__side--with-image': imageLeft }" :style="{ backgroundImage: imageLeft ? `url(${bgImage})` : '' }">
      <div class="split-section__inner" v-if="imageRight">
        <slot>
          default left text
        </slot>
      </div>
    </div>
    <div class="split-section__side" :class="{ 'split-section__side--with-image': imageRight }" :style="{ backgroundImage: imageRight ? `url(${bgImage})` : '' }">
      <div class="split-section__inner" v-if="imageLeft">
        <slot>
          default right text
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SplitSection',
  props: {
    imageLeft: {
      type: Boolean,
    },
    imageRight: {
      type: Boolean,
    },
    bgImage: {
      type: String,
    },
  },
};
</script>
