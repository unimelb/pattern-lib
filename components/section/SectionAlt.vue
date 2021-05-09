<template>
  <component
    :is="tagName"
    :class="{
      'section-alt': true,
      [`section-alt--bg-${bgColor}`]: bgColor,
      'section-alt--bordered': bordered,
      'section-alt--img': img,
    }"
    tabindex="-1">
    <client-only v-if="img">
      <progressive-img
        :src="img.src"
        :aspect-ratio="0.4"
        :alt="img.alt || ''"
        class="section-alt__img" />
    </client-only>
    <div
      :class="{
        'section-alt__inner max': true,
        'section-alt__inner--inset': img || bordered,
      }">
      <div
        v-if="$slots.left"
        class="section-alt__row">
        <div
          class="section-alt__left">
          <slot name="left" />
        </div>
        <div
          v-if="$slots.default"
          class="section-alt__right">
          <slot />
        </div>
      </div>
      <template v-else>
        <slot />
      </template>
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
    bordered: {
      type: Boolean,
      required: false,
      default: false,
    },
    bgColor: {
      type: String,
      required: false,
      default: '',
      validator(val) {
        if (val) {
          return (['grey-light'].includes(val));
        }

        return true;
      },
    },
  },
};
</script>
