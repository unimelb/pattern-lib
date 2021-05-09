<template>
  <component
    :is="tagName"
    :class="{
      'section-alt': true,
      [`section-alt--bg-${bgColor}`]: bgColor,
      'section-alt--bordered': bordered,
      'section-alt--img': imgSrc,
    }"
    tabindex="-1">
    <client-only>
      <progressive-img
        v-if="imgSrc"
        :src="imgSrc"
        :aspect-ratio="0.4"
        class="section-alt__img" />
    </client-only>
    <div
      :class="{
        'section-alt__inner max': true,
        'section-alt__inner--inset': imgSrc || bordered,
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
    imgSrc: {
      type: String,
      required: false,
      default: '',
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
