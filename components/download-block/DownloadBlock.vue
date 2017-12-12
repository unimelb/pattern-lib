<template>
  <a class="download-block btn-owner" :href="href">
    <div class="download-block__thumb">
      <img class="download-block__img" :src="img" alt="">
    </div>
    <div class="download-block__inner">
      <h3>{{ header }}</h3>
      <ButtonIcon icon="download">{{ btnText }}</ButtonIcon>
      <p class="metadata">
        <template v-if="filename">{{ filename }} | </template>
        {{ size }} | {{ format.toUpperCase() }}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      default: 'Download',
    },
    filename: String,
    size: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
  },
};
</script>
