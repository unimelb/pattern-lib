<template>
  <a
    :href="href"
    :aria-label="title"
    class="btn-owner card card--image card--bdr bg-inverted">
    <div
      v-if="thumb && thumb.length"
      :style="{ backgroundImage: `url(${thumb})` }"
      :aria-label="title"
      class="card__thumb card__thumb--zoom" />
    <div class="card__inner">
      <ButtonLink
        class="btn--inverted btn--fullwidth"
        element="span">{{ title }}</ButtonLink>
      <p>
        <slot />
      </p>
    </div>
  </a>
</template>

<script>
import ButtonLink from '../buttons/ButtonLink.vue';

export default {
  name: 'CardImage',
  components: {
    ButtonLink,
  },
  props: {
    thumb: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
