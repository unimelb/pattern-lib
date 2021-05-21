<template>
  <div
    :class="classes">
    <div
      v-if="img"
      class="page-header-alt__img">
      <client-only>
        <progressive-img
          :src="img.src"
          :alt="img.alt || ''"
          no-ratio
          class="page-header-alt__img-inner" />
      </client-only>
    </div>
    <div class="max page-header-alt__inner">
      <div class="page-header-alt__content">
        <div class="page-header-alt__content-inner">
          <h1 class="heading-lg page-header-alt__title">
            <a
              v-if="tag"
              :href="tag.href"
              class="page-header-alt__title-tag label-sm"
              :class="{ [`page-header-alt__title-tag--${tag.color}`]: tag.color }">
              {{ tag.text }}
            </a>
            {{ title }}
          </h1>
          <p
            v-if="introduction"
            class="paragraph-lg page-header-alt__introduction">
            {{ introduction }}
          </p>
          <slot />
          <div
            v-if="$slots.actions"
            class="page-header-alt__actions">
            <slot name="actions" />
          </div>
        </div>
        <div
          v-if="$slots.after"
          class="page-header-alt__content-after">
          <slot name="after" />
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
    tag: {
      type: Object,
      required: false,
      default() {
        return null;
      },
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
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'page-header-alt': true,
        'page-header-alt--dark': this.dark,
        'page-header-alt--content-after': this.$slots.after,
      };
    },
  },
};
</script>
