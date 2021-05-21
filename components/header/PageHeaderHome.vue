<template>
  <div class="page-header-home">
    <client-only v-if="bgSrc">
      <progressive-img
        :src="bgSrc"
        alt=""
        no-ratio
        class="page-header-home__bg" />
    </client-only>
    <div
      v-if="img"
      class="page-header-home__img">
      <client-only>
        <progressive-img
          :src="img.src"
          :alt="img.alt || ''"
          no-ratio
          class="page-header-home__img-inner" />
      </client-only>
    </div>
    <div class="max page-header-home__inner">
      <div class="page-header-home__content">
        <div class="page-header-home__content-inner">
          <!-- eslint-disable vue/no-v-html -->
          <h1
            class="heading-xxl page-header-home__title"
            v-html="title" />
          <!-- eslint-enable vue/no-v-html -->
          <p
            v-if="introduction"
            class="paragraph-lg page-header-home__introduction">
            {{ introduction }}
          </p>
          <slot />
          <div
            v-if="$slots.actions"
            class="page-header-home__actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="$slots.after"
      class="page-header-home__after">
      <slot name="after" />
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
    bgSrc: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
