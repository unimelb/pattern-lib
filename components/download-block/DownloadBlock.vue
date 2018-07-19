<template>
  <a
    :href="href"
    class="download-block btn-owner">
    <div class="download-block__thumb">
      <img
        :src="img"
        class="download-block__img"
        alt="">
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
      default: '',
      required: true,
    },
    img: {
      type: String,
      default: '',
      required: true,
    },
    btnText: {
      type: String,
      default: 'Download',
    },
    filename: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
      required: true,
    },
    format: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
