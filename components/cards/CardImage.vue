<template>
  <a :href="href" class="btn-owner card card--image card--bdr bg-inverted">
    <div v-if="thumb && thumb.length > 0" class="card__thumb card__thumb--zoom" :style="{ backgroundImage: `url(${thumb})` }"></div>
    <div class="card__inner">
      <button-link class="btn--inverted btn--fullwidth" element="span">{{ title }}</button-link>
      <p><slot></slot></p>
    </div>
  </a>
</template>

<script>
import ButtonLink from '../buttons/stories/ButtonLink.vue';

export default {
  name: 'CardImage',
  components: {
    ButtonLink,
  },
  props: {
    thumb: {
      type: String,
    },
    title: {
      type: String,
      default: 'Test title',
    },
    href: {
      type: String,
      default: '#',
    },
  },
};

</script>
