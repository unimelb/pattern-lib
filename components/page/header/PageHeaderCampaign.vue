<template>
  <div
    :style="`background-image: url(${img}); background-position: ${bgPosition}%;`"
    class="campaign"
  >
    <div class="campaign__container">
      <h1
        v-if="title"
        class="campaign__title">{{ title }}</h1>
      <h1
        v-if="subTitle"
        class="campaign__title">{{ subTitle }}</h1>
      <button-icon
        :href="link"
        class="btn--cta campaign__btn">{{ buttonText }}</button-icon>
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
    bgPosition: {
      type: String,
      default: '50',
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>
