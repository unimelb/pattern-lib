<template>
  <div
    :style="{ backgroundImage: `url(${img})` }"
    class="split-section-header" >
    <div class="split-section-header__inner">
      <h1 class="split-section-header__title">{{ title }}</h1>
      <p class="split-section-header__sub-title">{{ subTitle }}</p>
      <ButtonIcon
        v-if="buttonLink"
        :href="buttonLink"
        inverted
        class="split-section-header__button">{{ buttonText }}</ButtonIcon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    buttonLink: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
};
</script>
