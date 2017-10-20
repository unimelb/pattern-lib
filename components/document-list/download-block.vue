<template>
  <a href="#" class="btn-owner download-block">
    <div class="download-block__thumb">
      <img :src="imgSrc" alt="" class="download-block__img">
    </div>
    <div class="download-block__inner">
      <h3>{{ header }}</h3>
      <ButtonIcon icon="download">{{ btnText }}</ButtonIcon>
      <p class="metadata">{{ metadata }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    header: {
      type: String,
      default: '',
    },
    metadata: {
      type: String,
      default: 'File Name | 2.2mb | Fileformat',
    },
    btnText: {
      type: String,
      default: 'Download',
    },
  },
};
</script>
