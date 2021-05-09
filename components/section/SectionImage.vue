<template>
  <component
    :is="tagName"
    class="section-image"
    tabindex="-1">
    <div
      v-if="img"
      class="section-image__img">
      <client-only>
        <progressive-img
          :src="img.src"
          :alt="img.alt"
          no-ratio
          class="section-image__img-inner" />
      </client-only>
    </div>
    <div class="max section-image__inner">
      <div class="row">
        <div class="col-xxs-12 col-md-6 col-md-offset-6">
          <slot />
        </div>
      </div>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: 'section',
    },
    img: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
  },
};
</script>
