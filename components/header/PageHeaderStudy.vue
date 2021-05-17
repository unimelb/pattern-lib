<template>
  <div class="page-header-study">
    <client-only v-if="bgSrc">
      <progressive-img
        :src="bgSrc"
        alt=""
        no-ratio
        class="page-header-study__bg" />
    </client-only>
    <div
      v-if="bgColorSrc || img"
      class="page-header-study__img">
      <client-only v-if="bgColorSrc">
        <progressive-img
          :src="bgColorSrc"
          alt=""
          no-ratio
          class="page-header-study__img-bg" />
      </client-only>
      <client-only v-if="img">
        <progressive-img
          :src="img.src"
          :alt="img.alt || ''"
          no-ratio
          class="page-header-study__img-subject" />
      </client-only>
    </div>
    <div class="max page-header-study__inner">
      <div class="page-header-study__content">
        <div class="page-header-study__content-inner">
          <h1 class="heading-xl page-header-study__title">
            {{ title }}
          </h1>
          <p
            v-if="introduction"
            class="paragraph-lg">
            {{ introduction }}
          </p>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    introduction: {
      type: String,
      required: false,
      default: '',
    },
    img: {
      type: Object,
      required: false,
      default() {
        return null;
      },
    },
    bgColorSrc: {
      type: String,
      required: false,
      default: '',
    },
    bgSrc: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
