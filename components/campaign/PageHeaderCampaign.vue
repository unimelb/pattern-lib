<template>
  <div
    :style="`background-image: url(${img}); background-position-x: ${xPosition}%; background-position-y: ${yPosition}%;`"
    class="page-campaign">
    <div class="page-campaign__container">
      <h2
        v-if="title"
        :style="`max-width: ${titleWidth};`"
        :class="['page-campaign__title', bgDark ? 'page-campaign--dark' : '']">
        {{ title }}
      </h2>
      <button-icon
        v-if="link && buttonText"
        :href="link"
        :class="[bgDark ? '' : 'btn--cta']"
        :inverted="bgDark">
        {{ buttonText }}
      </button-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    xPosition: {
      type: String,
      default: '50',
    },
    yPosition: {
      type: String,
      default: '50',
    },
    title: {
      type: String,
      default: '',
    },
    titleWidth: {
      type: String,
      default: '100%',
    },
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    bgDark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
